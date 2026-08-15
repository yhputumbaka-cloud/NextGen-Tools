import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import WhyThisExists from "@/components/home/WhyThisExists";
import IndustryPreview from "@/components/home/IndustryPreview";

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
