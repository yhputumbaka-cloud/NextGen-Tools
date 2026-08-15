import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuidesBrowser from "@/components/guides/GuidesBrowser";
import GuideCard from "@/components/guides/GuideCard";
import { FOUNDATIONS, INDUSTRIES, getIndustry } from "@/lib/industries";
import { getGuidesByIndustry } from "@/lib/guides";

export function generateStaticParams() {
  return [...INDUSTRIES.map((i) => ({ industry: i.slug })), { industry: FOUNDATIONS.slug }];
}

export async function generateMetadata({
  params,
}: PageProps<"/guides/[industry]">): Promise<Metadata> {
  const { industry: industrySlug } = await params;
  const name =
    industrySlug === FOUNDATIONS.slug
      ? FOUNDATIONS.name
      : getIndustry(industrySlug)?.name;

  return { title: name ? `${name} — NextGen Tools` : "Guides — NextGen Tools" };
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

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
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

          <div className="mt-12">
            <GuidesBrowser guides={guides} categories={industry.categories} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
