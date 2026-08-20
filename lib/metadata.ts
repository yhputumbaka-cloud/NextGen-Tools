import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-config";

const MAX_DESCRIPTION_LENGTH = 160;

export function truncate(text: string, maxLength = MAX_DESCRIPTION_LENGTH): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

/** Meta descriptions for guide pages are built from the existing summary
 * frontmatter rather than new copy — the first line is usually already a
 * full, descriptive sentence. */
export function guideDescription(summary: string[]): string {
  return truncate(summary[0]?.trim() ?? "");
}

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${getSiteUrl()}${path}`;
  // A page-level `openGraph`/`twitter` object replaces (rather than merges
  // with) whatever the root `opengraph-image.tsx` file convention would
  // otherwise inject — so every page has to carry the image explicitly.
  const ogImage = `${getSiteUrl()}/opengraph-image`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: "NextGen Tools",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "NextGen Tools" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
