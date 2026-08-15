export type GuideTier = 1 | 2 | 3;

export const TIER_ORDER: GuideTier[] = [1, 2, 3];

export const TIER_CONFIG: Record<GuideTier, { label: string; color: string }> = {
  1: { label: "Quick Start", color: "#7EA6E0" },
  2: { label: "Build On This", color: "#3561A0" },
  3: { label: "Advanced Build", color: "#1B2A41" },
};

export type GuideFrontmatter = {
  title: string;
  slug: string;
  industry: string;
  /** Omitted for Claude Foundations guides, which don't use the four-category structure. */
  category?: string;
  tier: GuideTier;
  summary: string[];
};

export type GuideStepBlock =
  | { type: "markdown"; content: string }
  | { type: "prompt"; content: string }
  | { type: "requirement"; content: string };

export type GuideStep = {
  number: number;
  title: string;
  blocks: GuideStepBlock[];
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideCaseStudy = {
  hasCaseStudy: boolean;
  businessName: string;
  bodyMarkdown: string;
  result: string;
};

export type GuideContent = {
  whatThisGuideCovers: string;
  requiresNote?: string;
  whyThisMatters: string;
  caseStudy: GuideCaseStudy;
  steps: GuideStep[];
  faqs: GuideFaq[];
};

export type Guide = GuideFrontmatter & {
  content: GuideContent;
};
