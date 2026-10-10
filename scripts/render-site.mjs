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
    ["life-decoding/index.html", "Life Decoding"],
    ["knowledge/index.html", "Knowledge"],
    ["research/index.html", "Research"]
  ]],
  ["Experience", [
    ["experiences/index.html", "Experiences"],
    ["retreats/index.html", "Retreats"],
    ["community/index.html", "Community"],
    ["community/global-network/index.html", "Global Network"]
  ]],
  ["Connect", [
    ["contact/index.html", "Contact"]
  ]],
  ["Legal", [
    ["privacy/index.html", "Privacy Policy"],
    ["terms/index.html", "Terms of Use"],
    ["disclaimer/index.html", "Disclaimer"]
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

function shell({ depth, current, title, description, body }) {
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
      <a class="btn btn-primary btn-small header-cta" href="${url(depth, "human-transformation/index.html")}">Begin Your Journey</a>
      <details class="nav-details" data-nav>
        <summary class="nav-toggle" aria-controls="mobile-nav" aria-expanded="false">
          <span class="menu-label">Menu</span>
          <span class="close-label">Close</span>
        </summary>
        <div class="mobile-panel" id="mobile-nav">
          <nav aria-label="Mobile">${navAnchors(depth, current)}</nav>
          <a class="btn btn-primary mobile-cta" href="${url(depth, "human-transformation/index.html")}">Begin Your Journey</a>
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
      <p>Privacy, terms, and disclaimer pages are drafts pending legal review. Official social profiles are not linked until verified addresses exist.</p>
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

const stages = ["Awareness", "Understanding", "Alignment", "Practice", "Integration", "Contribution", "Legacy"];

function home() {
  const d = 0;
  const dimCards = dimensions.map(([key, name, label]) => `
          <article class="dim-card">
            <div class="dim-icon">${icons[key]}</div>
            <h3>${name}</h3>
            <p class="dim-label">${label}</p>
          </article>`).join("");
  const stageItems = stages.map((name, i) => `
            <li>
              <span class="journey-index">${String(i + 1).padStart(2, "0")}</span>
              <span class="journey-node" aria-hidden="true"></span>
              <h3>${name}</h3>
            </li>`).join("");
  const ecosystem = [
    ["eco-knowledge.jpg", "Quiet mountain landscape", "Knowledge", "Ideas, insights and practical resources for understanding human life and transformation.", "Explore Knowledge", "knowledge/index.html"],
    ["eco-research.jpg", "Forest canopy", "Research", "Explore questions, evidence, traditional perspectives and emerging understanding with intellectual honesty.", "Explore Research", "research/index.html"],
    ["eco-experiences.jpg", "Green field and trees", "Experiences", "Explore guided practices, workshops, programmes and immersive learning experiences.", "Explore Experiences", "experiences/index.html"],
    ["eco-community.jpg", "Lake and forest in soft light", "Community", "Learn together, share perspectives and discover meaningful ways to contribute.", "Explore Community", "community/index.html"],
    ["eco-network.jpg", "Layered ridges in morning haze", "Global Network", "Explore the vision for responsible collaboration across people, knowledge and communities.", "Explore Global Network", "community/global-network/index.html"]
  ].map(([img, alt, title, copy, label, route]) => `
          <article class="eco-card">
            <div class="eco-media"><img src="assets/images/${img}" alt="" width="1200" height="800" loading="lazy" decoding="async"></div>
            <div class="eco-body">
              <h3>${title}</h3>
              <p>${copy}</p>
              <a class="link-arrow" href="${route}">${label}${arrow}</a>
            </div>
          </article>`).join("");

  return `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        ${eyebrow("Timeless wisdom. Modern excellence.")}
        <h1 id="hero-title">A deeper way to understand being human.</h1>
        <p class="support">CureSoulLife is a Human Transformation Institution exploring how we can live with greater awareness, balance, meaning and possibility — through the meeting of Ancient Wisdom, Modern Science and lived human experience.</p>
        <div class="cta-row">
          ${cta(d, "human-transformation/index.html", "Explore Human Transformation")}
          ${cta(d, "curesoullife/index.html", "Discover CureSoulLife", "btn btn-secondary")}
        </div>
      </div>
      <div class="hero-media">
        <img src="assets/images/hero-landscape.jpg" alt="Mountain valley and evergreen forest in daylight" width="1800" height="1200" fetchpriority="high" decoding="async">
      </div>
    </section>

    <section class="section section-white" aria-labelledby="question-title">
      <div class="container question-grid">
        <div class="question-copy reveal">
          ${eyebrow("The human question")}
          <h2 id="question-title">What does it mean to live a more conscious human life?</h2>
          <p class="support">Across cultures and generations, human beings have explored questions of meaning, relationships, wellbeing, responsibility and what it means to live well. CureSoulLife creates space to explore these questions through knowledge, reflection, practice and lived experience.</p>
          <div class="cta-row">${cta(d, "curesoullife/index.html", "Discover CureSoulLife")}</div>
        </div>
        <figure class="question-media reveal">
          <img src="assets/images/question-forest.jpg" alt="A sunlit path through tall trees" width="1600" height="1066" loading="lazy" decoding="async">
        </figure>
      </div>
    </section>

    <section class="section section-sand" aria-labelledby="hos-title">
      <div class="container">
        <div class="section-head reveal">
          ${eyebrow("The Human Operating System™")}
          <h2 id="hos-title">Nine interconnected dimensions of human life.</h2>
          <p class="support">A holistic framework for exploring the different dimensions of human life and how they relate to everyday experience, choices and development.</p>
        </div>
        <div class="dim-grid reveal">${dimCards}</div>
        <p class="section-note">The Human Operating System™ is a conceptual framework. It is not a clinically validated diagnostic instrument, and it does not offer health scores, assessments, or guaranteed outcomes.</p>
        <div class="cta-row">${cta(d, "human-operating-system/index.html", "Explore the Human Operating System™")}</div>
      </div>
    </section>

    <section class="section" aria-labelledby="journey-title">
      <div class="container">
        <div class="section-head reveal">
          ${eyebrow("From understanding to transformation")}
          <h2 id="journey-title">Transformation is a lifelong journey.</h2>
          <p class="support">Meaningful change can begin with awareness, deepen through understanding, and take shape through practice, integration and contribution.</p>
        </div>
        <div class="journey-block reveal">
          <ol class="journey">${stageItems}</ol>
          <svg class="journey-arc" viewBox="0 0 1000 64" preserveAspectRatio="xMidYMin meet" aria-hidden="true" focusable="false">
            <path d="M929 6C929 58 71 58 71 6" fill="none" stroke="currentColor" stroke-width="1.25" stroke-dasharray="2 6"/>
            <path d="M63 16 71 6l8 10" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p class="journey-note">These stages are not strictly linear. People may revisit different stages throughout life.</p>
        </div>
        <div class="cta-row">${cta(d, "human-transformation/index.html", "Explore Human Transformation")}</div>
      </div>
    </section>

    <section class="section section-white" aria-labelledby="approach-title">
      <div class="container">
        <div class="section-head reveal">
          ${eyebrow("How we explore human transformation")}
          <h2 id="approach-title">Four perspectives. A more integrated understanding.</h2>
        </div>
        <div class="approach-grid reveal">
          <article class="approach-card"><div class="dim-icon">${icons.wisdom}</div><h3>Ancient Wisdom</h3><p>Explore philosophical traditions, contemplative practices and inherited ways of understanding human life.</p></article>
          <article class="approach-card"><div class="dim-icon">${icons.science}</div><h3>Modern Science</h3><p>Explore relevant scientific research and evolving knowledge about human behaviour, development and wellbeing.</p></article>
          <article class="approach-card"><div class="dim-icon">${icons.experience}</div><h3>Human Experience</h3><p>Learn from lived experience, reflection and the questions people encounter in everyday life.</p></article>
          <article class="approach-card"><div class="dim-icon">${icons.practice}</div><h3>Practical Application</h3><p>Connect understanding with responsible practices, everyday choices and continued reflection.</p></article>
        </div>
        <p class="section-note">These perspectives are held with equal weight. Traditional understanding and scientific evidence are not treated as interchangeable.</p>
        <div class="cta-row">${cta(d, "curesoullife/index.html", "Learn About CureSoulLife")}</div>
      </div>
    </section>

    <section class="section" aria-labelledby="eco-title">
      <div class="container">
        <div class="section-head reveal">
          ${eyebrow("The ecosystem")}
          <h2 id="eco-title">Explore the CureSoulLife ecosystem.</h2>
        </div>
        <div class="eco-grid reveal">${ecosystem}</div>
        <p class="section-note">The Global Network is a developing institutional vision. It does not represent active offices, centres, or partnerships.</p>
      </div>
    </section>

    <section class="section institution" aria-labelledby="about-title">
      <figure class="institution-bg">
        <img src="assets/images/institutional-hills.jpg" alt="" width="1800" height="1072" loading="lazy" decoding="async">
      </figure>
      <div class="container">
        <div class="institution-panel reveal">
          ${eyebrow("About CureSoulLife")}
          <h2 id="about-title">A living ecosystem for human transformation.</h2>
          <p class="support">CureSoulLife brings together Ancient Wisdom, Modern Science, Human Experience and Practical Application to explore how people can understand themselves more deeply and live with greater awareness, balance, meaning and possibility.</p>
          <p class="support">Our purpose is not to tell people who to become. It is to create conditions in which deeper understanding and meaningful transformation become possible.</p>
          <blockquote class="pull"><p>A modern institution born from timeless wisdom.</p></blockquote>
          <div class="cta-row">${cta(d, "curesoullife/index.html", "Discover CureSoulLife")}</div>
        </div>
      </div>
    </section>

    <section class="section section-sand" aria-labelledby="founder-name">
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
          <div class="cta-row">${cta(d, "about/founder/index.html", "Read the Founder’s Journey")}</div>
        </div>
      </div>
    </section>

    <section class="finale" aria-labelledby="finale-title">
      <div class="finale-inner">
        <h2 id="finale-title">Be part of a more conscious human future.</h2>
        <p class="finale-path">Discover. Understand. Practice. Experience. Contribute.</p>
        <div class="cta-row">
          ${cta(d, "human-transformation/index.html", "Begin Your Journey", "btn btn-light")}
          ${cta(d, "curesoullife/index.html", "Explore CureSoulLife", "btn btn-ghost-light")}
        </div>
      </div>
      <figure class="finale-media">
        <img src="assets/images/closing-horizon.jpg" alt="" width="1800" height="1196" loading="lazy" decoding="async">
      </figure>
    </section>`;
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

const stageCopy = [
  ["Awareness", "A place where change can begin: noticing what is present in one’s life, without a demand for immediate answers."],
  ["Understanding", "A deepening of awareness through reflection, knowledge and the questions a person is willing to stay with."],
  ["Alignment", "A period of bringing understanding into closer relationship with choices, responsibilities and daily life."],
  ["Practice", "The point at which understanding is given a form — through responsible practices and repeated attention."],
  ["Integration", "What has been practised begins to belong to the way a person lives, rather than remaining a separate exercise."],
  ["Contribution", "A person may offer something of that life — attention, care, work or knowledge — to other people."],
  ["Legacy", "Contribution, held over time, becomes a question of stewardship: what remains, and what is cared for."]
];

const pages = [
  {
    file: "index.html",
    depth: 0,
    current: "",
    title: "CureSoulLife — A deeper way to understand being human",
    description: "CureSoulLife is a Human Transformation Institution exploring awareness, balance, meaning and possibility through ancient wisdom, modern science and lived human experience.",
    body: home()
  },
  {
    file: "curesoullife/index.html",
    depth: 1,
    current: "curesoullife",
    title: "CureSoulLife — The institution",
    description: "CureSoulLife is a Human Transformation Institution: a modern institution born from timeless wisdom.",
    body: prosePage(1, "CureSoulLife", "A modern institution born from timeless wisdom.",
      "CureSoulLife is a Human Transformation Institution. It brings together Ancient Wisdom, Modern Science, Human Experience and Practical Application.",
      `
      <p>CureSoulLife brings together Ancient Wisdom, Modern Science, Human Experience and Practical Application to explore how people can understand themselves more deeply and live with greater awareness, balance, meaning and possibility.</p>
      <p>Our purpose is not to tell people who to become. It is to create conditions in which deeper understanding and meaningful transformation become possible.</p>
      <h2>Four perspectives</h2>
      <ul class="stack-list">
        <li><strong>Ancient Wisdom.</strong> Explore philosophical traditions, contemplative practices and inherited ways of understanding human life.</li>
        <li><strong>Modern Science.</strong> Explore relevant scientific research and evolving knowledge about human behaviour, development and wellbeing.</li>
        <li><strong>Human Experience.</strong> Learn from lived experience, reflection and the questions people encounter in everyday life.</li>
        <li><strong>Practical Application.</strong> Connect understanding with responsible practices, everyday choices and continued reflection.</li>
      </ul>
      <p>These perspectives are held with equal weight. Traditional understanding and scientific evidence are not treated as interchangeable.</p>
      <h2>How the institution is organised</h2>
      <ul class="stack-list">
        <li><strong>CureSoulLife</strong> — Institution</li>
        <li><strong>Human Operating System™</strong> — Core system</li>
        <li><strong>Life Decoding</strong> — Methodology</li>
        <li><strong>Inner Alchemy</strong> — Transformation philosophy</li>
        <li><strong>Knowledge and Research</strong> — Intelligence</li>
        <li><strong>Practices and Experiences</strong> — Application</li>
        <li><strong>Community and Contribution</strong> — Continuity</li>
      </ul>
      <p>The mark ™ appears where specified and is subject to legal review. This site does not claim a completed trademark registration.</p>`,
      [["human-transformation/index.html", "Explore Human Transformation"], ["human-operating-system/index.html", "Explore the Human Operating System™"], ["about/index.html", "About CureSoulLife"]])
  },
  {
    file: "human-transformation/index.html",
    depth: 1,
    current: "transformation",
    title: "Human Transformation — CureSoulLife",
    description: "Transformation is a lifelong journey of awareness, understanding, alignment, practice, integration, contribution and legacy.",
    body: (() => {
      const items = stageCopy.map(([name, copy], i) => `<li><span class="stage-no">${String(i + 1).padStart(2, "0")}</span><div><h2>${name}</h2><p>${copy}</p></div></li>`).join("");
      return `${pageHero(1, "From understanding to transformation", "Transformation is a lifelong journey.", "Meaningful change can begin with awareness, deepen through understanding, and take shape through practice, integration and contribution.")}
      <section class="page-section"><div class="container">
        <p class="lede">The Human Transformation framework names seven stages. They describe a lifelong movement. They are not a programme with a promised result, and they are not the same thing as the nine dimensions of the Human Operating System™.</p>
        <ol class="stage-list">${items}</ol>
        <p class="section-note">These stages are not strictly linear. People may revisit different stages throughout life.</p>
      </div></section>
      ${continueBand(1, "Continue", [["human-operating-system/index.html", "Explore the Human Operating System™"], ["experiences/index.html", "Explore Experiences"], ["curesoullife/index.html", "Discover CureSoulLife"]])}`;
    })()
  },
  {
    file: "human-operating-system/index.html",
    depth: 1,
    current: "hos",
    title: "Human Operating System™ — CureSoulLife",
    description: "Nine interconnected dimensions of human life: a conceptual framework, not a diagnostic instrument.",
    body: (() => {
      const cards = dimensions.map(([key, name, label]) => `<article class="dim-card"><div class="dim-icon">${icons[key]}</div><h2>${name}</h2><p class="dim-label">${label}</p><p>A dimension for reflecting on ${label.toLowerCase()} in everyday life.</p></article>`).join("");
      return `${pageHero(1, "The Human Operating System™", "Nine interconnected dimensions of human life.", "A holistic framework for exploring the different dimensions of human life and how they relate to everyday experience, choices and development.")}
      <section class="page-section"><div class="container">
        <div class="status-note">The Human Operating System™ is a conceptual framework. It is not a clinically validated diagnostic instrument. This page does not provide health scores, assessments, or guaranteed outcomes.</div>
        <div class="dim-grid">${cards}</div>
        <p class="section-note">Life Decoding is the institution’s methodology. The Human Operating System™ is the core system those enquiries can be held within. Neither is a medical device or a test.</p>
      </div></section>
      ${continueBand(1, "Continue", [["life-decoding/index.html", "Life Decoding"], ["human-transformation/index.html", "Human Transformation"], ["curesoullife/index.html", "Discover CureSoulLife"]])}`;
    })()
  },
  {
    file: "knowledge/index.html",
    depth: 1,
    current: "knowledge",
    title: "Knowledge — CureSoulLife",
    description: "Ideas, insights and practical resources for understanding human life and transformation.",
    body: prosePage(1, "Knowledge", "Ideas for understanding human life.",
      "Ideas, insights and practical resources for understanding human life and transformation.",
      `<p>Knowledge is the institution’s public library of ideas. Together with Research, it is how CureSoulLife holds intelligence: writing, explanation and practical resources that help a person look more carefully at human life.</p>
      <div class="quiet-panel"><h2>Published work will appear here.</h2><p>Essays and resources are not listed until they are actually published. This page does not display article counts, ratings, or borrowed media logos.</p></div>
      <p>Knowledge sits beside Research. One offers ideas and resources. The other asks what can be said with intellectual honesty about evidence, tradition and emerging understanding.</p>`,
      [["research/index.html", "Explore Research"], ["human-operating-system/index.html", "Human Operating System™"], ["curesoullife/index.html", "Discover CureSoulLife"]])
  },
  {
    file: "research/index.html",
    depth: 1,
    current: "research",
    title: "Research — CureSoulLife",
    description: "Questions, evidence, traditional perspectives and emerging understanding, held with intellectual honesty.",
    body: prosePage(1, "Research", "Questions held with intellectual honesty.",
      "Explore questions, evidence, traditional perspectives and emerging understanding with intellectual honesty.",
      `<p>Research at CureSoulLife is a commitment to look carefully. It includes scientific research where it is relevant, and traditional perspectives where they help a person understand human life. The two are not treated as interchangeable, and neither is presented as a finished proof of personal transformation.</p>
      <div class="quiet-panel"><h2>No publication list is invented here.</h2><p>Studies, papers and reviews will be cited only when they exist and can be read. This page does not display fake research counts, validation badges, or partner institutions.</p></div>
      <p>Where a question touches health, the institution’s language stays descriptive. CureSoulLife does not offer guaranteed healing or guaranteed life outcomes.</p>`,
      [["knowledge/index.html", "Explore Knowledge"], ["curesoullife/index.html", "Learn About CureSoulLife"], ["disclaimer/index.html", "Read the disclaimer"]])
  },
  {
    file: "experiences/index.html",
    depth: 1,
    current: "experiences",
    title: "Experiences — CureSoulLife",
    description: "Guided practices, workshops, programmes and immersive learning experiences.",
    body: prosePage(1, "Experiences", "Practice, programmes and immersive learning.",
      "Explore guided practices, workshops, programmes and immersive learning experiences.",
      `<p>Experiences are where understanding meets application. Practices and experiences are how the institution gives ideas a place in lived life — alongside continued reflection, not instead of it.</p>
      <div class="quiet-panel"><h2>Programmes are listed only when they are real.</h2><p>There is no booking calendar, payment gateway, or membership area on this site. Dates, places, teachers and prices are not shown until a programme is actually offered.</p></div>
      <p>Retreats are one form of immersive experience. They are described on their own page, without invented locations or schedules. Community is where people can later learn together and contribute.</p>`,
      [["retreats/index.html", "Retreats"], ["community/index.html", "Explore Community"], ["human-transformation/index.html", "Human Transformation"]])
  },
  {
    file: "community/index.html",
    depth: 1,
    current: "community",
    title: "Community — CureSoulLife",
    description: "Learn together, share perspectives and discover meaningful ways to contribute.",
    body: prosePage(1, "Community", "Learn together. Contribute with care.",
      "Learn together, share perspectives and discover meaningful ways to contribute.",
      `<p>Community is the continuity of the institution: a place to learn with other people, to share perspectives, and to find responsible ways to contribute. Contribution is also the later movement of the human transformation journey.</p>
      <div class="quiet-panel"><h2>Membership numbers are not displayed.</h2><p>This page does not invent a member count, a country count, or a forum that is not yet open. A community tool will be introduced only when it genuinely exists.</p></div>
      <p>The Global Network is a related, still-developing vision for collaboration across people, knowledge and communities. It is not a map of active chapters.</p>`,
      [["community/global-network/index.html", "Explore Global Network"], ["experiences/index.html", "Explore Experiences"], ["about/index.html", "About CureSoulLife"]])
  },
  {
    file: "community/global-network/index.html",
    depth: 2,
    current: "community",
    title: "Global Network — CureSoulLife",
    description: "A developing vision for responsible collaboration across people, knowledge and communities.",
    body: prosePage(2, "Global Network", "A vision for responsible collaboration.",
      "Explore the vision for responsible collaboration across people, knowledge and communities.",
      `<div class="status-note">The Global Network is a developing institutional vision. Nothing on this page should be read as an active partnership, a physical centre, a laboratory, or a country office.</div>
      <p>The vision is simple to state and careful to keep: people, knowledge and communities in responsible conversation. Locations are not proposed here as if they were open. Logos of other organisations are not shown.</p>
      <p>Until collaboration is real and can be described accurately, this page stays a statement of intent rather than a directory.</p>`,
      [["community/index.html", "Explore Community"], ["about/index.html", "About CureSoulLife"], ["contact/index.html", "Contact"]])
  },
  {
    file: "about/index.html",
    depth: 1,
    current: "about",
    title: "About CureSoulLife",
    description: "A living ecosystem for human transformation, shaped as an institution rather than a personal brand.",
    body: prosePage(1, "About CureSoulLife", "A living ecosystem for human transformation.",
      "CureSoulLife brings together Ancient Wisdom, Modern Science, Human Experience and Practical Application.",
      `<p>CureSoulLife brings together Ancient Wisdom, Modern Science, Human Experience and Practical Application to explore how people can understand themselves more deeply and live with greater awareness, balance, meaning and possibility.</p>
      <p>Our purpose is not to tell people who to become. It is to create conditions in which deeper understanding and meaningful transformation become possible.</p>
      <blockquote class="pull"><p>A modern institution born from timeless wisdom.</p></blockquote>
      <h2>The founder, within the institution</h2>
      <p>Sarvesh Mishra shapes CureSoulLife through a continuing exploration of human behaviour, ancient wisdom, modern knowledge, personal understanding and the possibilities of human transformation. The institution is not organised as a personality site. The founder’s journey has its own page, and it does not stand in for the work of the institution.</p>`,
      [["about/founder/index.html", "Read the Founder’s Journey"], ["curesoullife/index.html", "Discover CureSoulLife"], ["human-transformation/index.html", "Begin Your Journey"]])
  },
  {
    file: "about/founder/index.html",
    depth: 2,
    current: "about",
    title: "Sarvesh Mishra — Founder, CureSoulLife",
    description: "Sarvesh Mishra, founder of CureSoulLife. Life Decoder, Inner Alchemy Architect, and media, IP and wellness entrepreneur.",
    body: `
    <header class="page-hero">
      <div class="container page-hero-grid">
        <div>
          ${eyebrow("The founder")}
          <h1>Sarvesh Mishra</h1>
          <p class="founder-identity">Life Decoder <span aria-hidden="true">|</span> Inner Alchemy Architect</p>
          <p class="founder-identity founder-identity-sub">Media, IP &amp; Wellness Entrepreneur</p>
          <p class="lede">CureSoulLife is shaped by a continuing exploration of human behaviour, ancient wisdom, modern knowledge, personal understanding and the possibilities of human transformation.</p>
        </div>
        <figure class="founder-figure">
          <div class="portrait-placeholder" role="img" aria-label="Placeholder for an approved photograph of Sarvesh Mishra. No portrait is shown.">
            <span class="portrait-mark" aria-hidden="true">SM</span>
            <p>Approved photograph to be placed here.</p>
          </div>
        </figure>
      </div>
    </header>
    <section class="page-section"><div class="container prose">
      <p>This page introduces the founder without making the institution dependent on a personality. It uses only the identity lines approved for the public site.</p>
      <div class="quiet-panel"><h2>What this page does not add.</h2><p>No awards, academic posts, clinical credentials, media logos, or institutional affiliations are listed here. If they are to appear, they need to be supplied and verified. A portrait will replace the monogram only when an approved photograph is available.</p></div>
      <p>Inner Alchemy names the transformation philosophy. Life Decoding names the methodology. The Human Operating System™ names the core system. CureSoulLife remains the institution that holds them.</p>
    </div></section>
    ${continueBand(2, "Continue", [["about/index.html", "About CureSoulLife"], ["life-decoding/index.html", "Life Decoding"], ["curesoullife/index.html", "Discover CureSoulLife"]])}`
  },
  {
    file: "life-decoding/index.html",
    depth: 1,
    current: "",
    title: "Life Decoding — CureSoulLife",
    description: "Life Decoding is CureSoulLife’s methodology for understanding human life. A fuller public method is not yet published.",
    body: prosePage(1, "Life Decoding", "The methodology, named with care.",
      "Life Decoding is the institution’s methodology. It is distinct from the Human Operating System™, which is the core system, and from Inner Alchemy, which is the transformation philosophy.",
      `<p>The methodology is a way of enquiring into a human life — through the dimensions of the Human Operating System™ and the movement described in Human Transformation. It is not a diagnostic test, and it does not produce a score.</p>
      <div class="quiet-panel"><h2>A fuller method is not published yet.</h2><p>Steps, worksheets and practitioner rules are intentionally absent. Publishing an invented method would misrepresent work that still belongs with the founder. When a public methodology is approved, it will replace this notice.</p></div>
      <p>Until then, the honest description is the one above: Life Decoding is the methodology; the nine dimensions are the system it can work within; the seven stages describe a lifelong journey rather than a funnel.</p>`,
      [["human-operating-system/index.html", "Human Operating System™"], ["human-transformation/index.html", "Human Transformation"], ["about/founder/index.html", "The founder"]])
  },
  {
    file: "retreats/index.html",
    depth: 1,
    current: "",
    title: "Retreats — CureSoulLife",
    description: "Retreats are one form of immersive learning within CureSoulLife Experiences. No dates or venues are published yet.",
    body: prosePage(1, "Retreats", "Immersive learning, when it is real.",
      "Retreats sit inside Experiences: immersive time for practice, reflection and learning with other people.",
      `<div class="status-note">No retreat is currently published. This page does not invent venues, dates, prices, or a booking system, and it does not imply that CureSoulLife operates a retreat centre.</div>
      <p>When a retreat is offered, it should be possible to see where it is, when it is, who holds it, and what kind of practice it involves. Until that exists, Experiences remains the place to understand how programmes are meant to work.</p>`,
      [["experiences/index.html", "Explore Experiences"], ["community/index.html", "Explore Community"], ["contact/index.html", "Contact"]])
  },
  {
    file: "contact/index.html",
    depth: 1,
    current: "",
    title: "Contact — CureSoulLife",
    description: "Official contact details for CureSoulLife are not yet published.",
    body: prosePage(1, "Connect", "Contact, when an official channel exists.",
      "A first conversation with the institution should go through a channel that is real and monitored.",
      `<div class="status-note">Official email, phone, postal address and social profiles are not published on this site yet. There is no enquiry form, because a form here would not deliver a message to anyone.</div>
      <p>This is a launch dependency. When a verified address exists, it will replace this notice. Until then, the useful next step is to read the institution, the Human Operating System™, and the transformation journey.</p>`,
      [["curesoullife/index.html", "Discover CureSoulLife"], ["about/index.html", "About CureSoulLife"], ["human-transformation/index.html", "Begin Your Journey"]])
  },
  {
    file: "privacy/index.html",
    depth: 1,
    current: "",
    title: "Privacy Policy (draft) — CureSoulLife",
    description: "Draft privacy notice for CureSoulLife. Pending legal review. Not a published policy.",
    body: prosePage(1, "Legal · Draft", "Privacy Policy",
      "This is a draft notice for review. It is not a published privacy policy and it has not been approved by counsel.",
      `<div class="status-note">Launch dependency: legal review. Do not treat this page as the institution’s final privacy policy.</div>
      <p>This website is a static institutional presentation. It does not run an account system, a payment gateway, a booking engine, or an enquiry form. It does not ask you to create a profile.</p>
      <p>Pages may be served with ordinary server logs by whoever hosts the site. No additional analytics tool is included in this build. Fonts are requested from Google Fonts; if that request is blocked, the site uses Georgia and Segoe UI.</p>
      <p>When a real contact channel, membership area, or programme checkout is added, this notice has to be rewritten to name the data collected, the reason, the retention period, and the rights available to the person concerned.</p>`,
      [["terms/index.html", "Terms of Use"], ["disclaimer/index.html", "Disclaimer"], ["contact/index.html", "Contact"]])
  },
  {
    file: "terms/index.html",
    depth: 1,
    current: "",
    title: "Terms of Use (draft) — CureSoulLife",
    description: "Draft terms of use for CureSoulLife. Pending legal review. Not a published agreement.",
    body: prosePage(1, "Legal · Draft", "Terms of Use",
      "This is a draft for review. It is not a published agreement.",
      `<div class="status-note">Launch dependency: legal review. Do not treat this page as the institution’s final terms.</div>
      <p>The site presents CureSoulLife as a Human Transformation Institution. You may read it for personal understanding. You may not copy the design system, the name CureSoulLife, or the phrase Human Operating System™ and present them as your own.</p>
      <p>Nothing here is an offer of medical care, psychotherapy, financial advice, or a guaranteed personal outcome. Programme terms, if programmes are later offered, will be stated with those programmes.</p>
      <p>The ™ mark is retained where the content specifies it and remains subject to legal review. This draft does not assert that registration has been completed.</p>`,
      [["privacy/index.html", "Privacy Policy"], ["disclaimer/index.html", "Disclaimer"], ["curesoullife/index.html", "CureSoulLife"]])
  },
  {
    file: "disclaimer/index.html",
    depth: 1,
    current: "",
    title: "Disclaimer (draft) — CureSoulLife",
    description: "Draft disclaimer: CureSoulLife does not offer diagnosis, guaranteed healing, or guaranteed life outcomes.",
    body: prosePage(1, "Legal · Draft", "Disclaimer",
      "This is a draft for review. It records the limits already built into the public language of the site.",
      `<div class="status-note">Launch dependency: legal review. Do not treat this page as the institution’s final disclaimer.</div>
      <ul class="stack-list">
        <li>CureSoulLife does not promise healing, scientifically proven personal transformation, or guaranteed life outcomes.</li>
        <li>The Human Operating System™ is a conceptual framework. It is not a clinically validated diagnostic instrument and it does not produce a health score.</li>
        <li>Ancient wisdom and modern science are both explored. They are not treated as interchangeable.</li>
        <li>The Global Network is a developing vision. The site does not claim physical centres, laboratories, global offices, or active partnerships.</li>
        <li>Founder credentials beyond the approved identity lines are not stated, because they have not been supplied for publication.</li>
        <li>Landscape photographs are replaceable stand-ins. They are not pictures of CureSoulLife property.</li>
      </ul>`,
      [["privacy/index.html", "Privacy Policy"], ["terms/index.html", "Terms of Use"], ["research/index.html", "Research"]])
  }
];

for (const page of pages) {
  const dest = path.join(root, page.file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, shell(page), "utf8");
  console.log("wrote", page.file);
}
