const STORAGE_KEY = "nextgen_unlocked_guides";

/**
 * Guides are keyed as "industry/slug" rather than bare slugs — several
 * slugs repeat across industries (e.g. "google-business-profile-with-claude"),
 * and a bare-slug list would incorrectly unlock the same-named guide in a
 * different industry.
 */
function guideKey(industry: string, slug: string): string {
  return `${industry}/${slug}`;
}

export function getUnlockedGuideKeys(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function isGuideUnlocked(industry: string, slug: string): boolean {
  return getUnlockedGuideKeys().includes(guideKey(industry, slug));
}

export function unlockGuides(guides: { industry: string; slug: string }[]): void {
  if (typeof window === "undefined" || guides.length === 0) return;
  try {
    const existing = getUnlockedGuideKeys();
    const additions = guides.map((g) => guideKey(g.industry, g.slug));
    const merged = Array.from(new Set([...existing, ...additions]));
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {
    // localStorage unavailable (private browsing, quota) — fail silently,
    // gating just falls back to requiring a session.
  }
}
