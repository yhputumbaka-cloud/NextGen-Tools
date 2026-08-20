import type { MetadataRoute } from "next";
import { FOUNDATIONS, INDUSTRIES } from "@/lib/industries";
import { getAllGuides } from "@/lib/guides";
import { getSiteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // Claude Foundations has its own /guides/[industry]-shaped page but isn't
  // one of the three business industries in INDUSTRIES, so it's added here
  // explicitly to keep every real route covered.
  const industryPages: MetadataRoute.Sitemap = [...INDUSTRIES, FOUNDATIONS].map(
    (industry) => ({
      url: `${baseUrl}/guides/${industry.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  const guidePages: MetadataRoute.Sitemap = getAllGuides().map((guide) => ({
    url: `${baseUrl}/guides/${guide.industry}/${guide.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...industryPages, ...guidePages];
}
