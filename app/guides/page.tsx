import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FOUNDATIONS, INDUSTRIES } from "@/lib/industries";
import { getGuidesByIndustry } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides — NextGen Tools",
};

export default function GuidesPage() {
  const foundationsCount = getGuidesByIndustry(FOUNDATIONS.slug).length;

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight text-navy-deep">
            Guides
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-body-soft">
            Start with Claude Foundations, then pick your industry to find
            practical, no-cost guides for using AI and free digital tools in
            your business.
          </p>

          <Link
            href={`/guides/${FOUNDATIONS.slug}`}
            className="group mt-10 flex flex-col rounded-xl border border-navy/15 bg-navy/5 p-7 transition-all hover:-translate-y-0.5 hover:border-navy hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-navy">
                Start Here
              </p>
              <h2 className="mt-2 text-lg font-semibold text-navy-deep">
                {FOUNDATIONS.name}
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted">
                {FOUNDATIONS.description}
              </p>
            </div>
            <span className="mt-6 shrink-0 text-sm font-medium text-navy transition-colors group-hover:text-navy-deep sm:mt-0">
              {foundationsCount} {foundationsCount === 1 ? "guide" : "guides"}{" "}
              &rarr;
            </span>
          </Link>

          <h2 className="mt-14 text-sm font-semibold uppercase tracking-widest text-navy">
            Choose Your Industry
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => {
              const count = getGuidesByIndustry(industry.slug).length;
              return (
                <Link
                  key={industry.slug}
                  href={`/guides/${industry.slug}`}
                  className="group flex flex-col rounded-xl border border-line bg-panel p-7 transition-all hover:-translate-y-0.5 hover:border-navy hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-navy-deep">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    {industry.description}
                  </p>
                  <span className="mt-6 text-sm font-medium text-navy transition-colors group-hover:text-navy-deep">
                    {count} {count === 1 ? "guide" : "guides"} &rarr;
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
