"use client";

import { useMemo, useState } from "react";
import { TIER_CONFIG, TIER_ORDER, type Guide, type GuideTier } from "@/lib/guide-constants";
import GuideCard from "./GuideCard";

export default function GuidesBrowser({
  guides,
  categories,
}: {
  guides: Guide[];
  categories: readonly string[];
}) {
  const categoryFilters = ["All", ...categories] as const;

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [tier, setTier] = useState<GuideTier | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return guides.filter((guide) => {
      const matchesQuery =
        !q ||
        guide.title.toLowerCase().includes(q) ||
        guide.summary.some((line) => line.toLowerCase().includes(q));
      const matchesCategory = category === "All" || guide.category === category;
      const matchesTier = tier === null || guide.tier === tier;
      return matchesQuery && matchesCategory && matchesTier;
    });
  }, [guides, query, category, tier]);

  const grouped = categories
    .map((name) => ({
      name,
      guides: filtered.filter((guide) => guide.category === name),
    }))
    .filter((group) => group.guides.length > 0);

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search guides..."
        className="w-full rounded-lg border border-line bg-panel px-4 py-3 text-sm text-body placeholder:text-dim focus:border-navy focus:outline-none"
      />

      <div className="mt-5 flex flex-wrap gap-2">
        {categoryFilters.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setCategory(name)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              category === name
                ? "border-navy bg-navy text-white"
                : "border-line bg-panel text-body-soft hover:border-navy hover:text-navy"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {TIER_ORDER.map((t) => {
          const isActive = tier === t;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setTier(isActive ? null : t)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-navy bg-navy text-white"
                  : "border-line bg-panel text-body-soft hover:border-navy hover:text-navy"
              }`}
            >
              <span
                className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[4px] text-[10px] font-semibold text-white"
                style={{ backgroundColor: TIER_CONFIG[t].color }}
              >
                {t}
              </span>
              {TIER_CONFIG[t].label}
            </button>
          );
        })}
      </div>

      <div className="mt-12 space-y-14">
        {grouped.length === 0 && (
          <p className="text-muted">No guides match your search.</p>
        )}
        {grouped.map((group) => (
          <section key={group.name}>
            <h2 className="text-xl font-semibold text-navy-deep">
              {group.name}
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.guides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
