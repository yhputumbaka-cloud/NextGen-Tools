/**
 * Resolves the site's canonical base URL for use in metadata, the sitemap,
 * and robots.txt.
 *
 * Preference order:
 * 1. NEXT_PUBLIC_SITE_URL — explicit override, set this if you want full
 *    control (e.g. deploying somewhere other than Vercel, or a domain that
 *    differs from Vercel's production URL).
 * 2. VERCEL_PROJECT_PRODUCTION_URL — provided automatically by Vercel,
 *    reflects the project's actual production/custom domain with no setup.
 * 3. localhost — local dev fallback.
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}
