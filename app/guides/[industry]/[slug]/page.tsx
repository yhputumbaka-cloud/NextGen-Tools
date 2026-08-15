import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryTag from "@/components/guides/CategoryTag";
import TierTag from "@/components/guides/TierTag";
import MarkdownText from "@/components/guides/MarkdownText";
import AIPromptBlock from "@/components/guides/AIPromptBlock";
import CoversList from "@/components/guides/CoversList";
import RequirementCallout from "@/components/guides/RequirementCallout";
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

          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-navy-deep">
              Step-by-Step Guide
            </h2>
            <ol className="relative mt-6">
              {content.steps.map((step, i) => (
                <li key={step.number} className="relative flex gap-5 pb-10 last:pb-0">
                  {i < content.steps.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-5 top-10 bottom-0 w-px bg-line"
                    />
                  )}
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                    {step.number}
                  </span>
                  <div className="flex-1 pt-1.5">
                    <h3 className="font-semibold text-navy-deep">
                      {step.title}
                    </h3>
                    <div className="mt-3 space-y-4 text-body-soft">
                      {step.blocks.map((block, bi) => {
                        if (block.type === "prompt") {
                          return <AIPromptBlock key={bi} prompt={block.content} />;
                        }
                        if (block.type === "requirement") {
                          return (
                            <RequirementCallout key={bi} content={block.content} />
                          );
                        }
                        return <MarkdownText key={bi} content={block.content} />;
                      })}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-navy-deep">
              Frequently Asked Questions
            </h2>
            <div className="mt-4 divide-y divide-line border-t border-line">
              {content.faqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <p className="font-semibold text-navy-deep">
                    {faq.question}
                  </p>
                  <div className="mt-2 text-body-soft">
                    <MarkdownText content={faq.answer} />
                  </div>
                </div>
              ))}
            </div>
          </section>

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
