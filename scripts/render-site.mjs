import fs from "fs";
import path from "path";

const root = path.resolve("D:/CSL 10-10");
const arrow = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const mark = `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M8 19.5h16M11.5 19.5 16 13l4.5 6.5" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" stroke-linecap="round"/></svg>`;

const icons = {
  body: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="8.5" r="2.7" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10.5 26.5v-6c0-2.8 2.4-4.8 5.5-4.8s5.5 2 5.5 4.8v6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  mind: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="7.2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12.4 16.2c.9 1.5 2.1 2.2 3.6 2.2s2.7-.7 3.6-2.2" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  emotion: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 24.5s-7.2-4.5-7.2-9.4c0-2.7 2-4.6 4.3-4.6 1.3 0 2.4.6 2.9 1.7.5-1.1 1.6-1.7 2.9-1.7 2.3 0 4.3 1.9 4.3 4.6 0 4.9-7.2 9.4-7.2 9.4z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
  energy: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="4" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M16 6.8v2.4M16 22.8v2.4M6.8 16h2.4M22.8 16h2.4M9.4 9.4l1.7 1.7M20.9 20.9l1.7 1.7M22.6 9.4l-1.7 1.7M11.1 20.9l-1.7 1.7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  relationships: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="12" cy="13" r="3" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="20" cy="13" r="3" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M6.2 24.5c.8-3.2 2.9-4.8 5.8-4.8 1.2 0 2.2.3 3 .9.8-.6 1.8-.9 3-.9 2.9 0 5 1.6 5.8 4.8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  purpose: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="8" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="m16 10.2 1.7 4.1 4.1 1.7-4.1 1.7L16 21.8l-1.7-4.1-4.1-1.7 4.1-1.7z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
  work: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="7" y="13" width="18" height="12" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 13v-2.1c0-1 .8-1.9 1.9-1.9h4.2c1.1 0 1.9.9 1.9 1.9V13M7 18.2h18" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>`,
  consciousness: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="8" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="16" cy="16" r="2.1" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>`,
  legacy: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 26V15" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M16 18.5c-4.2 0-6.4-2.2-6.4-4.8S12.2 9 16 9s6.4 2.1 6.4 4.7-2.2 4.8-6.4 4.8z" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M11 26h10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  wisdom: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 9c-2-1.4-4.6-2.2-7.2-2.2v15.2c2.6 0 5.2.8 7.2 2.2 2-1.4 4.6-2.2 7.2-2.2V6.8C20.6 6.8 18 7.6 16 9z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
  science: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="14" cy="14" r="5.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="m18.2 18.2 4.6 4.6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  experience: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="11" r="3.1" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M9.2 24.8c.9-3.6 3.4-5.6 6.8-5.6s5.9 2 6.8 5.6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  practice: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 22c3.2-2.4 6.2-3.6 9-3.6S21.8 19.6 25 22" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M16 12.5V19" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle cx="16" cy="10.2" r="1.5" fill="currentColor"/></svg>`
};

const NAV = [
  ["curesoullife/index.html", "CureSoulLife", "curesoullife"],
  ["human-transformation/index.html", "Human Transformation", "transformation"],
  ["human-operating-system/index.html", "Human Operating System™", "hos"],
  ["knowledge/index.html", "Knowledge", "knowledge"],
  ["research/index.html", "Research", "research"],
  ["experiences/index.html", "Experiences", "experiences"],
  ["community/index.html", "Community", "community"],
  ["about/index.html", "About", "about"]
];

const footerCols = [
  ["CureSoulLife", [
    ["curesoullife/index.html", "CureSoulLife overview"],
    ["about/index.html", "About CureSoulLife"],
    ["about/founder/index.html", "Founder"]
  ]],
  ["Explore", [
    ["human-transformation/index.html", "Human Transformation"],
    ["human-operating-system/index.html", "Human Operating System™"],
    ["human-transformation/life-decoding/index.html", "Life Decoding"],
    ["knowledge/index.html", "Knowledge"],
    ["research/index.html", "Research"]
  ]],
  ["Experience", [
    ["experiences/index.html", "Experiences"],
    ["experiences/retreats/index.html", "Retreats"],
    ["community/index.html", "Community"],
    ["community/global-network/index.html", "Global Network"]
  ]],
  ["Connect", [
    ["contact/index.html", "Contact"]
  ]]
];

function pfx(depth) { return "../".repeat(depth); }
function url(depth, route) { return `${pfx(depth)}${route}`; }

function navAnchors(depth, current) {
  return NAV.map(([route, label, id]) => {
    const currentAttr = current === id ? ` aria-current="page"` : "";
    return `<a href="${url(depth, route)}"${currentAttr}>${label}</a>`;
  }).join("");
}

function shell({ depth, current, title, description, body, head = "" }) {
  const p = pfx(depth);
  const cols = footerCols.map(([heading, links]) => `
        <nav aria-label="${heading}">
          <h2 class="footer-heading">${heading}</h2>
          ${links.map(([route, label]) => `<a href="${url(depth, route)}">${label}</a>`).join("")}
        </nav>`).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <script>document.documentElement.classList.add("js");</script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${description}">
  <meta name="theme-color" content="#F7F4ED">
${head}
  <title>${title}</title>
  <link rel="icon" href="${p}assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&amp;family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${p}css/styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header" data-header>
    <div class="header-inner">
      <a class="wordmark" data-wordmark href="${url(depth, "index.html")}" aria-label="CureSoulLife home">${mark}<span>CureSoulLife</span></a>
      <nav class="desktop-nav" aria-label="Primary">${navAnchors(depth, current)}</nav>
      <a class="btn btn-primary btn-small header-cta" href="${url(depth, "human-transformation/index.html")}">Begin Your Journey${arrow}</a>
      <details class="nav-details" data-nav>
        <summary class="nav-toggle" aria-controls="mobile-nav" aria-expanded="false">
          <span class="menu-label">Menu</span>
          <span class="close-label">Close</span>
        </summary>
        <div class="mobile-panel" id="mobile-nav">
          <nav aria-label="Mobile">${navAnchors(depth, current)}</nav>
          <a class="btn btn-primary mobile-cta" href="${url(depth, "human-transformation/index.html")}">Begin Your Journey${arrow}</a>
        </div>
      </details>
    </div>
  </header>
  <main id="main" tabindex="-1">
${body}
  </main>
  <footer class="site-footer" data-footer>
    <div class="container footer-grid">
      <div class="footer-brand">
        <p class="footer-name">CureSoulLife</p>
        <p class="footer-tag">A Human Transformation Institution. Ancient wisdom, modern science, human experience, and practical application.</p>
      </div>
      ${cols}
    </div>
    <div class="container footer-bottom">
      <p class="footer-statement">Human transformation is a lifelong journey.</p>
    </div>
  </footer>
  <script src="${p}js/main.js" defer></script>
</body>
</html>
`;
}

function eyebrow(text) {
  return `<p class="eyebrow"><span class="eyebrow-rule" aria-hidden="true"></span>${text}</p>`;
}

function cta(depth, route, label, variant = "btn btn-primary") {
  return `<a class="${variant}" href="${url(depth, route)}">${label}${variant.includes("btn-primary") || variant.includes("btn-light") ? arrow : ""}</a>`;
}

const dimensions = [
  ["body", "Body", "Physical wellbeing"],
  ["mind", "Mind", "Thoughts and attention"],
  ["emotion", "Emotion", "Emotional awareness"],
  ["energy", "Energy", "Vitality and attention"],
  ["relationships", "Relationships", "Connection and belonging"],
  ["purpose", "Purpose", "Meaning and direction"],
  ["work", "Work &amp; Wealth", "Work and financial choices"],
  ["consciousness", "Consciousness", "Awareness and experience"],
  ["legacy", "Legacy", "Contribution and stewardship"]
];

const transformationStages = [
  { name: "Awareness", question: "What am I noticing?", description: "Begin by noticing experiences, habits, reactions, questions and patterns that may deserve closer attention." },
  { name: "Understanding", question: "What might this mean?", description: "Explore possible explanations, assumptions, influences and perspectives before reaching conclusions." },
  { name: "Alignment", question: "What matters, and what feels consistent with it?", description: "Reflect on values, priorities, responsibilities and the relationship between what matters and how life is currently being lived." },
  { name: "Practice", question: "What can I begin to practise?", description: "Explore realistic actions, habits and practices that can bring understanding into everyday life." },
  { name: "Integration", question: "How does this become part of the way I live?", description: "Reflect on how learning relates to daily decisions, relationships, work and routines over time." },
  { name: "Contribution", question: "How can what I learn serve something beyond myself?", description: "Consider how greater understanding may inform care, collaboration, responsibility and meaningful contribution." },
  { name: "Legacy", question: "What do I want to nurture or leave behind?", description: "Reflect on the longer-term influence of actions, relationships, knowledge and responsibilities across time." }
];
const stages = transformationStages.map((stage) => stage.name);

function picture(stem, width, height, alt, { priority = false, lazy = true, prefix = "" } = {}) {
  const load = lazy ? ` loading="lazy"` : "";
  const fetch = priority ? ` fetchpriority="high"` : "";
  const altAttr = alt ? ` alt="${alt}"` : ` alt=""`;
  const src = `${prefix}assets/images/${stem}`;
  return `<picture>
          <source type="image/webp" srcset="${src}-960.webp 960w, ${src}.webp ${width}w" sizes="(max-width: 900px) 100vw, 58vw">
          <source type="image/jpeg" srcset="${src}-960.jpg 960w, ${src}.jpg ${width}w" sizes="(max-width: 900px) 100vw, 58vw">
          <img src="${src}.jpg"${altAttr} width="${width}" height="${height}"${fetch}${load} decoding="async">
        </picture>`;
}

function home() {
  const d = 0;
  const stageItems = stages.map((name, i) => `
            <li>
              <span class="journey-index">${String(i + 1).padStart(2, "0")}</span>
              <span class="journey-node" aria-hidden="true"></span>
              <h3>${name}</h3>
            </li>`).join("");
  const hosNodes = [
    [600, 150, "Body", "middle", 600, 118],
    [819, 208, "Mind", "start", 838, 208],
    [935, 357, "Emotion", "start", 954, 357],
    [894, 525, "Energy", "start", 912, 525],
    [716, 635, "Relationships", "start", 734, 635],
    [484, 635, "Purpose", "end", 466, 635],
    [306, 525, "Work &amp; Wealth", "end", 288, 525],
    [265, 357, "Consciousness", "end", 246, 357],
    [381, 208, "Legacy", "end", 362, 208]
  ];
  const hosSpokes = hosNodes.map(([x, y], i) => `<line class="hos-spoke" style="animation-delay:${i * 70}ms" x1="600" y1="400" x2="${x}" y2="${y}"/>`).join("");
  const hosMarks = hosNodes.map(([x, y]) => `<circle class="hos-node" cx="${x}" cy="${y}" r="5.5"/>`).join("");
  const hosLabels = hosNodes.map(([, , name, anchor, x, y]) => `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="middle">${name}</text>`).join("");
  const hosList = dimensions.map(([, name, label]) => `<li><h3>${name}</h3><p>${label}</p></li>`).join("");

  return `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        ${eyebrow("CureSoulLife")}
        <h1 id="hero-title">A deeper way to understand being human.</h1>
        <p class="support">CureSoulLife is a Human Transformation Institution exploring how we can live with greater awareness, balance, meaning and possibility — through the meeting of Ancient Wisdom, Modern Science and lived human experience.</p>
        <div class="cta-row">
          ${cta(d, "human-transformation/index.html", "Explore Human Transformation")}
          ${cta(d, "curesoullife/index.html", "Discover CureSoulLife", "btn btn-secondary")}
        </div>
      </div>
      <div class="hero-media">
        ${picture("hero-landscape", 1800, 1200, "Mountain valley and evergreen forest in daylight", { priority: true, lazy: false })}
      </div>
    </section>

    <section class="section world" aria-labelledby="world-title">
      <div class="container world-layout reveal">
        ${eyebrow("The world we live in")}
        <h2 id="world-title">We have never known more. Yet many of us are struggling to live well.</h2>
        <p class="support">We live in an age of extraordinary knowledge, technology and possibility.</p>
        <p class="support">And yet, beneath the noise, many people experience stress, disconnection, exhaustion, unhealthy patterns, relationship difficulties and a quiet loss of meaning.</p>
        <div class="world-lines">
          <p class="world-line">We have learned how to make life faster.</p>
          <p class="world-line">We are still learning how to make it deeper.</p>
        </div>
        <div class="cta-row">${textLink(d, "human-transformation/index.html", "Explore Human Transformation")}</div>
      </div>
    </section>

    <section class="section section-white" aria-labelledby="question-title">
      <div class="container split">
        <div class="reveal">
          ${eyebrow("The human question")}
          <h2 id="question-title">What does it mean to live a more conscious human life?</h2>
          <p class="support">Across cultures and generations, human beings have explored questions of meaning, relationships, wellbeing, responsibility and what it means to live well. CureSoulLife creates space to explore these questions through knowledge, reflection, practice and lived experience.</p>
          <div class="cta-row">${cta(d, "human-transformation/index.html", "Explore Human Transformation")}</div>
        </div>
        <figure class="split-media reveal">
          ${picture("question-forest", 1600, 1066, "A sunlit path through tall trees")}
        </figure>
      </div>
    </section>

    <section class="section section-sand" aria-labelledby="about-title">
      <div class="container">
        <div class="split who-intro">
          <div class="reveal">
            ${eyebrow("CureSoulLife")}
            <h2 id="about-title">A Human Transformation Institution.</h2>
            <p class="support">A living ecosystem for human transformation. CureSoulLife brings together Ancient Wisdom, Modern Science, Human Experience and Practical Application to explore how people can understand themselves more deeply and live with greater awareness, balance, meaning and possibility.</p>
            <p class="support">Our purpose is not to tell people who to become. It is to create conditions in which deeper understanding and meaningful transformation become possible.</p>
            <blockquote class="pull quote"><p>A modern institution born from timeless wisdom.</p></blockquote>
          </div>
          <figure class="split-media reveal">
            ${picture("institutional-hills", 1800, 1072, "Misted green hills in soft light")}
          </figure>
        </div>
        <p class="approach-kicker reveal">Four perspectives. A more integrated understanding.</p>
        <div class="approach-grid reveal">
          <article class="approach-card"><div class="dim-icon">${icons.wisdom}</div><h3>Ancient Wisdom</h3><p>Explore philosophical traditions, contemplative practices and inherited ways of understanding human life.</p></article>
          <article class="approach-card"><div class="dim-icon">${icons.science}</div><h3>Modern Science</h3><p>Explore relevant scientific research and evolving knowledge about human behaviour, development and wellbeing.</p></article>
          <article class="approach-card"><div class="dim-icon">${icons.experience}</div><h3>Human Experience</h3><p>Learn from lived experience, reflection and the questions people encounter in everyday life.</p></article>
          <article class="approach-card"><div class="dim-icon">${icons.practice}</div><h3>Practical Application</h3><p>Connect understanding with responsible practices, everyday choices and continued reflection.</p></article>
        </div>
        <p class="section-note">These perspectives are held with equal weight. Traditional understanding and scientific evidence are not treated as interchangeable.</p>
        <div class="cta-row">${cta(d, "curesoullife/index.html", "Discover CureSoulLife")}</div>
      </div>
    </section>

    <section class="section" aria-labelledby="journey-title">
      <div class="container">
        <div class="section-head section-header reveal">
          ${eyebrow("From understanding to transformation")}
          <h2 id="journey-title">Transformation is a lifelong journey.</h2>
          <p class="support">Meaningful change can begin with awareness, deepen through understanding, and take shape through practice, integration and contribution.</p>
        </div>
        <div class="journey-block timeline diagram reveal">
          <ol class="journey">${stageItems}</ol>
          <svg class="journey-arc" viewBox="0 0 1000 64" preserveAspectRatio="xMidYMin meet" aria-hidden="true" focusable="false">
            <path class="journey-return" d="M929 6C929 58 71 58 71 6" fill="none" stroke="currentColor" stroke-width="1.25"/>
            <path d="M63 16 71 6l8 10" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p class="journey-note">These stages are not strictly linear. People may revisit different stages throughout life. They are a conceptual framework, not a validated psychological model, a fixed ranking, or a guaranteed sequence.</p>
        </div>
        <div class="cta-row">${cta(d, "human-transformation/index.html", "Explore Human Transformation")}</div>
      </div>
    </section>

    <section class="section section-white" aria-labelledby="hos-title">
      <div class="container">
        <div class="section-head section-header reveal">
          ${eyebrow("The Human Operating System™")}
          <h2 id="hos-title">Nine interconnected dimensions of human life.</h2>
          <p class="support">A holistic framework for exploring the different dimensions of human life and how they relate to everyday experience, choices and development.</p>
        </div>
        <div class="hos reveal">
          <div class="hos-diagram" aria-hidden="true">
            <svg viewBox="0 0 1200 780" focusable="false">
              <ellipse cx="600" cy="400" rx="340" ry="250" fill="none" stroke="#D7D2C8" stroke-width="1"/>
              ${hosSpokes}
              <circle cx="600" cy="400" r="58" fill="#F7F4ED" stroke="#173A32" stroke-width="1.4"/>
              <g transform="translate(584 384)" fill="none" stroke="#173A32" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round">
                <circle cx="16" cy="16" r="11"/>
                <path d="M8 19.5h16M11.5 19.5 16 13l4.5 6.5"/>
              </g>
              ${hosMarks}
              ${hosLabels}
            </svg>
          </div>
          <ul class="hos-list">${hosList}</ul>
        </div>
        <p class="section-note">The Human Operating System™ is a conceptual framework for exploring interconnected dimensions of human life. It is not a clinically validated diagnostic instrument.</p>
        <div class="cta-row">${cta(d, "human-operating-system/index.html", "Explore Human Operating System™")}</div>
      </div>
    </section>

    <section class="section" aria-labelledby="knowledge-title">
      <div class="container reading-block reveal">
        ${eyebrow("Knowledge")}
        <h2 id="knowledge-title">Ideas for understanding human life.</h2>
        <p class="support">Ideas, insights and practical resources for understanding human life and transformation. Knowledge is a pathway from curiosity toward a more careful understanding.</p>
        <div class="quiet-panel">
          <h3>Published work will appear here.</h3>
          <p>Essays, guides and learning series are not listed until they are actually published. This page does not display article counts, authors, or borrowed media.</p>
        </div>
        <div class="cta-row">${cta(d, "knowledge/index.html", "Explore Knowledge")}</div>
      </div>
    </section>

    <section class="section section-midnight" aria-labelledby="research-title">
      <div class="container reading-block reveal">
        <p class="eyebrow eyebrow-on-dark"><span class="eyebrow-rule" aria-hidden="true"></span>Research</p>
        <h2 id="research-title">Questions held with intellectual honesty.</h2>
        <p class="support">Explore questions, evidence, traditional perspectives and emerging understanding with intellectual honesty. Scientific research and traditional understanding are not treated as interchangeable, and neither is offered as proof of personal transformation.</p>
        <div class="quiet-panel">
          <h3>No publication list is invented here.</h3>
          <p>Studies, papers and reviews will be cited only when they exist and can be read. This page does not display research counts, validation badges, or partner institutions.</p>
        </div>
        <div class="cta-row">${cta(d, "research/index.html", "Explore Research")}</div>
      </div>
    </section>

    <section class="section" aria-labelledby="experiences-title">
      <div class="container reading-block reveal">
        ${eyebrow("Experiences")}
        <h2 id="experiences-title">Practice, programmes and immersive learning.</h2>
        <p class="support">Experiences are where understanding can meet application: guided practices, workshops, programmes and immersive learning, alongside continued reflection.</p>
        <ul class="format-list">
          <li>Guided practices</li>
          <li>Workshops</li>
          <li>Structured programmes</li>
          <li>Retreats and immersions</li>
          <li>Events and shared learning</li>
        </ul>
        <div class="quiet-panel">
          <h3>Programmes are listed only when they are real.</h3>
          <p>No dates, places, teachers or prices are shown until a programme is actually offered. This page does not take bookings or payments.</p>
        </div>
        <div class="cta-row">${cta(d, "experiences/index.html", "Explore Experiences")}</div>
      </div>
    </section>

    <section class="section section-white" aria-labelledby="stories-title">
      <div class="container reading-block reveal">
        ${eyebrow("Human stories")}
        <h2 id="stories-title">Learning from lived experience.</h2>
        <p class="support">Reflection, learning and contribution are part of how understanding develops between people. Individual stories are published only with permission.</p>
        <div class="quiet-panel">
          <h3>No stories are listed yet.</h3>
          <p>Names, photographs, quotations and outcomes are not invented for this page. Nothing here is a testimonial.</p>
        </div>
        <div class="cta-row">${cta(d, "community/index.html", "Explore Community")}</div>
      </div>
    </section>

    <section class="section section-sand" aria-labelledby="community-title">
      <div class="container">
        <div class="section-head section-header reveal">
          ${eyebrow("Community")}
          <h2 id="community-title">Learn together. Contribute with care.</h2>
          <p class="support">Community is where people can learn with one another and find responsible ways to contribute. The Global Network is a related vision. The two are not the same thing.</p>
        </div>
        <div class="pair-grid reveal">
          <article class="pair-panel">
            <h3>Community</h3>
            <p>Learn together, share perspectives and discover meaningful ways to contribute.</p>
            ${textLink(d, "community/index.html", "Explore Community")}
          </article>
          <article class="pair-panel">
            <h3>Global Network</h3>
            <p>Explore the vision for responsible collaboration across people, knowledge and communities.</p>
            <p class="pair-note">The Global Network is a developing institutional vision. It does not represent active offices, centres, or partnerships.</p>
            ${textLink(d, "community/global-network/index.html", "Explore Global Network")}
          </article>
        </div>
      </div>
    </section>

    <section class="section section-white" aria-labelledby="founder-name">
      <div class="container founder-grid">
        <figure class="founder-figure reveal">
          <div class="portrait-placeholder" role="img" aria-label="Placeholder for an approved photograph of Sarvesh Mishra. No portrait is shown.">
            <span class="portrait-mark" aria-hidden="true">SM</span>
            <p>Approved photograph to be placed here. This space is reserved for a verified portrait.</p>
          </div>
        </figure>
        <div class="founder-copy reveal">
          ${eyebrow("The founder")}
          <h2 class="founder-name" id="founder-name">Sarvesh Mishra</h2>
          <p class="founder-identity">Life Decoder <span aria-hidden="true">|</span> Inner Alchemy Architect</p>
          <p class="founder-identity founder-identity-sub">Media, IP &amp; Wellness Entrepreneur</p>
          <p class="support">CureSoulLife is shaped by a continuing exploration of human behaviour, ancient wisdom, modern knowledge, personal understanding and the possibilities of human transformation.</p>
          <div class="cta-row">${cta(d, "about/founder/index.html", "Meet the Founder")}</div>
        </div>
      </div>
    </section>

    <section class="finale finale-plain cta-section cta-forest" aria-labelledby="finale-title">
      <div class="finale-inner">
        <p class="eyebrow eyebrow-on-dark"><span class="eyebrow-rule" aria-hidden="true"></span>Your journey begins with a question</p>
        <h2 id="finale-title">What would become possible if you understood yourself more deeply?</h2>
        <div class="finale-copy">
          <p>There is no single path to transformation.</p>
          <p>Begin where you are.</p>
          <p>Explore what speaks to you.</p>
          <p>Learn.</p>
          <p>Practice.</p>
          <p>Experience.</p>
          <p>And discover what becomes possible.</p>
        </div>
        <div class="cta-row">
          ${cta(d, "human-transformation/index.html", "Begin Your Journey", "btn btn-light")}
          ${cta(d, "curesoullife/index.html", "Explore CureSoulLife", "btn btn-ghost-light")}
        </div>
      </div>
    </section>`;
}

function textLink(depth, route, label) {
  return `<a class="link-arrow" href="${url(depth, route)}">${label}${arrow}</a>`;
}

function pageHero(depth, kicker, title, lede) {
  return `
    <header class="page-hero">
      <div class="container page-hero-grid">
        <div>
          ${eyebrow(kicker)}
          <h1>${title}</h1>
          <p class="lede">${lede}</p>
        </div>
        <figure class="page-hero-media">
          <img src="${url(depth, "assets/images/page-landscape.jpg")}" alt="A calm mountain lake and ridgeline" width="1600" height="1067" decoding="async">
        </figure>
      </div>
    </header>`;
}

function continueBand(depth, title, links) {
  const items = links.map(([route, label]) => cta(depth, route, label, "btn btn-secondary")).join("");
  return `
    <section class="continue">
      <div class="container">
        <h2>${title}</h2>
        <div class="cta-row">${items}</div>
      </div>
    </section>`;
}

function prosePage(depth, kicker, title, lede, inner, next) {
  return `${pageHero(depth, kicker, title, lede)}
    <section class="page-section">
      <div class="container prose">${inner}</div>
    </section>
    ${continueBand(depth, "Continue", next)}`;
}

const institutionalValues = [
  ["Integrity", "Represent what we know, what we do and what remains uncertain honestly."],
  ["Compassion", "Treat people and their experiences with care and respect."],
  ["Curiosity", "Welcome thoughtful questions and alternative perspectives."],
  ["Evidence", "Distinguish research findings, emerging ideas, traditional perspectives and personal observations."],
  ["Responsibility", "Consider the effects of our communication, practices and decisions."],
  ["Service", "Aim to make learning and understanding useful beyond the institution itself."],
  ["Collaboration", "Respect different forms of knowledge, experience and expertise."],
  ["Stewardship", "Develop institutional resources and relationships with long-term care."]
];

function institutionPage(depth) {
  const p = "../".repeat(depth);
  const perspectives = [
    ["Ancient Wisdom", "Explore philosophical traditions and contemplative approaches that have examined human experience, meaning, awareness and ways of living."],
    ["Modern Science", "Engage with scientific research and established knowledge where relevant, while respecting the limits and uncertainty of available evidence."],
    ["Human Experience", "Recognise lived experience, reflection and individual context as important parts of understanding human life."],
    ["Practical Application", "Explore how knowledge and reflection may be translated into everyday practices, decisions, relationships and habits."]
  ].map(([name, copy]) => `<article class="approach-card"><h3>${name}</h3><p>${copy}</p></article>`).join("");
  const principles = [
    ["Ancient Wisdom", "Engage with traditional knowledge respectfully and in its historical and philosophical context."],
    ["Modern Science", "Examine relevant evidence carefully and communicate its strengths, limitations and uncertainty honestly."],
    ["Human Experience", "Take individual context and lived experience seriously without assuming one person’s experience proves a universal claim."],
    ["Practical Application", "Explore how understanding can inform meaningful action and everyday life."],
    ["Lifelong Learning", "Remain open to new questions, feedback, revision and deeper understanding."],
    ["Conscious Technology", "Use technology to extend access and learning responsibly, without treating it as a substitute for human awareness or judgement."]
  ].map(([name, copy]) => `<li><div><h3>${name}</h3><p>${copy}</p></div></li>`).join("");
  const pathway = [
    ["Awareness", "Notice questions, experiences and patterns that deserve attention."],
    ["Understanding", "Explore ideas, perspectives and possible explanations."],
    ["Practice", "Try appropriate approaches in everyday life."],
    ["Experience", "Reflect on what happens in real contexts."],
    ["Transformation", "Integrate learning into choices, behaviour and ways of living over time."],
    ["Contribution", "Share knowledge, care and meaningful action where appropriate."]
  ].map(([name, copy], i) => `<li><span class="pathway-index">${String(i + 1).padStart(2, "0")}</span><div><h3>${name}</h3><p>${copy}</p></div></li>`).join("");
  const values = institutionalValues.map(([name, copy]) => `<li><h3>${name}</h3><p>${copy}</p></li>`).join("");
  const directions = [
    ["Knowledge", "Build useful, connected educational resources."],
    ["Frameworks", "Continue clarifying concepts that help people explore human life."],
    ["Experiences", "Develop responsible opportunities for practical learning and reflection."],
    ["Collaboration", "Create opportunities for appropriate knowledge exchange and contribution."]
  ].map(([name, copy]) => `<li><h3>${name}</h3><p>${copy}</p></li>`).join("");

  return `
    <header class="page-hero institution-hero">
      <div class="container page-hero-grid">
        <div>
          ${eyebrow("CureSoulLife")}
          <h1>A Human Transformation Institution for a changing world.</h1>
          <p class="lede">CureSoulLife brings together Ancient Wisdom, Modern Science and lived human experience to explore how human beings can understand themselves more deeply and live with greater awareness, balance, meaning and possibility.</p>
          <div class="cta-row">
            ${cta(depth, "human-transformation/index.html", "Explore Human Transformation")}
            ${cta(depth, "about/index.html", "Explore Our Approach", "btn btn-secondary")}
          </div>
        </div>
        <figure class="page-hero-media">
          ${picture("page-landscape", 1600, 1067, "A calm mountain lake and ridgeline", { priority: true, lazy: false, prefix: p })}
        </figure>
      </div>
    </header>

    <section class="section section-white" aria-labelledby="identity-title">
      <div class="container reading-block">
        ${eyebrow("Our identity")}
        <h2 id="identity-title">A living ecosystem for human transformation.</h2>
        <p class="support">CureSoulLife is being developed as an institutional home for exploring human transformation through knowledge, reflection, practice, experience and contribution.</p>
        <p class="support">It connects ideas that help us understand human life with approaches that invite us to apply that understanding in everyday living.</p>
        <p class="support">Rather than offering one universal answer, CureSoulLife creates space for inquiry, learning, practical exploration and responsible growth.</p>
        <p class="statement">Our role is not to define who a person should become. It is to help create the conditions in which understanding and meaningful change can develop.</p>
      </div>
    </section>

    <section class="section" aria-labelledby="why-title">
      <div class="container reading-block">
        ${eyebrow("Why CureSoulLife exists")}
        <h2 id="why-title">Understanding ourselves is a lifelong human question.</h2>
        <p class="support">Human life is shaped by many interconnected influences: the body, the mind, emotions, relationships, work, purpose, our surroundings and the meanings we give to experience.</p>
        <p class="support">We may gain knowledge in one area while finding it difficult to bring that understanding into everyday life. A useful insight becomes more meaningful when it can be reflected upon, practised, tested in experience and integrated over time.</p>
        <p class="support">CureSoulLife exists to explore this relationship between understanding and living—and to make that exploration more structured, accessible and useful.</p>
        <div class="world-lines">
          <p class="world-line">From information to understanding.</p>
          <p class="world-line">From understanding to practice.</p>
          <p class="world-line">From practice to lived experience.</p>
        </div>
      </div>
    </section>

    <section class="section section-sand" aria-labelledby="perspectives-title">
      <div class="container">
        <div class="section-head section-header">
          ${eyebrow("Four perspectives")}
          <h2 id="perspectives-title">Bringing different ways of understanding human life into conversation.</h2>
        </div>
        <div class="approach-grid">${perspectives}</div>
        <p class="section-note">These perspectives can contribute in different ways. Their methods, assumptions and evidence are not always the same. CureSoulLife’s approach is to explore their usefulness with curiosity, context and intellectual honesty.</p>
      </div>
    </section>

    <section class="section section-white" aria-labelledby="philosophy-title">
      <div class="container">
        <div class="section-head section-header">
          ${eyebrow("Our philosophy")}
          <h2 id="philosophy-title">Curious enough to explore. Responsible enough to question.</h2>
        </div>
        <ol class="principle-list">${principles}</ol>
        <p class="section-note">No single perspective answers every human question. We aim to explore responsibly, learn continuously and communicate honestly.</p>
        <p class="section-note">Technology here means access, learning, research and community. No app, coach or technology product is offered as a current service.</p>
      </div>
    </section>

    <section class="section" aria-labelledby="pathway-title">
      <div class="container">
        <div class="section-head section-header">
          ${eyebrow("How CureSoulLife works")}
          <h2 id="pathway-title">Understanding becomes meaningful when it enters life.</h2>
        </div>
        <ol class="pathway">${pathway}</ol>
        <p class="section-note">This pathway is a conceptual guide, not a guaranteed sequence or a promise of outcomes. Human learning is individual, contextual and often non-linear. People may revisit earlier stages as their understanding develops.</p>
        <p class="section-note">It is not the seven-stage Human Transformation framework. ${textLink(depth, "human-transformation/index.html", "Explore Human Transformation")}</p>
      </div>
    </section>

    <section class="section section-white" aria-labelledby="ecosystem-title">
      <div class="container">
        <div class="section-head section-header">
          ${eyebrow("The institutional ecosystem")}
          <h2 id="ecosystem-title">Different parts. One connected purpose.</h2>
          <p class="support">CureSoulLife brings together a set of connected frameworks and areas of work. Each serves a different purpose, while contributing to a broader exploration of human transformation.</p>
        </div>
        <div class="arch">
          <article class="arch-node is-root">
            <h3>CureSoulLife</h3>
            <p>The institution.</p>
          </article>
          <article class="arch-node">
            <h3>Human Transformation</h3>
            <p>The overarching domain and lifelong process.</p>
            ${textLink(depth, "human-transformation/index.html", "Explore Human Transformation")}
          </article>
          <div class="arch-tier">
            <article class="arch-node">
              <h3>Human Operating System™</h3>
              <p>A conceptual framework for exploring nine interconnected dimensions of human life. It is not a diagnostic instrument.</p>
              ${textLink(depth, "human-operating-system/index.html", "Explore Human Operating System™")}
            </article>
            <article class="arch-node">
              <h3>Life Decoding</h3>
              <p>A reflective methodology for exploring experiences and recurring personal patterns. It is not a clinical assessment.</p>
              ${textLink(depth, "human-transformation/life-decoding/index.html", "Explore Life Decoding")}
            </article>
            <article class="arch-node">
              <h3>Inner Alchemy</h3>
              <p>A transformation philosophy connecting insight, practice and lived change. It is not a separate institution, and it does not have its own page yet.</p>
            </article>
          </div>
          <div class="arch-tier">
            <article class="arch-node">
              <h3>Knowledge + Research</h3>
              <p>Learning resources, inquiry and responsible engagement with evidence.</p>
              <div class="link-row">
                ${textLink(depth, "knowledge/index.html", "Explore Knowledge")}
                ${textLink(depth, "research/index.html", "Explore Research")}
              </div>
            </article>
            <article class="arch-node">
              <h3>Practices + Experiences</h3>
              <p>Opportunities to explore learning through application and participation, when a real programme exists.</p>
              ${textLink(depth, "experiences/index.html", "Explore Experiences")}
            </article>
            <article class="arch-node">
              <h3>Community + Contribution</h3>
              <p>Shared learning, collaboration and meaningful contribution.</p>
              ${textLink(depth, "community/index.html", "Explore Community")}
            </article>
          </div>
        </div>
        <p class="section-note">The mark ™ appears where specified and is subject to legal review. This site does not claim a completed trademark registration.</p>
      </div>
    </section>

    <section class="section section-sand" aria-labelledby="audiences-title">
      <div class="container">
        <div class="section-head section-header">
          ${eyebrow("Who we serve")}
          <h2 id="audiences-title">Different starting points. A shared curiosity about being human.</h2>
        </div>
        <div class="audience-grid">
          <article class="arch-node">
            <h3>People Exploring Themselves</h3>
            <p>For those interested in understanding their patterns, choices, relationships and everyday experience.</p>
            ${textLink(depth, "human-transformation/life-decoding/index.html", "Explore Life Decoding")}
          </article>
          <article class="arch-node">
            <h3>Learners and Knowledge Seekers</h3>
            <p>For those interested in ideas, frameworks, educational resources and lifelong learning.</p>
            ${textLink(depth, "knowledge/index.html", "Explore Knowledge")}
          </article>
          <article class="arch-node">
            <h3>People Exploring Practice and Experience</h3>
            <p>For those interested in bringing reflection and learning into practical experiences.</p>
            ${textLink(depth, "experiences/index.html", "Explore Experiences")}
          </article>
          <article class="arch-node">
            <h3>Researchers, Educators and Potential Collaborators</h3>
            <p>For people or organisations interested in responsible dialogue, knowledge exchange or institutional collaboration. This is not an accreditation, a clinical service, or a research partnership.</p>
            ${textLink(depth, "contact/index.html", "Institutional enquiries")}
          </article>
        </div>
        <p class="section-note">These are entry points, not exclusive categories. People may explore several areas over time.</p>
      </div>
    </section>

    <section class="section" aria-labelledby="vision-title">
      <div class="container reading-block">
        ${eyebrow("Our vision")}
        <h2 id="vision-title">A world where human transformation is part of lifelong learning.</h2>
        <p class="support">We envision a future in which understanding ourselves, learning how to live well and developing the capacity to contribute meaningfully are treated as important parts of lifelong education.</p>
        <p class="support">A future in which Ancient Wisdom and Modern Science can be explored with discernment; knowledge is communicated responsibly; practices are examined through experience; and people have more opportunities to learn, reflect and grow throughout life.</p>
        <p class="section-note">This is a long-term institutional aspiration. Its realisation depends on the quality of the work, the integrity of the knowledge, the people who contribute and the trust built over time.</p>
      </div>
    </section>

    <section class="section section-white" aria-labelledby="values-title">
      <div class="container">
        <div class="section-head section-header">
          ${eyebrow("Our values in practice")}
          <h2 id="values-title">Principles matter most when they guide decisions.</h2>
        </div>
        <ul class="value-grid">${values}</ul>
      </div>
    </section>

    <section class="section section-sand" aria-labelledby="global-title">
      <div class="container">
        <div class="reading-block">
          ${eyebrow("Global vision")}
          <h2 id="global-title">Human questions cross borders. Learning can, too.</h2>
          <p class="support">Human transformation is a subject of shared human interest, even though traditions, experiences and local contexts differ. CureSoulLife’s long-term vision includes learning across cultures, responsible collaboration and opportunities for people to exchange knowledge and experience.</p>
        </div>
        <ul class="format-list">
          <li>Education and lifelong learning</li>
          <li>Research and knowledge exchange</li>
          <li>Human development and practical learning</li>
          <li>Culture and traditional knowledge</li>
          <li>Community learning and social contribution</li>
          <li>Responsible technology and knowledge infrastructure</li>
        </ul>
        <p class="section-note">We welcome thoughtful conversations about possible collaboration. Any formal relationship, public partnership or local initiative must be established and verified before being represented as active. This page does not show offices, chapters, or partner marks.</p>
        <div class="cta-row">
          ${cta(depth, "community/global-network/index.html", "Explore the Global Network")}
          ${textLink(depth, "contact/index.html", "Institutional enquiries")}
        </div>
      </div>
    </section>

    <section class="section section-white" aria-labelledby="founder-note-title">
      <div class="container founder-grid">
        <figure class="founder-figure">
          <div class="portrait-placeholder" role="img" aria-label="Placeholder for an approved photograph of Sarvesh Mishra. No portrait is shown.">
            <span class="portrait-mark" aria-hidden="true">SM</span>
            <p>Approved photograph to be placed here. This space is reserved for a verified portrait.</p>
          </div>
        </figure>
        <div>
          ${eyebrow("The founder")}
          <h2 id="founder-note-title">A question that became an institutional purpose.</h2>
          <p class="identity-name">Sarvesh Mishra</p>
          <p class="founder-identity">Life Decoder <span aria-hidden="true">|</span> Inner Alchemy Architect</p>
          <p class="founder-identity founder-identity-sub">Founder, CureSoulLife</p>
          <p class="support">A first-person note for this section has been drafted. It will be published only after Sarvesh Mishra approves it. Until then, this page does not present that draft as his public statement.</p>
          <div class="cta-row">${cta(depth, "about/founder/index.html", "Meet the Founder")}</div>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="horizon-title">
      <div class="container">
        <div class="section-head section-header">
          ${eyebrow("Institutional horizon")}
          <h2 id="horizon-title">An institution built to keep learning.</h2>
          <p class="support">CureSoulLife is intended to develop over time through stronger knowledge resources, thoughtful frameworks, responsible inquiry, meaningful experiences, collaboration and opportunities for contribution.</p>
          <p class="support">The aim is not to appear larger than the work currently supports. It is to build depth, earn trust and allow the institution’s capabilities to grow responsibly.</p>
        </div>
        <p class="approach-kicker">Institutional directions, not current services.</p>
        <ul class="direction-grid">${directions}</ul>
      </div>
    </section>

    <section class="finale finale-plain cta-section cta-forest" aria-labelledby="close-title">
      <div class="finale-inner">
        <p class="eyebrow eyebrow-on-dark"><span class="eyebrow-rule" aria-hidden="true"></span>Explore CureSoulLife</p>
        <h2 id="close-title">Explore the questions. Help build the possibility.</h2>
        <div class="finale-copy">
          <p>CureSoulLife is being developed around a shared human question: how can we understand ourselves more deeply and translate that understanding into more conscious ways of living?</p>
          <p>If that question resonates with you, begin by exploring the institution, its frameworks and the knowledge it is developing.</p>
        </div>
        <div class="cta-row">
          ${cta(depth, "human-transformation/index.html", "Discover Human Transformation", "btn btn-light")}
          ${cta(depth, "about/index.html", "Explore Our Approach", "btn btn-ghost-light")}
        </div>
        <p class="finale-enquiry">For institutional or media enquiries, <a href="${url(depth, "contact/index.html")}">contact us</a>.</p>
      </div>
    </section>`;
}

function humanTransformationPage(depth) {
  const p = "../".repeat(depth);
  const anchor = (id, label, variant = "btn btn-primary") => `<a class="${variant}" href="#${id}">${label}${variant.includes("btn-primary") || variant.includes("btn-light") ? arrow : ""}</a>`;
  const stageMarks = transformationStages.map((stage, i) => `
            <li>
              <span class="journey-index">${String(i + 1).padStart(2, "0")}</span>
              <span class="journey-node" aria-hidden="true"></span>
              <h3>${stage.name}</h3>
            </li>`).join("");
  const stageDetails = transformationStages.map((stage, i) => `
            <li>
              <span class="pathway-index">${String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>${stage.name}</h3>
                <p class="stage-question">${stage.question}</p>
                <p>${stage.description}</p>
              </div>
            </li>`).join("");
  const dimensionNames = dimensions.map(([, name]) => `<li>${name}</li>`).join("");
  return `
    <header class="page-hero institution-hero ht-hero" id="ht-hero">
      <div class="container page-hero-grid">
        <div>
          ${eyebrow("Human Transformation")}
          <h1>Transformation is not becoming someone else. It is learning to understand and live more fully as yourself.</h1>
          <p class="lede">Human transformation is a lifelong journey of awareness, understanding, practice and integration. It invites us to explore how we think, feel, act, relate and find meaning—and how greater understanding can shape the way we live.</p>
          <p class="lede">CureSoulLife brings together Ancient Wisdom, Modern Science and lived human experience to explore this journey with curiosity, responsibility and practical intent.</p>
          <div class="cta-row">
            ${anchor("transformation-framework", "Explore the Transformation Framework")}
            <a class="btn btn-secondary" href="${url(depth, "human-operating-system/index.html")}">Understand the Human Operating System™${arrow}</a>
          </div>
        </div>
        <figure class="page-hero-media">
          ${picture("question-forest", 1600, 1066, "A sunlit path through tall trees", { priority: true, lazy: false, prefix: p })}
        </figure>
      </div>
    </header>

    <section class="section section-white" id="human-experience" aria-labelledby="experience-title">
      <div class="container reading-block">
        ${eyebrow("The human experience")}
        <h2 id="experience-title">We can know a great deal about life and still struggle to live the way we want.</h2>
        <p class="support">We may understand the importance of health and still struggle to care for our bodies.</p>
        <p class="support">We may value our relationships and still repeat patterns that create distance.</p>
        <p class="support">We may know what matters to us and still find ourselves caught in distraction, uncertainty or habits that no longer serve us.</p>
        <p class="support">We may accumulate information, advice and experiences without finding a way to bring them together in everyday life.</p>
        <p class="support">These experiences do not mean that we are broken or incapable of change. They remind us that human life is complex—and that meaningful change often asks for more than information alone.</p>
        <p class="statement">The question is not simply what we know. It is how that understanding becomes part of the way we live.</p>
      </div>
    </section>

    <section class="section section-sand" id="different-possibility" aria-labelledby="possibility-title">
      <div class="container split">
        <div>
          <h2 id="possibility-title">Perhaps transformation begins differently.</h2>
          <div class="possibility-lines">
            <p>Not with another shortcut.</p>
            <p>Not with motivation that fades.</p>
            <p>Not with blind belief.</p>
            <p>But with understanding.</p>
            <p>With the courage to observe ourselves.</p>
            <p>With practices that can be lived.</p>
            <p>With experiences that change us.</p>
            <p>And with communities that help us continue.</p>
          </div>
          <p class="statement">Transformation is not becoming someone else. It is becoming more fully yourself.</p>
          <div class="cta-row">${anchor("transformation-framework", "Explore the Transformation Journey")}</div>
        </div>
        <figure class="split-media">
          ${picture("institutional-hills", 1800, 1072, "Misted green hills in soft light", { prefix: p })}
        </figure>
      </div>
    </section>

    <section class="section section-white" id="curesoullife-perspective" aria-labelledby="perspective-title">
      <div class="container">
        <div class="section-head section-header">
          ${eyebrow("The CureSoulLife perspective")}
          <h2 id="perspective-title">Transformation is a lifelong human journey.</h2>
          <p class="support">CureSoulLife explores transformation not as a temporary self-improvement project, but as a lifelong process of learning, reflection, practice and contribution.</p>
          <p class="support">We bring different perspectives into conversation to explore how people understand themselves, how they live and relate, and how greater awareness may inform more intentional choices.</p>
        </div>
        <div class="approach-grid">
          <article class="approach-card"><h3>Ancient Wisdom</h3><p>Explore philosophical traditions and contemplative approaches that have examined human experience, awareness, meaning and ways of living.</p>${textLink(depth, "knowledge/index.html", "Explore Knowledge")}</article>
          <article class="approach-card"><h3>Modern Science</h3><p>Engage with relevant scientific research and contemporary understanding while respecting the limits, context and uncertainty of available evidence.</p>${textLink(depth, "research/index.html", "Explore Research")}</article>
          <article class="approach-card"><h3>Human Experience</h3><p>Take lived experience, personal context and reflective learning seriously without assuming that an individual experience proves a universal claim.</p></article>
          <article class="approach-card"><h3>Practical Application</h3><p>Explore how knowledge and reflection may inform everyday habits, decisions, relationships and ways of living.</p></article>
        </div>
        <p class="section-note">These perspectives can contribute in different ways. They do not always use the same methods or standards of evidence. CureSoulLife’s approach is to explore their usefulness with curiosity, context and intellectual honesty.</p>
        <div class="cta-row">${cta(depth, "curesoullife/index.html", "Understand CureSoulLife")}</div>
      </div>
    </section>

    <section class="section" id="transformation-framework" aria-labelledby="framework-title">
      <div class="container">
        <div class="section-head section-header">
          ${eyebrow("The transformation framework")}
          <h2 id="framework-title">A framework for understanding the journey.</h2>
          <p class="support">Transformation rarely happens through a single insight or decision. It involves noticing, understanding, aligning, practising, integrating what we learn and finding ways to contribute.</p>
          <p class="support">CureSoulLife uses seven connected stages as a framework for exploring this process. They are perspectives that can help organise reflection—not fixed steps that every person must complete in the same order.</p>
        </div>
        <div class="journey-block timeline diagram ht-journey" aria-hidden="true">
          <ol class="journey">${stageMarks}</ol>
          <svg class="journey-arc" viewBox="0 0 1000 64" preserveAspectRatio="xMidYMin meet" focusable="false">
            <path class="journey-return" d="M929 6C929 58 71 58 71 6" fill="none" stroke="currentColor" stroke-width="1.25"/>
            <path d="M63 16 71 6l8 10" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <ol class="stage-detail">${stageDetails}</ol>
        <p class="status-note">The seven stages are a conceptual framework for reflection, not a diagnostic tool, validated measure of human development or universal sequence. People may revisit stages, move between them or explore several at once. They are not ranks, and no stage makes one person more valuable than another.</p>
        <div class="cta-row">${cta(depth, "human-transformation/life-decoding/index.html", "Explore Life Decoding")}</div>
      </div>
    </section>

    <section class="section section-white" id="non-linear-transformation" aria-labelledby="nonlinear-title">
      <div class="container reading-block">
        <h2 id="nonlinear-title">Growth does not follow a single straight line.</h2>
        <p class="support">Human life changes with circumstances, relationships, responsibilities, opportunities and challenges.</p>
        <p class="support">An insight may take time to understand. A practice may need to be adapted. Something that once felt clear may need to be reconsidered as life changes.</p>
        <p class="support">The seven stages offer a way to explore the process, not a schedule for personal progress.</p>
        <p class="support">Returning to an earlier question is not failure. It may simply be part of learning more deeply.</p>
        <p class="statement">Transformation is better understood as an ongoing process of exploration and integration than as a race towards a final state.</p>
      </div>
    </section>

    <section class="section section-sand" id="whole-human-perspective" aria-labelledby="whole-title">
      <div class="container split">
        <div>
          <h2 id="whole-title">Human life is interconnected.</h2>
          <p class="support">Our thoughts, emotions, physical wellbeing, relationships, sense of purpose, work and everyday choices influence how we experience life. Understanding one area can be useful, but it may not explain the whole picture.</p>
          <p class="support">CureSoulLife uses the Human Operating System™ as a conceptual framework for exploring interconnected dimensions of human life.</p>
          <p class="support">It offers another way to organise reflection without reducing a person to a diagram or assuming that one framework explains every human experience.</p>
          <div class="cta-row">${cta(depth, "human-operating-system/index.html", "Explore the Human Operating System™")}</div>
        </div>
        <div>
          <p class="eyebrow">Nine dimensions</p>
          <ul class="dimension-preview">${dimensionNames}</ul>
          <p class="section-note">A preview only. The Human Operating System™ is a conceptual framework, not a clinical assessment or a validated diagnostic model. The nine dimensions are explained on their own page.</p>
        </div>
      </div>
    </section>

    <section class="section" id="understanding-to-practice" aria-labelledby="lived-title">
      <div class="container">
        <div class="section-head section-header">
          <h2 id="lived-title">Understanding becomes meaningful when we find ways to live it.</h2>
          <p class="support">Knowledge can open a new perspective. Reflection can help us examine what it means. Practice offers an opportunity to explore how that understanding relates to everyday life.</p>
          <p class="support">Experience can reveal what feels useful, what needs adaptation and what remains uncertain. Integration takes place over time, through real choices, relationships, responsibilities and changing circumstances.</p>
        </div>
        <div class="approach-grid">
          <article class="approach-card"><h3>Learn</h3><p>Explore ideas, knowledge and relevant evidence.</p></article>
          <article class="approach-card"><h3>Reflect</h3><p>Examine personal experience, assumptions and possible patterns.</p></article>
          <article class="approach-card"><h3>Practise</h3><p>Try realistic approaches in everyday life.</p></article>
          <article class="approach-card"><h3>Integrate</h3><p>Consider what can be carried forward and adapted over time.</p></article>
        </div>
        <p class="section-note">These four elements explain a movement from understanding toward lived experience. They do not replace the seven-stage framework, and no practice here is claimed to work for everyone.</p>
        <div class="cta-row">
          ${cta(depth, "knowledge/index.html", "Explore Knowledge")}
          <a class="btn btn-secondary" href="${url(depth, "experiences/index.html")}">Explore Experiences${arrow}</a>
        </div>
      </div>
    </section>

    <section class="section section-white" id="curesoullife-ecosystem" aria-labelledby="fits-title">
      <div class="container">
        <div class="section-head section-header">
          <h2 id="fits-title">Different parts of the ecosystem serve different purposes.</h2>
          <p class="support">Human Transformation is the broader journey CureSoulLife explores. The institution connects several frameworks and areas of work that help people understand, investigate and apply what they learn.</p>
        </div>
        <ul class="orient-list">
          <li><h3>CureSoulLife</h3><p>The institution.</p>${textLink(depth, "curesoullife/index.html", "Understand CureSoulLife")}</li>
          <li><h3>Human Transformation</h3><p>The overarching domain and lifelong process. This is the page you are reading.</p></li>
          <li><h3>Human Operating System™</h3><p>A conceptual system for exploring interconnected dimensions of human life.</p>${textLink(depth, "human-operating-system/index.html", "Explore the Human Operating System™")}</li>
          <li><h3>Life Decoding</h3><p>A reflective methodology for exploring personal experiences and recurring patterns.</p>${textLink(depth, "human-transformation/life-decoding/index.html", "Explore Life Decoding")}</li>
          <li><h3>Inner Alchemy</h3><p>A philosophy connecting insight, practice and lived change. It does not have a separate page yet.</p></li>
          <li><h3>Knowledge + Research</h3><p>Learning resources and responsible inquiry.</p><div class="link-row">${textLink(depth, "knowledge/index.html", "Explore Knowledge")}${textLink(depth, "research/index.html", "Explore Research")}</div></li>
          <li><h3>Practices + Experiences</h3><p>Opportunities for practical exploration, when a real programme exists.</p>${textLink(depth, "experiences/index.html", "Explore Experiences")}</li>
          <li><h3>Community + Contribution</h3><p>Shared learning, collaboration and continuity.</p>${textLink(depth, "community/index.html", "Explore Community")}</li>
        </ul>
      </div>
    </section>

    <section class="section section-sand" id="everyday-life" aria-labelledby="everyday-title">
      <div class="container">
        <div class="section-head section-header">
          <h2 id="everyday-title">What might transformation look like in everyday life?</h2>
          <p class="support">Human Transformation does not always appear as a dramatic turning point. It may begin with a small change in how a person notices, understands or responds to an ordinary experience.</p>
        </div>
        <div class="audience-grid">
          <article class="arch-node"><h3>A recurring reaction</h3><p>Instead of immediately judging a familiar reaction, a person pauses to notice what happened, what they interpreted and what other explanations may be possible.</p></article>
          <article class="arch-node"><h3>A relationship pattern</h3><p>Instead of assuming the other person’s intentions, a person becomes more curious about communication, boundaries, expectations and their own contribution to the interaction.</p></article>
          <article class="arch-node"><h3>A personal priority</h3><p>Instead of continuing on autopilot, a person reflects on whether everyday choices are aligned with their values and responsibilities.</p></article>
          <article class="arch-node"><h3>A new practice</h3><p>Instead of expecting an instant result, a person tries a realistic practice, observes their experience and decides whether it is useful or needs adjustment.</p></article>
        </div>
        <p class="section-note">These examples are illustrative, not prescriptions or promises of outcomes. Each person’s context is different, and some situations require support beyond individual reflection or self-practice.</p>
      </div>
    </section>

    <section class="section" id="continued-exploration" aria-labelledby="explore-title">
      <div class="container">
        <div class="section-head section-header">
          <h2 id="explore-title">Begin with the question that matters to you.</h2>
          <p class="support">There is no single starting point for understanding human life. Explore the area that feels most relevant to your questions today, and follow the connections that help you learn more.</p>
        </div>
        <ul class="orient-list">
          <li><h3>Understand the human system</h3><p>Explore the Human Operating System™.</p>${textLink(depth, "human-operating-system/index.html", "Explore the Human Operating System™")}</li>
          <li><h3>Explore personal patterns</h3><p>Discover Life Decoding.</p>${textLink(depth, "human-transformation/life-decoding/index.html", "Explore Life Decoding")}</li>
          <li><h3>Learn more deeply</h3><p>Explore educational resources. Published work appears only when it exists.</p>${textLink(depth, "knowledge/index.html", "Explore Knowledge")}</li>
          <li><h3>Explore evidence and inquiry</h3><p>Research is cited only when it can be read.</p>${textLink(depth, "research/index.html", "Explore Research")}</li>
          <li><h3>Bring learning into experience</h3><p>Explore available experience formats. Nothing is listed until it is actually offered.</p>${textLink(depth, "experiences/index.html", "Explore Experiences")}</li>
          <li><h3>Continue through shared learning</h3><p>Explore CureSoulLife Community.</p>${textLink(depth, "community/index.html", "Explore Community")}</li>
        </ul>
      </div>
    </section>

    <section class="finale finale-plain cta-section cta-forest" id="final-invitation" aria-labelledby="invitation-title">
      <div class="finale-inner">
        <p class="eyebrow eyebrow-on-dark"><span class="eyebrow-rule" aria-hidden="true"></span>Your journey, your starting point</p>
        <h2 id="invitation-title">Understanding yourself more deeply can begin with a single question.</h2>
        <div class="finale-copy">
          <p>Human Transformation is not about becoming a perfect version of yourself. It is an ongoing opportunity to notice, understand, learn, practise and contribute with greater intention.</p>
          <p>Begin where you are. Explore what matters to you. Allow understanding to develop through reflection and experience.</p>
        </div>
        <div class="cta-row">
          ${cta(depth, "human-operating-system/index.html", "Explore the Human Operating System™", "btn btn-light")}
          ${cta(depth, "human-transformation/life-decoding/index.html", "Discover Life Decoding", "btn btn-ghost-light")}
        </div>
      </div>
    </section>`;
}


function lifeDecodingPage(depth) {
  const p = "../".repeat(depth);
  const lenses = [
    ["mind", "Mind", "मैं क्या सोच रहा हूँ, और अपनी परिस्थितियों को किस तरह समझ रहा हूँ?", ["Mind dimension में विचारों, धारणाओं, assumptions, attention, interpretation और decision-making को explore किया जाता है।", "हम किसी घटना को जिस तरह समझते हैं, वह इस बात को प्रभावित कर सकता है कि हम उसके प्रति कैसी प्रतिक्रिया देते हैं। लेकिन हमारे विचार अकेले हर परिस्थिति को निर्धारित नहीं करते।"], ["मैं इस परिस्थिति के बारे में क्या मान रहा हूँ?", "क्या मैं facts और interpretations के बीच अंतर कर पा रहा हूँ?", "क्या कोई दूसरा perspective भी संभव है?"], "knowledge/index.html", "Explore Knowledge"],
    ["body", "Body", "मेरा शारीरिक अनुभव मेरे दैनिक जीवन से किस तरह जुड़ा है?", ["Body dimension में physical wellbeing, sleep, movement, rest, daily routines और शरीर से जुड़े अनुभवों पर ध्यान दिया जाता है।", "शारीरिक स्थिति और जीवन के अनुभवों के बीच संबंधों को समझते समय स्वास्थ्य, वातावरण, जीवनशैली और व्यक्तिगत परिस्थितियों को ध्यान में रखना आवश्यक है।"], ["मेरी नींद, गतिविधि और आराम की दिनचर्या कैसी है?", "मैं अपने शरीर की आवश्यकताओं पर कितना ध्यान देता हूँ?", "क्या किसी शारीरिक परेशानी के लिए उचित professional advice की आवश्यकता है?"], "experiences/index.html", "Explore Practices"],
    ["energy", "Energy", "मैं अपनी ऊर्जा, थकान, ध्यान और उपलब्ध क्षमता को कैसे अनुभव करता हूँ?", ["Life Decoding के संदर्भ में Energy को एक व्यापक exploratory concept के रूप में समझाया जा सकता है। इसमें व्यक्ति की perceived vitality, थकान, ध्यान, गतिविधि और दैनिक जीवन में उपलब्ध क्षमता के अनुभव शामिल हो सकते हैं।", "परंपरागत भारतीय विचारों में ऊर्जा की अलग-अलग अवधारणाएँ भी मौजूद हैं। उन्हें उनके अपने संदर्भ में समझाया जाना चाहिए; उन्हें स्वतः ही measurable scientific mechanisms के बराबर नहीं मानना चाहिए।"], ["दिन के किन समयों में मैं अधिक सक्रिय या थका हुआ महसूस करता हूँ?", "कौन-सी परिस्थितियाँ मेरे ध्यान और काम करने की क्षमता को प्रभावित करती हैं?", "क्या मुझे बेहतर आराम, दिनचर्या या professional support की आवश्यकता है?"], "research/index.html", "Explore Research"],
    ["karma", "Karma", "मेरे कर्म, निर्णय और जिम्मेदारियाँ मेरे जीवन में किस तरह भूमिका निभाते हैं?", ["Karma एक महत्वपूर्ण पारंपरिक दार्शनिक अवधारणा है, जिसकी व्याख्या अलग-अलग भारतीय परंपराओं में अलग-अलग रूपों में की गई है।", "Life Decoding में इसे actions, intentions, consequences, responsibility और cause-and-effect पर विचार करने के एक दार्शनिक lens के रूप में explore किया जा सकता है—बिना यह दावा किए कि किसी व्यक्ति के साथ हुई हर अच्छी या बुरी घटना उसके कर्मों का निश्चित परिणाम है।"], ["मेरे कौन-से निर्णय बार-बार समान परिणामों में योगदान देते हैं?", "मेरे नियंत्रण में क्या है और क्या नहीं?", "अपनी जिम्मेदारियों को निभाते हुए मैं आगे कौन-सा बेहतर विकल्प चुन सकता हूँ?"], "knowledge/index.html", "Explore Philosophy"],
    ["consciousness", "Consciousness", "मैं अपने अनुभवों को कैसे देखता हूँ, और उनमें अपनी जागरूकता की क्या भूमिका है?", ["Consciousness dimension में awareness, attention, subjective experience और स्वयं को देखने की क्षमता जैसे प्रश्नों को explore किया जा सकता है।", "दार्शनिक परंपराएँ और आधुनिक scientific disciplines consciousness को अलग-अलग तरीकों से समझने का प्रयास करती हैं। इन दृष्टिकोणों को स्पष्ट रूप से अलग रखते हुए प्रस्तुत करना चाहिए।"], ["क्या मैं अपनी प्रतिक्रिया को होते हुए पहचान पाता हूँ?", "क्या मैं अपने विचारों और भावनाओं को बिना तुरंत उन पर कार्रवाई किए observe कर सकता हूँ?", "क्या reflection या contemplative practice मुझे अपने अनुभव को अधिक स्पष्टता से देखने में मदद करती है?"], "human-transformation/index.html", "Explore Human Transformation"]
  ];
  const lensButtons = lenses.map(([id, name]) => `<button type="button" data-lens aria-pressed="false" aria-controls="dimension-${id}">${name}</button>`).join("");
  const lensNodes = lenses.map(([, name]) => `<li>${name}</li>`).join("");
  const lensPanels = lenses.map(([id, name, question, paragraphs, prompts, route, label]) => `
          <article class="lens-panel" id="dimension-${id}">
            <h3 tabindex="-1">${name}</h3>
            <p class="lens-state" hidden>Selected</p>
            <p class="stage-question" lang="hi">${question}</p>
            ${paragraphs.map((text) => `<p lang="hi">${text}</p>`).join("")}
            <ul lang="hi">${prompts.map((item) => `<li>${item}</li>`).join("")}</ul>
            ${textLink(depth, route, label)}
          </article>`).join("");
  const steps = [
    ["Observe", "क्या हो रहा है?", "किसी परिस्थिति, विचार, भावना, व्यवहार या recurring experience को यथासंभव स्पष्टता से पहचानें।", "अनुमान लगाने से पहले अनुभव को देखना।"],
    ["Describe the Pattern", "क्या यह अनुभव पहले भी हुआ है?", "देखें कि किन परिस्थितियों में मिलती-जुलती प्रतिक्रियाएँ या परिणाम सामने आते हैं।", "एक घटना और बार-बार उभरने वाले pattern के बीच अंतर पहचानना।"],
    ["Explore Possible Influences", "इसमें किन बातों की भूमिका हो सकती है?", "विचारों, भावनाओं, आदतों, संबंधों, वातावरण, शारीरिक स्थिति और बाहरी परिस्थितियों पर विचार करें।", "किसी एक कारण पर जल्दबाजी में निष्कर्ष निकालने के बजाय संभावित explanations को explore करना।"],
    ["Consider Alternatives", "मैं इसे दूसरे तरीके से कैसे समझ सकता हूँ या प्रतिक्रिया दे सकता हूँ?", "अलग perspectives और व्यवहारिक विकल्पों को देखें। जहाँ आवश्यक हो, विश्वसनीय जानकारी या professional support लें।", "अपनी समझ को अधिक informed बनाना।"],
    ["Apply and Reflect", "अब मैं कौन-सा छोटा, उचित कदम आजमा सकता हूँ?", "जहाँ सुरक्षित और व्यावहारिक हो, एक छोटा बदलाव चुनें। बाद में देखें कि क्या हुआ और उससे क्या सीखा।", "reflection को real-life learning से जोड़ना।"]
  ];
  const stepNames = steps.map(([name], i) => `<li><span>${String(i + 1).padStart(2, "0")}</span>${name}</li>`).join("");
  const stepDetails = steps.map(([name, question, description, purpose], i) => `
            <li>
              <span class="pathway-index">${String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>${name}</h3>
                <p class="stage-question" lang="hi">${question}</p>
                <p lang="hi">${description}</p>
                <p lang="hi"><strong>Purpose.</strong> ${purpose}</p>
              </div>
            </li>`).join("");
  const questions = [
    "मैं किसी परिस्थिति को किस नज़र से देख रहा हूँ?",
    "मेरी प्रतिक्रिया में कौन-से विचार, भावनाएँ या सीखे हुए व्यवहार शामिल हो सकते हैं?",
    "मेरे निर्णयों पर कौन-सी परिस्थितियाँ प्रभाव डाल रही हैं?",
    "मेरे वर्तमान व्यवहार और मेरे घोषित मूल्यों के बीच कहाँ अंतर है?",
    "मैं क्या बदल सकता हूँ, और किन बातों के लिए मुझे सहायता या अलग संसाधनों की आवश्यकता है?"
  ].map((item) => `<li lang="hi">${item}</li>`).join("");
  const limits = [
    "किसी व्यक्ति का medical या psychological diagnosis नहीं है।",
    "किसी के भविष्य, भाग्य या relationships के बारे में निश्चित भविष्यवाणी नहीं करता।",
    "यह दावा नहीं करता कि सभी समस्याएँ केवल व्यक्ति के विचारों या आंतरिक patterns से उत्पन्न होती हैं।",
    "किसी व्यक्ति को उसकी कठिनाइयों के लिए दोषी नहीं ठहराता।",
    "पारंपरिक अवधारणाओं को बिना पर्याप्त आधार के scientific facts के रूप में प्रस्तुत नहीं करता।",
    "आवश्यक medical, mental-health या अन्य professional care का विकल्प नहीं है।"
  ].map((item) => `<li lang="hi">${item}</li>`).join("");
  return `
    <header class="page-hero institution-hero" id="life-decoding-hero">
      <div class="container page-hero-grid">
        <div>
          ${eyebrow("Life Decoding")}
          <h1>Understand the patterns shaping your life.</h1>
          <p class="lede">Our lives are shaped by experiences, beliefs, emotions, habits, relationships and the meanings we give to what happens to us.</p>
          <p class="lede">Life Decoding is a CureSoulLife framework for exploring these patterns with greater awareness, curiosity and responsibility—so that understanding can create space for more conscious choices.</p>
          <div class="cta-row">
            <a class="btn btn-primary" href="#five-dimensions">Explore the Five Dimensions${arrow}</a>
            <a class="btn btn-secondary" href="${url(depth, "human-transformation/index.html")}">Explore the Human Transformation Framework${arrow}</a>
          </div>
        </div>
        <figure class="page-hero-media">
          ${picture("closing-horizon", 1800, 1196, "A ridge in warm light", { priority: true, lazy: false, prefix: p })}
        </figure>
      </div>
    </header>

    <section class="section section-white" id="why-life-decoding" aria-labelledby="why-title">
      <div class="container reading-block">
        ${eyebrow("Look beneath the surface")}
        <h2 id="why-title">Sometimes, understanding what happened is only the beginning.</h2>
        <p class="support" lang="hi">किसी घटना के बारे में हम जानते हो सकते हैं कि क्या हुआ। लेकिन उसका हमारे लिए क्या अर्थ है, हम उसके प्रति कैसी प्रतिक्रिया देते हैं और वह हमारे आगे के निर्णयों को कैसे प्रभावित करती है—इन सवालों को समझने में अधिक समय लग सकता है।</p>
        <p class="support" lang="hi">कभी-कभी हम एक जैसी परिस्थितियों में मिलती-जुलती प्रतिक्रियाएँ देते हैं। कुछ आदतें बदलना कठिन लगता है। कुछ संबंधों में एक जैसे तनाव सामने आते हैं। कभी-कभी हम अपने मूल्यों और अपने वास्तविक व्यवहार के बीच अंतर महसूस करते हैं।</p>
        <p class="support" lang="hi">इन अनुभवों के कई संभावित कारण हो सकते हैं—परिस्थितियाँ, सीखे हुए व्यवहार, सामाजिक संदर्भ, स्वास्थ्य, भावनाएँ, संसाधनों की उपलब्धता और व्यक्तिगत इतिहास।</p>
        <p class="support" lang="hi">Life Decoding इन अनुभवों को किसी एक कारण से समझाने के बजाय उन्हें ध्यानपूर्वक explore करने का निमंत्रण है।</p>
        <p class="statement" lang="hi">जो pattern हम पहचान पाते हैं, उसके बारे में नए प्रश्न पूछना और नए विकल्प तलाशना आसान हो सकता है।</p>
      </div>
    </section>

    <section class="section section-sand" id="life-decoding-definition" aria-labelledby="definition-title">
      <div class="container">
        <div class="section-head section-header">
          ${eyebrow("Our approach")}
          <h2 id="definition-title">Not a verdict about your life. A way to examine it more clearly.</h2>
          <p class="support" lang="hi">Life Decoding का उद्देश्य किसी व्यक्ति को एक label देना या उसके अनुभवों के बारे में अंतिम निर्णय सुनाना नहीं है।</p>
          <p class="support" lang="hi">यह अपने जीवन को अधिक ध्यान से देखने की प्रक्रिया है।</p>
        </div>
        <ul class="format-list">${questions}</ul>
        <p class="section-note" lang="hi">इन प्रश्नों के उत्तर हमेशा तुरंत नहीं मिलते। कभी नया दृष्टिकोण उपयोगी होता है; कभी अधिक जानकारी चाहिए; कभी यह स्वीकार करना पड़ता है कि अभी हमें पर्याप्त जानकारी नहीं है।</p>
        <div class="trio">
          <article class="approach-card"><h3>Observe before concluding.</h3><p lang="hi">पहले अनुभव को देखें, फिर उसकी व्याख्या करें।</p></article>
          <article class="approach-card"><h3>Explore before assuming.</h3><p lang="hi">किसी एक explanation को अंतिम सत्य मानने से पहले दूसरे संभावित कारणों पर भी विचार करें।</p></article>
          <article class="approach-card"><h3>Choose before repeating automatically.</h3><p lang="hi">जहाँ संभव हो, पुरानी प्रतिक्रिया के अतिरिक्त दूसरे विकल्पों को भी पहचानें।</p></article>
        </div>
        <p class="statement" lang="hi">Life Decoding का उद्देश्य जीवन को किसी formula में सीमित करना नहीं, बल्कि उसे अधिक स्पष्टता और जिम्मेदारी के साथ समझने की क्षमता विकसित करना है।</p>
      </div>
    </section>

    <section class="section section-forest" id="five-dimensions" aria-labelledby="lenses-title">
      <div class="container">
        <div class="section-head section-header">
          <p class="eyebrow eyebrow-on-dark"><span class="eyebrow-rule" aria-hidden="true"></span>The Life Decoding framework</p>
          <h2 id="lenses-title">Five lenses for exploring the human experience.</h2>
          <p class="support" lang="hi">CureSoulLife के शुरुआती Life Decoding blueprint में जीवन को पाँच conceptual dimensions के माध्यम से explore करने की परिकल्पना की गई है: Mind, Body, Energy, Karma और Consciousness.</p>
          <p class="support" lang="hi">इन dimensions को जीवन के बारे में प्रश्न पूछने और अलग-अलग पहलुओं पर ध्यान देने के lenses की तरह प्रस्तुत किया जाना चाहिए। इन्हें पूर्ण वैज्ञानिक taxonomy, स्वतंत्र diagnostic categories या हर अनुभव के प्रमाणित कारणों के रूप में प्रस्तुत न करें।</p>
        </div>
        <div class="lens-diagram" aria-hidden="true">
          <p>Human Experience</p>
          <ul>${lensNodes}</ul>
        </div>
        <div class="lens-switch" role="group" aria-label="Select a Life Decoding dimension">${lensButtons}</div>
        <div class="lens-panels">${lensPanels}</div>
        <p class="statement">These five dimensions are lenses for inquiry—not five separate boxes into which every human experience must fit.</p>
      </div>
    </section>

    <section class="section" id="life-decoding-process" aria-labelledby="process-title">
      <div class="container">
        <div class="section-head section-header">
          ${eyebrow("From observation to understanding")}
          <h2 id="process-title">A thoughtful process for exploring recurring patterns.</h2>
          <p class="support" lang="hi">Life Decoding को व्यावहारिक बनाने के लिए एक सरल exploratory sequence प्रस्तावित है। यह CureSoulLife के व्यापक Human Transformation Framework का विकल्प नहीं, बल्कि अपने अनुभवों पर काम करने के लिए एक उपयोगी तरीका है।</p>
        </div>
        <ol class="step-track" aria-hidden="true">${stepNames}</ol>
        <ol class="stage-detail">${stepDetails}</ol>
        <p class="section-note" lang="hi">यह पाँच-step sequence इस पेज के लिए प्रस्तावित practical editorial structure है। इसे clinical method, validated psychological protocol या guaranteed transformation process के रूप में प्रस्तुत नहीं करना है।</p>
        <p class="section-note">The same notice in English: this sequence is an editorial aid for reflection. It is not a clinical method, a validated psychological protocol, or a guaranteed process. A person may return to an earlier step.</p>
      </div>
    </section>

    <section class="section section-white" id="inner-alchemy-connection" aria-labelledby="alchemy-title">
      <div class="container">
        <div class="section-head section-header">
          ${eyebrow("From insight to change")}
          <h2 id="alchemy-title">Understanding a pattern is one step. Learning how to respond differently is another.</h2>
          <p class="support" lang="hi">Life Decoding का केंद्र समझ और interpretation है। Inner Alchemy, CureSoulLife की व्यापक transformation philosophy में, उस यात्रा को दर्शाता है जिसमें insight, reflection, practice और lived experience के बीच संबंध विकसित होता है।</p>
          <p class="support" lang="hi">किसी pattern को पहचानना उपयोगी हो सकता है, लेकिन पहचान अपने-आप में बदलाव की गारंटी नहीं है।</p>
          <p class="support" lang="hi">कभी व्यक्ति को नई skills सीखने की आवश्यकता होती है। कभी supportive environment चाहिए। कभी व्यवहार में निरंतर अभ्यास की जरूरत होती है। और कभी समस्या ऐसी होती है जिसके लिए qualified professional की सहायता अधिक उपयुक्त होती है।</p>
          <p class="support" lang="hi">इसलिए Life Decoding और Inner Alchemy को एक ही चीज के रूप में प्रस्तुत न करें।</p>
        </div>
        <div class="audience-grid">
          <article class="arch-node"><h3>Life Decoding</h3><p lang="hi">अपने अनुभवों और patterns को explore करना।</p></article>
          <article class="arch-node"><h3>Inner Alchemy</h3><p lang="hi">समझ को अभ्यास, reflection और जीवन में अधिक conscious choices से जोड़ने की व्यापक transformation philosophy.</p></article>
        </div>
        <div class="cta-row">${cta(depth, "human-transformation/index.html", "Explore the Human Transformation Framework")}</div>
      </div>
    </section>

    <section class="section section-sand" id="life-decoding-boundaries" aria-labelledby="boundaries-title">
      <div class="container reading-block">
        ${eyebrow("Clarity and responsibility")}
        <h2 id="boundaries-title">A framework for reflection—not a claim to know everything about you.</h2>
        <p class="support" lang="hi">Life Decoding का उपयोग जिम्मेदारी के साथ होना चाहिए।</p>
        <ul class="format-list">${limits}</ul>
        <p class="section-note" lang="hi">मानव जीवन पर व्यक्तिगत चुनावों के साथ-साथ सामाजिक, आर्थिक, शारीरिक, पारिवारिक और पर्यावरणीय परिस्थितियों का भी प्रभाव पड़ सकता है।</p>
        <p class="statement">Understanding should expand a person's choices—not reduce their life to a label.</p>
      </div>
    </section>

    <section class="section section-white" id="life-decoding-ecosystem" aria-labelledby="paths-title">
      <div class="container">
        <div class="section-head section-header">
          ${eyebrow("Connected understanding")}
          <h2 id="paths-title">One question can open several paths of exploration.</h2>
          <p class="support" lang="hi">Life Decoding, CureSoulLife के व्यापक ecosystem से जुड़ा है। अलग-अलग विषयों और संसाधनों से व्यक्ति को अपनी जिज्ञासा के अनुसार आगे बढ़ने का अवसर मिलना चाहिए।</p>
        </div>
        <ul class="orient-list">
          <li><h3>Human Transformation</h3><p lang="hi">व्यापक यात्रा, उसके सिद्धांत और सात stages.</p>${textLink(depth, "human-transformation/index.html", "Explore Human Transformation")}</li>
          <li><h3>Human Operating System™</h3><p lang="hi">मानव जीवन के नौ interconnected dimensions को explore करने वाला framework.</p>${textLink(depth, "human-operating-system/index.html", "Explore the Human Operating System™")}</li>
          <li><h3>Knowledge</h3><p lang="hi">मानव व्यवहार, दर्शन, पारंपरिक ज्ञान और संबंधित विषयों पर educational resources.</p>${textLink(depth, "knowledge/index.html", "Explore Knowledge")}</li>
          <li><h3>Research</h3><p lang="hi">प्रासंगिक evidence, scientific inquiry और research-based perspectives.</p>${textLink(depth, "research/index.html", "Explore Research")}</li>
          <li><h3>Experiences</h3><p lang="hi">उपयुक्त practices, workshops और retreats के माध्यम से learning को explore करने के अवसर.</p>${textLink(depth, "experiences/index.html", "Explore Experiences")}</li>
        </ul>
        <p class="section-note" lang="hi">हर प्रश्न का उत्तर एक ही जगह या एक ही तरीके से नहीं मिलता। CureSoulLife का उद्देश्य अलग-अलग learning pathways के बीच सार्थक संबंध बनाना है।</p>
        <p class="section-note">Knowledge, Research and Experiences are published pages. They do not yet list articles, studies or scheduled programmes.</p>
      </div>
    </section>

    <section class="section section-midnight" id="life-decoding-next-steps" aria-labelledby="begin-title">
      <div class="container">
        <h2 id="begin-title">Where would you like to begin?</h2>
        <div class="route-grid">
          <article>
            <h3>Understand the broader journey</h3>
            <p>Explore how awareness, understanding, alignment, practice, integration, contribution and legacy connect.</p>
            ${cta(depth, "human-transformation/index.html", "Explore Human Transformation", "btn btn-primary")}
          </article>
          <article>
            <h3>Understand the human system</h3>
            <p>Explore the Human Operating System™ and its nine dimensions.</p>
            ${cta(depth, "human-operating-system/index.html", "Explore HOS", "btn btn-primary")}
          </article>
          <article>
            <h3>Explore knowledge and evidence</h3>
            <p>Discover articles, research and different perspectives on human experience.</p>
            ${cta(depth, "knowledge/index.html", "Explore Knowledge", "btn btn-primary")}
          </article>
        </div>
      </div>
    </section>

    <section class="finale finale-plain cta-section cta-forest" id="life-decoding-closing" aria-labelledby="closing-title">
      <div class="finale-inner">
        <h2 id="closing-title">Begin with a question. Stay open to what you discover.</h2>
        <div class="finale-copy">
          <p>You do not need to understand every part of your life at once.</p>
          <p>Sometimes, a useful beginning is to observe one experience more carefully, ask a better question or consider a different perspective.</p>
          <p>Life Decoding invites you to explore your experiences with curiosity, compassion and responsibility—and to remain open to learning as your life evolves.</p>
        </div>
        <div class="cta-row">
          ${cta(depth, "human-operating-system/index.html", "Explore the Human Operating System™", "btn btn-light")}
          ${cta(depth, "curesoullife/index.html", "Discover CureSoulLife", "btn btn-ghost-light")}
        </div>
      </div>
    </section>`;
}

function hosPage(depth) {
  const dims = [
    ["body", "Body", "How am I caring for and experiencing my physical body?",
      ["Body explores physical wellbeing, movement, rest, sleep, nutrition and the everyday conditions that influence how we feel and function.", "The purpose is to encourage thoughtful attention to physical needs and habits—not to suggest that every health outcome is within an individual's control."],
      ["Sleep and recovery", "Movement and physical activity", "Everyday nutrition", "Physical comfort and limitations", "Health-related routines"],
      ["What does my current routine tell me about the way I care for my body?", "Am I allowing enough time for rest and recovery?", "Is there a physical concern that deserves appropriate professional attention?"],
      "Greater awareness of physical needs and more considered daily routines.",
      [["knowledge/index.html", "Explore Knowledge"], ["experiences/index.html", "Explore Experiences"]]],
    ["mind", "Mind", "How do I think, interpret, learn and make decisions?",
      ["Mind explores thought patterns, beliefs, attention, learning, interpretation and decision-making.", "It invites people to examine how they understand situations and how their assumptions may influence their choices."],
      ["Attention and focus", "Beliefs and assumptions", "Learning and curiosity", "Decision-making", "Thinking patterns"],
      ["What assumptions am I making about this situation?", "Which facts do I know, and which parts am I interpreting?", "What alternative perspective might be worth considering?"],
      "More deliberate reflection and informed decision-making.",
      [["human-transformation/life-decoding/index.html", "Discover Life Decoding"], ["knowledge/index.html", "Explore Knowledge"]]],
    ["emotion", "Emotion", "How do I recognise, understand and respond to my emotions?",
      ["Emotion explores emotional awareness, expression, regulation and the ways feelings can influence decisions and relationships.", "It does not imply that all emotions should be controlled, eliminated or treated as problems."],
      ["Emotional awareness", "Recognising triggers", "Expressing feelings", "Responding rather than reacting automatically", "Seeking support when needed"],
      ["What am I feeling in this situation?", "What might this emotion be responding to?", "What would a thoughtful and appropriate response look like?"],
      "Greater emotional literacy and more considered responses.",
      [["knowledge/index.html", "Explore Knowledge"], ["experiences/index.html", "Explore Experiences"]]],
    ["energy", "Energy", "How do I experience my vitality, attention and available capacity?",
      ["Energy explores the subjective experience of feeling active, tired, focused, depleted or engaged in everyday life.", "The term may also connect to traditional concepts such as prana. Those concepts should be explained in their appropriate philosophical or traditional contexts rather than automatically presented as scientifically established mechanisms."],
      ["Daily energy patterns", "Rest and recovery", "Attention and activity", "Demands on time and capacity", "Breath and contemplative practices where appropriate"],
      ["When do I tend to feel most and least energised?", "Which activities or circumstances affect my perceived capacity?", "What changes to rest, routine or workload might be worth exploring?"],
      "Better awareness of daily capacity and the conditions that support it.",
      [["knowledge/index.html", "Explore Knowledge"], ["research/index.html", "Explore Research"], ["experiences/index.html", "Explore Experiences"]]],
    ["relationships", "Relationships", "How do I connect, communicate and participate in relationships?",
      ["Relationships explores connection, trust, communication, boundaries, belonging and the different relationships that shape our lives.", "The focus is not on making every relationship harmonious. It is on understanding relational patterns and making thoughtful choices about how we participate in them."],
      ["Communication", "Listening and understanding", "Boundaries", "Trust and reciprocity", "Family, friendship and community", "Conflict and repair"],
      ["What patterns recur in my relationships?", "Am I communicating my needs and boundaries clearly?", "What is within my control, and what depends on another person's choices?"],
      "More intentional communication and healthier relational choices.",
      [["knowledge/index.html", "Explore Knowledge"], ["community/index.html", "Explore Community"]]],
    ["purpose", "Purpose", "What gives direction, meaning and significance to my life?",
      ["Purpose explores values, meaning, direction, responsibilities and the relationship between what matters to a person and how they live.", "Purpose does not need to be one grand mission. It may develop through work, relationships, learning, service, creativity or everyday commitments."],
      ["Personal values", "Meaning and direction", "Responsibilities", "Long-term intentions", "Contribution", "Changing priorities across life stages"],
      ["What matters to me at this stage of life?", "Where do my daily choices reflect—or conflict with—my values?", "What deserves more attention in the time and circumstances I have?"],
      "Greater clarity about priorities and meaningful action.",
      [["human-transformation/index.html", "Explore Human Transformation"], ["knowledge/index.html", "Explore Knowledge"]]],
    ["work", "Work &amp; Wealth", "How do I create value, manage resources and relate to work and money?",
      ["Work &amp; Wealth explores career, skills, livelihood, financial choices, resources, contribution and the role work and money play in a person's life.", "It should not equate financial wealth with personal worth, spiritual development or guaranteed success."],
      ["Skills and learning", "Work and career choices", "Financial awareness", "Resource management", "Sustainable productivity", "Work-life responsibilities", "The relationship between money and values"],
      ["What value am I creating through my work?", "Which skills or resources need further development?", "Do my financial choices reflect my responsibilities and priorities?"],
      "More intentional decisions about work, resources and financial responsibilities.",
      [["knowledge/index.html", "Explore Knowledge"], ["human-transformation/index.html", "Explore Human Transformation"]]],
    ["consciousness", "Consciousness", "How aware am I of my experience as it unfolds?",
      ["Consciousness explores awareness, attention, presence, reflection and questions about subjective experience.", "It may include contemplative and philosophical traditions, alongside relevant scientific inquiry, while clearly distinguishing their methods and claims."],
      ["Awareness of thoughts and emotions", "Attention and presence", "Reflection", "Contemplative practices", "Philosophical questions about experience"],
      ["Can I notice a thought or feeling without immediately acting on it?", "What helps me pay attention to the present situation?", "Which questions about awareness remain open for me?"],
      "Greater attentiveness to experience and continued inquiry.",
      [["knowledge/index.html", "Explore Knowledge"], ["research/index.html", "Explore Research"], ["experiences/index.html", "Explore Experiences"]]],
    ["legacy", "Legacy", "What do I want my actions and contributions to make possible beyond the present moment?",
      ["Legacy explores contribution, stewardship, knowledge-sharing, responsibility and the effects our actions may have on other people and future generations.", "Legacy is not limited to fame, recognition or wealth. It may be expressed through family, teaching, service, creative work, institutions or everyday acts of responsibility."],
      ["Contribution and service", "Knowledge-sharing", "Leadership and stewardship", "Intergenerational responsibility", "Community impact", "Long-term intentions"],
      ["Who benefits from the knowledge and resources I develop?", "What responsibilities do I want to carry forward?", "What can I contribute that may remain useful to others?"],
      "A more considered relationship between personal development and contribution.",
      [["community/index.html", "Explore Community"], ["curesoullife/index.html", "Discover CureSoulLife"]]]
  ];
  const principles = [
    ["Holistic", "Recognise the wider context of human life.", "A challenge may involve more than one dimension. Consider the person's circumstances, resources, relationships and environment before reaching conclusions.", "What might I be overlooking by focusing on only one part of this situation?"],
    ["Balanced", "Consider competing needs and priorities realistically.", "Balance does not mean giving every dimension equal time every day. It means making thoughtful adjustments in response to changing needs, constraints and responsibilities.", "What needs more attention right now, and what can reasonably wait?"],
    ["Integrated", "Bring learning into everyday life.", "Insights become more useful when they inform choices, habits and relationships. Integration also means recognising when a practice or idea does not fit a person's circumstances.", "How could I apply what I have learned in a practical, sustainable way?"],
    ["Conscious", "Create space for awareness before acting automatically.", "Notice thoughts, feelings, assumptions and circumstances before deciding how to respond, wherever possible.", "What am I noticing, and what choices are available to me?"],
    ["Disciplined", "Support intentions through realistic and consistent effort.", "Discipline involves creating structures and routines that support what matters. It should not be confused with harsh self-judgment or ignoring legitimate needs for rest and support.", "What small practice can I realistically sustain?"],
    ["Surrendered", "Recognise the limits of personal control.", "In CureSoulLife's philosophical context, surrender can mean accepting uncertainty, remaining open to learning and loosening the need to control every outcome. It does not mean abandoning agency, ignoring harm or surrendering personal boundaries.", "What can I influence, and what do I need to accept or approach differently?"],
    ["Evolved", "Remain open to learning and revising your understanding.", "Human development continues through new experiences, changing circumstances and reflection. An approach that once helped may need to change.", "What have I learned, and what might I need to reconsider?"]
  ];
  const formula = [
    ["Awareness", "Notice what is happening.", "Begin by observing experiences, circumstances, thoughts, feelings and patterns with greater clarity."],
    ["Acceptance", "Acknowledge the reality of the present situation.", "Acceptance means recognising what is happening before deciding how to respond. It does not mean approving of harm, abandoning boundaries or giving up on change."],
    ["Alignment", "Clarify what matters and what is realistic.", "Consider how choices, priorities, values, resources and responsibilities relate to one another."],
    ["Action", "Take an appropriate step.", "Choose a practical action that fits the situation, available resources and intended direction."],
    ["Discipline", "Continue, review and adapt.", "Build realistic routines and return to them consistently, while recognising when adjustments are needed."],
    ["Devotion", "Bring care, sincerity and commitment to the process.", "Devotion can be understood as sustained dedication to meaningful practice, values or a chosen purpose. It does not require adherence to a particular religion or doctrine."]
  ];
  const pathway = [
    ["Assess", "Understand the current context.", "Explore the question, relevant circumstances, existing strengths and areas the person wants to understand better. Assessment here means structured exploration—not clinical diagnosis or automated scoring."],
    ["Design", "Choose an appropriate direction.", "Identify a realistic focus, useful resources and possible practices. The approach should reflect the person's needs, preferences and constraints."],
    ["Practice", "Apply the chosen approach.", "Explore the selected learning, routine or practice in an appropriate way. Notice what is useful, difficult or unsuitable."],
    ["Transform", "Review what is changing and what is being learned.", "Transformation is not assumed from participation alone. Reflection helps identify meaningful changes, limitations and areas where a different approach may be needed."],
    ["Contribute", "Connect development with wider responsibility.", "Where appropriate, consider how learning can support relationships, work, community or contribution beyond individual goals."]
  ];
  const pillars = [
    ["Ancient Wisdom", "Philosophical and contemplative traditions that explore questions about awareness, conduct, meaning and the human experience."],
    ["Modern Science", "Relevant research and contemporary disciplines that help investigate questions about human behaviour, cognition, emotions and wellbeing."],
    ["Proven Methods", "Practices and methods with clearly described purposes, limitations and appropriate evidence. The word “proven” should only be used for a specific method when supporting evidence justifies it."],
    ["Community", "Connection, shared learning, belonging and mutual support, with respect for different experiences and boundaries."],
    ["Expert Guidance", "Appropriate support from qualified professionals, experienced practitioners or knowledgeable educators within their actual areas of competence."],
    ["Technology", "Digital tools that may improve access to learning, reflection and community. Technology should support human judgment and agency rather than replace them."]
  ];
  const practices = [
    ["Mindfulness", "Notice an everyday experience with deliberate attention."],
    ["Meditation", "Explore an appropriate contemplative practice, taking personal circumstances into account."],
    ["Breathwork", "Learn suitable breathing practices and follow relevant safety guidance."],
    ["Movement and Yoga", "Explore movement appropriate to personal ability and health needs."],
    ["Journaling", "Record observations, questions, experiences or decisions."],
    ["Gratitude", "Reflect on people, experiences or resources one appreciates, without denying difficult realities."],
    ["Seva / Service", "Explore appropriate ways of contributing to others while respecting personal capacity and boundaries."]
  ];
  const linkRow = (pairs) => `<p class="link-row">${pairs.map(([route, label]) => textLink(depth, route, label)).join("")}</p>`;
  const cx = 400;
  const cy = 318;
  const rx = 176;
  const ry = 142;
  const heroNodes = dims.map(([, name], i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / 9;
    const x = cx + Math.cos(a) * rx;
    const y = cy + Math.sin(a) * ry;
    const c = Math.cos(a);
    const s = Math.sin(a);
    let anchor = c > 0.45 ? "start" : c < -0.45 ? "end" : "middle";
    let lx = x + (anchor === "start" ? 16 : anchor === "end" ? -16 : 0);
    let ly = y + (anchor === "middle" ? (s < 0 ? -24 : 28) : 5);
    if (i === 4) { anchor = "start"; lx = x + 18; ly = y + 30; }
    if (i === 5) { anchor = "end"; lx = x - 18; ly = y + 30; }
    return { name, x, y, lx, ly, anchor };
  });
  const heroSvg = `<svg viewBox="0 0 800 640" focusable="false">
    <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="#D7D2C8" stroke-width="1.25"/>
    ${heroNodes.map((n) => `<line x1="${cx}" y1="${cy}" x2="${n.x.toFixed(1)}" y2="${n.y.toFixed(1)}" stroke="#879A82" stroke-width="1.25"/>`).join("")}
    <circle cx="${cx}" cy="${cy}" r="58" fill="#F7F4ED"/>
    <g transform="translate(${cx} ${cy - 6})" fill="#173A32">
      <circle cx="0" cy="-18" r="13"/>
      <path d="M-20 40c1-26 9-34 20-34s19 8 20 34c-7 5-13 7-20 7s-13-2-20-7z"/>
    </g>
    ${heroNodes.map((n) => `<circle cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="6" fill="#F7F4ED" stroke="#173A32" stroke-width="1.6"/>`).join("")}
    ${heroNodes.map((n) => `<text x="${n.lx.toFixed(1)}" y="${n.ly.toFixed(1)}" text-anchor="${n.anchor}" dominant-baseline="middle">${n.name}</text>`).join("")}
  </svg>`;
  const dimButtons = dims.map(([id, name], i) => `<button type="button" data-dimension="${id}" aria-pressed="false" aria-controls="dimension-${id}" style="--i:${i}">${name}</button>`).join("");
  const dimPanels = dims.map(([id, name, question, definition, areas, prompts, direction, links]) => `
          <article class="hos-panel" id="dimension-${id}">
            <h3 tabindex="-1">${name}</h3>
            <p class="hos-state" hidden>Selected</p>
            <p class="stage-question">${question}</p>
            ${definition.map((line) => `<p>${line}</p>`).join("")}
            <h4>Areas to explore</h4>
            <ul>${areas.map((item) => `<li>${item}</li>`).join("")}</ul>
            <h4>Reflection prompts</h4>
            <ul>${prompts.map((item) => `<li>${item}</li>`).join("")}</ul>
            <h4>Potential direction</h4>
            <p>${direction}</p>
            ${linkRow(links)}
          </article>`).join("");
  const principleCards = principles.map(([name, meaning, detail, question]) => `
          <article class="approach-card">
            <h3>${name}</h3>
            <p>${meaning}</p>
            <p>${detail}</p>
            <p class="principle-question">${question}</p>
          </article>`).join("");
  const formulaCards = formula.map(([name, lead, detail]) => `
          <article class="formula-card">
            <h3>${name}</h3>
            <p class="formula-lead">${lead}</p>
            <p>${detail}</p>
          </article>`).join("");
  const steps = pathway.map(([name, lead, detail], i) => `
            <li>
              <span class="journey-index">${String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>${name}</h3>
                <p class="stage-question">${lead}</p>
                <p>${detail}</p>
              </div>
            </li>`).join("");
  const pillarCards = pillars.map(([name, detail]) => `<article class="approach-card"><h3>${name}</h3><p>${detail}</p></article>`).join("");
  const practiceItems = practices.map(([name, detail]) => `<li><h3>${name}</h3><p>${detail}</p></li>`).join("");
  const can = ["Explore different dimensions of their lives.", "Notice possible connections between everyday experiences.", "Organise reflection and learning.", "Identify questions or areas they want to understand further.", "Explore relevant knowledge, practices and support.", "Consider how individual development relates to wider contribution."];
  const cannot = ["Diagnose physical or mental-health conditions.", "Measure a person's total worth, consciousness or level of evolution.", "Prove the cause of a particular life difficulty.", "Predict financial success, relationship outcomes or future events.", "Guarantee healing or transformation.", "Replace appropriate professional care."];

  return `
    <header class="page-hero hos-hero" id="hos-hero">
      <div class="container page-hero-grid">
        <div>
          ${eyebrow("The Human Operating System™")}
          <h1>Understand the system. Explore the dimensions. Transform the way you live.</h1>
          <p class="lede">Human life is interconnected.</p>
          <p class="support">Our physical wellbeing, thoughts, emotions, relationships, work, sense of purpose and awareness influence how we experience the world—often in ways that are difficult to see when we examine each area in isolation.</p>
          <p class="support">The Human Operating System™ is a CureSoulLife framework for exploring these connections and approaching human development with greater awareness, balance and integration.</p>
          <div class="cta-row">
            <a class="btn btn-primary" href="#nine-dimensions">Explore the Nine Dimensions${arrow}</a>
            <a class="btn btn-secondary" href="#transformation-formula">Understand the Transformation Formula${arrow}</a>
          </div>
          <div class="hos-summary-wrap">
            <div class="hos-summary">
              <p>Nine dimensions of human life</p>
              <ul>${dims.map(([, name]) => `<li>${name}</li>`).join("")}</ul>
            </div>
          </div>
        </div>
        <figure class="hos-figure" aria-hidden="true">${heroSvg}</figure>
      </div>
    </header>

    <section class="section section-white" id="hos-why" aria-labelledby="why-hos-title">
      <div class="container reading-block">
        ${eyebrow("Seeing the whole person")}
        <h2 id="why-hos-title">We often try to improve one part of life without understanding the wider picture.</h2>
        <p class="support" lang="hi">हम स्वास्थ्य पर ध्यान देते हैं, लेकिन अपनी दिनचर्या और आराम को नज़रअंदाज़ कर सकते हैं।</p>
        <p class="support" lang="hi">हम अपने काम में आगे बढ़ना चाहते हैं, लेकिन यह नहीं देख पाते कि हमारी प्राथमिकताएँ, रिश्ते और ऊर्जा उस लक्ष्य से कैसे जुड़े हैं।</p>
        <p class="support" lang="hi">हम किसी भावना को बदलना चाहते हैं, लेकिन उस परिस्थिति को समझने के लिए समय नहीं निकालते जिसमें वह भावना उभरती है।</p>
        <p class="support" lang="hi">ऐसी स्थितियों में केवल एक dimension पर ध्यान देना पर्याप्त नहीं हो सकता।</p>
        <p class="statement" lang="hi">मेरे जीवन के अलग-अलग हिस्से एक-दूसरे से किस तरह जुड़े हैं?</p>
        <p class="support" lang="hi">इसका अर्थ यह नहीं कि हर समस्या के कई कारण होंगे या हर dimension हमेशा दूसरे को प्रभावित करेगा। इसका अर्थ है कि हम किसी अनुभव को समझते समय उसके संदर्भ और संभावित संबंधों के लिए जगह रखें।</p>
        <p class="statement">The whole person is more than the sum of separate parts.</p>
      </div>
    </section>

    <section class="section section-forest" id="nine-dimensions" aria-labelledby="dimensions-title">
      <div class="container">
        <div class="section-head">
          ${eyebrow("The architecture of human life")}
          <h2 id="dimensions-title">Nine dimensions. One interconnected human experience.</h2>
          <p class="support">The Human Operating System™ explores nine dimensions of human life. Each offers a different perspective on how we live, relate, work, learn and develop.</p>
          <p class="support">These dimensions are not isolated compartments. Nor are they a ranking of human worth. They are a structured way to examine different aspects of life while recognising that their relationships vary across individuals and circumstances.</p>
        </div>
        <p class="hos-text-alt">The nine dimensions, with no rank, are Body, Mind, Emotion, Energy, Relationships, Purpose, Work &amp; Wealth, Consciousness and Legacy. Choosing a name shows that dimension. On a smaller screen, every dimension remains listed in full.</p>
        <div class="hos-framework">
          <div class="hos-orbit" role="group" aria-label="Nine dimensions">
            <p class="hos-core">Human life</p>
            ${dimButtons}
          </div>
          <div class="hos-panels">${dimPanels}</div>
        </div>
        <p class="section-note">You do not need to optimise all nine dimensions at once. Begin by understanding what matters in your life, what needs attention and what is realistic in your circumstances.</p>
      </div>
    </section>

    <section class="section" id="alignment-principles" aria-labelledby="principles-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Core Alignment Principles")}
          <h2 id="principles-title">Principles for approaching human development with intention.</h2>
          <p class="support">The nine dimensions help us explore different aspects of human life. The Core Alignment Principles describe the attitude and approach with which we engage them.</p>
          <p class="support">These principles are not a clinical checklist or a test of whether someone is living correctly. They are guiding ideas for reflection, learning and practice.</p>
        </div>
        <div class="principle-grid">${principleCards}</div>
      </div>
    </section>

    <section class="section section-forest" id="transformation-formula" aria-labelledby="formula-title">
      <div class="container">
        <div class="section-head">
          ${eyebrow("The Transformation Formula")}
          <h2 id="formula-title">From awareness to meaningful action.</h2>
          <p class="formula-line">Awareness + Acceptance + Alignment + Action + Discipline + Devotion = Transformation</p>
          <p class="support">The CureSoulLife Transformation Formula expresses six complementary qualities that can support a person's efforts to learn, change and live more intentionally.</p>
          <p class="support">It is a conceptual framework—not a mathematical equation or a scientifically validated prediction of transformation.</p>
        </div>
        <div class="formula-grid">${formulaCards}</div>
        <p class="section-note">The plus signs represent complementary qualities, not quantities that can be measured and added together. The equals sign expresses an intended relationship: when these qualities work together, they may support meaningful change. No fixed outcome is guaranteed. Personal circumstances, health, relationships, resources and external conditions also matter.</p>
        <div class="cta-row">${cta(depth, "human-transformation/index.html", "Explore the Human Transformation Framework", "btn btn-light")}</div>
      </div>
    </section>

    <section class="section section-white" id="how-we-work" aria-labelledby="pathway-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("From understanding to application")}
          <h2 id="pathway-title">A framework becomes useful when it informs what we do next.</h2>
          <p class="support">The HOS framework can help organise questions about human life. Turning those questions into useful action requires a process that respects the individual, their circumstances and the limits of what can be concluded.</p>
          <p class="support">The CureSoulLife blueprint proposes five operational steps.</p>
        </div>
        <ol class="step-track" aria-hidden="true">${pathway.map(([name]) => `<li>${name}</li>`).join("")}</ol>
        <ol class="stage-detail">${steps}</ol>
        <p class="pathway-sequence">Assess → Design → Practice → Transform → Contribute</p>
        <p class="section-note">This is the proposed operational pathway for applying the HOS framework. It complements the seven-stage Human Transformation Framework rather than replacing it. The steps are not a score, and participation does not by itself produce transformation.</p>
      </div>
    </section>

    <section class="section section-sand" id="supporting-pillars" aria-labelledby="pillars-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("What supports the journey?")}
          <h2 id="pillars-title">Human development benefits from knowledge, practice and appropriate support.</h2>
          <p class="support">No single source of knowledge or form of support answers every question about human life.</p>
          <p class="support">CureSoulLife's HOS blueprint identifies six supporting pillars that can inform learning and application.</p>
        </div>
        <div class="pillar-grid">${pillarCards}</div>
        <p class="section-note">The six pillars are supporting resources, not proof that every CureSoulLife activity has already been researched, independently evaluated or professionally accredited. Knowledge, Research, Experiences and Community are published pages. They do not yet list articles, studies, programmes or partnerships.</p>
        <div class="cta-row">
          ${cta(depth, "knowledge/index.html", "Explore Knowledge")}
          ${cta(depth, "research/index.html", "Explore Research", "btn btn-secondary")}
        </div>
      </div>
    </section>

    <section class="section section-white" id="daily-integration" aria-labelledby="practices-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Bringing the framework into daily life")}
          <h2 id="practices-title">Small, thoughtful practices can create opportunities for reflection.</h2>
          <p class="support">The HOS framework does not require someone to change every area of life simultaneously. A useful starting point may be one realistic practice that supports an area the person wants to explore.</p>
          <p class="support">The existing blueprint identifies several examples of daily integration practices.</p>
        </div>
        <ul class="practice-list">${practiceItems}</ul>
        <p class="section-note">These are examples, not a compulsory routine or a prescription. A practice is not presented as suitable for everyone.</p>
        <div class="cta-row">${cta(depth, "experiences/index.html", "Explore Practices and Experiences")}</div>
      </div>
    </section>

    <section class="section" id="hos-boundaries" aria-labelledby="boundaries-hos-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("A framework, not a diagnosis")}
          <h2 id="boundaries-hos-title">Use the system to ask better questions—not to label yourself.</h2>
        </div>
        <div class="pair-grid">
          <article class="pair-panel">
            <h3>HOS can help people</h3>
            <ul class="format-list">${can.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>
          <article class="pair-panel">
            <h3>HOS does not, by itself</h3>
            <ul class="format-list">${cannot.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>
        </div>
        <p class="statement">A useful framework expands understanding while remaining open to complexity, evidence and revision.</p>
      </div>
    </section>

    <section class="section section-white" id="hos-framework-relationships" aria-labelledby="frameworks-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("The CureSoulLife architecture")}
          <h2 id="frameworks-title">One ecosystem. Three complementary perspectives.</h2>
          <p class="support">Human Transformation is the overarching journey. The Human Operating System™ is a framework for exploring the dimensions of human life. Life Decoding is a methodology for exploring personal experiences and recurring patterns. Knowledge, Research, Practices, Experiences and Community are resources for learning and application. These perspectives are complementary. They are not a ranking of human worth, and they are not a sequence everyone must follow.</p>
        </div>
        <div class="framework-map" aria-hidden="true">
          <p>Human Transformation</p>
          <div>
            <span>Human Operating System™</span>
            <span>Life Decoding</span>
          </div>
          <p>Knowledge · Research · Practices · Experiences · Community</p>
        </div>
        <div class="relation-grid">
          <article>
            <h3>Human Transformation</h3>
            <p>The broad journey of awareness, understanding, alignment, practice, integration, contribution and legacy.</p>
            ${textLink(depth, "human-transformation/index.html", "Explore Human Transformation")}
          </article>
          <article>
            <h3>Life Decoding</h3>
            <p>A way to explore personal experiences and recurring patterns through five conceptual dimensions.</p>
            ${textLink(depth, "human-transformation/life-decoding/index.html", "Discover Life Decoding")}
          </article>
          <article>
            <h3>Human Operating System™</h3>
            <p>A nine-dimension framework for examining the interconnected aspects of human life.</p>
            <a class="link-arrow" href="#nine-dimensions">Explore the Nine Dimensions${arrow}</a>
          </article>
        </div>
      </div>
    </section>

    <section class="finale finale-plain cta-section cta-forest" id="hos-closing" aria-labelledby="hos-close-title">
      <div class="container">
        <div>
          <h2 id="hos-close-title">You do not need to understand everything at once. Begin by seeing your life more clearly.</h2>
          <div class="finale-copy">
            <p>The Human Operating System™ offers a structured way to explore different dimensions of human life.</p>
            <p>Choose one question, one area or one practice that feels relevant now. Continue learning, remain open to what you discover and adjust your approach as your understanding develops.</p>
          </div>
        </div>
        <div class="cta-row">
          ${cta(depth, "human-transformation/index.html", "Explore Human Transformation", "btn btn-light")}
          ${cta(depth, "human-transformation/life-decoding/index.html", "Discover Life Decoding", "btn btn-ghost-light")}
        </div>
      </div>
    </section>`;
}

const knowledgeResources = [];

function knowledgePage(depth) {
  const p = pfx(depth);
  const domains = [
    ["understanding-the-human-being", "Understanding the Human Being", "Explore human biology, psychology, behaviour, identity, learning and the many ways people understand human experience.", ["Human Behaviour", "Psychology", "Neuroscience", "Identity and Beliefs", "Human Development", "Consciousness Studies"], "Explore the Human Being"],
    ["living-well", "Living Well", "Explore the everyday foundations of wellbeing, including rest, movement, nutrition, routines and the relationship between physical life and personal habits.", ["Sleep", "Movement and Yoga", "Nutrition", "Breath and Attention", "Daily Routines", "Wellbeing and Environment"], "Explore Living Well"],
    ["meaning-and-inner-development", "Meaning and Inner Development", "Explore awareness, values, meditation, philosophical traditions, self-reflection and the process of developing a more intentional relationship with life.", ["Meditation", "Self-Reflection", "Values and Purpose", "Ancient Wisdom", "Philosophy", "Resilience and Inner Development"], "Explore Inner Development"],
    ["relationships-and-society", "Relationships and Society", "Explore how people relate, communicate, work together and contribute to the families, communities and societies they are part of.", ["Relationships", "Communication", "Family and Parenting", "Leadership", "Community", "Social Responsibility"], "Explore Relationships"],
    ["future-and-contribution", "Future and Contribution", "Explore the relationship between human development, responsible innovation, work, society and the future we help create.", ["Work and Meaning", "Human Potential", "Entrepreneurship", "Technology and Society", "Sustainability", "Legacy and Contribution"], "Explore Future and Contribution"]
  ];
  const formats = [
    ["Articles", "Clear, focused explanations of ideas, questions and human experiences."],
    ["Guides", "Structured resources that explore a subject in greater depth."],
    ["Videos", "Visual explanations, educational conversations and selected learning resources."],
    ["Podcasts", "Conversations and audio resources exploring human experience, knowledge and ideas."],
    ["Learning Series", "Related resources arranged into a coherent sequence for people who want to explore a subject over time."],
    ["Case Studies and Human Stories", "Carefully contextualised examples of experiences, decisions, learning and change, with appropriate consent and privacy safeguards."]
  ];
  const levels = [
    ["Discover", "For people who want an accessible introduction to a subject.", "Introductory articles, short videos and simple explainers."],
    ["Learn", "For people who want a clearer and more structured understanding.", "Detailed articles, guides, educational series and contextualised examples."],
    ["Practice", "For people who want to explore how an idea may inform everyday life.", "Reflection prompts, practice instructions and relevant public resources."],
    ["Explore Further", "For people who want deeper context, evidence, philosophical background or additional perspectives.", "Research summaries, references, advanced guides and related publications."]
  ];
  const featured = knowledgeResources.filter((item) => item.featured);
  const featuredHtml = featured.length
    ? `<div class="resource-grid">${featured.map((item) => `<article><h3>${item.title}</h3><p>${item.summary}</p></article>`).join("")}</div>`
    : `<div class="quiet-panel"><h3>Published work will appear here.</h3><p>No knowledge resource is published yet. This page does not list titles, authors, reading times, or counts.</p></div>`;
  const domainCards = domains.map(([slug, name, description, topics, label], index) => `
          <article class="domain-card" data-domain="${slug}">
            <p class="domain-index">${String(index + 1).padStart(2, "0")}</p>
            <h3>${name}</h3>
            <p class="domain-state" hidden>Selected</p>
            <p>${description}</p>
            <p class="domain-topics">${topics.join(" · ")}</p>
            <a class="link-arrow" href="?domain=${slug}#knowledge-library">${label}${arrow}</a>
          </article>`).join("");
  const steps = ["Explore an Idea", "Understand Its Context", "Reflect", "Apply", "Continue Learning"];

  return `
    <header class="page-hero institution-hero knowledge-hero" id="knowledge-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="${url(depth, "index.html")}">Home</a></li>
            <li aria-current="page">Knowledge</li>
          </ol>
        </nav>
        <div class="page-hero-grid">
          <div>
            ${eyebrow("CureSoulLife Knowledge")}
            <h1>Understand more. Explore deeper. Live with greater awareness.</h1>
            <p class="lede">The way we understand ourselves shapes the way we live. Explore knowledge that brings together Ancient Wisdom, Modern Science and lived human experience to help you understand human life more deeply and apply what you learn with greater intention.</p>
            <div class="cta-row">
              <a class="btn btn-primary" href="#knowledge-domains">Explore Knowledge${arrow}</a>
              <a class="btn btn-secondary" href="${url(depth, "human-transformation/index.html")}">Discover Human Transformation${arrow}</a>
            </div>
          </div>
          <figure class="page-hero-media">
            ${picture("eco-knowledge", 1200, 1800, "A road through red rock toward a distant mountain", { priority: true, lazy: false, prefix: p })}
          </figure>
        </div>
      </div>
    </header>

    <section class="section section-white" id="knowledge-context" aria-labelledby="knowledge-context-title">
      <div class="container reading-block">
        ${eyebrow("Our approach")}
        <h2 id="knowledge-context-title">Knowledge becomes more useful when it connects to life.</h2>
        <p class="support">Information is everywhere. Understanding is harder to find.</p>
        <p class="support">A useful idea should help us see something more clearly, ask better questions or make more thoughtful choices.</p>
        <p class="support">At CureSoulLife, knowledge is not treated as an isolated collection of information. We connect ideas across disciplines, distinguish established evidence from philosophical interpretation, and explore how understanding can inform everyday life.</p>
        <p class="support">Our aim is not to tell people what to believe. It is to make thoughtful exploration, informed reflection and practical learning more accessible.</p>
        <ol class="learn-sequence">${steps.map((step) => `<li>${step}</li>`).join("")}</ol>
        <p class="section-note">This sequence is an editorial illustration of learning. It is not a scientific formula, a validated model, or a guaranteed process. A published resource is not presented as scientifically validated unless that has been established for that resource.</p>
      </div>
    </section>

    <section class="section section-sand" id="knowledge-domains" aria-labelledby="domains-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Knowledge domains")}
          <h2 id="domains-title">Explore knowledge domains.</h2>
          <p class="support">Five domains help a visitor look for a subject. They are navigation aids. They are separate from the nine dimensions of the Human Operating System™.</p>
        </div>
        <div class="domain-grid">${domainCards}</div>
        <p class="section-note">Choosing a domain filters this page. No domain has a published resource yet, so the library shows an empty state rather than a new page.</p>
      </div>
    </section>

    <section class="section" id="knowledge-formats" aria-labelledby="formats-title">
      <div class="container">
        <div class="section-head reading-block">
          <h2 id="formats-title">Explore ideas in the format that works for you.</h2>
          <p class="support">Read, watch, listen and explore. Different formats can offer different ways into the same subject.</p>
        </div>
        <div class="format-grid">${formats.map(([name, description]) => `<article><h3>${name}</h3><p>${description}</p></article>`).join("")}</div>
        <p class="section-note">These formats are descriptions of what the library can hold. None is a filter yet, because no resource in any format is published. Separate format pages are not linked.</p>
      </div>
    </section>

    <section class="section section-white" id="knowledge-levels" aria-labelledby="levels-title">
      <div class="container">
        <div class="section-head reading-block">
          <h2 id="levels-title">Every deeper understanding begins somewhere.</h2>
          <p class="support">Whether you are discovering an idea for the first time or exploring it in greater depth, begin with a question that matters to you.</p>
        </div>
        <div class="level-grid">${levels.map(([name, description, suitable]) => `<article class="approach-card"><h3>${name}</h3><p>${description}</p><p>${suitable}</p></article>`).join("")}</div>
        <p class="section-note">Discover, Learn, Practice and Explore Further are ways to choose a depth of reading. They are not levels of human development, measures of ability, certification tiers, or account permissions. No level has a published resource, so none of these cards is a link.</p>
      </div>
    </section>

    <section class="section" id="knowledge-featured" aria-labelledby="featured-title">
      <div class="container reading-block">
        <h2 id="featured-title">Ideas worth exploring.</h2>
        <p class="support">A selection of knowledge resources chosen for their relevance, clarity and value to ongoing learning.</p>
        ${featuredHtml}
      </div>
    </section>

    <section class="section section-white" id="knowledge-frameworks" aria-labelledby="frameworks-knowledge-title">
      <div class="container">
        <div class="section-head reading-block">
          <h2 id="frameworks-knowledge-title">Move from understanding to deeper exploration.</h2>
          <p class="support">A question about your life may connect to more than one area of knowledge. Explore related frameworks to see how ideas, patterns and practices can be understood in a wider context.</p>
        </div>
        <div class="relation-grid">
          <article>
            <h3>Human Operating System™</h3>
            <p>Explore nine interconnected dimensions of human life and consider how they relate to everyday experience, decisions and development.</p>
            ${textLink(depth, "human-operating-system/index.html", "Explore the Human Operating System™")}
          </article>
          <article>
            <h3>Life Decoding</h3>
            <p>Explore thoughts, experiences, recurring patterns and possible influences with curiosity, reflection and responsibility.</p>
            ${textLink(depth, "human-transformation/life-decoding/index.html", "Explore Life Decoding")}
          </article>
          <article>
            <h3>Human Transformation</h3>
            <p>Explore the broader process of awareness, understanding, alignment, practice, integration, contribution and legacy.</p>
            ${textLink(depth, "human-transformation/index.html", "Explore Human Transformation")}
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="knowledge-library" aria-labelledby="library-title" data-knowledge-library>
      <div class="container reading-block">
        <h2 id="library-title">Explore the knowledge library.</h2>
        <p class="support">Search the published library by a topic, question or idea. Nothing is published yet, so a search shows: No resources found for this search. Try a different word or explore one of the knowledge domains above.</p>
        <form class="knowledge-search" role="search" method="get" action="index.html#knowledge-library">
          <label for="knowledge-query">Search the Knowledge Hub</label>
          <input id="knowledge-query" name="q" type="search" placeholder="Search a topic, question or idea…" autocomplete="off">
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
        <p><a class="link-arrow" href="${url(depth, "knowledge/index.html")}#knowledge-library" data-knowledge-clear hidden>Clear filters</a></p>
        <div class="quiet-panel" id="knowledge-results" tabindex="-1" aria-live="polite">
          <h3 id="knowledge-result-title">No knowledge resource is published yet.</h3>
          <p id="knowledge-result-copy">Articles, guides, videos, podcasts, learning series and case studies will appear here only after they are reviewed and published.</p>
        </div>
        <script type="application/json" id="knowledge-data">${JSON.stringify(knowledgeResources)}</script>
      </div>
    </section>

    <section class="section section-white" id="knowledge-continue" aria-labelledby="continue-title">
      <div class="container">
        <div class="section-head reading-block">
          <h2 id="continue-title">Continue your exploration.</h2>
          <p class="support">Knowledge sits beside research, practice, community and the institution itself. Those pages exist. They do not yet list studies, programmes, or partnerships.</p>
        </div>
        <div class="continue-grid">
          <article>
            <h3>Research</h3>
            <p>Explore CureSoulLife's approach to inquiry, evidence, traditional knowledge and research resources.</p>
            ${textLink(depth, "research/index.html", "Explore Research")}
          </article>
          <article>
            <h3>Experiences</h3>
            <p>Explore the institutional approach to practices, programs, retreats and other experiences.</p>
            ${textLink(depth, "experiences/index.html", "Explore Experiences")}
          </article>
          <article>
            <h3>Community</h3>
            <p>Explore community-related information and participation pathways that are actually available.</p>
            ${textLink(depth, "community/index.html", "Explore Community")}
          </article>
          <article>
            <h3>CureSoulLife</h3>
            <p>Understand the institution, its purpose, philosophy and wider ecosystem.</p>
            ${textLink(depth, "curesoullife/index.html", "Discover CureSoulLife")}
          </article>
        </div>
      </div>
    </section>

    <section class="finale finale-plain cta-section cta-forest" id="knowledge-closing" aria-labelledby="knowledge-close-title">
      <div class="container">
        <div>
          ${eyebrow("Keep exploring")}
          <h2 id="knowledge-close-title">Let curiosity lead to deeper understanding.</h2>
          <div class="finale-copy">
            <p>Begin with a question that matters to you. Explore an idea, understand its context and discover where your learning may lead next.</p>
          </div>
        </div>
        <div class="cta-row">
          ${cta(depth, "human-transformation/index.html", "Discover Human Transformation", "btn btn-light")}
          ${cta(depth, "curesoullife/index.html", "Explore CureSoulLife", "btn btn-ghost-light")}
        </div>
      </div>
    </section>`;
}

const researchResources = [];

function researchPage(depth) {
  const p = pfx(depth);
  const areas = [
    ["Psychology and Human Behaviour", "Explore how thoughts, beliefs, habits, emotions and social contexts relate to human experience and behaviour.", ["Human behaviour", "Habit formation", "Identity and beliefs", "Emotional experience", "Attention and decision-making"], ""],
    ["Neuroscience and Human Development", "Explore relevant scientific perspectives on the brain, learning, attention, stress and human development.", ["Learning and memory", "Attention and awareness", "Stress and adaptation", "Brain and behaviour", "Human development across life stages"], "Scientific claims must be supported by relevant sources and must not imply that complex human experiences can be reduced to a single brain mechanism."],
    ["Sleep, Movement and Everyday Wellbeing", "Explore evidence relating to everyday behaviours and their relationship with physical and psychological wellbeing.", ["Sleep and rest", "Physical activity"], ""]
  ];
  const principles = [
    ["Intellectual Integrity", "Represent findings, sources and uncertainties honestly. Do not exaggerate conclusions or omit important limitations."],
    ["Respect for Evidence", "Give appropriate weight to the quality, relevance and limitations of available evidence."],
    ["Respect for Tradition", "Present traditional knowledge within its cultural, historical and philosophical context without automatically treating it as scientific proof."],
    ["Human Dignity", "Respect individual autonomy, cultural context, privacy and the complexity of human experience."],
    ["Continuous Learning", "Review and revise published material when meaningful new evidence or better interpretations become available."]
  ];
  const perspectives = [
    ["Modern Science", "Scientific research uses defined methods to investigate questions, test hypotheses and evaluate explanations. Its findings must be interpreted in light of study design, evidence quality, limitations and the wider body of research.", ["Peer-reviewed studies", "Systematic reviews and meta-analyses", "Relevant observational or experimental research", "Established scientific guidance", "Carefully sourced research summaries"], "Do not treat a single study as definitive proof of a broad claim."],
    ["Ancient Wisdom", "Traditional and philosophical knowledge can offer historical, ethical, contemplative and interpretive perspectives on human life. These ideas should be presented with attention to their origins, meanings and differences across traditions.", ["Classical texts", "Historical commentary", "Philosophical schools", "Traditional practices", "Contextual interpretations by qualified specialists"], "Do not assume that a traditional concept is scientifically confirmed simply because a modern term sounds similar."],
    ["Lived Human Experience", "Personal experiences, observations and case examples can help illustrate how people understand and respond to life. They can generate questions and reveal perspectives, but individual experiences do not automatically establish general causal claims.", ["Consented personal narratives", "Reflective case examples", "Clearly attributed practitioner observations", "Carefully contextualised community experiences"], "Do not present testimonials or individual stories as scientific proof or guaranteed outcomes."]
  ];
  const labels = [
    ["Research-Supported", "Use when a claim is supported by cited scientific research and the strength and limitations of the evidence are represented accurately."],
    ["Emerging Evidence", "Use when evidence or interpretation is still developing."],
    ["Traditional or Philosophical Perspective", "Use when material is presented within its relevant intellectual, cultural, historical or philosophical context."],
    ["Experiential or Observational Insight", "Use when material reflects experience or observation rather than establishing universal causal claims."],
    ["Conceptual Framework", "Use when a model is presented as a way of organising thought or inquiry rather than as an empirically validated scientific model."]
  ];
  const ethics = [
    ["Respect for Individuals", "Treat people with dignity and respect their autonomy, circumstances and boundaries."],
    ["Consent and Privacy", "Obtain appropriate informed consent where required. Protect personal information and do not publish identifiable stories or images without the necessary permission."],
    ["Accurate Attribution", "Credit original authors, researchers, texts and other sources appropriately."],
    ["Transparency", "Disclose relevant limitations, assumptions, funding or conflicts of interest where applicable."],
    ["Responsible Communication", "Do not exaggerate findings, make unsupported health claims or imply that participation in an activity guarantees transformation."],
    ["Appropriate Review", "Activities involving human participants, sensitive personal data or health-related research must undergo the appropriate legal, ethical and specialist review before they proceed."]
  ];
  const steps = [
    ["Identify the Question", "Define the human question or subject that needs to be understood."],
    ["Review Existing Knowledge", "Identify relevant sources, established findings, traditional perspectives and unanswered questions."],
    ["Evaluate the Evidence and Context", "Consider source quality, research methods, relevance, limitations and differences between perspectives."],
    ["Seek Appropriate Expertise", "Obtain subject-matter review when the topic, claims or potential impact require specialist input."],
    ["Develop the Resource", "Prepare a clear explanation, research summary or educational resource that accurately represents its sources."],
    ["Review and Approve", "Complete appropriate editorial, evidence, accessibility, consent and legal reviews before publication."],
    ["Publish and Revisit", "Publish approved material and revise it when meaningful new information or corrections warrant a change."]
  ];
  const publications = researchResources.length
    ? `<div class="resource-grid">${researchResources.map((item) => `<article><h3>${item.title}</h3><p>${item.summary}</p></article>`).join("")}</div>`
    : `<div class="quiet-panel"><h3>A growing body of work</h3><p>CureSoulLife is developing its approach to responsible knowledge and research communication. Publications will be presented here as they are prepared and reviewed.</p></div>`;

  return `
    <header class="page-hero institution-hero research-hero" id="research-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="${url(depth, "index.html")}">Home</a></li>
            <li aria-current="page">Research</li>
          </ol>
        </nav>
        <div class="page-hero-grid">
          <div>
            ${eyebrow("Research &amp; Evidence")}
            <h1>Curiosity opens questions. Integrity guides the search for understanding.</h1>
            <p class="lede">CureSoulLife explores questions about human life through Ancient Wisdom, Modern Science and lived human experience. Our approach emphasises thoughtful inquiry, transparent interpretation and respect for the difference between what is known, what is still being explored and what remains uncertain.</p>
            <div class="cta-row">
              <a class="btn btn-primary" href="#research-philosophy">Explore Our Approach${arrow}</a>
              <a class="btn btn-secondary" href="${url(depth, "knowledge/index.html")}">Explore Knowledge${arrow}</a>
            </div>
          </div>
          <figure class="page-hero-media">
            ${picture("eco-research", 1200, 800, "A footbridge through dense forest", { priority: true, lazy: false, prefix: p })}
          </figure>
        </div>
      </div>
    </header>

    <section class="section section-white" id="research-why" aria-labelledby="research-why-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("The need for inquiry")}
          <h2 id="research-why-title">Human questions deserve more than confident answers.</h2>
          <p class="support">Questions about human life often sit at the intersection of biology, psychology, behaviour, philosophy, culture and personal experience.</p>
          <p class="support">Some questions can be investigated through scientific methods. Others require historical understanding, philosophical inquiry or careful reflection on lived experience. Many benefit from more than one perspective, provided their differences are not overlooked.</p>
          <p class="support">At CureSoulLife, inquiry begins with curiosity and proceeds with responsibility. We aim to make knowledge more understandable, identify its limitations and remain open to revision when better information becomes available.</p>
        </div>
        <div class="relation-grid">
          <article><h3>Ask Better Questions</h3><p>Begin with meaningful human questions rather than predetermined conclusions.</p></article>
          <article><h3>Examine the Context</h3><p>Understand where an idea comes from, what supports it and where its limitations lie.</p></article>
          <article><h3>Remain Open to Revision</h3><p>Treat learning as an ongoing process rather than a search for unquestionable final answers.</p></article>
        </div>
        <p class="section-note">These three ideas explain an editorial attitude. They are not a validated research methodology.</p>
      </div>
    </section>

    <section class="section section-sand" id="research-philosophy" aria-labelledby="philosophy-title">
      <div class="container">
        <div class="section-head reading-block">
          <h2 id="philosophy-title">Respect knowledge. Examine claims. Keep learning.</h2>
          <p class="support">CureSoulLife recognises that humanity has developed many ways of exploring the nature of life and human experience.</p>
          <p class="support">Scientific inquiry, philosophical traditions, historical texts and lived experience can each contribute useful perspectives. Their methods, purposes and standards of validation are not identical.</p>
          <p class="support">Our responsibility is to represent each perspective fairly, make its context understandable and avoid presenting an interpretation as established fact when the available evidence does not justify that conclusion.</p>
          <p class="support">We do not ask people to accept ideas merely because they are ancient, modern, popular or associated with an authority. We encourage thoughtful exploration, transparent reasoning and the freedom to ask further questions.</p>
        </div>
        <div class="principle-grid">${principles.map(([name, detail], i) => `<article class="approach-card"><p class="domain-index">${String(i + 1).padStart(2, "0")}</p><h3>${name}</h3><p>${detail}</p></article>`).join("")}</div>
        <p class="section-note">These principles are CureSoulLife's own editorial commitments. They are not an external accreditation or a formal certification.</p>
      </div>
    </section>

    <section class="section section-white" id="research-areas" aria-labelledby="areas-title">
      <div class="container">
        <div class="section-head reading-block">
          <h2 id="areas-title">Exploring the interconnected dimensions of human life.</h2>
          <p class="support">Human life cannot always be understood through a single discipline. CureSoulLife's areas of inquiry reflect an interest in the connections between human biology, thought, emotion, behaviour, relationships, meaning and the environments in which people live.</p>
          <p class="support">The areas below describe our intellectual interests. They do not imply that every area currently has an active research project or a dedicated research team.</p>
        </div>
        <div class="inquiry-grid">${areas.map(([name, detail, themes, boundary]) => `
          <article>
            <h3>${name}</h3>
            <p>${detail}</p>
            <p class="domain-topics">${themes.join(" · ")}</p>
            ${boundary ? `<p class="claim-note">${boundary}</p>` : ""}
          </article>`).join("")}</div>
        <p class="section-note">A research area is an area of intellectual interest. It is not evidence of an active project, a dedicated research team, an established programme, or completed findings. No area links onward, because no dedicated research resource is published.</p>
      </div>
    </section>

    <section class="section" id="research-perspectives" aria-labelledby="perspectives-title">
      <div class="container">
        <div class="section-head reading-block">
          <h2 id="perspectives-title">Different perspectives. Clear distinctions. Responsible interpretation.</h2>
          <p class="support">Some questions benefit from examining more than one perspective. Our approach seeks to preserve the integrity of each perspective while making connections where they are meaningful and appropriately supported.</p>
        </div>
        <div class="relation-grid">${perspectives.map(([name, detail, materials, boundary]) => `
          <article>
            <h3>${name}</h3>
            <p>${detail}</p>
            <p class="domain-topics">${materials.join(" · ")}</p>
            <p class="claim-note">${boundary}</p>
          </article>`).join("")}</div>
        <p class="section-note">These perspectives can inform a question. They are not three equally validated forms of scientific evidence. Their relevance depends on the question being explored.</p>
      </div>
    </section>

    <section class="section section-midnight" id="research-evidence" aria-labelledby="evidence-title">
      <div class="container">
        <div class="section-head reading-block">
          <h2 id="evidence-title">What do we know, and how do we know it?</h2>
          <p class="support">A responsible explanation should help readers understand not only a conclusion, but also the reasoning and evidence behind it.</p>
          <p class="support">Where appropriate, CureSoulLife resources should identify relevant sources, distinguish findings from interpretations and make important limitations visible.</p>
        </div>
        <div class="evidence-grid">${labels.map(([name, detail]) => `<article><h3>${name}</h3><p>${detail}</p></article>`).join("")}</div>
        <p class="section-note">These labels describe the context and nature of a resource. They are not numerical evidence scores, external certifications, accreditation, or guarantees of correctness. A label is assigned by editorial review. It is not inferred from a title or a keyword, and no resource on this page carries one yet.</p>
      </div>
    </section>

    <section class="section" id="research-publications" aria-labelledby="publications-title">
      <div class="container reading-block">
        <h2 id="publications-title">Explore the work. Follow the evidence.</h2>
        <p class="support">Research becomes useful when its questions, sources, findings and limitations can be understood and examined. As CureSoulLife develops reviewed research summaries and publications, this space will make available material that meets the institution's publication standards.</p>
        ${publications}
      </div>
    </section>

    <section class="section section-sand" id="research-ethics" aria-labelledby="ethics-title">
      <div class="container">
        <div class="section-head reading-block">
          <h2 id="ethics-title">Trust depends on how knowledge is developed and shared.</h2>
          <p class="support">Research and educational work involving human experience carries responsibilities beyond accuracy alone. It requires respect for privacy, clear attribution, appropriate consent and honest communication about the limits of what has been learned.</p>
          <p class="support">CureSoulLife's research-related activities and publications should be guided by the following principles.</p>
        </div>
        <div class="ethics-grid">${ethics.map(([name, detail]) => `<article class="approach-card"><h3>${name}</h3><p>${detail}</p></article>`).join("")}</div>
        <p class="section-note">This page does not claim that CureSoulLife has an institutional ethics committee, clinical research approval, or formal research governance accreditation.</p>
      </div>
    </section>

    <section class="section section-white" id="research-process" aria-labelledby="process-research-title">
      <div class="container">
        <div class="section-head reading-block">
          <h2 id="process-research-title">A thoughtful process from question to publication.</h2>
        </div>
        <ol class="research-steps">${steps.map(([name, detail], i) => `<li><span class="journey-index">${String(i + 1).padStart(2, "0")}</span><h3>${name}</h3><p>${detail}</p></li>`).join("")}</ol>
        <p class="section-note">This sequence describes CureSoulLife's intended approach to developing research-informed educational resources. It does not imply that every stage is currently supported by a dedicated department or that every resource undergoes formal academic peer review.</p>
      </div>
    </section>

    <section class="section" id="research-collaboration" aria-labelledby="collaboration-title">
      <div class="container reading-block">
        <h2 id="collaboration-title">Good questions can bring different disciplines together.</h2>
        <p class="support">Understanding human life often requires more than one perspective. CureSoulLife welcomes thoughtful conversations with researchers, educators, practitioners and institutions whose work aligns with responsible inquiry, human dignity and a commitment to learning.</p>
        <p class="support">Potential areas of collaboration may include educational research, evidence-informed content, historical and philosophical inquiry, responsible interpretation of traditional practices and interdisciplinary exploration of human experience.</p>
        <p class="support">All proposed collaborations are subject to discussion, appropriate review and mutual agreement.</p>
        <p class="section-note">The contact page does not yet publish an address or an enquiry form, so a research subject cannot be preselected. Opening that page does not create a partnership.</p>
        <div class="cta-row">${cta(depth, "contact/index.html", "Discuss a Research Collaboration")}</div>
      </div>
    </section>

    <section class="finale finale-plain cta-section cta-forest" id="research-closing" aria-labelledby="research-close-title">
      <div class="container">
        <div>
          ${eyebrow("Continue exploring")}
          <h2 id="research-close-title">Keep curiosity open. Keep understanding honest.</h2>
          <div class="finale-copy">
            <p>Human questions rarely have only one useful perspective. Explore knowledge, examine its context and continue learning with openness to evidence, uncertainty and new understanding.</p>
          </div>
        </div>
        <div class="cta-row">
          ${cta(depth, "knowledge/index.html", "Explore Knowledge", "btn btn-light")}
          ${cta(depth, "human-transformation/index.html", "Explore Human Transformation", "btn btn-ghost-light")}
        </div>
      </div>
    </section>`;
}

const experienceOfferings = [];

function experiencesPage(depth) {
  const p = pfx(depth);
  const formats = [
    ["Guided Practices", "Structured opportunities to explore practices such as meditation, reflection, yoga-based movement or other suitable activities within a clearly explained context.", ["Guided meditation", "Reflective exercises", "Yoga-based practices", "Breath-awareness practices", "Guided relaxation or Yoga Nidra, where appropriately designed"], ["knowledge/index.html", "Explore Practices"], ""],
    ["Workshops", "Focused sessions that bring people together to explore a specific subject, learn a concept or participate in guided activities.", ["Self-awareness", "Human behaviour", "Emotional understanding", "Relationships and communication", "Purpose and values", "Conscious living"], null, "No workshop is published, so this card has no action."],
    ["Structured Programmes", "Learning experiences organised around a defined topic, duration and sequence of activities, with opportunities for reflection and practical application.", ["Short learning programmes", "Guided practice programmes", "Multi-day learning experiences", "Longer structured personal-development journeys"], null, "No programme is published, so this card has no action."],
    ["Retreats and Immersions", "Dedicated periods of guided learning, reflection and participation, often in a shared environment that allows people to step away from ordinary routines.", ["One-day retreats", "Multi-day retreats", "Themed immersive experiences", "Group reflection and practice sessions"], ["experiences/retreats/index.html", "Explore Retreats"], ""],
    ["Events and Shared Learning", "Opportunities to encounter ideas, hear different perspectives and participate in shared learning with others.", ["Public learning sessions", "Talks and discussions", "Community learning gatherings", "Special events and facilitated conversations"], ["community/index.html", "Explore Community"], ""]
  ];
  const principles = [
    ["Clear Purpose", "Every experience should explain what it is intended to explore and what participants can reasonably expect."],
    ["Thoughtful Facilitation", "Sessions should be planned and facilitated by people with appropriate skills and experience for the activities involved."],
    ["Respect for Individual Choice", "Participants should be able to ask questions, express boundaries and make informed decisions about their participation."],
    ["Connection to Everyday Life", "Where appropriate, experiences should offer opportunities to reflect on how learning may relate to daily routines, relationships and decisions."],
    ["Responsible Expectations", "Experiences may offer learning, reflection and meaningful personal insight. Individual responses vary, and specific outcomes must not be guaranteed."]
  ];
  const pathways = [
    ["Knowledge", "Learn about ideas, traditions and research that help explain human life.", "knowledge/index.html", "Explore Knowledge"],
    ["Human Operating System™", "Explore the interconnected dimensions of human life and how they relate to everyday experience.", "human-operating-system/index.html", "Explore the Human Operating System™"],
    ["Life Decoding", "Explore recurring patterns, personal experiences and possible influences with curiosity and responsibility.", "human-transformation/life-decoding/index.html", "Explore Life Decoding"],
    ["Human Transformation", "Explore the broader framework of awareness, understanding, alignment, practice, integration, contribution and legacy.", "human-transformation/index.html", "Explore Human Transformation"],
    ["Community", "Explore opportunities to connect, learn and contribute alongside others.", "community/index.html", "Explore Community"]
  ];
  const expects = ["Purpose and intended learning focus.", "Format and delivery mode.", "Duration.", "Date or schedule.", "Location or online participation details.", "Facilitator identity and relevant experience.", "Practical requirements.", "Accessibility considerations.", "Participation expectations and voluntary activities.", "Any important limitations or safety information.", "The appropriate enquiry or booking destination."];
  const sequence = ["Learn", "Explore", "Practise", "Reflect", "Integrate"];
  const listings = experienceOfferings.length
    ? `<div class="resource-grid">${experienceOfferings.map((item) => `<article><h3>${item.title}</h3><p>${item.summary}</p></article>`).join("")}</div>`
    : `<div class="quiet-panel"><h3>New experiences will be shared here as they are confirmed.</h3><p>In the meantime, explore CureSoulLife's knowledge resources and human transformation framework.</p><div class="cta-row">${cta(depth, "knowledge/index.html", "Explore Knowledge")}${cta(depth, "human-transformation/index.html", "Discover Human Transformation", "btn btn-secondary")}</div></div>`;

  return `
    <header class="page-hero institution-hero experience-hero" id="experiences-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="${url(depth, "index.html")}">Home</a></li>
            <li aria-current="page">Experiences</li>
          </ol>
        </nav>
        <div class="page-hero-grid">
          <div>
            ${eyebrow("CureSoulLife Experiences")}
            <h1>Some things are understood through knowledge. Others through experience.</h1>
            <p class="lede">CureSoulLife explores how understanding can become part of everyday life through guided practices, shared learning and immersive experiences. Each experience is designed with a clear purpose, thoughtful facilitation and respect for the individual journey.</p>
            <div class="cta-row">
              <a class="btn btn-primary" href="#experience-formats">Explore Experiences${arrow}</a>
              <a class="btn btn-secondary" href="${url(depth, "human-transformation/index.html")}">Explore Human Transformation${arrow}</a>
            </div>
          </div>
          <figure class="page-hero-media">
            ${picture("eco-experiences", 1200, 800, "A waterfall and footbridge in dense forest", { priority: true, lazy: false, prefix: p })}
          </figure>
        </div>
      </div>
    </header>

    <section class="section section-white" id="experiences-why" aria-labelledby="experiences-why-title">
      <div class="container reading-block">
        ${eyebrow("From knowledge to experience")}
        <h2 id="experiences-why-title">Understanding deepens when we engage with what we learn.</h2>
        <p class="support">Reading an idea can open a new perspective. Practising it, reflecting on it and exploring it in the context of everyday life may help us understand its relevance more deeply.</p>
        <p class="support">Experiences create opportunities to pause, ask questions, practise new approaches and learn alongside others. Their value lies not in promising a particular outcome, but in creating thoughtful conditions for exploration and learning.</p>
        <p class="support">At CureSoulLife, experiences are intended to connect knowledge with application while respecting the different needs, circumstances and choices of each person.</p>
        <ol class="learn-sequence">${sequence.map((step) => `<li>${step}</li>`).join("")}</ol>
        <p class="section-note">This is an illustrative learning pathway, not a guaranteed sequence or a measure of personal progress. People may move between these activities in different ways. The seven-stage Human Transformation Framework is described on its own page.</p>
        <div class="cta-row">${textLink(depth, "human-transformation/index.html", "Explore Human Transformation")}</div>
      </div>
    </section>

    <section class="section section-sand" id="experience-formats" aria-labelledby="formats-experience-title">
      <div class="container">
        <div class="section-head reading-block">
          <h2 id="formats-experience-title">Different ways to learn, practise and explore.</h2>
          <p class="support">An experience may be a short guided practice, a structured learning programme, a shared workshop or an immersive retreat. The appropriate format depends on the purpose, context and needs of the participants.</p>
        </div>
        <div class="experience-formats">${formats.map(([name, detail, themes, link, note], i) => `
          <article>
            <p class="domain-index">${String(i + 1).padStart(2, "0")}</p>
            <h3>${name}</h3>
            <p>${detail}</p>
            <p class="domain-topics">${themes.join(" · ")}</p>
            ${note ? `<p class="section-note">${note}</p>` : ""}
            ${link ? textLink(depth, link[0], link[1]) : ""}
          </article>`).join("")}</div>
        <p class="section-note">These formats explain kinds of experience. They are not a list of live sessions. A listed practice is not a current in-person service unless a published offering says so. Workshops and programmes have no action because no approved destination exists. No booking page on another site is linked.</p>
      </div>
    </section>

    <section class="section" id="experiences-available" aria-labelledby="available-title">
      <div class="container reading-block">
        <h2 id="available-title">Explore what is available.</h2>
        <p class="support">Discover published CureSoulLife experiences, including their purpose, format and practical details. Availability may change, so each listing should direct you to the most current information.</p>
        ${listings}
      </div>
    </section>

    <section class="section section-white" id="experiences-design" aria-labelledby="design-title">
      <div class="container">
        <div class="section-head reading-block">
          <h2 id="design-title">Thoughtfully designed. Clearly facilitated. Human-centred.</h2>
          <p class="support">A meaningful experience begins with a clear purpose and a thoughtful understanding of the people taking part.</p>
          <p class="support">CureSoulLife aims to design experiences that respect individual choice, communicate expectations clearly and connect learning with reflection and practical application.</p>
          <p class="support">The quality of an experience depends not only on its content, but also on its facilitation, environment, accessibility and the care with which participants are treated.</p>
        </div>
        <div class="principle-grid">${principles.map(([name, detail], i) => `<article class="approach-card"><p class="domain-index">${String(i + 1).padStart(2, "0")}</p><h3>${name}</h3><p>${detail}</p></article>`).join("")}</div>
        <p class="section-note">These principles guide how an experience should be designed. They are not an external certification, and they do not mean every experience is scientifically validated, clinically supervised, or delivered by a certified specialist.</p>
      </div>
    </section>

    <section class="section" id="experiences-ecosystem" aria-labelledby="ecosystem-title">
      <div class="container">
        <div class="section-head reading-block">
          <h2 id="ecosystem-title">Experience is one part of a wider journey.</h2>
          <p class="support">CureSoulLife brings together knowledge, reflection, practice and shared experience. Each part serves a different purpose, and together they create opportunities for ongoing learning.</p>
        </div>
        <div class="experience-formats">${pathways.map(([name, detail, route, label]) => `<article><h3>${name}</h3><p>${detail}</p>${textLink(depth, route, label)}</article>`).join("")}</div>
        <p class="section-note">These are related places to continue learning. They are not mandatory stages, and visiting a page does not measure personal progress.</p>
      </div>
    </section>

    <section class="section section-sand" id="experiences-expect" aria-labelledby="expect-title">
      <div class="container reading-block">
        <h2 id="expect-title">Know what you are choosing.</h2>
        <p class="support">Every experience should provide enough information for people to decide whether it is appropriate for them.</p>
        <p class="support">Before participating, visitors should be able to understand the purpose, format, duration, facilitator information where relevant, practical requirements and any important limitations.</p>
        <p class="support">When an experience is confirmed, the relevant details below should be published. Empty fields are not shown for an offering that does not exist.</p>
        <ul class="format-list">${expects.map((item) => `<li>${item}</li>`).join("")}</ul>
        <p class="support">Where an experience includes reflection, emotional expression, movement, meditation or group discussion, participation in personal sharing remains voluntary. People are not asked to disclose personal or traumatic experiences. The nature of activities should be communicated in advance where relevant. A person may pause or decline an activity.</p>
        <p class="support">An experience does not replace appropriate medical, psychological or other professional care. It does not guarantee emotional release, healing, awakening or transformation. This page does not claim formal clinical supervision or a safety accreditation.</p>
      </div>
    </section>

    <section class="section section-white" id="experiences-continue" aria-labelledby="continue-experience-title">
      <div class="container">
        <div class="section-head reading-block">
          <h2 id="continue-experience-title">Continue your exploration.</h2>
        </div>
        <div class="continue-grid">
          <article><h3>Knowledge</h3><p>Explore resources before choosing a practice or experience.</p>${textLink(depth, "knowledge/index.html", "Explore Knowledge")}</article>
          <article><h3>Research</h3><p>Understand how CureSoulLife approaches evidence, traditional knowledge and responsible interpretation.</p>${textLink(depth, "research/index.html", "Explore Research")}</article>
          <article><h3>Human Transformation</h3><p>Explore the broader transformation framework.</p>${textLink(depth, "human-transformation/index.html", "Explore Human Transformation")}</article>
          <article><h3>Community</h3><p>Explore community-related information and available ways to connect.</p>${textLink(depth, "community/index.html", "Explore Community")}</article>
        </div>
      </div>
    </section>

    <section class="finale finale-plain cta-section cta-forest" id="experiences-closing" aria-labelledby="experiences-close-title">
      <div class="container">
        <div>
          ${eyebrow("Your next step")}
          <h2 id="experiences-close-title">Begin with what you want to understand more deeply.</h2>
          <div class="finale-copy">
            <p>Explore an idea, discover a practice or learn about an experience that fits your interests and circumstances. Take your time, ask questions and choose the next step that feels appropriate for you.</p>
          </div>
        </div>
        <div class="cta-row">
          ${cta(depth, "knowledge/index.html", "Explore Knowledge", "btn btn-light")}
          ${cta(depth, "human-transformation/index.html", "Discover Human Transformation", "btn btn-ghost-light")}
        </div>
      </div>
    </section>`;
}

const retreatOfferings = [];

function retreatsPage(depth) {
  const p = pfx(depth);
  const includes = [
    ["Guided Practices", "Facilitated opportunities to explore a practice with clear instructions and appropriate guidance. The specific practice depends on the programme. Meditation, breath-awareness, or guided relaxation appear only when a confirmed retreat includes them."],
    ["Reflection and Journaling", "Time to notice experiences, consider questions and record personal reflections. Participants remain free to decide what they wish to write or share."],
    ["Learning and Exploration", "Sessions that introduce relevant concepts, frameworks or perspectives, and that leave room for questions and thoughtful discussion."],
    ["Movement and Embodied Awareness", "Where appropriate, gentle movement or another accessible activity may help participants engage in a way that suits the programme and their circumstances. Not every retreat includes yoga or physical activity."],
    ["Silence and Pause", "Quiet periods may create room for rest, observation and reflection. Silence is not a universal requirement unless a specific, approved programme explains its format and expectations."],
    ["Integration and Next Steps", "Where appropriate, participants may identify practical reflections or activities they wish to explore after the retreat. This page does not promise ongoing support, follow-up sessions, or a continuing community programme."]
  ];
  const stages = [
    ["Arrive", "Create space to settle into the environment, understand the programme and become familiar with the practical expectations."],
    ["Orient", "Clarify the purpose of the experience, the activities involved and the choices available to participants."],
    ["Explore", "Engage with guided practices, learning sessions or reflection relevant to the retreat's stated purpose."],
    ["Express", "Where appropriate, invite participants to reflect, journal, speak or engage with an activity. Sharing remains voluntary."],
    ["Witness", "Create space to notice thoughts, feelings, responses and insights without requiring a particular emotional or spiritual outcome."],
    ["Integrate", "Help participants identify realistic next steps, supportive practices and ways to bring useful insights into everyday life."],
    ["Continue", "Where a follow-up practice or community experience is genuinely available, explain how participants can continue learning after the retreat. No follow-up practice or continuing programme is published here."]
  ];
  const principles = [
    ["Clear Purpose", "Every retreat should explain what it is designed to explore and who may find it relevant."],
    ["Thoughtful Structure", "Sessions, breaks, meals, movement and reflection should fit the duration and intensity of the programme."],
    ["Respect for Individual Experience", "Participants may engage differently. No one should be required to share personal information, adopt a belief or demonstrate a particular emotional response."],
    ["Responsible Knowledge", "Scientific findings, traditional teachings, personal experiences and conceptual frameworks should be presented with appropriate context."],
    ["Participant Care", "The programme should explain practical requirements, accessibility considerations, relevant activity limitations and how participants can request support."],
    ["Everyday Integration", "Where appropriate, participants should leave with realistic reflection prompts or practices they can choose to continue."]
  ];
  const care = [
    ["Purpose and format", "Visitors should understand what the retreat is intended to explore and the types of activities involved."],
    ["Practical requirements", "A confirmed retreat should give verified information about duration, schedule, location, travel or accommodation, accessibility and anything participants may need. Unconfirmed logistics are not published on this page."],
    ["Participation and personal boundaries", "Participation should respect individual choice. Visitors are not pressured to disclose personal experiences, trauma, private information or emotional responses."],
    ["Facilitator information", "Relevant facilitator information is shown only when it has been verified and approved. This page does not name a facilitator or invent qualifications, credentials, years of experience or affiliations."],
    ["Physical and emotional considerations", "Where an activity has a relevant limitation, a confirmed programme should say so clearly and explain how a participant can ask for clarification or appropriate support. A retreat is not presented as suitable for everyone. This page does not yet offer a support form."],
    ["Expectations and outcomes", "Individual experiences differ. A retreat does not guarantee healing, emotional release, awakening, financial change, relationship outcomes or any predetermined transformation. It does not replace medical care, mental-health care or other appropriate professional support."],
    ["Privacy and consent", "Participant photographs, recordings, testimonials and personal stories require appropriate consent before publication. Public sharing is never a condition of participation. This page does not collect participant information and does not publish private participant data."]
  ];
  const prompts = [
    "What did I notice that I want to understand more clearly?",
    "Which idea or practice, if any, felt relevant to my life?",
    "What is one realistic next step I may choose to explore?",
    "What support or information would help me continue learning?"
  ];
  const cards = (items) => `<div class="retreat-cards">${items.map(([title, copy]) => `<article><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div>`;
  const listings = retreatOfferings.length
    ? `<div class="retreat-cards">${retreatOfferings.map((item) => `<article>
        <h3>${item.title}</h3>
        ${item.summary ? `<p>${item.summary}</p>` : ""}
        ${item.format ? `<p>Format: ${item.format}</p>` : ""}
        ${item.dates ? `<p>Dates: ${item.dates}</p>` : ""}
        ${item.location ? `<p>Location: ${item.location}</p>` : ""}
        ${item.status ? `<p>Status: ${item.status}</p>` : ""}
        ${item.href ? `<a class="link-arrow" href="${item.href}">${item.ctaLabel || "View retreat details"}${arrow}</a>` : ""}
      </article>`).join("")}</div>`
    : `<div class="quiet-panel"><h3>New retreat experiences will be shared here as they are confirmed.</h3><p>In the meantime, explore CureSoulLife's human transformation framework, knowledge resources and approach to lived experience.</p><div class="cta-row">${cta(depth, "human-transformation/index.html", "Explore Human Transformation")}${cta(depth, "experiences/index.html", "Explore All Experiences", "btn btn-secondary")}</div></div>`;

  return `
    <header class="page-hero institution-hero retreat-hero" id="retreats-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="${url(depth, "index.html")}">Home</a></li>
            <li><a href="${url(depth, "experiences/index.html")}">Experiences</a></li>
            <li aria-current="page">Retreats &amp; Immersive Experiences</li>
          </ol>
        </nav>
        <div class="page-hero-grid">
          <div>
            ${eyebrow("Retreats & immersive experiences")}
            <h1>A retreat is a pause. What you discover in that pause can stay with you.</h1>
            <p class="lede">A retreat creates space away from familiar routines to pause, reflect and explore what matters. Through thoughtfully structured practices, learning and reflection, an immersive experience can offer an opportunity to notice familiar patterns, consider new perspectives and identify meaningful next steps.</p>
            <p class="support">At CureSoulLife, retreats are approached as opportunities for learning and reflection—not as escapes from life or promises of a particular outcome.</p>
            <div class="cta-row">
              <a class="btn btn-primary" href="#retreat-approach">Explore the Retreat Approach${arrow}</a>
              <a class="btn btn-secondary" href="${url(depth, "experiences/index.html")}">Explore All Experiences${arrow}</a>
            </div>
          </div>
          <figure class="page-hero-media">
            ${picture("eco-community", 1200, 800, "A mountain lake with a wooden boathouse and forested slopes", { priority: true, lazy: false, prefix: p })}
          </figure>
        </div>
      </div>
    </header>

    <section class="section section-white" id="retreat-approach" aria-labelledby="retreat-approach-title">
      <div class="container">
        <div class="split">
          <div>
            ${eyebrow("A space to pause")}
            <h2 id="retreat-approach-title">Sometimes, understanding begins when we create space to notice.</h2>
            <p class="support">Everyday life asks us to respond, decide, work, care for others and keep moving. In that movement, it can become difficult to pause and observe the patterns shaping our thoughts, emotions, relationships and choices.</p>
            <p class="support">A retreat offers a different context: dedicated time to slow down, explore questions, engage with guided practices and reflect on what may be useful in everyday life.</p>
            <p class="support">Its value does not depend on a dramatic experience or a particular emotional response. It lies in the opportunity to pay attention, learn, reflect and decide what—if anything—we wish to carry forward.</p>
          </div>
          <figure class="split-media">
            ${picture("question-forest", 1600, 1066, "A sunlit path through tall trees", { lazy: true, prefix: p })}
          </figure>
        </div>
      </div>
    </section>

    <section class="section" id="retreat-includes" aria-labelledby="retreat-includes-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("The experience")}
          <h2 id="retreat-includes-title">A thoughtful experience is more than a schedule of activities.</h2>
          <p class="support">The structure of a retreat depends on its purpose, duration, context and participants. Depending on the approved programme, an experience may combine guided practices, learning, reflection, movement, silence and opportunities to integrate useful insights.</p>
        </div>
        ${cards(includes)}
      </div>
    </section>

    <section class="section section-white" id="retreat-journey" aria-labelledby="retreat-journey-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("From arrival to integration")}
          <h2 id="retreat-journey-title">A thoughtful journey, with room for each person to experience it differently.</h2>
          <p class="support">A retreat may be designed around a sequence of activities that helps participants orient themselves, explore relevant ideas, reflect on their experience and consider practical next steps. The sequence is a design framework, not a prescribed psychological process. People may engage with each stage differently.</p>
        </div>
        <ol class="retreat-journey">
          ${stages.map(([title, copy]) => `<li><h3>${title}</h3><p>${copy}</p></li>`).join("")}
        </ol>
        <p class="section-note">These stages are not a mandatory progression, a clinical protocol, a scientifically validated model or a guaranteed seven-step transformation.</p>
      </div>
    </section>

    <section class="section section-sand" id="retreat-design" aria-labelledby="retreat-design-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Our approach")}
          <h2 id="retreat-design-title">Designed with intention. Delivered with responsibility.</h2>
          <p class="support">A meaningful retreat requires more than an inspiring venue or a schedule of activities. Its purpose, facilitation, participant care and follow-through must work together.</p>
          <p class="support">CureSoulLife aims to design experiences around six principles.</p>
        </div>
        ${cards(principles)}
        <p class="section-note">These principles describe the intended approach. They are not a claim that every programme is clinically supervised, independently certified, scientifically validated or accredited.</p>
      </div>
    </section>

    <section class="section" id="available-retreats" aria-labelledby="available-retreats-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Currently available")}
          <h2 id="available-retreats-title">Explore confirmed retreat experiences.</h2>
          <p class="support">When a CureSoulLife retreat is confirmed for publication, this section provides a clear route to its current details. Review the purpose, format and practical information before deciding whether to participate.</p>
        </div>
        ${listings}
      </div>
    </section>

    <section class="section section-white" id="retreat-care" aria-labelledby="retreat-care-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Before you participate")}
          <h2 id="retreat-care-title">Know what you are choosing.</h2>
          <p class="support">Every experience should provide enough information for people to decide whether it is appropriate for them. Before participating, visitors should be able to understand the purpose, format, duration, facilitator information where relevant, practical requirements and any important limitations.</p>
        </div>
        ${cards(care)}
      </div>
    </section>

    <section class="section" id="retreat-return" aria-labelledby="retreat-return-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Beyond the retreat")}
          <h2 id="retreat-return-title">A meaningful pause should leave room for a more conscious return to everyday life.</h2>
          <p class="support">A retreat takes place within a limited period. The questions, perspectives or practices a person finds useful may continue to be explored after the experience.</p>
          <p class="support">Where appropriate, participants may choose to identify one or two realistic next steps, continue a personal reflection practice or revisit relevant CureSoulLife knowledge resources. The purpose is not to maintain a retreat-like state indefinitely, but to consider how useful insights might relate to ordinary routines, relationships, work and decisions.</p>
          <p class="support">The prompts below are examples, not mandatory assignments. This page does not provide a follow-up programme, daily reminders or personal progress tracking.</p>
        </div>
        <ul class="retreat-prompts">
          ${prompts.map((prompt) => `<li>${prompt}</li>`).join("")}
        </ul>
        <div class="cta-row">${cta(depth, "human-operating-system/index.html", "Explore the Human Operating System™")}</div>
      </div>
    </section>

    <section class="section section-white" id="retreat-connect" aria-labelledby="retreat-connect-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Part of a wider journey")}
          <h2 id="retreat-connect-title">Experience is one part of a wider journey of learning and transformation.</h2>
          <p class="support">CureSoulLife brings together knowledge, research, reflection, practice, experiences and community. Each has a different role. A retreat may offer a dedicated context for exploration, while other resources can help people continue learning in ways that suit their interests and circumstances. These pathways are not a mandatory sequence.</p>
        </div>
        <div class="retreat-cards">
          <article>
            <h3>Human Transformation</h3>
            <p>Explore the broader journey of awareness, understanding, alignment, practice, integration, contribution and legacy.</p>
            ${textLink(depth, "human-transformation/index.html", "Explore Human Transformation")}
          </article>
          <article>
            <h3>Human Operating System™</h3>
            <p>Explore nine interconnected dimensions of human life and the relationships between them.</p>
            ${textLink(depth, "human-operating-system/index.html", "Explore the Human Operating System™")}
          </article>
          <article>
            <h3>Life Decoding</h3>
            <p>Explore recurring patterns and lived experiences with curiosity, context and responsibility.</p>
            ${textLink(depth, "human-transformation/life-decoding/index.html", "Explore Life Decoding")}
          </article>
          <article>
            <h3>Knowledge and Research</h3>
            <p>Explore ideas, resources and different perspectives on human life, with appropriate context for evidence and uncertainty. Those pages do not yet list published articles or studies.</p>
            ${textLink(depth, "knowledge/index.html", "Explore Knowledge")}
            ${textLink(depth, "research/index.html", "Explore Research")}
          </article>
          <article>
            <h3>Community</h3>
            <p>Discover CureSoulLife's approach to shared learning, responsible exchange and contribution. The community page does not yet list partnerships.</p>
            ${textLink(depth, "community/index.html", "Explore Community")}
          </article>
        </div>
      </div>
    </section>

    <section class="finale finale-plain cta-section cta-forest" id="retreat-closing" aria-labelledby="retreat-close-title">
      <div class="container">
        <div>
          ${eyebrow("Your next step")}
          <h2 id="retreat-close-title">A pause can create space. What matters is what you choose to explore next.</h2>
          <div class="finale-copy">
            <p>You do not need to have every answer before you begin. Explore the ideas, questions and practices that feel relevant to you. Learn at your own pace, consider your options and choose an experience only when its purpose and practical details are clear.</p>
          </div>
        </div>
        <div class="cta-row">
          ${cta(depth, "experiences/index.html", "Explore All Experiences", "btn btn-light")}
          ${cta(depth, "human-transformation/index.html", "Explore Human Transformation", "btn btn-ghost-light")}
        </div>
      </div>
    </section>`;
}

const communityStories = [];

function communityPage(depth) {
  const p = pfx(depth);
  const principles = [
    ["Shared Learning", "Learning becomes richer when people can ask questions, exchange perspectives and explore ideas together. Shared learning should encourage curiosity rather than demand agreement."],
    ["Mutual Respect", "Every person deserves dignity and consideration. Differences in background, beliefs, experience and understanding should be approached with respect."],
    ["Responsible Freedom", "People should have room to question, reflect, disagree and make their own choices while respecting the dignity, privacy and boundaries of others."],
    ["Meaningful Contribution", "Community participation is not defined by visibility or popularity. Contribution may take many forms, according to a person's skills, time, interests and responsibilities."],
    ["Lifelong Belonging", "Learning and contribution can continue to change over time. A meaningful relationship with a community should allow people to participate differently as their lives and circumstances evolve."]
  ];
  const pillars = [
    ["Learn Together", "Educational content, reading groups, expert dialogues and structured learning opportunities can help people explore ideas collectively."],
    ["Practise Together", "Where suitable opportunities exist, shared practices or guided learning activities can help participants explore how knowledge relates to everyday life."],
    ["Reflect Together", "Thoughtful dialogue, reflective questions and active listening can make space for different experiences and interpretations."],
    ["Serve Together", "Volunteering and mission-aligned initiatives can create opportunities to contribute beyond individual development."],
    ["Grow Together", "Long-term learning, respectful relationships and mutual encouragement can help a community develop continuity over time."]
  ];
  const modes = [
    ["Explorer", "Discovers ideas and resources."],
    ["Learner", "Engages more deeply with educational material."],
    ["Practitioner", "Explores how learning may be applied in everyday life."],
    ["Contributor", "Offers time, knowledge or skills to a relevant community activity."],
    ["Facilitator or Mentor", "May support other learners when suitable preparation, experience, responsibilities and safeguards are in place."],
    ["Community Partner", "May collaborate with CureSoulLife through an agreed, mission-aligned relationship."]
  ];
  const standards = [
    ["Respectful Communication", "Engage with ideas and behaviour without attacking a person's dignity."],
    ["Intellectual Honesty", "Distinguish facts, interpretations, personal experiences, traditional teachings and unverified claims."],
    ["Constructive Disagreement", "Questions and disagreement are welcome when expressed without harassment, intimidation or deliberate humiliation."],
    ["Cultural Sensitivity", "Recognise differences in cultural background, tradition, language and personal experience."],
    ["Privacy and Consent", "Do not share another person's private information, personal story, image or recording without appropriate permission."],
    ["Responsible Sharing", "Avoid presenting personal experiences or opinions as universal truths, professional advice or guaranteed outcomes."],
    ["Safety and Boundaries", "Harassment, discrimination, coercion and exploitative behaviour are incompatible with the intended community culture."]
  ];
  const numbered = (items) => `<ol class="community-cards">${items.map(([title, copy]) => `<li><h3>${title}</h3><p>${copy}</p></li>`).join("")}</ol>`;
  const stories = communityStories.length
    ? `<div class="community-cards">${communityStories.map((item) => `<article><h3>${item.title}</h3>${item.summary ? `<p>${item.summary}</p>` : ""}</article>`).join("")}</div>`
    : `<p class="support">No community story is published yet. Reflections, interviews and participant stories will appear here only when they are genuine, consented and editorially approved.</p>`;

  return `
    <header class="page-hero institution-hero community-hero" id="community-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="${url(depth, "index.html")}">Home</a></li>
            <li aria-current="page">Community</li>
          </ol>
        </nav>
        <div class="page-hero-grid">
          <div>
            ${eyebrow("CureSoulLife Community")}
            <h1>Transformation is personal. Learning and contribution can be shared.</h1>
            <p class="lede">Human transformation begins within each person, but the ways we learn, relate and contribute can extend beyond the individual.</p>
            <p class="support">CureSoulLife's community vision is rooted in shared learning, mutual respect, responsible participation and meaningful contribution. It seeks to create opportunities for people to explore ideas together, exchange perspectives thoughtfully and contribute in ways that reflect their abilities, interests and circumstances.</p>
            <div class="cta-row">
              <a class="btn btn-primary" href="#participation-pathways">Explore Ways to Participate${arrow}</a>
              <a class="btn btn-secondary" href="${url(depth, "human-transformation/index.html")}">Explore Human Transformation${arrow}</a>
            </div>
          </div>
          <figure class="page-hero-media">
            ${picture("eco-network", 1200, 1800, "Layered mountain ridges in warm light", { priority: true, lazy: false, prefix: p })}
          </figure>
        </div>
      </div>
    </header>

    <section class="section section-white" id="community-why" aria-labelledby="community-why-title">
      <div class="container reading-block">
        ${eyebrow("Beyond individual learning")}
        <h2 id="community-why-title">What we learn individually can gain new meaning when we learn with others.</h2>
        <p class="support">Personal reflection and individual practice are important parts of human development. Yet many questions about life, relationships, work, meaning and responsibility are also explored through conversation, shared learning and different perspectives.</p>
        <p class="support">A thoughtful community can create space to ask questions, exchange ideas, listen carefully and consider how learning relates to everyday life. It can also offer opportunities to contribute knowledge, time or skills to something beyond individual development.</p>
        <p class="support">CureSoulLife approaches community as a shared purpose rather than a measure of popularity, membership size or social status. The emphasis is on how people learn, relate and contribute—not on how many people belong to a group.</p>
      </div>
    </section>

    <section class="section section-forest" id="community-principles" aria-labelledby="community-principles-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Our shared values")}
          <h2 id="community-principles-title">A community is defined by its shared purpose and the way people treat one another.</h2>
          <p class="support">CureSoulLife's community vision is guided by five principles. They describe the culture the institution seeks to nurture, not a claim that every community activity or digital space is already operational.</p>
        </div>
        ${numbered(principles).replace('class="community-cards"', 'class="community-cards community-five"')}
        <p class="section-note">These principles are not scores, membership benefits or certification criteria.</p>
      </div>
    </section>

    <section class="section" id="community-practice" aria-labelledby="community-practice-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Community in practice")}
          <h2 id="community-practice-title">A community is built through what people do together.</h2>
          <p class="support">The following pillars describe the kinds of participation that may shape CureSoulLife community activities. They are guiding principles, not a claim that every activity is currently operating.</p>
        </div>
        ${numbered(pillars).replace('class="community-cards"', 'class="community-cards community-five"')}
      </div>
    </section>

    <section class="section section-white" id="participation-pathways" aria-labelledby="participation-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Find your way to participate")}
          <h2 id="participation-title">There is more than one way to belong.</h2>
          <p class="support">Not everyone participates in the same way. Some people begin by exploring knowledge. Others engage more deeply with a framework, attend an experience, share their skills or help create opportunities for learning.</p>
          <p class="support">CureSoulLife aims to support different forms of participation as the institution and its community develop. These pathways are not membership tiers.</p>
        </div>
        <div class="community-cards community-five">
          <article>
            <h3>Explore</h3>
            <p class="community-for">For people beginning their journey.</p>
            <p>Discover CureSoulLife through articles, educational resources, videos, podcasts and the ideas that inform human transformation. The Knowledge page does not yet list published resources.</p>
            ${textLink(depth, "knowledge/index.html", "Explore Knowledge")}
          </article>
          <article>
            <h3>Learn</h3>
            <p class="community-for">For people who want to understand more deeply.</p>
            <p>Explore frameworks, research perspectives and educational resources related to human life, behaviour, awareness and transformation.</p>
            ${textLink(depth, "human-transformation/index.html", "Explore Human Transformation")}
          </article>
          <article>
            <h3>Experience</h3>
            <p class="community-for">For people interested in guided participation.</p>
            <p>Explore confirmed retreats, workshops, programmes and other structured experiences where these opportunities are available. Nothing on this card is open for registration.</p>
            ${textLink(depth, "experiences/index.html", "Explore Experiences")}
          </article>
          <article>
            <h3>Contribute</h3>
            <p class="community-for">For people who want to offer their time, knowledge or skills.</p>
            <p>Possible areas of contribution may include educational collaboration, translation, event support, research-related work, volunteering or other mission-aligned activities. This is an invitation to enquire, not a volunteer programme or a guaranteed role.</p>
            ${textLink(depth, "contact/index.html", "Explore Collaboration")}
          </article>
          <article>
            <h3>Collaborate</h3>
            <p class="community-for">For educators, researchers, facilitators and organisations.</p>
            <p>Explore the possibility of collaborating on knowledge, learning, research, responsible experiences or community initiatives that align with CureSoulLife's purpose. A partnership or accreditation relationship is not already in place.</p>
            ${textLink(depth, "contact/index.html", "Contact CureSoulLife")}
          </article>
        </div>
        <p class="section-note">The contact page does not yet publish an enquiry form. Opening it does not submit an application, create a membership or confirm a role.</p>
      </div>
    </section>

    <section class="section" id="community-modes" aria-labelledby="community-modes-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Participation over time")}
          <h2 id="community-modes-title">From personal curiosity to shared responsibility.</h2>
          <p class="support">As people learn, practise and contribute, their relationship with a community may change. CureSoulLife's long-term vision allows space for different forms of participation without treating them as ranks or guarantees of status.</p>
          <p class="support">The modes below are illustrative. People may move between them, participate in more than one way, or remain with any mode that suits their circumstances. Reading this page does not qualify a person to become a facilitator, mentor, representative or community leader. These are not current appointments.</p>
        </div>
        <div class="community-orbit" aria-hidden="true">
          <p>Participation</p>
          <ul>
            ${modes.map(([title], index) => `<li style="--i:${index}">${title}</li>`).join("")}
          </ul>
        </div>
        <div class="community-cards community-wide">
          ${modes.map(([title, copy]) => `<article><h3>${title}</h3><p>${copy}</p></article>`).join("")}
        </div>
        <p class="section-note">Contribution depends on willingness, suitability, responsibility and an agreed opportunity. It does not depend on popularity, and not every mode is currently available.</p>
      </div>
    </section>

    <section class="section section-white" id="community-standards" aria-labelledby="community-standards-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Respect, trust & responsibility")}
          <h2 id="community-standards-title">Belonging requires care and responsibility.</h2>
          <p class="support">A constructive community does not depend on everyone thinking alike. It depends on shared expectations about how people communicate, disagree, protect privacy and treat one another.</p>
          <p class="support">The following principles should guide CureSoulLife community activities and any future member spaces.</p>
        </div>
        ${numbered(standards).replace('class="community-cards"', 'class="community-cards community-wide"')}
        <p class="section-note">A moderated online group, recurring member circle or formal community programme is not operating here. This page does not claim a staffed moderation or safeguarding team, and it has no reporting button.</p>
      </div>
    </section>

    <section class="section section-sand" id="community-stories" aria-labelledby="community-stories-title">
      <div class="container reading-block">
        ${eyebrow("Human experiences, shared responsibly")}
        <h2 id="community-stories-title">Every human experience can offer a perspective.</h2>
        <p class="support">People often learn through stories, conversations and reflections on lived experience. When shared thoughtfully, these perspectives can help others ask questions, recognise different possibilities and understand that human lives are complex.</p>
        <p class="support">CureSoulLife aims to create space for responsible storytelling that preserves the dignity and agency of the people involved.</p>
        <p class="support">Personal stories can illustrate an experience. They should not automatically be treated as scientific evidence, proof of a method or a promise that another person will experience the same result.</p>
        ${stories}
        <div class="cta-row">${cta(depth, "knowledge/index.html", "Explore Knowledge")}</div>
      </div>
    </section>

    <section class="section section-white" id="community-events" aria-labelledby="community-events-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Learning through participation")}
          <h2 id="community-events-title">Shared learning can take many forms.</h2>
          <p class="support">Depending on the opportunities available, community participation may include learning sessions, thoughtful conversations, retreats, workshops, educational collaborations or mission-aligned initiatives.</p>
          <p class="support">The purpose is not to encourage participation for its own sake. It is to make relevant opportunities understandable so that people can decide whether they wish to take part. No community events page is published. Recurring gatherings, dates, venues and registration are not shown because none are confirmed.</p>
        </div>
        <div class="community-cards community-wide">
          <article>
            <h3>Knowledge and Learning</h3>
            <p>Explore educational resources and frameworks that help explain human life and transformation.</p>
            ${textLink(depth, "knowledge/index.html", "Explore Knowledge")}
          </article>
          <article>
            <h3>Experiences</h3>
            <p>Discover published retreats, programmes and other experiences where confirmed opportunities exist.</p>
            ${textLink(depth, "experiences/index.html", "Explore Experiences")}
          </article>
          <article>
            <h3>Retreats</h3>
            <p>Understand CureSoulLife's retreat approach and review confirmed retreat details where available.</p>
            ${textLink(depth, "experiences/retreats/index.html", "Explore Retreats")}
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="community-network" aria-labelledby="community-network-title">
      <div class="container reading-block">
        ${eyebrow("A wider shared purpose")}
        <h2 id="community-network-title">Local understanding. Shared purpose. Responsible collaboration.</h2>
        <p class="support">CureSoulLife's longer-term vision includes opportunities for people and organisations to contribute across different contexts, cultures and areas of expertise.</p>
        <p class="support">As the institution develops, potential forms of collaboration may include knowledge exchange, educational initiatives, research-related dialogue, responsible experiences and locally meaningful community activities.</p>
        <p class="support">Any collaboration should be based on shared purpose, clear responsibilities, mutual respect and accurate communication about the nature of the relationship. This page does not show operational centres, formal international partners, local chapters or a global membership network.</p>
        <div class="cta-row">
          ${cta(depth, "community/global-network/index.html", "Explore the Global Network")}
          ${cta(depth, "contact/index.html", "Discuss a Collaboration", "btn btn-secondary")}
        </div>
        <p class="section-note">Discussing a collaboration is an invitation to enquire. It is not acceptance, a partnership or a formal programme. The Global Network page holds the longer statement of that vision.</p>
      </div>
    </section>

    <section class="finale finale-plain cta-section cta-forest" id="community-closing" aria-labelledby="community-close-title">
      <div class="container">
        <div>
          ${eyebrow("Your place in the journey")}
          <h2 id="community-close-title">Belonging does not require you to be someone else.</h2>
          <div class="finale-copy">
            <p>Begin with curiosity. Learn at your own pace. Explore an experience when it feels relevant. Share what you can, when you choose to, and respect the different paths people may take.</p>
            <p>CureSoulLife's community vision is about creating space for learning, responsible participation and meaningful contribution—without pressure to conform or compete.</p>
          </div>
        </div>
        <div class="cta-row">
          ${cta(depth, "human-transformation/index.html", "Explore Human Transformation", "btn btn-light")}
          <a class="btn btn-ghost-light" href="#participation-pathways">Explore Ways to Participate${arrow}</a>
        </div>
      </div>
    </section>`;
}

const networkRecords = [];

function globalNetworkPage(depth) {
  const p = pfx(depth);
  const esc = (value) => value.replace(/&/g, "&amp;");
  const ideas = [
    ["Shared Purpose", "Connect around human transformation, learning and contribution rather than nationality or ideology."],
    ["Local Relevance", "Respect the language, cultural context, needs and practical realities of each community."],
    ["Responsible Collaboration", "Build relationships around clear expectations, mutual value and transparent responsibilities."]
  ];
  const nodes = [
    ["Digital Connection", "Public knowledge, educational resources, digital conversations and online learning opportunities can help people discover CureSoulLife from different locations.", "Share knowledge, explore ideas and participate in confirmed digital activities."],
    ["Local Learning Circles", "Small, locally organised gatherings may provide opportunities for dialogue, reflection, shared learning or suitable guided practices. A local circle should have a clear purpose, an accountable host and appropriate participant information before being announced as active.", "Create a meaningful local learning environment."],
    ["City & Regional Networks", "As relationships and activities develop, multiple local circles may connect through shared events, learning activities or collaboration.", "Coordinate learning and exchange across nearby communities."],
    ["National Communities", "A more established network may connect regional activities while adapting to the language, culture, governance and legal requirements of the relevant country.", "Support broader coordination and locally appropriate collaboration."],
    ["International Collaboration", "People and organisations in different countries may collaborate on knowledge, research, education, cultural exchange or other agreed initiatives.", "Extend shared learning and institutional collaboration across borders."]
  ];
  const areas = [
    ["Education & Lifelong Learning", "Schools, universities, educational institutions and learning organisations interested in human development, public education and lifelong learning."],
    ["Research & Knowledge", "Researchers, research organisations and subject-matter experts interested in responsible inquiry, knowledge synthesis or the exploration of human experience."],
    ["Human Development & Practice", "Qualified practitioners, educators and facilitators whose experience is relevant to appropriately designed learning or guided practices. Any health-related or specialist activity must remain within the provider's verified competence and applicable requirements."],
    ["Community & Social Impact", "Nonprofits, community organisations and social initiatives interested in learning, wellbeing education, public engagement or meaningful contribution."],
    ["Culture & Traditional Knowledge", "Cultural institutions and knowledgeable practitioners who can contribute contextually accurate perspectives on philosophical, contemplative or traditional knowledge. Traditional knowledge must not be presented as universally accepted scientific evidence."],
    ["Technology & Knowledge Infrastructure", "Organisations that may help improve access to educational resources, knowledge discovery, digital learning or accessible communication."]
  ];
  const steps = [
    ["Identify a Shared Purpose", "Clarify the learning need, intended audience, local context and the value the activity could create."],
    ["Find Suitable People", "Identify potential hosts, educators, practitioners or organisations with relevant experience, integrity and willingness to contribute. A conversation or expression of interest does not make someone an approved CureSoulLife representative."],
    ["Define the Activity", "Begin with a specific, manageable activity such as a learning dialogue, educational session or other suitable gathering. Clarify the purpose, responsibilities, practical arrangements and participant expectations."],
    ["Review and Learn", "Gather appropriate feedback, review what worked and identify changes needed before repeating or expanding the activity. Do not collect personal or sensitive information unnecessarily."],
    ["Formalise Only When Ready", "If a sustained relationship develops, define the relevant roles, responsibilities, use of the CureSoulLife name, communication rules and any necessary written agreement before describing it as a formal chapter or partnership."]
  ];
  const relationships = [
    ["Knowledge Contributor", "A person contributes an approved article, translation, educational perspective or other knowledge resource."],
    ["Event Collaborator", "An individual or organisation contributes to a specific, confirmed event or learning activity."],
    ["Institutional Collaborator", "Two parties explore or undertake a defined initiative under agreed expectations and responsibilities."],
    ["Local Learning Host", "A suitable person or organisation may host a recurring local activity after the purpose, responsibilities, permissions and use of the institutional identity have been agreed."],
    ["Formal Chapter or Network Representative", "This designation should be used only after a documented approval process and clear responsibilities are in place."]
  ];
  const principles = [
    ["Integrity", "Represent CureSoulLife, its work and its relationships accurately."],
    ["Mutual Respect", "Recognise cultural context, local expertise and differences in perspective."],
    ["Intellectual Honesty", "Distinguish evidence, interpretation, traditional knowledge and personal experience."],
    ["Clear Accountability", "Define who is responsible for activities, communication, participant care and decisions."],
    ["Privacy & Consent", "Handle personal information and participant stories with appropriate permission and care."],
    ["Responsible Representation", "Do not make unsupported claims about CureSoulLife, use its identity without permission or imply a formal affiliation that does not exist."],
    ["Local Responsibility", "Review relevant legal, cultural, professional and operational requirements before beginning an activity in a new location."],
    ["Shared Value", "Seek relationships that create a genuine and understandable benefit for the people and organisations involved."]
  ];
  const numbered = (items, extra = "") => `<ol class="community-cards${extra}">${items.map(([title, copy]) => `<li><h3>${esc(title)}</h3><p>${copy}</p></li>`).join("")}</ol>`;
  const plain = (items, extra = "") => `<div class="community-cards${extra}">${items.map(([title, copy]) => `<article><h3>${esc(title)}</h3><p>${copy}</p></article>`).join("")}</div>`;
  const presence = networkRecords.length
    ? `<div class="community-cards">${networkRecords.map((item) => `<article><h3>${esc(item.name)}</h3>${item.relationship ? `<p>${esc(item.relationship)}</p>` : ""}${item.summary ? `<p>${esc(item.summary)}</p>` : ""}</article>`).join("")}</div>`
    : `<div class="quiet-panel"><h3>Our network will grow through meaningful relationships.</h3><p>CureSoulLife is developing its approach to responsible collaboration. Public listings will be shared when relationships, responsibilities and permissions have been appropriately established.</p><div class="cta-row">${cta(depth, "contact/index.html", "Discuss a Collaboration")}</div></div>`;

  return `
    <header class="page-hero institution-hero network-hero" id="network-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="${url(depth, "index.html")}">Home</a></li>
            <li><a href="${url(depth, "community/index.html")}">Community</a></li>
            <li aria-current="page">Global Network</li>
          </ol>
        </nav>
        <div class="page-hero-grid">
          <div>
            ${eyebrow("Global Network")}
            <h1>A shared human purpose can travel across borders.</h1>
            <p class="lede">CureSoulLife envisions a global network connected by shared learning, responsible action and a commitment to human transformation.</p>
            <p class="support">Our ambition is to build this network thoughtfully—through genuine relationships, clear responsibilities and respect for the communities in which we work.</p>
            <p class="support">This is a long-term institutional aspiration. The forms of participation described on this page represent possibilities for responsible development, not a claim of established global presence.</p>
            <div class="cta-row">
              <a class="btn btn-primary" href="#global-network-vision">Explore the Global Network Vision${arrow}</a>
              <a class="btn btn-secondary" href="${url(depth, "contact/index.html")}">Discuss a Collaboration${arrow}</a>
            </div>
          </div>
          <figure class="page-hero-media">
            ${picture("institutional-hills", 1800, 1072, "Misted green hills in soft light", { priority: true, lazy: false, prefix: p })}
          </figure>
        </div>
      </div>
    </header>

    <section class="section section-white" id="network-why" aria-labelledby="network-why-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Shared human questions")}
          <h2 id="network-why-title">Human questions cross borders. Learning should, too.</h2>
          <p class="support">People across cultures encounter questions about meaning, relationships, work, wellbeing, identity and the way they live.</p>
          <p class="support">The traditions, environments and experiences through which people explore these questions may differ. That diversity can create opportunities to learn from one another—provided the exchange is respectful, contextual and open to critical inquiry.</p>
          <p class="support">CureSoulLife's global network vision is built around this possibility.</p>
          <p class="support">We aim to create connections through which knowledge can be explored, perspectives can be exchanged, responsible practices can be shared and people can contribute to a broader human purpose.</p>
          <p class="support">A global institution should not impose a single cultural template on every community. It should establish clear values while allowing local contexts to shape how learning and participation take place.</p>
        </div>
        ${plain(ideas, " community-wide")}
      </div>
    </section>

    <section class="section section-forest" id="global-network-vision" aria-labelledby="network-vision-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("A shared purpose, many possibilities")}
          <h2 id="network-vision-title">One institutional purpose. Many possible forms of participation.</h2>
          <p class="support">CureSoulLife's long-term network may develop through different forms of connection. These forms need not emerge simultaneously, and each should be established only when the necessary relationships, resources and responsibilities are in place.</p>
        </div>
        <div class="network-model" aria-hidden="true">
          <p>Shared purpose</p>
          <ul>
            ${nodes.map(([title], index) => `<li style="--i:${index}">${esc(title)}</li>`).join("")}
          </ul>
        </div>
        <p class="section-note">Conceptual network model. These forms of participation may develop at different times and are not a statement of current operational presence.</p>
        <ol class="community-cards">
          ${nodes.map(([title, copy, role]) => `<li><h3>${esc(title)}</h3><p>${copy}</p><p><strong>Possible role.</strong> ${role}</p></li>`).join("")}
        </ol>
      </div>
    </section>

    <section class="section" id="network-collaboration" aria-labelledby="network-collaboration-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Complementary knowledge. Shared responsibility.")}
          <h2 id="network-collaboration-title">Different expertise. A shared commitment to responsible learning.</h2>
          <p class="support">A global network becomes meaningful when people and organisations bring complementary knowledge, experience and capabilities to a shared purpose.</p>
          <p class="support">The following categories describe potential areas of collaboration. They are not a list of existing partners, and they do not mean CureSoulLife currently offers every listed activity.</p>
        </div>
        ${numbered(areas, " community-wide")}
      </div>
    </section>

    <section class="section section-white" id="network-develop" aria-labelledby="network-develop-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Build with purpose")}
          <h2 id="network-develop-title">Start with a meaningful local connection. Build from there.</h2>
          <p class="support">A network should not begin with a map or a public announcement. It should begin with a clear purpose, people who are willing to take responsibility and an activity that can be delivered well.</p>
          <p class="support">CureSoulLife's potential local-network model should therefore be developed gradually.</p>
        </div>
        ${numbered(steps)}
        <p class="section-note">This is a suggested development framework, not a promise that CureSoulLife currently operates a formal chapter-approval programme.</p>
      </div>
    </section>

    <section class="section section-sand" id="network-relationships" aria-labelledby="network-relationships-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Clear relationships")}
          <h2 id="network-relationships-title">Shared values must translate into clear responsibilities.</h2>
          <p class="support">Not every interested person or organisation needs the same relationship with CureSoulLife. A one-time event, a knowledge contribution, an ongoing collaboration and a formally recognised chapter are different arrangements.</p>
          <p class="support">The nature of each relationship should be clear to everyone involved.</p>
        </div>
        ${plain(relationships, " community-five")}
        <p class="section-note">These are proposed relationship types for future governance. They are not current membership categories, official titles or a partner accreditation system. Attending a programme, or having an informal conversation, does not mean CureSoulLife endorses a person's services.</p>
      </div>
    </section>

    <section class="section section-white" id="network-principles" aria-labelledby="network-principles-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Global in aspiration. Responsible in practice.")}
          <h2 id="network-principles-title">Trust is built through the way relationships are handled.</h2>
          <p class="support">A network can grow only if people can understand what it stands for and what they can expect from it.</p>
          <p class="support">Any future global relationship should be guided by the following principles.</p>
        </div>
        ${numbered(principles)}
        <p class="section-note">Before establishing a formal chapter, the institution should develop the required approval process, use-of-name policy, reporting structure, agreement templates and review procedures. Those documents and processes are not presented here as implemented.</p>
      </div>
    </section>

    <section class="section" id="network-presence" aria-labelledby="network-presence-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Present what is real")}
          <h2 id="network-presence-title">A network should be represented as it actually exists.</h2>
          <p class="support">CureSoulLife's global vision and its current operational relationships are not the same thing.</p>
          <p class="support">Any public listing of a location, chapter, centre or formally recognised relationship must reflect a real, verified arrangement and the permission to describe it publicly. A draft, proposed contact, expression of interest or informal conversation is not an active partnership.</p>
        </div>
        ${presence}
        <p class="section-note">The contact page does not yet publish an enquiry form. Opening it does not submit an enquiry or create a partnership.</p>
      </div>
    </section>

    <section class="section section-white" id="network-enquire" aria-labelledby="network-enquire-title">
      <div class="container reading-block">
        ${eyebrow("Start a conversation")}
        <h2 id="network-enquire-title">A thoughtful enquiry is the beginning of a conversation, not a promise of partnership.</h2>
        <p class="support">CureSoulLife is interested in exploring relationships with people and organisations whose knowledge, experience or purpose may complement its work.</p>
        <p class="support">Potential areas of discussion may include education, research, responsible knowledge communication, human development, community learning, technology and institutional collaboration.</p>
        <p class="support">Every proposed relationship requires appropriate discussion, evaluation and mutual clarity. Submitting an enquiry does not establish a partnership or imply institutional endorsement.</p>
        <p class="support">An enquiry is an opportunity to understand a possible area of shared interest. It is not an application for a franchise, licence, chapter, accreditation or official representative status. No response timeframe is published.</p>
        <div class="cta-row">${cta(depth, "contact/index.html", "Discuss a Collaboration")}</div>
        <p class="section-note">The contact page does not yet publish an enquiry form, so this link cannot preselect a category or confirm that a message was received.</p>
      </div>
    </section>

    <section class="section section-sand" id="network-continue" aria-labelledby="network-continue-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Explore the institution")}
          <h2 id="network-continue-title">A global network is one part of a wider human transformation ecosystem.</h2>
          <p class="support">CureSoulLife brings together human transformation, knowledge, research, experiences and community. Each has a distinct role in creating opportunities for learning, reflection, practice and contribution.</p>
        </div>
        <div class="community-cards community-wide">
          <article><h3>CureSoulLife</h3><p>Understand the institution, its purpose and its approach.</p>${textLink(depth, "curesoullife/index.html", "Explore CureSoulLife")}</article>
          <article><h3>Human Transformation</h3><p>Explore the broader journey of awareness, understanding, alignment, practice, integration and contribution.</p>${textLink(depth, "human-transformation/index.html", "Explore Human Transformation")}</article>
          <article><h3>Knowledge</h3><p>Explore educational resources and ideas, using only published and approved content. No knowledge resource is published yet.</p>${textLink(depth, "knowledge/index.html", "Explore Knowledge")}</article>
          <article><h3>Research</h3><p>Understand CureSoulLife's approach to evidence, interpretation and responsible inquiry.</p>${textLink(depth, "research/index.html", "Explore Research")}</article>
          <article><h3>Experiences</h3><p>Explore the institutional approach to guided practices, learning programmes and immersive experiences.</p>${textLink(depth, "experiences/index.html", "Explore Experiences")}</article>
          <article><h3>Community</h3><p>Discover the philosophy of shared learning, responsible participation and contribution.</p>${textLink(depth, "community/index.html", "Explore Community")}</article>
        </div>
      </div>
    </section>

    <section class="finale finale-plain cta-section cta-forest" id="network-closing" aria-labelledby="network-close-title">
      <div class="container">
        <div>
          ${eyebrow("Build through meaningful connection")}
          <h2 id="network-close-title">The strength of a network begins with the quality of its relationships.</h2>
          <div class="finale-copy">
            <p>CureSoulLife's global vision is not about establishing a presence everywhere at once. It is about creating the conditions for meaningful learning, responsible collaboration and locally relevant contribution to develop over time.</p>
            <p>If your work, knowledge or institutional purpose connects with this vision, we welcome a thoughtful conversation about the possibilities.</p>
            <p>Any future collaboration should begin with shared purpose, clear expectations and respect for the people and communities involved.</p>
          </div>
        </div>
        <div class="cta-row">
          ${cta(depth, "contact/index.html", "Discuss a Collaboration", "btn btn-light")}
          ${cta(depth, "community/index.html", "Explore the CureSoulLife Community", "btn btn-ghost-light")}
        </div>
      </div>
    </section>`;
}

function aboutPage(depth) {
  const p = pfx(depth);
  const esc = (value) => value.replace(/&/g, "&amp;");
  const challenges = [
    ["Knowledge Without Integration", "Information can be abundant while its relationship to everyday decisions remains unclear.", "CureSoulLife aims to connect learning with reflection, practical application and continued exploration."],
    ["Fragmented Perspectives", "Human life cannot always be understood through a single lens. Physical wellbeing, thoughts, emotions, relationships, work, meaning and consciousness can influence one another.", "CureSoulLife explores these connections while respecting the different forms of knowledge and evidence relevant to each domain."],
    ["Growth Without Continuity", "A moment of insight can be meaningful, but its practical value often depends on what happens afterwards.", "CureSoulLife seeks to connect learning with ongoing practice, integration and opportunities for contribution."]
  ];
  const philosophy = [
    ["Ancient Wisdom", "Explore philosophical, contemplative and traditional knowledge with respect for its history, context and original meaning. Traditional teachings should not automatically be presented as scientifically established findings.", "knowledge/index.html", "Explore Knowledge"],
    ["Modern Science", "Engage with scientific knowledge and research where relevant, while respecting evidence quality, uncertainty, changing interpretations and the limits of available findings. This does not mean every CureSoulLife framework has been scientifically validated.", "research/index.html", "Explore Research"],
    ["Human Experience", "Recognise lived experience as an important source of questions, reflection and understanding. Personal experience can offer valuable perspective, but it is not automatically proof of a universal claim.", "community/index.html", "Explore Community"],
    ["Practical Application", "Explore how ideas may relate to daily habits, decisions, relationships, work and personal reflection. Practice should be presented with appropriate context, realistic expectations and respect for individual differences.", "experiences/index.html", "Explore Experiences"],
    ["Lifelong Learning", "Treat understanding as an ongoing process. People should be able to ask questions, revise their views and continue learning without being required to accept a fixed doctrine.", null, null],
    ["Conscious Technology", "Use technology to improve access to knowledge, learning and collaboration. Technology should extend human capability, not replace human judgement, meaningful relationships or the responsibilities of institutions and practitioners.", null, null]
  ];
  const perspectives = [
    ["Ancient Wisdom", "Explore philosophical traditions and contemplative practices that have asked enduring questions about human life, awareness, conduct and meaning.", "knowledge/index.html", "Explore Knowledge"],
    ["Modern Science", "Engage with relevant research and contemporary disciplines to understand what evidence supports, what remains uncertain and what requires further investigation.", "research/index.html", "Explore Research"],
    ["Human Experience", "Recognise that individual lives, relationships, circumstances and cultures shape how people understand and experience change.", "community/index.html", "Explore Community"],
    ["Practical Application", "Explore how knowledge can inform reflection, habits, practices and everyday choices—and how those choices can be reviewed over time.", "experiences/index.html", "Explore Experiences"]
  ];
  const ecosystem = [
    ["Human Transformation", "Understanding the broader human journey.", "human-transformation/index.html", "Explore Human Transformation"],
    ["Human Operating System™", "Exploring interconnected dimensions of human life.", "human-operating-system/index.html", "Explore the Human Operating System™"],
    ["Knowledge", "Educational resources and ideas.", "knowledge/index.html", "Explore Knowledge"],
    ["Research", "Inquiry, evidence and responsible interpretation.", "research/index.html", "Explore Research"],
    ["Practices", "Exploring how understanding can inform action. There is no separate Practices page, and no programme is published.", null, null],
    ["Experiences", "Guided learning and immersive experiences.", "experiences/index.html", "Explore Experiences"],
    ["Community", "Shared learning, belonging and contribution.", "community/index.html", "Explore Community"]
  ];
  const audiences = [
    ["Individuals & Lifelong Learners", "People interested in self-understanding, practical learning and the exploration of human life."],
    ["Educators & Practitioners", "People whose work involves learning, development, facilitation or responsible practice."],
    ["Researchers & Knowledge Contributors", "People interested in inquiry, evidence, knowledge synthesis and the responsible communication of ideas."],
    ["Communities & Institutions", "Organisations interested in educational collaboration, public learning or initiatives aligned with human transformation."]
  ];
  const card = ([title, copy, route, label]) => `<article><h3>${esc(title)}</h3><p>${copy}</p>${route ? textLink(depth, route, label) : ""}</article>`;

  return `
    <header class="page-hero institution-hero about-hero" id="about-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="${url(depth, "index.html")}">Home</a></li>
            <li aria-current="page">About CureSoulLife</li>
          </ol>
        </nav>
        <div class="page-hero-grid">
          <div>
            ${eyebrow("About CureSoulLife")}
            <h1>A deeper understanding of being human can change the way we live.</h1>
            <p class="lede">CureSoulLife is a Human Transformation Institution exploring how people can understand themselves more deeply and live with greater awareness, balance, meaning and possibility.</p>
            <p class="support">We bring together Ancient Wisdom, Modern Science and lived human experience to create space for learning, practice, reflection and meaningful contribution.</p>
            <div class="cta-row">
              <a class="btn btn-primary" href="#vision">Explore Our Vision${arrow}</a>
              <a class="btn btn-secondary" href="${url(depth, "human-transformation/index.html")}">Discover Human Transformation${arrow}</a>
            </div>
          </div>
          <figure class="page-hero-media">
            ${picture("closing-horizon", 1800, 1196, "A ridge in warm light", { priority: true, lazy: false, prefix: p })}
          </figure>
        </div>
      </div>
    </header>

    <section class="section section-white" id="story" aria-labelledby="story-title">
      <div class="container">
        <div class="split">
          <div>
            ${eyebrow("The story")}
            <h2 id="story-title">It begins with a question.</h2>
            <p class="support">What does it mean to understand ourselves—not only as individuals with goals and responsibilities, but as human beings shaped by our bodies, thoughts, emotions, relationships, choices and sense of meaning?</p>
            <p class="support">Human life is complex. We learn about ourselves through experience, through the people around us, through the ideas we encounter and through the questions that stay with us.</p>
            <p class="support">Yet understanding can remain fragmented. Knowledge may stay theoretical. Insight may not become practice. Personal growth may remain disconnected from relationships, work, community and the wider world.</p>
            <p class="support">CureSoulLife begins with the possibility of bringing these dimensions into a more thoughtful conversation.</p>
            <p class="support">It seeks to create a living ecosystem where knowledge can inform practice, practice can deepen understanding, and individual learning can open pathways towards contribution.</p>
            <p class="support">The intention is not to tell people who they must become. It is to create conditions in which deeper understanding and meaningful transformation become possible.</p>
          </div>
          <figure class="split-media">
            ${picture("question-forest", 1600, 1066, "A sunlit path through tall trees", { lazy: true, prefix: p })}
          </figure>
        </div>
      </div>
    </section>

    <section class="section section-sand" id="why-we-exist" aria-labelledby="why-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Why we exist")}
          <h2 id="why-title">Because understanding should become part of how we live.</h2>
          <p class="support">Human transformation is not only about acquiring information or reaching a particular milestone. It can also involve developing awareness, understanding our patterns, making more considered choices and integrating learning into everyday life.</p>
          <p class="support">CureSoulLife exists to explore and support this wider process through education, responsible inquiry, practices, experiences and community.</p>
        </div>
        <div class="community-cards community-wide">
          ${challenges.map(([title, first, second]) => `<article><h3>${title}</h3><p>${first}</p><p>${second}</p></article>`).join("")}
        </div>
        <div class="reading-block">
          <p class="support">These are not problems CureSoulLife claims to have solved. They are questions and challenges that inform the institution’s work.</p>
          <p class="support">The institution’s role is to contribute through thoughtful frameworks, accessible knowledge, responsible practices and meaningful learning opportunities.</p>
        </div>
      </div>
    </section>

    <section class="section section-forest" id="mission" aria-labelledby="mission-title">
      <div class="container reading-block">
        <h2 id="mission-title">Our mission</h2>
        <p class="about-mission">To advance human transformation by bringing together Ancient Wisdom, Modern Science and lived human experience through knowledge, research, practical application and community.</p>
        <p class="support">Our mission is to help people explore themselves and their lives with greater awareness, understanding and responsibility.</p>
        <p class="support">We aim to make meaningful knowledge more accessible, encourage thoughtful practice, support lifelong learning and create opportunities for individual growth to connect with collective contribution.</p>
      </div>
    </section>

    <section class="section section-white" id="philosophy" aria-labelledby="philosophy-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Our philosophy")}
          <h2 id="philosophy-title">A philosophy built on openness, integration and responsibility.</h2>
          <p class="support">CureSoulLife does not seek to reduce human life to a single discipline, tradition or explanation.</p>
          <p class="support">Its philosophy brings different perspectives into conversation while asking what each can contribute, what its limitations are and how it may be applied responsibly.</p>
        </div>
        <ol class="community-cards community-wide">
          ${philosophy.map(([title, copy, route, label]) => `<li><h3>${title}</h3><p>${copy}</p>${route ? textLink(depth, route, label) : ""}</li>`).join("")}
        </ol>
        <p class="section-note">These principles are not badges, certifications or proof of institutional compliance.</p>
      </div>
    </section>

    <section class="section" id="vision" aria-labelledby="vision-title">
      <div class="container reading-block">
        ${eyebrow("Our vision")}
        <h2 id="vision-title">A world where human transformation becomes part of lifelong learning.</h2>
        <p class="about-vision">Our vision is a world in which understanding oneself, developing consciously and contributing meaningfully become as natural a part of life as formal education.</p>
        <p class="support">CureSoulLife seeks to contribute to a future in which human development is approached with curiosity, responsibility and continuity.</p>
        <p class="support">The vision is not to prescribe one way of living. It is to make space for people to understand themselves, explore relevant knowledge, practise what they learn and connect personal growth with meaningful contribution.</p>
        <p class="section-note">This section does not set dates, country targets or impact figures.</p>
      </div>
    </section>

    <section class="section section-white" id="values" aria-labelledby="values-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Our values")}
          <h2 id="values-title">Values matter when they guide decisions.</h2>
          <p class="support">CureSoulLife’s values are intended to guide the way the institution explores knowledge, communicates ideas, designs experiences and develops relationships.</p>
          <p class="support">They guide institutional development. They are not proof that every associated policy or process is already operational, and they are not an external certification.</p>
        </div>
        <ol class="community-cards">
          ${institutionalValues.map(([title, copy]) => `<li><h3>${title}</h3><p>${copy}</p></li>`).join("")}
        </ol>
      </div>
    </section>

    <section class="section section-sand" id="approach" aria-labelledby="approach-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("How we work")}
          <h2 id="approach-title">From thoughtful questions to meaningful application.</h2>
          <p class="support">CureSoulLife brings together different perspectives to explore human life with greater depth and responsibility.</p>
          <p class="support">Ancient Wisdom, Modern Science, Human Experience and Practical Application can each contribute something different. They should be explored in context, without treating them as interchangeable forms of evidence.</p>
        </div>
        <div class="community-cards about-four">
          ${perspectives.map(card).join("")}
        </div>
        <div class="reading-block">
          <p class="support">These are complementary sources of inquiry, not interchangeable forms of evidence.</p>
          <p class="support">CureSoulLife does not assume that every traditional claim is scientifically established or that every emerging scientific finding provides a complete explanation of human experience.</p>
          <p class="support">Our approach is guided by curiosity, integrity, evidence, compassion and a willingness to keep learning.</p>
        </div>
      </div>
    </section>

    <section class="section section-white" id="institutional-ecosystem" aria-labelledby="ecosystem-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("The institution")}
          <h2 id="ecosystem-title">One institution. Many connected ways to explore human transformation.</h2>
          <p class="support">CureSoulLife is being developed as a connected institutional ecosystem. Its areas of work have different roles, but they share a common purpose: to explore human transformation through knowledge, inquiry, practical learning and contribution.</p>
          <p class="support">This describes the institutional architecture. It does not mean every programme, research activity, department or service is currently operating.</p>
        </div>
        <div class="about-ecosystem" aria-hidden="true">
          <p>CureSoulLife</p>
          <ul>
            ${ecosystem.map(([title], index) => `<li style="--i:${index}">${esc(title)}</li>`).join("")}
          </ul>
        </div>
        <div class="community-cards community-wide">
          ${ecosystem.map(card).join("")}
        </div>
      </div>
    </section>

    <section class="section" id="who-we-serve" aria-labelledby="serve-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Who we serve")}
          <h2 id="serve-title">For people who want to understand, learn and contribute.</h2>
          <p class="support">CureSoulLife is intended for people at different stages of life and learning.</p>
          <p class="support">Some may arrive with a specific question. Others may be exploring human development more broadly. Some may be interested in educational resources; others may be drawn to guided practices, research or collaboration.</p>
          <p class="support">The institution should make room for different levels of familiarity, different backgrounds and different ways of participating.</p>
        </div>
        <div class="community-cards">
          ${audiences.map(([title, copy]) => `<article><h3>${esc(title)}</h3><p>${copy}</p></article>`).join("")}
        </div>
        <p class="section-note">CureSoulLife is not presented as suitable for every health condition, personal need or participant. A programme’s eligibility belongs on its own approved page. No application for a role or programme is offered here.</p>
      </div>
    </section>

    <section class="section section-white" id="long-term-vision" aria-labelledby="long-term-title">
      <div class="container reading-block">
        ${eyebrow("Long-term contribution")}
        <h2 id="long-term-title">Build something that can continue to serve.</h2>
        <p class="support">CureSoulLife’s long-term ambition is to become a trusted institution dedicated to human transformation.</p>
        <p class="support">That ambition requires more than visibility. It requires the gradual development of reliable knowledge resources, responsible practices, strong institutional systems, meaningful relationships and a culture of continued learning.</p>
        <p class="support">Over time, the institution hopes to make its resources accessible to more people, support appropriate educational and research collaborations, develop meaningful learning experiences and encourage forms of contribution that extend beyond the individual.</p>
        <p class="support">The future should be shaped by the quality of the institution’s work and the needs it can responsibly serve—not by expansion for its own sake.</p>
        <p class="section-note">This is an aspiration, not a current campus, laboratory, partner count or expansion schedule.</p>
        <div class="cta-row">${cta(depth, "community/global-network/index.html", "Explore Our Global Network Vision")}</div>
      </div>
    </section>

    <section class="section section-sand" id="transparency" aria-labelledby="transparency-title">
      <div class="container reading-block">
        ${eyebrow("Transparency")}
        <h2 id="transparency-title">Trust is built through what an institution does—and what it says honestly.</h2>
        <p class="support">CureSoulLife aims to communicate its work with clarity, intellectual honesty and respect for the people it serves.</p>
        <p class="support">The institution’s public descriptions should distinguish what is currently available, what is being developed and what remains a long-term aspiration.</p>
        <p class="support">Research-related statements should reflect the evidence and limitations relevant to the specific claim. Traditional knowledge, philosophical perspectives and lived experiences should be presented with appropriate context.</p>
        <p class="support">Relationships, credentials, publications, locations and activities should be represented only when they can be verified and appropriately described.</p>
        <p class="section-note">This is a commitment to honest description. It is not a claim that a formal certification, research approval, compliance audit or governance system already exists.</p>
      </div>
    </section>

    <section class="section section-white" id="founder-and-institution" aria-labelledby="founder-title">
      <div class="container reading-block">
        ${eyebrow("Founder and institution")}
        <h2 id="founder-title">An institutional vision that must grow beyond one individual.</h2>
        <p class="support">CureSoulLife has an initial vision and intellectual voice shaped by its founder. Its long-term credibility, however, must come from the quality of its knowledge, the integrity of its work and the contribution the institution is able to sustain over time.</p>
        <p class="support">The institution’s purpose is larger than a personal brand. It is being developed to support continued learning, responsible practice, meaningful experiences and collaboration.</p>
        <p class="support">Biography, personal background and the founder’s intellectual identity belong on the founder page. No founder photograph is published, and that story is not repeated here.</p>
        <div class="cta-row">${cta(depth, "about/founder/index.html", "Meet the Founder")}</div>
      </div>
    </section>

    <section class="section" id="continue-exploring" aria-labelledby="continue-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Continue exploring")}
          <h2 id="continue-title">Explore the ideas, frameworks and experiences behind the vision.</h2>
          <p class="support">There are different ways to begin exploring CureSoulLife. Follow a question, understand a framework, examine knowledge, learn about an experience or discover how people may participate.</p>
        </div>
        <div class="community-cards community-wide">
          <article><h3>Human Transformation</h3><p>Explore the broader journey of awareness, understanding, practice, integration and contribution.</p>${textLink(depth, "human-transformation/index.html", "Explore Human Transformation")}</article>
          <article><h3>Human Operating System™</h3><p>Explore the framework for understanding the interconnected dimensions of human life.</p>${textLink(depth, "human-operating-system/index.html", "Explore the Human Operating System™")}</article>
          <article><h3>Life Decoding</h3><p>Explore a reflective approach to understanding recurring patterns in lived experience.</p>${textLink(depth, "human-transformation/life-decoding/index.html", "Explore Life Decoding")}</article>
          <article><h3>Knowledge</h3><p>Explore educational resources and ideas. No knowledge resource is published yet.</p>${textLink(depth, "knowledge/index.html", "Explore Knowledge")}</article>
          <article><h3>Research</h3><p>Understand CureSoulLife’s approach to inquiry, evidence and responsible interpretation.</p>${textLink(depth, "research/index.html", "Explore Research")}</article>
          <article><h3>Experiences</h3><p>Explore the institutional approach to practices, programmes and immersive learning.</p>${textLink(depth, "experiences/index.html", "Explore Experiences")}</article>
          <article><h3>Community</h3><p>Discover the philosophy of shared learning and meaningful contribution.</p>${textLink(depth, "community/index.html", "Explore Community")}</article>
        </div>
      </div>
    </section>

    <section class="finale finale-plain cta-section cta-forest" id="final-invitation" aria-labelledby="final-title">
      <div class="container">
        <div>
          ${eyebrow("A shared human possibility")}
          <h2 id="final-title">The future of human transformation begins with the questions we choose to explore.</h2>
          <div class="finale-copy">
            <p>CureSoulLife is being built around a continuing inquiry into how people understand themselves, live with greater awareness and connect personal development with meaningful contribution.</p>
            <p>You can begin by exploring the institution’s ideas, learning about its frameworks, discovering knowledge resources or understanding the opportunities that are genuinely available.</p>
            <p>The journey does not require you to accept a fixed doctrine. It begins with curiosity, thoughtful exploration and the freedom to keep learning.</p>
          </div>
        </div>
        <div class="cta-row">
          ${cta(depth, "human-transformation/index.html", "Discover Human Transformation", "btn btn-light")}
          ${cta(depth, "contact/index.html", "Connect with CureSoulLife", "btn btn-ghost-light")}
        </div>
        <p class="section-note">The contact page does not yet publish an enquiry form. Opening it does not send a message.</p>
      </div>
    </section>`;
}

function founderPage(depth) {
  const esc = (value) => value.replace(/&/g, "&amp;");
  const questions = [
    "Why do people repeat patterns they wish to change?",
    "How do beliefs and interpretations influence the way we experience events?",
    "How might philosophical traditions help us ask better questions about modern life?",
    "Where can contemporary research offer useful understanding—and where should uncertainty remain visible?",
    "How can insight become a practice that a person can integrate into everyday life?"
  ];
  const decoding = [
    ["Observe", "Notice what is happening without rushing to explain it."],
    ["Describe", "Identify the recurring situation, response or interpretation as clearly as possible."],
    ["Explore", "Consider possible influences, context and alternative explanations."],
    ["Reconsider", "Ask whether the current interpretation is complete, useful or supported by available evidence."],
    ["Apply", "Where appropriate, test a small, realistic change in everyday life."],
    ["Reflect", "Review what was learned and what remains uncertain."]
  ];
  const contributions = [
    ["Vision & Institutional Architecture", "Help define the institution’s purpose, principles and long-term direction."],
    ["Knowledge & Framework Development", "Contribute to the conceptual development of Life Decoding, Inner Alchemy and related educational frameworks."],
    ["Media & Communication", "Use storytelling and content to make complex questions more accessible and invite thoughtful exploration."],
    ["Institution Building", "Help develop the systems, relationships, governance and capabilities needed for responsible long-term growth."]
  ];
  const principles = [
    ["Ask Better Questions", "Approach human experience with curiosity and a willingness to examine assumptions."],
    ["Respect Different Forms of Knowledge", "Explore traditional, philosophical, scientific and experiential perspectives with attention to their different contexts and limitations."],
    ["Distinguish Insight from Evidence", "A meaningful idea or personal experience does not automatically establish a universal truth. Claims should be presented with appropriate context."],
    ["Connect Understanding with Practice", "Where appropriate, explore how learning can inform daily choices, relationships, habits and responsibility."],
    ["Build for Long-Term Contribution", "Prefer the gradual development of trustworthy knowledge, useful systems and meaningful relationships over superficial growth or unsupported claims."]
  ];
  const numbered = (items) => `<ol class="community-cards">${items.map(([title, copy]) => `<li><h3>${esc(title)}</h3><p>${copy}</p></li>`).join("")}</ol>`;

  return `
    <header class="page-hero founder-hero" id="founder-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="${url(depth, "index.html")}">Home</a></li>
            <li><a href="${url(depth, "about/index.html")}">About</a></li>
            <li aria-current="page">Founder</li>
          </ol>
        </nav>
        <div class="founder-grid">
          <figure class="founder-figure">
            <div class="portrait-placeholder" role="img" aria-label="Placeholder for an approved photograph of Sarvesh Mishra. No portrait is shown.">
              <span class="portrait-mark" aria-hidden="true">SM</span>
              <p>An approved photograph has not been supplied. This monogram is not a portrait.</p>
            </div>
          </figure>
          <div>
            ${eyebrow("The founder")}
            <h1>Sarvesh Mishra</h1>
            <p class="founder-identity">Life Decoder <span aria-hidden="true">|</span> Inner Alchemy Architect</p>
            <p class="founder-role">Founder, CureSoulLife</p>
            <p class="founder-identity founder-identity-sub">Media, IP &amp; Wellness Entrepreneur</p>
            <p class="lede">Sarvesh Mishra is a media professional, content creator and entrepreneur whose work brings together storytelling, human behaviour, philosophical inquiry and the exploration of personal transformation.</p>
            <p class="support">Through CureSoulLife, he is working towards building an institution that connects Ancient Wisdom, Modern Science and lived human experience with knowledge, practices, learning and community.</p>
            <div class="cta-row">
              <a class="btn btn-primary" href="${url(depth, "curesoullife/index.html")}">Discover CureSoulLife${arrow}</a>
              <a class="btn btn-secondary" href="${url(depth, "human-transformation/index.html")}">Explore Human Transformation${arrow}</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="section section-white" id="founder-journey" aria-labelledby="journey-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Professional journey")}
          <h2 id="journey-title">A career in storytelling. A growing interest in the human story.</h2>
          <p class="support">Sarvesh Mishra’s professional journey began in journalism and media, where storytelling, reporting and the effort to understand people and events became part of his working life.</p>
          <p class="support">His experience across media environments helped shape an interest in how stories are told, how people interpret the world around them and how ideas influence decisions.</p>
          <p class="support">Over time, his work expanded towards content creation, entrepreneurship and the exploration of human behaviour, philosophy, self-understanding and conscious living.</p>
          <p class="support">CureSoulLife represents an effort to bring these interests into a more structured institutional direction—one that connects knowledge with practice and personal inquiry with a broader purpose.</p>
          <p class="section-note">The dates below are the periods named in the approved record. Gaps between them are not filled in, and they are not presented as one uninterrupted career. No awards or audience figures are added.</p>
        </div>
        <ol class="founder-timeline">
          <li>
            <p class="founder-when">2006–2007</p>
            <h3>Early Media Work</h3>
            <p>Swatantra Chetna — Writer</p>
          </li>
          <li>
            <p class="founder-when">2009–2010 · 2010–2011</p>
            <h3>Assignment Desk Experience</h3>
            <p>News24 — Trainee, Assignment Desk, 2009–2010.</p>
            <p>P7 News — Assistant Producer, Assignment Desk, 2010–2011.</p>
          </li>
          <li>
            <p class="founder-when">2011–2017</p>
            <h3>Field Reporting &amp; Journalism</h3>
            <p>Zee News — Principal Correspondent.</p>
            <p>His journalism experience included field reporting and coverage across multiple Indian states, including election-related reporting.</p>
          </li>
          <li>
            <h3>Media Entrepreneurship &amp; Content</h3>
            <p>Sarvesh subsequently developed his work across media production, digital content, podcasts and entrepreneurial ventures.</p>
            <p>His wider professional ecosystem includes Red Hot Media House and content properties such as The Sarvesh Mishra Show, The Inner Wealth and The Urban Sannyasi. No dates are published for this later period.</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="section section-sand" id="founder-questions" aria-labelledby="questions-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("The questions")}
          <h2 id="questions-title">The questions behind the work.</h2>
          <p class="support">Alongside his professional work in media and content, Sarvesh has developed a sustained interest in questions about human behaviour, identity, consciousness, relationships, purpose and the patterns that shape everyday life.</p>
        </div>
        <ul class="founder-questions">
          ${questions.map((question) => `<li>${question}</li>`).join("")}
        </ul>
        <div class="reading-block">
          <p class="support">These questions inform the direction of his work.</p>
          <p class="support">Rather than presenting one explanation as the answer to every human problem, his approach is to explore ideas, examine different perspectives and work towards frameworks that can help people reflect more clearly and make more considered choices.</p>
        </div>
      </div>
    </section>

    <section class="section section-white" id="founder-decoding" aria-labelledby="decoding-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Life Decoding")}
          <h2 id="decoding-title">Learning to observe the patterns of life.</h2>
          <p class="support">Life Decoding is the conceptual methodology associated with Sarvesh Mishra’s work.</p>
          <p class="support">It begins with a simple proposition: before attempting to change a recurring pattern, it can be useful to observe it, describe it, consider the influences that may be shaping it and examine alternative interpretations.</p>
          <p class="support">The process involves curiosity rather than immediate judgement.</p>
          <p class="support">It asks people to look at their thoughts, feelings, actions, routines, relationships and the meanings they assign to experience.</p>
          <p class="support">Life Decoding is intended to support reflection and self-understanding. It is not a clinical diagnostic method, a guaranteed solution to personal difficulties or a system that can predict the future.</p>
        </div>
        <p class="founder-sequence">Observe → Describe → Explore → Reconsider → Apply → Reflect</p>
        ${numbered(decoding).replace('class="community-cards"', 'class="community-cards community-wide"')}
        <p class="section-note">This sequence is an exploratory framework, not a validated clinical protocol or a promise of results. The full methodology lives on the Life Decoding page.</p>
        <div class="cta-row">${cta(depth, "human-transformation/life-decoding/index.html", "Explore the Life Decoding Framework")}</div>
      </div>
    </section>

    <section class="section" id="founder-alchemy" aria-labelledby="alchemy-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Inner Alchemy")}
          <h2 id="alchemy-title">From insight to lived change.</h2>
          <p class="support">Inner Alchemy describes the broader transformation philosophy associated with Sarvesh’s work.</p>
          <p class="support">Understanding a pattern can be an important beginning, but understanding alone does not guarantee change. Learning may need to be supported by practice, reflection, patience, responsibility and integration into daily life.</p>
          <p class="support">Inner Alchemy explores the relationship between these elements.</p>
          <p class="support">It is a philosophical and practical direction for developing work that connects awareness with action and personal insight with more considered ways of living.</p>
          <p class="support">It is not a promise of instant transformation, a claim that one method works for everyone, or a medical or scientific qualification.</p>
        </div>
        <p class="founder-sequence">Awareness → Understanding → Practice → Integration → Contribution</p>
        <p class="section-note">This sequence is a guiding concept, not a scientifically validated formula or a mandatory sequence for every person.</p>
        <div class="cta-row">${cta(depth, "human-transformation/index.html", "Explore Human Transformation")}</div>
      </div>
    </section>

    <section class="section section-white" id="founder-why" aria-labelledby="why-founder-title">
      <div class="container reading-block">
        ${eyebrow("Why CureSoulLife")}
        <h2 id="why-founder-title">From personal inquiry to an institutional purpose.</h2>
        <p class="support">Over time, Sarvesh’s interests in storytelling, human behaviour, philosophical inquiry and practical self-understanding led towards a larger question:</p>
        <p class="support">Could these areas of learning be brought together in an institution designed to help people explore human transformation throughout life?</p>
        <p class="support">CureSoulLife is his response to that question.</p>
        <p class="support">The intention is to create more than a collection of videos, programmes or individual experiences. It is to develop a connected ecosystem in which knowledge can inform practice, frameworks can support reflection, experiences can create opportunities for learning and community can encourage continuity and contribution.</p>
        <p class="support">The institution is being developed around the relationship between Ancient Wisdom, Modern Science and lived human experience.</p>
        <p class="support">These perspectives are not treated as interchangeable. Each requires context, and claims should be communicated according to the kind and quality of evidence available.</p>
        <p class="support">The long-term ambition is to build an institution whose credibility comes from the quality of its work, the responsibility of its practices and the usefulness of its contribution.</p>
        <blockquote class="founder-statement">
          <p>The goal is not to tell people who they must become. It is to create conditions in which deeper understanding and meaningful transformation become possible.</p>
          <footer>Sarvesh Mishra, Founder, CureSoulLife</footer>
        </blockquote>
        <p class="section-note">This is an approved institutional statement for this page. It is not presented as a quotation from an interview, speech or external publication.</p>
        <div class="cta-row">${cta(depth, "about/index.html", "Discover the CureSoulLife Vision")}</div>
      </div>
    </section>

    <section class="section section-sand" id="founder-role" aria-labelledby="role-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("The founder’s role")}
          <h2 id="role-title">Building the institution, not just the identity.</h2>
          <p class="support">As founder, Sarvesh’s role is to help shape the vision, conceptual architecture and direction of CureSoulLife.</p>
          <p class="support">His contribution includes connecting ideas, developing frameworks, creating and curating knowledge-led content, identifying useful questions and helping establish the principles that should guide the institution’s growth.</p>
          <p class="support">Over time, the ambition is for CureSoulLife to develop the people, systems, editorial standards, collaborations and institutional capabilities needed to operate beyond the daily involvement of any single individual.</p>
          <p class="support">The founder’s role is to provide direction and stewardship—not to become the only source of knowledge, authority or decision-making.</p>
        </div>
        ${numbered(contributions).replace('class="community-cards"', 'class="community-cards about-four"')}
        <p class="section-note">These are intended areas of contribution. They do not mean that departments, executives, advisory boards or research teams are already established.</p>
      </div>
    </section>

    <section class="section section-white" id="founder-relationship" aria-labelledby="relationship-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Founder and institution")}
          <h2 id="relationship-title">A founder gives an institution its beginning. Its work must earn its future.</h2>
          <p class="support">Sarvesh Mishra’s personal interests and philosophy helped shape the initial direction of CureSoulLife.</p>
          <p class="support">But the institution is intended to grow beyond a personal platform.</p>
          <p class="support">The founder’s public work may introduce questions, frameworks and ideas. CureSoulLife’s responsibility is to develop these within a broader institutional structure—through knowledge resources, careful interpretation, responsible practices, learning experiences and collaboration.</p>
          <p class="support">As the institution grows, its work should increasingly be supported by clear editorial standards, qualified contributors where appropriate, transparent responsibilities and systems that encourage learning and accountability.</p>
          <p class="support">Sarvesh Mishra contributes the founding vision and an identifiable intellectual voice. CureSoulLife provides the institutional structure through which the vision can be explored, developed, questioned and shared.</p>
          <p class="support">The institution’s credibility must ultimately rest on the integrity and quality of its work—not solely on the reputation of its founder. He does not replace relevant professional expertise, and not every part of the institution is fully operating.</p>
        </div>
        <ol class="founder-flow">
          <li><h3>Founder Vision &amp; Intellectual Contribution</h3></li>
          <li><h3>CureSoulLife Institutional Framework</h3></li>
          <li><h3>Knowledge · Research · Practices · Experiences · Community</h3></li>
          <li><h3>Learning, Integration &amp; Contribution</h3></li>
        </ol>
      </div>
    </section>

    <section class="section" id="founder-media" aria-labelledby="media-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Media and storytelling")}
          <h2 id="media-title">Making complex ideas accessible through communication.</h2>
          <p class="support">Media and storytelling remain important parts of Sarvesh Mishra’s professional background.</p>
          <p class="support">Through interviews, conversations and educational content, ideas can reach people in accessible forms and create opportunities for further exploration.</p>
          <p class="support">His content ecosystem spans different editorial purposes: conversations with people and ideas, practical exploration of personal growth, and philosophical inquiry into consciousness, identity and human life.</p>
          <p class="support">These platforms can help introduce questions and direct interested audiences towards deeper learning.</p>
          <p class="support">CureSoulLife, however, has a distinct institutional purpose. It is not simply another content channel; it is intended to connect learning with frameworks, practice, experience and community. These properties are not departments of the institution.</p>
        </div>
        <div class="community-cards about-four">
          <article><h3>The Sarvesh Mishra Show</h3><p>Long-form conversations exploring people, ideas, work, behaviour and lived experience.</p></article>
          <article><h3>The Inner Wealth</h3><p>Content exploring personal growth, psychology, human behaviour, emotions, relationships and everyday life.</p></article>
          <article><h3>The Urban Sannyasi</h3><p>Content exploring Ancient Wisdom, philosophy, Vedanta, consciousness and questions of meaning.</p></article>
          <article><h3>CureSoulLife</h3><p>The institutional platform for human transformation, knowledge, practices, experiences and community as these become available.</p>${textLink(depth, "curesoullife/index.html", "Discover CureSoulLife")}</article>
        </div>
        <p class="section-note">No verified address is published for The Sarvesh Mishra Show, The Inner Wealth, The Urban Sannyasi or Red Hot Media House, so those names are not linked. No subscriber count is shown.</p>
      </div>
    </section>

    <section class="section section-white" id="founder-principles" aria-labelledby="principles-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Guiding principles")}
          <h2 id="principles-title">Curiosity before certainty. Responsibility before claims. Practice beyond theory.</h2>
        </div>
        ${numbered(principles)}
        <p class="section-note">These principles are associated with the founder’s work. They do not rename CureSoulLife’s institutional values, and they are not evidence that every future policy or process is already implemented.</p>
      </div>
    </section>

    <section class="section section-sand" id="founder-vision" aria-labelledby="founder-vision-title">
      <div class="container reading-block">
        ${eyebrow("A longer view")}
        <h2 id="founder-vision-title">From an individual vision to an enduring institution.</h2>
        <p class="support">Sarvesh Mishra’s long-term ambition is to help build CureSoulLife into a trusted institution dedicated to human transformation.</p>
        <p class="support">That ambition includes the development of accessible knowledge, thoughtful educational frameworks, responsible practices, meaningful experiences and opportunities for collaboration.</p>
        <p class="support">The future may also involve broader research partnerships, digital learning platforms, community initiatives and physical experiences, depending on what can be developed responsibly and sustained over time.</p>
        <p class="support">These are directions for future development, not claims that every component currently exists.</p>
        <p class="support">The goal is not simply to build a larger brand. It is to develop an institution whose knowledge, systems and contribution can continue to evolve beyond the founder’s individual presence.</p>
        <p class="founder-close-line">The measure of institution building is not how much depends on the founder, but how much meaningful work can continue because the right foundations were built.</p>
      </div>
    </section>

    <section class="section section-white" id="founder-explore" aria-labelledby="explore-title">
      <div class="container">
        <div class="section-head reading-block">
          ${eyebrow("Further exploration")}
          <h2 id="explore-title">Explore the work and the ideas.</h2>
        </div>
        <div class="community-cards community-wide">
          <article><h3>CureSoulLife</h3><p>Discover the institution, its purpose and its ecosystem.</p>${textLink(depth, "curesoullife/index.html", "Discover CureSoulLife")}</article>
          <article><h3>Human Transformation</h3><p>Explore the broader process of awareness, understanding, practice, integration and contribution.</p>${textLink(depth, "human-transformation/index.html", "Explore Human Transformation")}</article>
          <article><h3>Life Decoding</h3><p>Explore the conceptual methodology for observing and reflecting on personal patterns.</p>${textLink(depth, "human-transformation/life-decoding/index.html", "Explore Life Decoding")}</article>
          <article><h3>Human Operating System™</h3><p>Explore the nine interconnected dimensions of human life.</p>${textLink(depth, "human-operating-system/index.html", "Explore the Human Operating System™")}</article>
          <article><h3>Knowledge</h3><p>Explore educational resources and ideas related to human transformation. No knowledge resource is published yet.</p>${textLink(depth, "knowledge/index.html", "Explore Knowledge")}</article>
          <article><h3>Contact</h3><p>For relevant speaking, media, institutional or collaboration enquiries. The contact page does not yet publish an enquiry form, so opening it does not send a message.</p>${textLink(depth, "contact/index.html", "Contact CureSoulLife")}</article>
        </div>
      </div>
    </section>

    <section class="section" id="founder-note" aria-labelledby="note-title">
      <div class="container reading-block">
        ${eyebrow("Founder note")}
        <h2 id="note-title">A note from the founder</h2>
        <p class="support">A personal note from Sarvesh Mishra is not published on this page. It will appear only after he has reviewed and approved the wording.</p>
      </div>
    </section>

    <section class="finale finale-plain cta-section cta-forest" id="founder-closing" aria-labelledby="founder-close-title">
      <div class="container">
        <div>
          ${eyebrow("Continue")}
          <h2 id="founder-close-title">Explore the questions. Help build the possibility.</h2>
          <div class="finale-copy">
            <p>CureSoulLife is being developed around a shared human question: how can we understand ourselves more deeply and translate that understanding into more conscious ways of living?</p>
            <p>If that question resonates with you, begin by exploring the institution, its frameworks and the knowledge it is developing.</p>
          </div>
        </div>
        <div class="cta-row">
          ${cta(depth, "curesoullife/index.html", "Discover CureSoulLife", "btn btn-light")}
          ${cta(depth, "human-transformation/index.html", "Explore Human Transformation", "btn btn-ghost-light")}
        </div>
        <p class="founder-enquiry">${textLink(depth, "contact/index.html", "For institutional or media enquiries, contact us.")}</p>
      </div>
    </section>`;
}

const pages = [
  {
    file: "index.html",
    depth: 0,
    current: "",
    title: "CureSoulLife — A deeper way to understand being human",
    description: "CureSoulLife is a Human Transformation Institution exploring awareness, balance, meaning and possibility through ancient wisdom, modern science and lived human experience.",
    head: `  <link rel="canonical" href="https://curesoullife.org/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="CureSoulLife">
  <meta property="og:title" content="CureSoulLife — A deeper way to understand being human">
  <meta property="og:description" content="CureSoulLife is a Human Transformation Institution exploring awareness, balance, meaning and possibility through ancient wisdom, modern science and lived human experience.">
  <meta property="og:url" content="https://curesoullife.org/">`,
    body: home()
  },
  {
    file: "curesoullife/index.html",
    depth: 1,
    current: "curesoullife",
    title: "CureSoulLife | Human Transformation Institution",
    description: "Discover CureSoulLife, a Human Transformation Institution bringing together Ancient Wisdom, Modern Science and lived human experience through knowledge, frameworks and meaningful practice.",
    head: `  <link rel="canonical" href="https://curesoullife.org/curesoullife">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="CureSoulLife">
  <meta property="og:title" content="CureSoulLife | Human Transformation Institution">
  <meta property="og:description" content="Discover CureSoulLife, a Human Transformation Institution bringing together Ancient Wisdom, Modern Science and lived human experience through knowledge, frameworks and meaningful practice.">
  <meta property="og:url" content="https://curesoullife.org/curesoullife">`,
    body: institutionPage(1)
  },
  {
    file: "human-transformation/index.html",
    depth: 1,
    current: "transformation",
    title: "Human Transformation | CureSoulLife",
    description: "Explore human transformation as a lifelong journey of awareness, understanding, practice and contribution through Ancient Wisdom, Modern Science and lived experience.",
    head: `  <link rel="canonical" href="https://curesoullife.org/human-transformation">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="CureSoulLife">
  <meta property="og:title" content="Human Transformation | CureSoulLife">
  <meta property="og:description" content="Explore human transformation as a lifelong journey of awareness, understanding, practice and contribution through Ancient Wisdom, Modern Science and lived experience.">
  <meta property="og:url" content="https://curesoullife.org/human-transformation">`,
    body: humanTransformationPage(1)
  },
  {
    file: "human-operating-system/index.html",
    depth: 1,
    current: "hos",
    title: "Human Operating System™ | Nine Dimensions of Human Life — CureSoulLife",
    description: "Explore CureSoulLife's Human Operating System™ framework, including nine dimensions of human life, seven alignment principles and a practical approach to lifelong development.",
    head: `  <link rel="canonical" href="https://curesoullife.org/human-operating-system">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="CureSoulLife">
  <meta property="og:title" content="Human Operating System™ | Nine Dimensions of Human Life — CureSoulLife">
  <meta property="og:description" content="Explore CureSoulLife's Human Operating System™ framework, including nine dimensions of human life, seven alignment principles and a practical approach to lifelong development.">
  <meta property="og:url" content="https://curesoullife.org/human-operating-system">`,
    body: hosPage(1)
  },
  {
    file: "knowledge/index.html",
    depth: 1,
    current: "knowledge",
    title: "Human Transformation Knowledge Hub | CureSoulLife",
    description: "Explore knowledge about human behaviour, wellbeing, inner development, relationships and conscious living through CureSoulLife's educational resources, research and practical learning.",
    head: `  <link rel="canonical" href="https://curesoullife.org/knowledge">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="CureSoulLife">
  <meta property="og:title" content="Human Transformation Knowledge Hub | CureSoulLife">
  <meta property="og:description" content="Explore knowledge about human behaviour, wellbeing, inner development, relationships and conscious living through CureSoulLife's educational resources, research and practical learning.">
  <meta property="og:url" content="https://curesoullife.org/knowledge">`,
    body: knowledgePage(1)
  },
  {
    file: "research/index.html",
    depth: 1,
    current: "research",
    title: "Research &amp; Evidence | CureSoulLife",
    description: "Explore CureSoulLife's approach to research, Ancient Wisdom, Modern Science and responsible knowledge about human transformation, including evidence, limitations and ethical principles.",
    head: `  <link rel="canonical" href="https://curesoullife.org/research">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="CureSoulLife">
  <meta property="og:title" content="Research &amp; Evidence | CureSoulLife">
  <meta property="og:description" content="Explore CureSoulLife's approach to research, Ancient Wisdom, Modern Science and responsible knowledge about human transformation, including evidence, limitations and ethical principles.">
  <meta property="og:url" content="https://curesoullife.org/research">`,
    body: researchPage(1)
  },
  {
    file: "experiences/index.html",
    depth: 1,
    current: "experiences",
    title: "Human Transformation Experiences | CureSoulLife",
    description: "Explore CureSoulLife's approach to guided practices, workshops, learning programmes and retreats designed to connect knowledge with lived human experience.",
    head: `  <link rel="canonical" href="https://curesoullife.org/experiences">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="CureSoulLife">
  <meta property="og:title" content="Human Transformation Experiences | CureSoulLife">
  <meta property="og:description" content="Explore CureSoulLife's approach to guided practices, workshops, learning programmes and retreats designed to connect knowledge with lived human experience.">
  <meta property="og:url" content="https://curesoullife.org/experiences">`,
    body: experiencesPage(1)
  },
  {
    file: "community/index.html",
    depth: 1,
    current: "community",
    title: "CureSoulLife Community | Learning, Practice &amp; Contribution",
    description: "Discover CureSoulLife's community philosophy and explore ways to learn, participate, collaborate and contribute to human transformation.",
    head: `  <link rel="canonical" href="https://curesoullife.org/community">
  <meta property="og:type" content="website">
  <meta property="og:title" content="CureSoulLife Community | Learning, Practice &amp; Contribution">
  <meta property="og:description" content="Discover CureSoulLife's community philosophy and explore ways to learn, participate, collaborate and contribute to human transformation.">
  <meta property="og:url" content="https://curesoullife.org/community">`,
    body: communityPage(1)
  },
  {
    file: "community/global-network/index.html",
    depth: 2,
    current: "community",
    title: "CureSoulLife Global Network | Collaboration &amp; Shared Learning",
    description: "Explore CureSoulLife's vision for a global network connecting people, educators, researchers and organisations through human transformation and responsible collaboration.",
    head: `  <link rel="canonical" href="https://curesoullife.org/community/global-network">
  <meta property="og:type" content="website">
  <meta property="og:title" content="CureSoulLife Global Network | Collaboration &amp; Shared Learning">
  <meta property="og:description" content="Explore CureSoulLife's vision for a global network connecting people, educators, researchers and organisations through human transformation and responsible collaboration.">
  <meta property="og:url" content="https://curesoullife.org/community/global-network">`,
    body: globalNetworkPage(2)
  },
  {
    file: "about/index.html",
    depth: 1,
    current: "about",
    title: "About CureSoulLife | Our Mission, Vision &amp; Philosophy",
    description: "Discover why CureSoulLife exists, the philosophy and values guiding its work, and its vision for a world where human transformation becomes part of lifelong learning.",
    head: `  <link rel="canonical" href="https://curesoullife.org/about">
  <meta property="og:type" content="website">
  <meta property="og:title" content="About CureSoulLife | Our Mission, Vision &amp; Philosophy">
  <meta property="og:description" content="Discover why CureSoulLife exists, the philosophy and values guiding its work, and its vision for a world where human transformation becomes part of lifelong learning.">
  <meta property="og:url" content="https://curesoullife.org/about">`,
    body: aboutPage(1)
  },
  {
    file: "about/founder/index.html",
    depth: 2,
    current: "about",
    title: "Sarvesh Mishra | Founder of CureSoulLife",
    description: "Meet Sarvesh Mishra, founder of CureSoulLife. Explore his background in journalism and media, his interest in human behaviour, Life Decoding, Inner Alchemy and human transformation.",
    head: `  <link rel="canonical" href="https://curesoullife.org/about/founder">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Sarvesh Mishra | Founder of CureSoulLife">
  <meta property="og:description" content="Meet Sarvesh Mishra, founder of CureSoulLife. Explore his background in journalism and media, his interest in human behaviour, Life Decoding, Inner Alchemy and human transformation.">
  <meta property="og:url" content="https://curesoullife.org/about/founder">`,
    body: founderPage(2)
  },
  {
    file: "human-transformation/life-decoding/index.html",
    depth: 2,
    current: "transformation",
    title: "Life Decoding | Understanding Your Patterns — CureSoulLife",
    description: "Explore Life Decoding, a CureSoulLife framework for understanding recurring patterns, personal experiences and conscious choices through five conceptual dimensions.",
    head: `  <link rel="canonical" href="https://curesoullife.org/human-transformation/life-decoding">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="CureSoulLife">
  <meta property="og:title" content="Life Decoding | Understanding Your Patterns — CureSoulLife">
  <meta property="og:description" content="Explore Life Decoding, a CureSoulLife framework for understanding recurring patterns, personal experiences and conscious choices through five conceptual dimensions.">
  <meta property="og:url" content="https://curesoullife.org/human-transformation/life-decoding">`,
    body: lifeDecodingPage(2)
  },
  {
    file: "experiences/retreats/index.html",
    depth: 2,
    current: "experiences",
    title: "Retreats &amp; Immersive Experiences | CureSoulLife",
    description: "Explore CureSoulLife's approach to retreats, guided practices, reflection and immersive human transformation experiences.",
    head: `  <link rel="canonical" href="https://curesoullife.org/experiences/retreats">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Retreats &amp; Immersive Experiences | CureSoulLife">
  <meta property="og:description" content="Explore CureSoulLife's approach to retreats, guided practices, reflection and immersive human transformation experiences.">
  <meta property="og:url" content="https://curesoullife.org/experiences/retreats">`,
    body: retreatsPage(2)
  },
  {
    file: "contact/index.html",
    depth: 1,
    current: "",
    title: "Contact — CureSoulLife",
    description: "Official contact details for CureSoulLife are not yet published.",
    head: `  <link rel="canonical" href="https://curesoullife.org/contact">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Contact — CureSoulLife">
  <meta property="og:description" content="Official contact details for CureSoulLife are not yet published.">
  <meta property="og:url" content="https://curesoullife.org/contact">`,
    body: prosePage(1, "Connect", "Contact, when an official channel exists.",
      "A first conversation with the institution should go through a channel that is real and monitored.",
      `<div class="status-note">Official email, phone, postal address and social profiles are not published on this site yet. There is no enquiry form, because a form here would not deliver a message to anyone.</div>
      <p>This is a launch dependency. When a verified address exists, it will replace this notice. Until then, the useful next step is to read the institution, the Human Operating System™, and the transformation journey.</p>`,
      [["curesoullife/index.html", "Discover CureSoulLife"], ["about/index.html", "About CureSoulLife"], ["human-transformation/index.html", "Begin Your Journey"]])
  }
];

for (const page of pages) {
  const dest = path.join(root, page.file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, shell(page), "utf8");
  console.log("wrote", page.file);
}

const sitemapUrls = pages.map((page) => {
  if (page.file === "index.html") return "https://curesoullife.org/";
  return `https://curesoullife.org/${page.file.replace(/\/index\.html$/, "")}`;
});
fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((loc) => `  <url><loc>${loc}</loc></url>`).join("\n")}
</urlset>
`, "utf8");
fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *
Allow: /

Sitemap: https://curesoullife.org/sitemap.xml
`, "utf8");
console.log("wrote sitemap.xml");
console.log("wrote robots.txt");
