"use client";

import { useState } from "react";
import Link from "next/link";
import type { GuideFrontmatter } from "@/lib/guide-constants";
import { FOUNDATIONS } from "@/lib/industries";
import { createClient } from "@/lib/supabase/client";
import CategoryTag from "@/components/guides/CategoryTag";
import TierTag from "@/components/guides/TierTag";

export default function SavedGuidesList({
  initialGuides,
}: {
  initialGuides: GuideFrontmatter[];
}) {
  const [guides, setGuides] = useState(initialGuides);

  async function handleRemove(guide: GuideFrontmatter) {
    setGuides((prev) =>
      prev.filter(
        (g) => !(g.industry === guide.industry && g.slug === guide.slug),
      ),
    );

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    await supabase
      .from("saved_guides")
      .delete()
      .eq("user_id", user.id)
      .eq("industry", guide.industry)
      .eq("slug", guide.slug);
  }

  if (guides.length === 0) {
    return (
      <div className="rounded-xl border border-line bg-panel p-8 text-center shadow-sm">
        <p className="text-body-soft">
          You haven&apos;t saved any guides yet. Browse the library and tap
          the bookmark icon on any guide to add it here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {guides.map((guide) => (
        <div
          key={`${guide.industry}-${guide.slug}`}
          className="flex flex-col rounded-xl border border-line bg-panel p-6 transition-all hover:-translate-y-0.5 hover:border-navy hover:shadow-md"
        >
          <Link href={`/guides/${guide.industry}/${guide.slug}`}>
            <div className="flex flex-wrap items-center gap-2">
              <CategoryTag label={guide.category ?? FOUNDATIONS.name} />
              <TierTag tier={guide.tier} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-navy-deep">
              {guide.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{guide.summary[0]}</p>
          </Link>
          <button
            type="button"
            onClick={() => handleRemove(guide)}
            className="mt-4 self-start text-sm font-medium text-danger transition-colors hover:text-navy-deep"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
