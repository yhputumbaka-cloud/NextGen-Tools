import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer | NextGen Tools",
  description:
    "Important context on how to use the NextGen Tools guide library, including how case studies and tool references should be read.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight text-navy-deep">
            Disclaimer
          </h1>
          <p className="mt-4 text-lg text-body-soft">
            Full disclaimer text is coming soon.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
