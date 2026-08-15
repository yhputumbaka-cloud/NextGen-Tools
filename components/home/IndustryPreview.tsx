import Link from "next/link";
import { INDUSTRIES } from "@/lib/industries";
import Reveal from "@/components/Reveal";

export default function IndustryPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="max-w-2xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-navy">
          What&apos;s inside
        </h2>
        <p className="mt-3 text-3xl font-semibold tracking-tight text-navy-deep">
          Guide libraries built for your industry.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {INDUSTRIES.map((industry, i) => (
          <Reveal key={industry.slug} delayMs={i * 80}>
            <Link
              href={`/guides/${industry.slug}`}
              className="group flex h-full flex-col rounded-xl border border-line bg-panel p-7 transition-all hover:-translate-y-0.5 hover:border-navy hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-navy-deep">
                {industry.name}
              </h3>
              <p className="mt-2 text-sm text-muted">{industry.description}</p>
              <span className="mt-5 inline-block text-sm font-medium text-navy transition-colors group-hover:text-navy-deep">
                View guides &rarr;
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
