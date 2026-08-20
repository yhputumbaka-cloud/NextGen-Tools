import type { GuideFaq } from "@/lib/guide-constants";

/**
 * FAQ content is authored as markdown (rendered elsewhere via MarkdownText),
 * but JSON-LD `Question`/`Answer` fields expect plain text. This strips the
 * common markdown syntax rather than assuming answers never use it.
 */
function markdownToPlainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\n{2,}/g, " ")
    .replace(/\n/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function buildFaqJsonLd(faqs: GuideFaq[]) {
  if (faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: markdownToPlainText(faq.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: markdownToPlainText(faq.answer),
      },
    })),
  };
}
