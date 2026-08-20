import Link from "next/link";
import type { GuideFrontmatter } from "@/lib/guide-constants";
import { FOUNDATIONS } from "@/lib/industries";
import CategoryTag from "./CategoryTag";
import TierTag from "./TierTag";
import LockIcon from "@/components/icons/LockIcon";

export default function GuideCard({
  guide,
  locked = false,
}: {
  guide: GuideFrontmatter;
  locked?: boolean;
}) {
  return (
    <Link
      href={`/guides/${guide.industry}/${guide.slug}`}
      className="group relative flex flex-col rounded-xl border border-line bg-panel p-6 transition-all hover:-translate-y-0.5 hover:border-navy hover:shadow-md"
    >
      {locked && (
        <span
          aria-label="Locked"
          title="Sign up free to unlock"
          className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-line text-muted"
        >
          <LockIcon className="h-3.5 w-3.5" />
        </span>
      )}
      <div className="flex flex-wrap items-center gap-2 pr-6">
        <CategoryTag label={guide.category ?? FOUNDATIONS.name} />
        <TierTag tier={guide.tier} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-navy-deep">
        {guide.title}
      </h3>
      <p className="mt-2 text-sm text-muted">{guide.summary[0]}</p>
    </Link>
  );
}
