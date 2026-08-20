import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuidesBrowser from "@/components/guides/GuidesBrowser";
import FoundationsGuideGrid from "@/components/guides/FoundationsGuideGrid";
import SignupBanner from "@/components/guides/SignupBanner";
import { FOUNDATIONS, INDUSTRIES, getIndustry } from "@/lib/industries";
import { getGuidesByIndustry } from "@/lib/guides";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return [...INDUSTRIES.map((i) => ({ industry: i.slug })), { industry: FOUNDATIONS.slug }];
}

export async function generateMetadata({
  params,
}: PageProps<"/guides/[industry]">): Promise<Metadata> {
  const { industry: industrySlug } = await params;
  const industry =
    industrySlug === FOUNDATIONS.slug ? FOUNDATIONS : getIndustry(industrySlug);

  if (!industry) {
    return buildMetadata({
      title: "Guides | NextGen Tools",
      description: "Browse the NextGen Tools guide library.",
      path: `/guides/${industrySlug}`,
    });
  }

  return buildMetadata({
    title: `${industry.name} Guides | NextGen Tools`,
    description: industry.description,
    path: `/guides/${industrySlug}`,
  });
}

export default async function IndustryGuidesPage({
  params,
}: PageProps<"/guides/[industry]">) {
  const { industry: industrySlug } = await params;

  if (industrySlug === FOUNDATIONS.slug) {
    const guides = getGuidesByIndustry(FOUNDATIONS.slug);

    return (
      <>
        <Header />
        <main className="flex-1">
          <section className="mx-auto max-w-6xl px-6 py-20">
            <h1 className="text-4xl font-semibold tracking-tight text-navy-deep">
              {FOUNDATIONS.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-body-soft">
              {FOUNDATIONS.description}
            </p>

            <div className="mt-10">
              <SignupBanner />
            </div>

            <FoundationsGuideGrid guides={guides} />
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const industry = getIndustry(industrySlug);
  if (!industry) notFound();

  const guides = getGuidesByIndustry(industry.slug);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight text-navy-deep">
            {industry.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-body-soft">
            {industry.description}
          </p>

          <div className="mt-10">
            <SignupBanner />
            <GuidesBrowser guides={guides} categories={industry.categories} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
