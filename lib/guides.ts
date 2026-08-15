import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  type Guide,
  type GuideCaseStudy,
  type GuideContent,
  type GuideFaq,
  type GuideFrontmatter,
  type GuideStep,
  type GuideStepBlock,
} from "@/lib/guide-constants";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");
const REQUIRES_PATTERN = /^\*\*Requires Claude/;

function walkMarkdownFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkMarkdownFiles(fullPath);
    return entry.name.endsWith(".md") ? [fullPath] : [];
  });
}

function stripTrailingRule(text: string): string {
  return text.replace(/\n{0,2}[-*_]{3,}\s*$/, "").trim();
}

function getSection(body: string, heading: string): string {
  const pattern = new RegExp(
    `^##\\s+${heading}\\s*$([\\s\\S]*?)(?=^##\\s+|$(?![\\s\\S]))`,
    "m",
  );
  const match = body.match(pattern);
  return match ? stripTrailingRule(match[1]) : "";
}

/** Splits a block of markdown into ordered markdown/requirement-callout paragraphs. */
function splitOutRequirementNotes(text: string): GuideStepBlock[] {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const blocks: GuideStepBlock[] = [];
  let buffer: string[] = [];

  const flush = () => {
    if (buffer.length) {
      blocks.push({ type: "markdown", content: buffer.join("\n\n") });
      buffer = [];
    }
  };

  for (const paragraph of paragraphs) {
    if (REQUIRES_PATTERN.test(paragraph)) {
      flush();
      blocks.push({ type: "requirement", content: paragraph });
    } else {
      buffer.push(paragraph);
    }
  }
  flush();

  return blocks;
}

function parseCovers(raw: string): { whatThisGuideCovers: string; requiresNote?: string } {
  const blocks = splitOutRequirementNotes(raw);
  const whatThisGuideCovers = blocks
    .filter((b) => b.type === "markdown")
    .map((b) => b.content)
    .join("\n\n");
  const requirement = blocks.find((b) => b.type === "requirement");

  return { whatThisGuideCovers, requiresNote: requirement?.content };
}

function parseCaseStudy(body: string): GuideCaseStudy {
  const pattern = /^##\s+Case Study(?::\s*(.*))?\s*$([\s\S]*?)(?=^##\s+|$(?![\s\S]))/m;
  const match = body.match(pattern);

  if (!match) {
    return { hasCaseStudy: false, businessName: "", bodyMarkdown: "", result: "" };
  }

  const businessName = (match[1] ?? "").trim();
  const raw = stripTrailingRule(match[2]);

  if (!businessName || businessName.toUpperCase() === "N/A") {
    return { hasCaseStudy: false, businessName: "", bodyMarkdown: "", result: "" };
  }

  const paragraphs = raw
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const resultIndex = paragraphs.findIndex((p) => /^\*\*Result:\*\*/.test(p));
  const result =
    resultIndex >= 0
      ? paragraphs[resultIndex].replace(/^\*\*Result:\*\*\s*/, "").trim()
      : "";

  const bodyMarkdown = paragraphs
    .filter((_, i) => i !== resultIndex)
    .join("\n\n");

  return { hasCaseStudy: true, businessName, bodyMarkdown, result };
}

function parseStepBlocks(stepBody: string): GuideStepBlock[] {
  const blocks: GuideStepBlock[] = [];
  const promptRegex = /```\n([\s\S]*?)```/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = promptRegex.exec(stepBody))) {
    const before = stepBody.slice(lastIndex, match.index).trim();
    if (before) blocks.push(...splitOutRequirementNotes(before));
    blocks.push({ type: "prompt", content: match[1].trim() });
    lastIndex = match.index + match[0].length;
  }

  const rest = stepBody.slice(lastIndex).trim();
  if (rest) blocks.push(...splitOutRequirementNotes(rest));

  return blocks;
}

function parseSteps(raw: string): GuideStep[] {
  const stepRegex = /^###\s+Step\s+(\d+):\s*(.+)$/gm;
  const matches = [...raw.matchAll(stepRegex)];

  return matches.map((m, i) => {
    const start = m.index! + m[0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index! : raw.length;
    const stepBody = raw.slice(start, end).trim();

    return {
      number: Number(m[1]),
      title: m[2].trim(),
      blocks: parseStepBlocks(stepBody),
    };
  });
}

function parseFaqs(raw: string): GuideFaq[] {
  const qRegex = /^\*\*Q:\s*(.+?)\*\*\s*$/gm;
  const matches = [...raw.matchAll(qRegex)];

  return matches.map((m, i) => {
    const start = m.index! + m[0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index! : raw.length;
    const answer = raw.slice(start, end).trim();

    return { question: m[1].trim(), answer };
  });
}

function parseGuideBody(body: string): GuideContent {
  const { whatThisGuideCovers, requiresNote } = parseCovers(
    getSection(body, "What This Guide Covers"),
  );

  return {
    whatThisGuideCovers,
    requiresNote,
    whyThisMatters: getSection(body, "Why This Matters"),
    caseStudy: parseCaseStudy(body),
    steps: parseSteps(getSection(body, "Step-by-Step Guide")),
    faqs: parseFaqs(getSection(body, "Frequently Asked Questions")),
  };
}

function readGuideFile(filePath: string): Guide {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as GuideFrontmatter;

  return {
    ...frontmatter,
    content: parseGuideBody(content),
  };
}

export function getAllGuides(): Guide[] {
  if (!fs.existsSync(GUIDES_DIR)) return [];

  return walkMarkdownFiles(GUIDES_DIR)
    .map(readGuideFile)
    .sort((a, b) => a.industry.localeCompare(b.industry) || a.title.localeCompare(b.title));
}

export function getGuidesByIndustry(industry: string): Guide[] {
  return getAllGuides().filter((g) => g.industry === industry);
}

export function getGuideBySlug(industry: string, slug: string): Guide | undefined {
  return getGuidesByIndustry(industry).find((g) => g.slug === slug);
}

export function getNextGuide(industry: string, slug: string): Guide | undefined {
  const guides = getGuidesByIndustry(industry);
  const index = guides.findIndex((g) => g.slug === slug);
  if (index === -1 || guides.length < 2) return undefined;
  return guides[(index + 1) % guides.length];
}
