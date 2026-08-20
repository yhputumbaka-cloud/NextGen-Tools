"use client";

import type { GuideFrontmatter } from "@/lib/guide-constants";
import { useSessionState } from "@/lib/hooks/useSessionState";
import { isGuideUnlocked } from "@/lib/unlocked-guides";
import GuideCard from "./GuideCard";

export default function FoundationsGuideGrid({
  guides,
}: {
  guides: GuideFrontmatter[];
}) {
  const { hasSession, checked } = useSessionState();

  function isLocked(guide: GuideFrontmatter) {
    if (!checked || hasSession) return false;
    return !isGuideUnlocked(guide.industry, guide.slug);
  }

  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {guides.map((guide) => (
        <GuideCard key={guide.slug} guide={guide} locked={isLocked(guide)} />
      ))}
    </div>
  );
}
