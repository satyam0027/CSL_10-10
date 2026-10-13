import fs from "fs";
import path from "path";

const root = path.resolve("D:/CSL 10-10");
const skip = new Set(["scripts", "_docx_extract", "_preview", "node_modules"]);

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(ent.name) || ent.name.startsWith(".") || ent.name.startsWith("_")) continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, acc);
    else if (ent.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

const files = walk(root);
const bad = [];
for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const dir = path.dirname(file);
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  for (const rel of refs) {
    if (rel === "#") bad.push(`${path.relative(root, file)} has a placeholder link`);
    if (rel.includes("curesoullife.com")) bad.push(`${path.relative(root, file)} links to an unverified commercial URL`);
    if (rel.startsWith("#") || rel.startsWith("http") || rel.startsWith("mailto")) continue;
    const clean = decodeURIComponent(rel.split("#")[0].split("?")[0]);
    const target = path.normalize(path.join(dir, clean));
    if (!target.startsWith(root)) bad.push(`${path.relative(root, file)} escapes via ${rel}`);
    else if (!fs.existsSync(target)) bad.push(`${path.relative(root, file)} -> ${rel}`);
  }
}

const home = fs.readFileSync(path.join(root, "index.html"), "utf8");
const overview = fs.readFileSync(path.join(root, "curesoullife/index.html"), "utf8");
const transformation = fs.readFileSync(path.join(root, "human-transformation/index.html"), "utf8");
const decoding = fs.readFileSync(path.join(root, "human-transformation/life-decoding/index.html"), "utf8");
const hos = fs.readFileSync(path.join(root, "human-operating-system/index.html"), "utf8");
const knowledge = fs.readFileSync(path.join(root, "knowledge/index.html"), "utf8");
const research = fs.readFileSync(path.join(root, "research/index.html"), "utf8");
const experiences = fs.readFileSync(path.join(root, "experiences/index.html"), "utf8");
const retreats = fs.readFileSync(path.join(root, "experiences/retreats/index.html"), "utf8");
const community = fs.readFileSync(path.join(root, "community/index.html"), "utf8");
const network = fs.readFileSync(path.join(root, "community/global-network/index.html"), "utf8");
const about = fs.readFileSync(path.join(root, "about/index.html"), "utf8");
const founder = fs.readFileSync(path.join(root, "about/founder/index.html"), "utf8");
const required = [
  "A deeper way to understand being human.",
  "Nine interconnected dimensions of human life.",
  "Transformation is a lifelong journey.",
  "Four perspectives. A more integrated understanding.",
  "We have never known more. Yet many of us are struggling to live well.",
  "What would become possible if you understood yourself more deeply?",
  "The Human Operating System™ is a conceptual framework for exploring interconnected dimensions of human life.",
  "Meet the Founder",
  "Sarvesh Mishra",
  "Life Decoder",
  "Inner Alchemy Architect",
  "Human transformation is a lifelong journey.",
  "Work &amp; Wealth",
  "Physical wellbeing",
  "Thoughts and attention",
  "Emotional awareness",
  "Vitality and attention",
  "Connection and belonging",
  "Meaning and direction",
  "Work and financial choices",
  "Awareness and experience",
  "Contribution and stewardship",
  "Awareness",
  "Understanding",
  "Alignment",
  "Practice",
  "Integration",
  "Contribution",
  "Legacy",
  "Ancient Wisdom",
  "Modern Science",
  "Human Experience",
  "Practical Application",
  "Explore Knowledge",
  "Explore Research",
  "Explore Experiences",
  "Explore Community",
  "Explore Global Network",
  "A modern institution born from timeless wisdom.",
  "Begin Your Journey",
  "Life Decoding",
  "Retreats"
];
const overviewRequired = [
  "A Human Transformation Institution for a changing world.",
  "A living ecosystem for human transformation.",
  "Understanding ourselves is a lifelong human question.",
  "Bringing different ways of understanding human life into conversation.",
  "Curious enough to explore. Responsible enough to question.",
  "Understanding becomes meaningful when it enters life.",
  "Different parts. One connected purpose.",
  "Different starting points. A shared curiosity about being human.",
  "A world where human transformation is part of lifelong learning.",
  "Principles matter most when they guide decisions.",
  "Human questions cross borders. Learning can, too.",
  "A question that became an institutional purpose.",
  "An institution built to keep learning.",
  "Explore the questions. Help build the possibility.",
  "Conscious Technology",
  "Inner Alchemy",
  "Life Decoding",
  "does not claim a completed trademark registration"
];
const transformationRequired = [
  "Transformation is not becoming someone else. It is learning to understand and live more fully as yourself.",
  "We can know a great deal about life and still struggle to live the way we want.",
  "Perhaps transformation begins differently.",
  "Transformation is a lifelong human journey.",
  "A framework for understanding the journey.",
  "What am I noticing?",
  "What might this mean?",
  "What matters, and what feels consistent with it?",
  "What can I begin to practise?",
  "How does this become part of the way I live?",
  "How can what I learn serve something beyond myself?",
  "What do I want to nurture or leave behind?",
  "not a diagnostic tool",
  "Growth does not follow a single straight line.",
  "Human life is interconnected.",
  "Understanding becomes meaningful when we find ways to live it.",
  "Different parts of the ecosystem serve different purposes.",
  "What might transformation look like in everyday life?",
  "Begin with the question that matters to you.",
  "Understanding yourself more deeply can begin with a single question.",
  "Inner Alchemy"
];
const missing = required.filter((line) => !home.includes(line));
const missingOverview = overviewRequired.filter((line) => !overview.includes(line));
const decodingRequired = [
  "Understand the patterns shaping your life.",
  "Sometimes, understanding what happened is only the beginning.",
  "Not a verdict about your life. A way to examine it more clearly.",
  "Five lenses for exploring the human experience.",
  "Observe before concluding.",
  "Explore before assuming.",
  "Choose before repeating automatically.",
  "A thoughtful process for exploring recurring patterns.",
  "Understanding a pattern is one step. Learning how to respond differently is another.",
  "A framework for reflection—not a claim to know everything about you.",
  "One question can open several paths of exploration.",
  "Where would you like to begin?",
  "Begin with a question. Stay open to what you discover.",
  "These five dimensions are lenses for inquiry",
  "मैं क्या सोच रहा हूँ",
  "Karma",
  "Consciousness",
  "Human Experience"
];
const hosRequired = [
  "Understand the system. Explore the dimensions. Transform the way you live.",
  "We often try to improve one part of life without understanding the wider picture.",
  "The whole person is more than the sum of separate parts.",
  "Nine dimensions. One interconnected human experience.",
  "How am I caring for and experiencing my physical body?",
  "Work &amp; Wealth",
  "Consciousness",
  "Legacy",
  "Principles for approaching human development with intention.",
  "Holistic",
  "Surrendered",
  "Evolved",
  "From awareness to meaningful action.",
  "Awareness + Acceptance + Alignment + Action + Discipline + Devotion = Transformation",
  "Devotion",
  "A framework becomes useful when it informs what we do next.",
  "Assess",
  "Contribute",
  "seven-stage Human Transformation Framework",
  "Human development benefits from knowledge, practice and appropriate support.",
  "Proven Methods",
  "Small, thoughtful practices can create opportunities for reflection.",
  "Use the system to ask better questions—not to label yourself.",
  "One ecosystem. Three complementary perspectives.",
  "You do not need to understand everything at once. Begin by seeing your life more clearly.",
  "मेरे जीवन के अलग-अलग हिस्से"
];
const missingTransformation = transformationRequired.filter((line) => !transformation.includes(line));
const knowledgeRequired = [
  "Understand more. Explore deeper. Live with greater awareness.",
  "Knowledge becomes more useful when it connects to life.",
  "Understanding the Human Being",
  "Living Well",
  "Meaning and Inner Development",
  "Relationships and Society",
  "Future and Contribution",
  "separate from the nine dimensions",
  "Explore ideas in the format that works for you.",
  "Every deeper understanding begins somewhere.",
  "Ideas worth exploring.",
  "Published work will appear here.",
  "Move from understanding to deeper exploration.",
  "Search the Knowledge Hub",
  "No resources found for this search.",
  "No knowledge resource is published yet.",
  "Continue your exploration.",
  "Let curiosity lead to deeper understanding.",
  "https://curesoullife.org/knowledge"
];
const missingHos = hosRequired.filter((line) => !hos.includes(line));
const researchRequired = [
  "Curiosity opens questions. Integrity guides the search for understanding.",
  "Human questions deserve more than confident answers.",
  "Respect knowledge. Examine claims. Keep learning.",
  "Intellectual Integrity",
  "Exploring the interconnected dimensions of human life.",
  "Psychology and Human Behaviour",
  "Neuroscience and Human Development",
  "Sleep, Movement and Everyday Wellbeing",
  "Different perspectives. Clear distinctions. Responsible interpretation.",
  "Modern Science",
  "Ancient Wisdom",
  "Lived Human Experience",
  "What do we know, and how do we know it?",
  "Research-Supported",
  "Conceptual Framework",
  "Explore the work. Follow the evidence.",
  "A growing body of work",
  "Trust depends on how knowledge is developed and shared.",
  "A thoughtful process from question to publication.",
  "Good questions can bring different disciplines together.",
  "Keep curiosity open. Keep understanding honest.",
  "https://curesoullife.org/research"
];
const missingKnowledge = knowledgeRequired.filter((line) => !knowledge.includes(line));
const experiencesRequired = [
  "Some things are understood through knowledge. Others through experience.",
  "Understanding deepens when we engage with what we learn.",
  "Learn",
  "Different ways to learn, practise and explore.",
  "Guided Practices",
  "Workshops",
  "Structured Programmes",
  "Retreats and Immersions",
  "Events and Shared Learning",
  "Explore what is available.",
  "New experiences will be shared here as they are confirmed.",
  "Thoughtfully designed. Clearly facilitated. Human-centred.",
  "Experience is one part of a wider journey.",
  "Know what you are choosing.",
  "participation in personal sharing remains voluntary",
  "Continue your exploration.",
  "Begin with what you want to understand more deeply.",
  "https://curesoullife.org/experiences"
];
const retreatsRequired = [
  "Retreats &amp; Immersive Experiences | CureSoulLife",
  "A retreat is a pause. What you discover in that pause can stay with you.",
  "https://curesoullife.org/experiences/retreats",
  "Sometimes, understanding begins when we create space to notice.",
  "A thoughtful experience is more than a schedule of activities.",
  "Guided Practices",
  "Reflection and Journaling",
  "Learning and Exploration",
  "Movement and Embodied Awareness",
  "Silence and Pause",
  "Integration and Next Steps",
  "A thoughtful journey, with room for each person to experience it differently.",
  ">Arrive<",
  ">Orient<",
  ">Explore<",
  ">Express<",
  ">Witness<",
  ">Integrate<",
  ">Continue<",
  "Clear Purpose",
  "Thoughtful Structure",
  "Respect for Individual Experience",
  "Responsible Knowledge",
  "Participant Care",
  "Everyday Integration",
  "Explore confirmed retreat experiences.",
  "New retreat experiences will be shared here as they are confirmed.",
  "Know what you are choosing.",
  "Public sharing is never a condition of participation.",
  "A meaningful pause should leave room for a more conscious return to everyday life.",
  "Experience is one part of a wider journey of learning and transformation.",
  "A pause can create space. What matters is what you choose to explore next."
];
const missingResearch = researchRequired.filter((line) => !research.includes(line));
const missingExperiences = experiencesRequired.filter((line) => !experiences.includes(line));
const communityRequired = [
  "CureSoulLife Community | Learning, Practice &amp; Contribution",
  "Transformation is personal. Learning and contribution can be shared.",
  "https://curesoullife.org/community",
  "What we learn individually can gain new meaning when we learn with others.",
  "Shared Learning",
  "Mutual Respect",
  "Responsible Freedom",
  "Meaningful Contribution",
  "Lifelong Belonging",
  "Learn Together",
  "Practise Together",
  "Reflect Together",
  "Serve Together",
  "Grow Together",
  "There is more than one way to belong.",
  "Explore Knowledge",
  "Explore Collaboration",
  "Contact CureSoulLife",
  "From personal curiosity to shared responsibility.",
  "Facilitator or Mentor",
  "Community Partner",
  "Belonging requires care and responsibility.",
  "Privacy and Consent",
  "Responsible Sharing",
  "No community story is published yet.",
  "Shared learning can take many forms.",
  "No community events page is published.",
  "Local understanding. Shared purpose. Responsible collaboration.",
  "Explore the Global Network",
  "Belonging does not require you to be someone else."
];
const missingRetreats = retreatsRequired.filter((line) => !retreats.includes(line));
const networkRequired = [
  "CureSoulLife Global Network | Collaboration &amp; Shared Learning",
  "A shared human purpose can travel across borders.",
  "https://curesoullife.org/community/global-network",
  "Human questions cross borders. Learning should, too.",
  "Shared Purpose",
  "Local Relevance",
  "Responsible Collaboration",
  "One institutional purpose. Many possible forms of participation.",
  "Conceptual network model. These forms of participation may develop at different times and are not a statement of current operational presence.",
  "Digital Connection",
  "Local Learning Circles",
  "City &amp; Regional Networks",
  "National Communities",
  "International Collaboration",
  "Education &amp; Lifelong Learning",
  "Research &amp; Knowledge",
  "Human Development &amp; Practice",
  "Community &amp; Social Impact",
  "Culture &amp; Traditional Knowledge",
  "Technology &amp; Knowledge Infrastructure",
  "Start with a meaningful local connection. Build from there.",
  "This is a suggested development framework, not a promise that CureSoulLife currently operates a formal chapter-approval programme.",
  "Knowledge Contributor",
  "Event Collaborator",
  "Institutional Collaborator",
  "Local Learning Host",
  "Formal Chapter or Network Representative",
  "Trust is built through the way relationships are handled.",
  "Privacy &amp; Consent",
  "Responsible Representation",
  "Our network will grow through meaningful relationships.",
  "A thoughtful enquiry is the beginning of a conversation, not a promise of partnership.",
  "A global network is one part of a wider human transformation ecosystem.",
  "The strength of a network begins with the quality of its relationships."
];
const missingCommunity = communityRequired.filter((line) => !community.includes(line));
const aboutRequired = [
  "About CureSoulLife | Our Mission, Vision &amp; Philosophy",
  "A deeper understanding of being human can change the way we live.",
  "https://curesoullife.org/about",
  "It begins with a question.",
  "Because understanding should become part of how we live.",
  "Knowledge Without Integration",
  "Fragmented Perspectives",
  "Growth Without Continuity",
  "To advance human transformation by bringing together Ancient Wisdom, Modern Science and lived human experience through knowledge, research, practical application and community.",
  "A philosophy built on openness, integration and responsibility.",
  "Conscious Technology",
  "A world where human transformation becomes part of lifelong learning.",
  "Our vision is a world in which understanding oneself, developing consciously and contributing meaningfully become as natural a part of life as formal education.",
  "Values matter when they guide decisions.",
  ">Integrity<",
  ">Compassion<",
  ">Curiosity<",
  ">Evidence<",
  ">Responsibility<",
  ">Service<",
  ">Collaboration<",
  ">Stewardship<",
  "From thoughtful questions to meaningful application.",
  "One institution. Many connected ways to explore human transformation.",
  "For people who want to understand, learn and contribute.",
  "Build something that can continue to serve.",
  "Trust is built through what an institution does—and what it says honestly.",
  "An institutional vision that must grow beyond one individual.",
  "Meet the Founder",
  "The future of human transformation begins with the questions we choose to explore."
];
const missingNetwork = networkRequired.filter((line) => !network.includes(line));
const founderRequired = [
  "Sarvesh Mishra | Founder of CureSoulLife",
  "https://curesoullife.org/about/founder",
  ">Sarvesh Mishra<",
  "Life Decoder",
  "Inner Alchemy Architect",
  "Founder, CureSoulLife",
  "Media, IP &amp; Wellness Entrepreneur",
  "Swatantra Chetna — Writer",
  "News24 — Trainee, Assignment Desk, 2009–2010.",
  "P7 News — Assistant Producer, Assignment Desk, 2010–2011.",
  "Zee News — Principal Correspondent.",
  "2006–2007",
  "2011–2017",
  "A career in storytelling. A growing interest in the human story.",
  "What shapes the way we think, feel, choose and live?",
  "Why do people interpret similar experiences differently?",
  "Look beyond the event. Explore the pattern.",
  "Experience → Observation → Reflection → Possible Understanding",
  "not a validated clinical protocol",
  "Understanding matters when it changes how we engage with life.",
  "not a scientific credential",
  "The purpose is bigger than the person who begins it.",
  "Vision &amp; Direction",
  "Frameworks &amp; Knowledge",
  "Institution Building",
  "The founder introduces the purpose. The institution must earn its own trust.",
  "The Sarvesh Mishra Show",
  "The Inner Wealth",
  "The Urban Sannyasi",
  "Stay curious. Think carefully. Act responsibly.",
  "A continuing inquiry into what it means to live consciously.",
  "A personal note from Sarvesh Mishra is not published on this page.",
  "Explore the purpose beyond the person."
];
const missingAbout = aboutRequired.filter((line) => !about.includes(line));
const missingFounder = founderRequired.filter((line) => !founder.includes(line));
if (retreats.includes("Life Reset") || retreats.includes("LIFE RESET")) bad.push("retreats page publishes Life Reset without approval");
if (community.includes("/community/stories") || community.includes("/community/events") || community.includes("Join our global community") || community.includes("Meet our members")) bad.push("community page publishes an unapproved claim or route");
if (network.includes("Our Partners") || network.includes("operating worldwide")) bad.push("global network page publishes an unapproved presence claim");
if (about.includes("practices/index.html")) bad.push("about page links to an unapproved Practices route");
if (founder.includes("I see human transformation as a lifelong process") || founder.includes("I do not see it as a finished answer") || founder.includes("I do not see human transformation as a single answer") || founder.includes("My work has moved through media")) bad.push("founder page publishes the unapproved first-person note");
const missingDecoding = decodingRequired.filter((line) => !decoding.includes(line));
const approvedRoutes = [
  ["index.html", "https://curesoullife.org/"],
  ["curesoullife/index.html", "https://curesoullife.org/curesoullife"],
  ["human-transformation/index.html", "https://curesoullife.org/human-transformation"],
  ["human-transformation/life-decoding/index.html", "https://curesoullife.org/human-transformation/life-decoding"],
  ["human-operating-system/index.html", "https://curesoullife.org/human-operating-system"],
  ["knowledge/index.html", "https://curesoullife.org/knowledge"],
  ["research/index.html", "https://curesoullife.org/research"],
  ["experiences/index.html", "https://curesoullife.org/experiences"],
  ["experiences/retreats/index.html", "https://curesoullife.org/experiences/retreats"],
  ["community/index.html", "https://curesoullife.org/community"],
  ["community/global-network/index.html", "https://curesoullife.org/community/global-network"],
  ["about/index.html", "https://curesoullife.org/about"],
  ["about/founder/index.html", "https://curesoullife.org/about/founder"],
  ["contact/index.html", "https://curesoullife.org/contact"]
];
const sitemap = fs.existsSync(path.join(root, "sitemap.xml")) ? fs.readFileSync(path.join(root, "sitemap.xml"), "utf8") : "";
const robots = fs.existsSync(path.join(root, "robots.txt")) ? fs.readFileSync(path.join(root, "robots.txt"), "utf8") : "";
if (!sitemap) bad.push("sitemap.xml missing");
if (/Disallow:\s*\//.test(robots)) bad.push("robots.txt blocks the public site");
if (!robots.includes("Sitemap: https://curesoullife.org/sitemap.xml")) bad.push("robots.txt does not name the sitemap");
if (files.length !== approvedRoutes.length) bad.push(`expected ${approvedRoutes.length} public pages, found ${files.length}`);
for (const [file, canonical] of approvedRoutes) {
  const full = path.join(root, file);
  if (!fs.existsSync(full)) {
    bad.push(`missing route ${file}`);
    continue;
  }
  const html = fs.readFileSync(full, "utf8");
  const h1Count = (html.match(/<h1\b/g) || []).length;
  if (h1Count !== 1) bad.push(`${file} has ${h1Count} h1 elements`);
  if (!html.includes(`rel="canonical" href="${canonical}"`)) bad.push(`${file} canonical is not ${canonical}`);
  if (!sitemap.includes(`<loc>${canonical}</loc>`)) bad.push(`sitemap missing ${canonical}`);
  if (!html.includes('aria-label="Primary"') || !html.includes("Human transformation is a lifelong journey.")) bad.push(`${file} is missing the shared header or footer`);
}
const contactHtml = fs.readFileSync(path.join(root, "contact/index.html"), "utf8");
if (contactHtml.includes("Your enquiry has been received")) bad.push("contact page shows a receipt that was not confirmed");
if (contactHtml.includes("mailto:") || contactHtml.includes("@curesoullife.org")) bad.push("contact page publishes an unverified address");
if (!contactHtml.includes("No verified delivery channel is connected")) bad.push("contact page does not state that delivery is unavailable");
if (!contactHtml.includes("The Privacy Policy is not published")) bad.push("contact page does not state that the privacy policy is unpublished");
console.log(`pages ${files.length}`);
console.log(bad.length ? bad.join("\n") : "links ok");
console.log(missing.length ? `missing:\n${missing.join("\n")}` : "copy ok");
console.log(missingOverview.length ? `overview missing:\n${missingOverview.join("\n")}` : "overview ok");
console.log(missingTransformation.length ? `transformation missing:\n${missingTransformation.join("\n")}` : "transformation ok");
console.log(missingDecoding.length ? `decoding missing:\n${missingDecoding.join("\n")}` : "decoding ok");
console.log(missingHos.length ? `hos missing:\n${missingHos.join("\n")}` : "hos ok");
console.log(missingKnowledge.length ? `knowledge missing:\n${missingKnowledge.join("\n")}` : "knowledge ok");
console.log(missingResearch.length ? `research missing:\n${missingResearch.join("\n")}` : "research ok");
console.log(missingExperiences.length ? `experiences missing:\n${missingExperiences.join("\n")}` : "experiences ok");
console.log(missingRetreats.length ? `retreats missing:\n${missingRetreats.join("\n")}` : "retreats ok");
console.log(missingCommunity.length ? `community missing:\n${missingCommunity.join("\n")}` : "community ok");
console.log(missingNetwork.length ? `network missing:\n${missingNetwork.join("\n")}` : "network ok");
console.log(missingAbout.length ? `about missing:\n${missingAbout.join("\n")}` : "about ok");
console.log(missingFounder.length ? `founder missing:\n${missingFounder.join("\n")}` : "founder ok");
if (bad.length || missing.length || missingOverview.length || missingTransformation.length || missingDecoding.length || missingHos.length || missingKnowledge.length || missingResearch.length || missingExperiences.length || missingRetreats.length || missingCommunity.length || missingNetwork.length || missingAbout.length || missingFounder.length) process.exit(1);
