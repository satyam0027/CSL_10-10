import fs from "fs";
import path from "path";

const root = path.resolve("D:/CSL 10-10");
const skip = new Set(["scripts", "_docx_extract", "_preview", "node_modules"]);

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(ent.name) || ent.name.startsWith(".")) continue;
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
    if (rel.startsWith("#") || rel.startsWith("http") || rel.startsWith("mailto")) continue;
    const clean = decodeURIComponent(rel.split("#")[0].split("?")[0]);
    const target = path.normalize(path.join(dir, clean));
    if (!target.startsWith(root)) bad.push(`${path.relative(root, file)} escapes via ${rel}`);
    else if (!fs.existsSync(target)) bad.push(`${path.relative(root, file)} -> ${rel}`);
  }
}

const home = fs.readFileSync(path.join(root, "index.html"), "utf8");
const required = [
  "A deeper way to understand being human.",
  "Nine interconnected dimensions of human life.",
  "Transformation is a lifelong journey.",
  "Four perspectives. A more integrated understanding.",
  "Be part of a more conscious human future.",
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
  "Privacy Policy",
  "Terms of Use",
  "Disclaimer",
  "Life Decoding",
  "Retreats"
];
const missing = required.filter((line) => !home.includes(line));
console.log(`pages ${files.length}`);
console.log(bad.length ? bad.join("\n") : "links ok");
console.log(missing.length ? `missing:\n${missing.join("\n")}` : "copy ok");
if (bad.length || missing.length) process.exit(1);
