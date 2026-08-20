import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import WhyThisExists from "@/components/home/WhyThisExists";
import IndustryPreview from "@/components/home/IndustryPreview";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "NextGen Tools — Free AI & Digital Tool Guides for Independent Businesses",
  description:
    "Free guides on using AI and everyday digital tools for marketing, customer relationships, operations, and tracking the numbers — built for restaurant, personal care, and sports and fitness business owners.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyThisExists />
        <IndustryPreview />
      </main>
      <Footer />
    </>
  );
}
