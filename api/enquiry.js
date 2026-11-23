const RECIPIENT = "curesoullife@gmail.com";

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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false });
  }

  const body = req.body && typeof req.body === "object" ? req.body : {};
  if (text(body.company_website, 200)) return res.status(200).json({ ok: true });

  const name = text(body.full_name, 200);
  const email = text(body.email, 200);
  const country = text(body.country_or_region, 80);
  const category = categories[text(body.enquiry_category, 80)];
  const message = String(body.message || "").trim().slice(0, 3000);
  const telephone = text(body.telephone, 40);
  const privacy = body.privacy_acknowledgement === true || body.privacy_acknowledgement === "yes";
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !emailOk || !country || !category || !message || message.length > 3000 || !privacy) {
    return res.status(422).json({ ok: false });
  }

  try {
    const response = await fetch("https://formsubmit.co/ajax/" + encodeURIComponent(RECIPIENT), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: "https://www.curesoullife.org/contact",
        Origin: "https://www.curesoullife.org"
      },
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
        _subject: "CureSoulLife enquiry: " + category,
        _template: "table",
        _captcha: "false",
        country,
        category,
        telephone: telephone || "Not provided",
        message
      })
    });
    const data = await response.json().catch(function () { return {}; });
    if (!response.ok || data.success !== true && data.success !== "true") {
      return res.status(502).json({ ok: false });
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(502).json({ ok: false });
  }
}
