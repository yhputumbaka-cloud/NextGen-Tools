import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizFlow from "@/components/quiz/QuizFlow";
import { getAllGuides } from "@/lib/guides";
import type { GuideFrontmatter } from "@/lib/guide-constants";

export const metadata: Metadata = {
  title: "Guide Finder — NextGen Tools",
  description:
    "Answer four quick questions to get a starting path through the guide library.",
};

export default function QuizPage() {
  const guides: GuideFrontmatter[] = getAllGuides().map((guide) => ({
    title: guide.title,
    slug: guide.slug,
    industry: guide.industry,
    category: guide.category,
    tier: guide.tier,
    summary: guide.summary,
  }));

  return (
    <>
      <Header />
      <main className="flex-1">
        <QuizFlow guides={guides} />
      </main>
      <Footer />
    </>
  );
}
