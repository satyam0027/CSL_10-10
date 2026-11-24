const RECIPIENT = "curesoullife@gmail.com";
const MAX_BODY = 16000;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map();

const categories = {
  programs_retreats: "Programs & Retreats",
  personal_guidance: "Personal Guidance",
  wellness_mentorship: "Wellness Business Mentorship",
  institutional_collaboration: "Institutional Collaboration",
  media_general: "Media & General Enquiries"
};

function text(value, max) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, max);
}

function clientIp(req) {
  const forwarded = req.headers && req.headers["x-forwarded-for"];
  const raw = Array.isArray(forwarded) ? forwarded[0] : forwarded || "";
  return String(raw).split(",")[0].trim().slice(0, 80) || "unknown";
}

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(function (time) { return now - time < RATE_WINDOW_MS; });
  if (recent.length >= RATE_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

async function deliver(value) {
  const response = await fetch("https://formsubmit.co/ajax/" + encodeURIComponent(RECIPIENT), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: "https://www.curesoullife.org",
      Referer: "https://www.curesoullife.org/contact"
    },
    body: JSON.stringify({
      name: value.name,
      email: value.email,
      _replyto: value.email,
      _subject: "CureSoulLife enquiry: " + value.category,
      _template: "table",
      country: value.country,
      category: value.category,
      telephone: value.telephone || "Not provided",
      message: value.message
    })
  });
  const data = await response.json().catch(function () { return {}; });
  return response.ok && (data.success === true || data.success === "true");
}

function validate(body) {
  const fields = [];
  const name = text(body.full_name, 120);
  const email = text(body.email, 200);
  const country = text(body.country_or_region, 80);
  const categoryKey = text(body.enquiry_category, 80);
  const category = categories[categoryKey];
  const messageRaw = String(body.message || "");
  const telephoneRaw = String(body.telephone || "");
  const privacy = body.privacy_acknowledgement === true || body.privacy_acknowledgement === "yes";
  if (!name || String(body.full_name || "").trim().length > 120) fields.push("full_name");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || String(body.email || "").trim().length > 200) fields.push("email");
  if (!country || String(body.country_or_region || "").trim().length > 80) fields.push("country_or_region");
  if (!category) fields.push("enquiry_category");
  if (!messageRaw.trim() || messageRaw.length > 3000) fields.push("message");
  if (telephoneRaw.trim().length > 40) fields.push("telephone");
  if (!privacy) fields.push("privacy_acknowledgement");
  return {
    fields,
    value: {
      name,
      email,
      country,
      category,
      message: messageRaw.trim(),
      telephone: text(telephoneRaw, 40)
    }
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false });
  }

  const declared = Number(req.headers && req.headers["content-length"]);
  if (Number.isFinite(declared) && declared > MAX_BODY) {
    return res.status(413).json({ ok: false, error: "too_large" });
  }

  const body = req.body && typeof req.body === "object" && !Array.isArray(req.body) ? req.body : {};
  if (JSON.stringify(body).length > MAX_BODY) {
    return res.status(413).json({ ok: false, error: "too_large" });
  }

  if (text(body.company_website, 200)) {
    return res.status(200).json({ ok: true, delivered: false });
  }

  if (rateLimited(clientIp(req))) {
    return res.status(429).json({ ok: false, error: "rate_limited" });
  }

  const checked = validate(body);
  if (checked.fields.length) {
    return res.status(422).json({ ok: false, error: "validation", fields: checked.fields });
  }

  try {
    const accepted = await deliver(checked.value);
    if (!accepted) return res.status(502).json({ ok: false, error: "delivery_failed" });
    return res.status(200).json({ ok: true, delivered: true });
  } catch (error) {
    return res.status(502).json({ ok: false, error: "delivery_failed" });
  }
}
