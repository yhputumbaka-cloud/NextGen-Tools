export type Industry = {
  slug: string;
  name: string;
  description: string;
  categories: readonly [string, string, string, string];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "restaurants",
    name: "Restaurants",
    description:
      "Guides for independent restaurant owners running the whole show themselves.",
    categories: [
      "Marketing and Branding",
      "Customer Engagement and Communication",
      "Operations and Efficiency",
      "Data and Analytics",
    ],
  },
  {
    slug: "personal-care-services",
    name: "Personal Care Services",
    description:
      "Guides for salons, spas, barbershops, and independent practitioners.",
    categories: [
      "Marketing and Branding",
      "Client Relationships and Booking",
      "Operations and Efficiency",
      "Data and Analytics",
    ],
  },
  {
    slug: "sports-fitness-recreation",
    name: "Sports, Fitness, and Recreation",
    description: "Guides for gyms, studios, and independent trainers.",
    categories: [
      "Marketing and Branding",
      "Member Relationships and Scheduling",
      "Operations and Efficiency",
      "Data and Analytics",
    ],
  },
];

export const FOUNDATIONS = {
  slug: "claude-foundations",
  name: "Claude Foundations",
  description:
    "A short primer on how Claude works, worth reading before diving into any guide library.",
} as const;

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((industry) => industry.slug === slug);
}

export function getIndustryLabel(slug: string): string {
  if (slug === FOUNDATIONS.slug) return FOUNDATIONS.name;
  return getIndustry(slug)?.name ?? slug;
}
