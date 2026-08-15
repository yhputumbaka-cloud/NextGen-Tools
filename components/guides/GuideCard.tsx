import Link from "next/link";
import type { Guide } from "@/lib/guide-constants";
import { FOUNDATIONS } from "@/lib/industries";
import CategoryTag from "./CategoryTag";
import TierTag from "./TierTag";

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.industry}/${guide.slug}`}
      className="group flex flex-col rounded-xl border border-line bg-panel p-6 transition-all hover:-translate-y-0.5 hover:border-navy hover:shadow-md"
    >
      <div className="flex flex-wrap items-center gap-2">
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
