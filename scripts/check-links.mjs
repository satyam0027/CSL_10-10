import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
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
  "Understand Yourself. Transform Your Life.",
  "Explore a more conscious way of living through self-awareness, ancient wisdom, modern understanding and meaningful daily practices.",
  "Heal. Grow. Awaken. Transform.",
  "Explore Our Programs",
  "Discover Personal Guidance",
  "Nine interconnected dimensions of human life.",
  "Transformation is a lifelong journey.",
  "Four perspectives. A more integrated understanding.",
  "We have never known more. Yet many of us are struggling to live well.",
  "What would become possible if you understood yourself more deeply?",
  "The Human Operating System™ is a conceptual framework for exploring interconnected dimensions of human life.",
  "Meet the Founder",
  "Sarvesh Mishra",
  "Media, IP &amp; Wellness Entrepreneur",
  "Founder, CureSoulLife",
  "Creator of Human Operating System™",
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
  "programs/index.html",
  "programs/life-reset-7/index.html",
  "programs/life-reset-one-day/index.html",
  "programs/inner-balance-transformation/index.html",
  "Registration is closed.",
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
  "Sarvesh Mishra — Media, IP &amp; Wellness Entrepreneur | CureSoulLife",
  "https://curesoullife.org/about/founder",
  ">Sarvesh Mishra<",
  "Sarvesh Mishra — Media, IP &amp; Wellness Entrepreneur",
  "Founder, CureSoulLife",
  "Creator of Human Operating System™",
  "Media, IP &amp; Wellness Entrepreneur",
  "Swatantra Chetna — Writer",
  "News24 — Trainee, Assignment Desk, 2009–2010.",
  "P7 News — Assistant Producer, Assignment Desk, 2010–2011.",
  "Zee News — Principal Correspondent.",
  "2006–2007",
  "2011–2017",
  "From Understanding the World to Understanding Human Life",
  "A Journey Across Media, Entrepreneurship and Human Understanding",
  "founder of Red Hot Media House",
  "The Vision Behind CureSoulLife",
  "What if people could understand the patterns shaping their lives and make more conscious choices about how they live?",
  "The purpose is bigger than the person who begins it.",
  "not as a medical diagnostic system",
  "Life Decoding",
  "Inner Alchemy",
  "not a scientific credential",
  "A Broader Vision",
  "The Sarvesh Mishra Show",
  "The Inner Wealth",
  "The Urban Sannyasi",
  "A Message from the Founder",
  "I believe that understanding ourselves is one of the most important journeys we can undertake.",
  "My vision for CureSoulLife is to create a space where people can explore this journey with curiosity, responsibility and a deeper understanding of life."
];
const missingAbout = aboutRequired.filter((line) => !about.includes(line));
const missingFounder = founderRequired.filter((line) => !founder.includes(line));
if (retreats.includes("Life Reset") || retreats.includes("LIFE RESET")) bad.push("retreats page publishes Life Reset without approval");
if (community.includes("/community/stories") || community.includes("/community/events") || community.includes("Join our global community") || community.includes("Meet our members")) bad.push("community page publishes an unapproved claim or route");
if (network.includes("Our Partners") || network.includes("operating worldwide")) bad.push("global network page publishes an unapproved presence claim");
if (/(^|[^a-z-])practices\/index\.html/.test(about)) bad.push("about page links to an unapproved Practices route");
if (founder.includes("I see human transformation as a lifelong process") || founder.includes("I do not see it as a finished answer") || founder.includes("I do not see human transformation as a single answer") || founder.includes("My work has moved through media") || founder.includes("I believe that meaningful transformation begins") || founder.includes("An approved photograph has not been supplied") || founder.includes("This monogram is not a portrait") || founder.includes("A first-person note is not published yet") || founder.includes("does not present that draft as his statement")) bad.push("founder page publishes an unapproved note or an editorial placeholder");
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
  ["experiences/stories/index.html", "https://curesoullife.org/experiences/stories"],
  ["guided-practices/index.html", "https://curesoullife.org/guided-practices"],
  ["personal-guidance/index.html", "https://curesoullife.org/personal-guidance"],
  ["programs/index.html", "https://curesoullife.org/programs"],
  ["programs/life-reset-7/index.html", "https://curesoullife.org/programs/life-reset-7"],
  ["programs/life-reset-one-day/index.html", "https://curesoullife.org/programs/life-reset-one-day"],
  ["programs/inner-balance-transformation/index.html", "https://curesoullife.org/programs/inner-balance-transformation"],
  ["experiences/retreats/index.html", "https://curesoullife.org/experiences/retreats"],
  ["community/index.html", "https://curesoullife.org/community"],
  ["community/global-network/index.html", "https://curesoullife.org/community/global-network"],
  ["about/index.html", "https://curesoullife.org/about"],
  ["about/founder/index.html", "https://curesoullife.org/about/founder"],
  ["contact/index.html", "https://curesoullife.org/contact"],
  ["blog/index.html", "https://curesoullife.org/blog"],
  ["blog/how-to-understand-yourself-better/index.html", "https://curesoullife.org/blog/how-to-understand-yourself-better"],
  ["blog/how-to-build-an-unbreakable-mindset/index.html", "https://curesoullife.org/blog/how-to-build-an-unbreakable-mindset"],
  ["blog/human-transformation-journey-of-self-discovery/index.html", "https://curesoullife.org/blog/human-transformation-journey-of-self-discovery"],
  ["blog/how-to-stop-overthinking-and-find-mental-peace/index.html", "https://curesoullife.org/blog/how-to-stop-overthinking-and-find-mental-peace"],
  ["blog/how-to-let-go-of-the-past-and-move-forward/index.html", "https://curesoullife.org/blog/how-to-let-go-of-the-past-and-move-forward"],
  ["blog/how-to-build-a-healthy-daily-routine/index.html", "https://curesoullife.org/blog/how-to-build-a-healthy-daily-routine"],
  ["blog/understanding-conscious-living/index.html", "https://curesoullife.org/blog/understanding-conscious-living"],
  ["blog/how-silence-can-help-you-understand-yourself-better/index.html", "https://curesoullife.org/blog/how-silence-can-help-you-understand-yourself-better"],
  ["privacy-policy/index.html", "https://curesoullife.org/privacy-policy"],
  ["terms-of-use/index.html", "https://curesoullife.org/terms-of-use"],
  ["wellness-disclaimer/index.html", "https://curesoullife.org/wellness-disclaimer"]
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
const blogHtml = fs.readFileSync(path.join(root, "blog/index.html"), "utf8");
const blogArticle = fs.readFileSync(path.join(root, "blog/how-to-understand-yourself-better/index.html"), "utf8");
const blogMindset = fs.readFileSync(path.join(root, "blog/how-to-build-an-unbreakable-mindset/index.html"), "utf8");
const blogJourneyHtml = fs.readFileSync(path.join(root, "blog/human-transformation-journey-of-self-discovery/index.html"), "utf8");
const blogPeaceHtml = fs.readFileSync(path.join(root, "blog/how-to-stop-overthinking-and-find-mental-peace/index.html"), "utf8");
const blogLetGoHtml = fs.readFileSync(path.join(root, "blog/how-to-let-go-of-the-past-and-move-forward/index.html"), "utf8");
const blogRoutineHtml = fs.readFileSync(path.join(root, "blog/how-to-build-a-healthy-daily-routine/index.html"), "utf8");
const blogConsciousHtml = fs.readFileSync(path.join(root, "blog/understanding-conscious-living/index.html"), "utf8");
const blogSilenceHtml = fs.readFileSync(path.join(root, "blog/how-silence-can-help-you-understand-yourself-better/index.html"), "utf8");
const blogRequired = [
  "The CureSoulLife blog",
  "how-to-understand-yourself-better",
  "how-to-build-an-unbreakable-mindset",
  "human-transformation-journey-of-self-discovery",
  "how-to-stop-overthinking-and-find-mental-peace",
  "how-to-let-go-of-the-past-and-move-forward",
  "how-to-build-a-healthy-daily-routine",
  "understanding-conscious-living",
  "how-silence-can-help-you-understand-yourself-better",
  "assets/images/blog-silence-self-awareness.jpg",
  "assets/images/blog-conscious-living.jpg",
  "assets/images/blog-healthy-daily-routine.jpg",
  "assets/images/blog-let-go-of-the-past.jpg",
  "assets/images/blog-unbreakable-mindset.jpg",
  "assets/images/blog-human-transformation.jpg",
  "assets/images/blog-stop-overthinking.jpg",
  "How to Understand Yourself Better: A Practical Guide to Self-Awareness",
  "How to Build an Unbreakable Mindset When Life Doesn't Go as Planned",
  "Human Transformation: The Journey of Becoming Your True Self",
  "How to Stop Overthinking and Find Mental Peace: 10 Effective Ways to Calm Your Mind",
  "How to Let Go of the Past and Move Forward in Life: 10 Practical Ways",
  "How to Build a Healthy Daily Routine: 10 Simple Habits for a Better Life",
  "Understanding Conscious Living: Meaning, Benefits and How to Practise It in Everyday Life",
  "How Silence Can Help You Understand Yourself Better: The Power of Inner Awareness",
  "https://curesoullife.org/blog"
];
const missingBlog = blogRequired.filter((line) => !blogHtml.includes(line));
const articleRequired = [
  ["self-awareness is not something you either have or lack.", blogArticle],
  ["How to Understand Yourself Better: A Practical Guide to Self-Awareness", blogArticle],
  ["assets/images/blog-understand-yourself.jpg", blogArticle],
  ["https://curesoullife.org/blog/how-to-understand-yourself-better", blogArticle],
  ["mindset is not a personality trait you are born with.", blogMindset],
  ["How to Build an Unbreakable Mindset When Life Doesn't Go as Planned", blogMindset],
  ["assets/images/blog-unbreakable-mindset.jpg", blogMindset],
  ["https://curesoullife.org/blog/how-to-build-an-unbreakable-mindset", blogMindset],
  ["meaningful transformation begins when a person starts looking within.", blogJourneyHtml],
  ["Human Transformation: The Journey of Becoming Your True Self", blogJourneyHtml],
  ["assets/images/blog-human-transformation.jpg", blogJourneyHtml],
  ["https://curesoullife.org/blog/human-transformation-journey-of-self-discovery", blogJourneyHtml],
  ["not about making your mind completely empty.", blogPeaceHtml],
  ["How to Stop Overthinking and Find Mental Peace: 10 Effective Ways to Calm Your Mind", blogPeaceHtml],
  ["assets/images/blog-stop-overthinking.jpg", blogPeaceHtml],
  ["https://curesoullife.org/blog/how-to-stop-overthinking-and-find-mental-peace", blogPeaceHtml],
  ["does not mean forgetting what happened.", blogLetGoHtml],
  ["How to Let Go of the Past and Move Forward in Life: 10 Practical Ways", blogLetGoHtml],
  ["assets/images/blog-let-go-of-the-past.jpg", blogLetGoHtml],
  ["https://curesoullife.org/blog/how-to-let-go-of-the-past-and-move-forward", blogLetGoHtml],
  ["supports your physical health, mental well-being, productivity and personal growth.", blogRoutineHtml],
  ["How to Build a Healthy Daily Routine: 10 Simple Habits for a Better Life", blogRoutineHtml],
  ["assets/images/blog-healthy-daily-routine.jpg", blogRoutineHtml],
  ["https://curesoullife.org/blog/how-to-build-a-healthy-daily-routine", blogRoutineHtml],
  ["becoming more aware of your thoughts, emotions, decisions, habits and surroundings", blogConsciousHtml],
  ["Understanding Conscious Living: Meaning, Benefits and How to Practise It in Everyday Life", blogConsciousHtml],
  ["assets/images/blog-conscious-living.jpg", blogConsciousHtml],
  ["https://curesoullife.org/blog/understanding-conscious-living", blogConsciousHtml],
  ["observe our thoughts, recognise our emotions and develop a deeper understanding of who we are.", blogSilenceHtml],
  ["How Silence Can Help You Understand Yourself Better: The Power of Inner Awareness", blogSilenceHtml],
  ["assets/images/blog-silence-self-awareness.jpg", blogSilenceHtml],
  ["https://curesoullife.org/blog/how-silence-can-help-you-understand-yourself-better", blogSilenceHtml]
];
for (const [line, html] of articleRequired) {
  if (!html.includes(line)) missingBlog.push(line);
}
const blogBan = "Posted on|min read|Leave a comment";
if (new RegExp(blogBan).test(blogHtml) || new RegExp(blogBan).test(blogArticle) || new RegExp(blogBan).test(blogMindset) || new RegExp(blogBan).test(blogJourneyHtml) || new RegExp(blogBan).test(blogPeaceHtml) || new RegExp(blogBan).test(blogLetGoHtml) || new RegExp(blogBan).test(blogRoutineHtml) || new RegExp(blogBan).test(blogConsciousHtml) || new RegExp(blogBan).test(blogSilenceHtml)) bad.push("blog publishes an unapproved byline, reading time, or comment prompt");
const storiesHtml = fs.existsSync(path.join(root, "experiences/stories/index.html")) ? fs.readFileSync(path.join(root, "experiences/stories/index.html"), "utf8") : "";
const practicesHtml = fs.existsSync(path.join(root, "guided-practices/index.html")) ? fs.readFileSync(path.join(root, "guided-practices/index.html"), "utf8") : "";
const homeReviewLines = [
  "Krishna Davi",
  "Aastha Yadav",
  "Dharma Raj",
  "much deeper level",
  "Thankyou so much sir",
  "best investments",
  "Google review",
  "5 out of 5 stars",
  "experiences/stories/index.html",
  "They do not establish a typical result"
];
for (const line of homeReviewLines) {
  if (!home.includes(line)) bad.push(`homepage is missing approved review text: ${line}`);
}
if (home.includes("Smart Infovision") || home.includes("Satwik Mishra") || home.includes("remarkable personality") || home.includes("very holistic")) bad.push("homepage publishes a review reserved for the stories page");
if (home.includes("No reflection is published yet.") || home.includes("No recording is published yet.") || home.includes(">Listen<") || home.includes(">Play<") || home.includes('id="home-practices"')) bad.push("homepage shows an empty stories or practices section");
if (home.includes("months ago") || home.includes("a month ago")) bad.push("homepage publishes a relative review date");
const storyLines = [
  "Real People. Personal Journeys. Meaningful Reflections.",
  "Every personal journey is different. These reflections share individual experiences of guidance, self-understanding and personal growth.",
  "Aastha Yadav",
  "Smart Infovision",
  "Krishna Davi",
  "Satwik Mishra",
  "Dharma Raj",
  "Thankyou so much sir",
  "remarkable personality",
  "much deeper level",
  "very holistic",
  "best investments",
  "This is not a review of a particular program.",
  "It is not attributed to one course.",
  "Google review",
  "5 out of 5 stars",
  "They do not establish a typical result"
];
for (const line of storyLines) {
  if (!storiesHtml.includes(line)) bad.push(`stories page is missing approved text: ${line}`);
}
if ((storiesHtml.match(/5 out of 5 stars/g) || []).length !== 5) bad.push("stories page does not show five verified ratings");
if (storiesHtml.includes("months ago") || storiesHtml.includes("a month ago") || storiesHtml.includes("Local Guide") || storiesHtml.includes("google.com") || storiesHtml.includes("maps.app")) bad.push("stories page publishes a date, profile count, or invented review URL");
const withheldPracticeTitles = ["Yoga Nidra", "Deep Sleep Meditation", "Sleep Body Scan", "Nervous System Reset", "Progressive Muscle Relaxation", "Overthinking Reset", "Inner Silence Meditation", "Mental Clarity", "Emotional Release"];
for (const title of withheldPracticeTitles) {
  if (practicesHtml.includes(title) || home.includes(title)) bad.push(`unpublished practice is public: ${title}`);
}
if (!practicesHtml.includes("The library is being developed.") || !practicesHtml.includes("Rest &amp; Sleep") || !practicesHtml.includes("Calm &amp; Grounding") || !practicesHtml.includes("Awareness &amp; Clarity")) bad.push("guided practices page is missing the library introduction");
if (practicesHtml.includes(">Listen<") || practicesHtml.includes(">Play<") || practicesHtml.includes("<audio") || practicesHtml.includes(".mp3") || practicesHtml.includes("No recording is published yet.")) bad.push("guided practices page shows a player or an empty-state card");
if (!experiences.includes("guided-practices/index.html") || !experiences.includes("experiences/stories/index.html")) bad.push("experiences page is missing a stories or guided-practices link");
if (!founder.includes("experiences/stories/index.html")) bad.push("founder page is missing the stories link");
if (!fs.readFileSync(path.join(root, "personal-guidance/index.html"), "utf8").includes("experiences/stories/index.html")) bad.push("personal guidance page is missing the stories link");
if (home.includes("Approved photograph to be placed here") || home.includes("No stories are listed yet.")) bad.push("homepage still shows a development placeholder");
const contactHtml = fs.readFileSync(path.join(root, "contact/index.html"), "utf8");
if (contactHtml.includes("Your enquiry has been received")) bad.push("contact page shows a receipt that was not confirmed");
if (contactHtml.includes("mailto:") || contactHtml.includes("@curesoullife.org")) bad.push("contact page publishes an unverified address");
if (!contactHtml.includes("curesoullife@gmail.com")) bad.push("contact page does not name the temporary enquiry inbox");
if (!contactHtml.includes("FormSubmit")) bad.push("contact page does not name the form provider");
if (!contactHtml.includes("Send enquiry")) bad.push("contact page does not offer to send an enquiry");
if (!contactHtml.includes('data-delivery="ready"')) bad.push("contact form is not ready to send");
if (/id="full-name"[^>]*disabled/.test(contactHtml)) bad.push("contact form fields are disabled");
if (contactHtml.includes("formsubmit.co")) bad.push("contact page contains a FormSubmit endpoint");
if (contactHtml.includes("temporarily unavailable")) bad.push("contact page still says submission is unavailable");
if (!contactHtml.includes("not an approved policy")) bad.push("contact page does not state that the privacy policy is an unapproved draft");
const guidanceHtml = fs.readFileSync(path.join(root, "personal-guidance/index.html"), "utf8");
const guidanceRequired = [
  "https://curesoullife.org/personal-guidance",
  "Understand Your Patterns. Find Your Direction.",
  "Personal guidance for self-awareness, life clarity, conscious decision-making and meaningful personal growth.",
  "CureSoulLife · Personal Guidance",
  "Guided by",
  "Founder, CureSoulLife",
  "about/founder/index.html",
  "human-operating-system/index.html",
  "contact/index.html",
  "Areas of guidance",
  "Relationships &amp; Marriage",
  "Overthinking &amp; Personal Clarity",
  "Life Transitions &amp; Difficult Decisions",
  "Career &amp; Business Clarity",
  "Self-Awareness &amp; Personal Growth",
  "Our approach",
  "Listen &amp; Understand",
  "Explore the Patterns",
  "Find Clarity",
  "Choose the Next Steps",
  "no universal formula or guaranteed outcome",
  "A human-centred conversation",
  "Who is this for?",
  "not a replacement for licensed mental health care",
  "suicidal thoughts",
  "curesoullife@gmail.com",
  "The owner has confirmed that this mailbox receives email",
  "send an enquiry from the contact page",
  "Heal. Grow. Awaken. Transform."
];
const missingGuidance = guidanceRequired.filter((line) => !guidanceHtml.includes(line));
if (guidanceHtml.includes("mailto:") || guidanceHtml.includes("confidential") || /psychotherapy|psychiatric|counselling|counseling/i.test(guidanceHtml) || /₹|\$\d|per session/.test(guidanceHtml)) bad.push("personal guidance page publishes an unapproved claim, clinical term, booking link, or fee");
if (missingGuidance.length) bad.push(`personal guidance page is missing approved copy: ${missingGuidance.join(" | ")}`);
const programFiles = [
  "programs/index.html",
  "programs/life-reset-7/index.html",
  "programs/life-reset-one-day/index.html",
  "programs/inner-balance-transformation/index.html"
];
const programHtml = Object.fromEntries(programFiles.map((file) => [file, fs.readFileSync(path.join(root, file), "utf8")]));
const programRequired = {
  "programs/index.html": [
    "https://curesoullife.org/programs",
    "Programs | CureSoulLife",
    "Life Reset 7",
    "LIFE RESET — A Day to Pause, Reconnect &amp; Restart",
    "INNER BALANCE &amp; TRANSFORMATION",
    "Program developed",
    "Previous delivery",
    "Registration is closed.",
    "Closed registration does not show whether a program has been conducted before.",
    "not a replacement for licensed mental health care",
    "suicidal thoughts"
  ],
  "programs/life-reset-7/index.html": [
    "https://curesoullife.org/programs/life-reset-7",
    "Life Reset 7",
    "7-Day Online Guided Experience",
    "brain, body, relationships, wealth and energy",
    "Program developed",
    "A completed cohort is not recorded on this page.",
    "Registration",
    "Closed.",
    "Who it is for",
    "Learning and experience objectives",
    "Core experience areas",
    ">Brain<",
    "Awareness of thought patterns and mindset",
    ">Body<",
    "Physical habits, energy sources and lifestyle",
    ">Relationships<",
    "Facts and stories in family and work ties",
    ">Wealth<",
    "Money beliefs and blocks",
    ">Energy<",
    "Meditation, yoga and ancient wisdom practices",
    "not a confirmed day-by-day curriculum",
    "Format and delivery",
    "Facilitation",
    "Sarvesh Mishra",
    "about/founder/index.html",
    "human-operating-system/index.html",
    "not a replacement for licensed mental health care",
    "suicidal thoughts",
    "curesoullife@gmail.com",
    "The owner has confirmed that this mailbox receives email",
    "send an enquiry from the contact page"
  ],
  "programs/life-reset-one-day/index.html": [
    "https://curesoullife.org/programs/life-reset-one-day",
    "LIFE RESET — A Day to Pause, Reconnect &amp; Restart",
    "One-Day In-Person Retreat",
    "pause, reflect and reconnect with what matters",
    "not on becoming a different person in a single day",
    ">Pause<",
    ">Guided experience<",
    "guided practices and learning",
    ">Reflection<",
    ">Integration<",
    "A timed session plan is not published.",
    "A named practice is not published.",
    "A facilitator for this retreat has not been published.",
    "Registration",
    "Closed.",
    "not a replacement for licensed mental health care",
    "curesoullife@gmail.com",
    "The owner has confirmed that this mailbox receives email",
    "send an enquiry from the contact page"
  ],
  "programs/inner-balance-transformation/index.html": [
    "https://curesoullife.org/programs/inner-balance-transformation",
    "INNER BALANCE &amp; TRANSFORMATION",
    "9-Day Online Guided Program",
    "sustained reflection",
    "inner balance and behavioural awareness",
    "Sustained reflection",
    "Inner balance",
    "Behavioural awareness",
    "A session-by-session curriculum is not published.",
    "are not assigned to days of this program",
    "Life Reset 7",
    "A facilitator for this program has not been published.",
    "human-operating-system/index.html",
    "Registration",
    "Closed.",
    "not a replacement for licensed mental health care",
    "curesoullife@gmail.com",
    "The owner has confirmed that this mailbox receives email",
    "send an enquiry from the contact page"
  ]
};
for (const [file, lines] of Object.entries(programRequired)) {
  const missingProgram = lines.filter((line) => !programHtml[file].includes(line));
  if (missingProgram.length) bad.push(`${file} is missing approved copy: ${missingProgram.join(" | ")}`);
  if (/mailto:|confidential|psychotherapy|psychiatric|counselling|counseling|₹|\$\d|per session|Register now|Book now/i.test(programHtml[file])) bad.push(`${file} publishes an unapproved claim, clinical term, booking link, or fee`);
}
if (!contactHtml.includes('id="full-name"') || !contactHtml.includes('id="email"') || !contactHtml.includes('id="country"') || !contactHtml.includes('id="enquiry-type"') || !contactHtml.includes('id="message"') || !contactHtml.includes('id="telephone"') || !contactHtml.includes('id="privacy"')) bad.push("contact form is missing a prepared field");
if (/<form[^>]*\baction=/.test(contactHtml)) bad.push("contact form has a submission action");
const aboutHtml = fs.readFileSync(path.join(root, "about/index.html"), "utf8");
if (aboutHtml.includes("not yet connected to a working submission service")) bad.push("about page still says the enquiry form is not connected");
if (!aboutHtml.includes("An enquiry can be sent from the contact page.")) bad.push("about page does not say an enquiry can be sent");
if (aboutHtml.includes("The contact form emails the enquiry")) bad.push("about page says the form sends email");
const mainJs = fs.readFileSync(path.join(root, "js/main.js"), "utf8");
if (mainJs.includes("formsubmit.co")) bad.push("enquiry script names FormSubmit");
if (mainJs.includes("fetch(") && !mainJs.includes('fetch("/api/enquiry"')) bad.push("enquiry script can transmit a form to an unapproved address");
if (!mainJs.includes('data-delivery") !== "ready"')) bad.push("enquiry script does not check that delivery is ready");
const enquiryApi = fs.readFileSync(path.join(root, "api/enquiry.js"), "utf8");
if (!enquiryApi.includes("export default")) bad.push("enquiry function was removed");
if (!enquiryApi.includes("formsubmit.co/ajax/")) bad.push("enquiry function does not deliver through FormSubmit");
if (enquiryApi.includes("_captcha")) bad.push("enquiry function changes FormSubmit captcha settings");
if (enquiryApi.includes("submission_paused")) bad.push("enquiry function still pauses a valid enquiry");
for (const file of ["privacy-policy/index.html", "terms-of-use/index.html", "wellness-disclaimer/index.html"]) {
  const policyHtml = fs.readFileSync(path.join(root, file), "utf8");
  const visible = policyHtml.split("curesoullife@gmail.com").join("");
  if (!policyHtml.includes("pending owner and legal approval") || !policyHtml.includes("not an approved policy")) bad.push(`${file} is not labelled as an unapproved draft`);
  if (policyHtml.includes("mailto:") || /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(visible)) bad.push(`${file} publishes an address`);
}
const footerSample = fs.readFileSync(path.join(root, "index.html"), "utf8");
for (const href of ["privacy-policy/index.html", "terms-of-use/index.html", "wellness-disclaimer/index.html"]) {
  if (!footerSample.includes(href)) bad.push(`footer is missing ${href}`);
}
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
console.log(missingBlog.length ? `blog missing:\n${missingBlog.join("\n")}` : "blog ok");
if (bad.length || missing.length || missingOverview.length || missingTransformation.length || missingDecoding.length || missingHos.length || missingKnowledge.length || missingResearch.length || missingExperiences.length || missingRetreats.length || missingCommunity.length || missingNetwork.length || missingAbout.length || missingFounder.length || missingBlog.length) process.exit(1);
