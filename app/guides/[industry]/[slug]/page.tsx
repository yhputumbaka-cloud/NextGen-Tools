import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryTag from "@/components/guides/CategoryTag";
import TierTag from "@/components/guides/TierTag";
import MarkdownText from "@/components/guides/MarkdownText";
import CoversList from "@/components/guides/CoversList";
import RequirementCallout from "@/components/guides/RequirementCallout";
import SaveButton from "@/components/guides/SaveButton";
import GatedGuideContent from "@/components/guides/GatedGuideContent";
import { FOUNDATIONS, getIndustryLabel } from "@/lib/industries";
import { getAllGuides, getGuideBySlug, getNextGuide } from "@/lib/guides";

export function generateStaticParams() {
  return getAllGuides().map((guide) => ({
    industry: guide.industry,
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/guides/[industry]/[slug]">): Promise<Metadata> {
  const { industry, slug } = await params;
  const guide = getGuideBySlug(industry, slug);

  return {
    title: guide ? `${guide.title} — NextGen Tools` : "Guide — NextGen Tools",
  };
}

export default async function GuidePage({
  params,
}: PageProps<"/guides/[industry]/[slug]">) {
  const { industry, slug } = await params;
  const guide = getGuideBySlug(industry, slug);

  if (!guide) notFound();

  const nextGuide = getNextGuide(industry, slug);
  const { content } = guide;
  const backHref = industry === FOUNDATIONS.slug ? "/guides" : `/guides/${industry}`;

  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-16">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <Link href="/guides" className="hover:text-navy">
              Guides
            </Link>
            <span>/</span>
            <Link href={backHref} className="hover:text-navy">
              {getIndustryLabel(industry)}
            </Link>
            {guide.category && (
              <>
                <span>/</span>
                <span>{guide.category}</span>
              </>
            )}
            <span>/</span>
            <span className="text-body-soft">{guide.title}</span>
          </nav>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <CategoryTag label={guide.category ?? FOUNDATIONS.name} />
            <TierTag tier={guide.tier} />
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-navy-deep sm:text-5xl">
            {guide.title}
          </h1>

          <div className="mt-6">
            <SaveButton industry={industry} slug={slug} />
          </div>

          <div className="mt-10 rounded-xl border border-line bg-panel p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy">
              What This Guide Covers
            </p>
            <div className="mt-4">
              <CoversList content={content.whatThisGuideCovers} />
            </div>
            {content.requiresNote && (
              <div className="mt-5">
                <RequirementCallout content={content.requiresNote} />
              </div>
            )}
          </div>

          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-navy-deep">
              Why This Matters
            </h2>
            <div className="mt-4 text-body-soft">
              <MarkdownText content={content.whyThisMatters} />
            </div>
          </section>

          {content.caseStudy.hasCaseStudy && (
            <section className="mt-14">
              <h2 className="text-2xl font-semibold text-navy-deep">
                Case Study
              </h2>
              <div className="mt-4 rounded-xl border border-navy/15 bg-gradient-to-br from-navy/5 to-navy/10 p-8">
                <div className="flex items-center gap-2 text-sm font-semibold text-navy-deep">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                  {content.caseStudy.businessName}
                </div>
                <div className="mt-4 text-body-soft">
                  <MarkdownText content={content.caseStudy.bodyMarkdown} />
                </div>
                {content.caseStudy.result && (
                  <p className="mt-4 text-body-soft">
                    <strong className="font-semibold text-navy-deep">
                      Result:
                    </strong>{" "}
                    <span className="font-semibold text-navy">
                      {content.caseStudy.result}
                    </span>
                  </p>
                )}
              </div>
            </section>
          )}

          <GatedGuideContent
            industry={industry}
            slug={slug}
            steps={content.steps}
            faqs={content.faqs}
          />

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 text-sm font-medium">
            <Link href={backHref} className="text-navy hover:text-navy-deep">
              &larr; Back to Guides
            </Link>
            {nextGuide && (
              <Link
                href={`/guides/${nextGuide.industry}/${nextGuide.slug}`}
                className="text-navy hover:text-navy-deep"
              >
                Next Guide: {nextGuide.title} &rarr;
              </Link>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
