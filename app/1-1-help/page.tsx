import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HelpRequestForm from "@/components/help/HelpRequestForm";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "1:1 Help | NextGen Tools",
  description:
    "Free, limited one-on-one help for business owners who want to work through something specific beyond what the guides cover.",
  path: "/1-1-help",
});

export default function HelpPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight text-navy-deep sm:text-5xl">
            1:1 Help
          </h1>
          <p className="mt-4 text-lg text-body-soft leading-relaxed">
            Free, one-on-one help for business owners who want to talk
            through something specific. This isn&apos;t a replacement for
            the guide library, it&apos;s best used after you&apos;ve tried
            the guide closest to your problem. I offer this personally,
            alongside school, so capacity is limited and not every request
            gets a call.
          </p>

          <div className="mt-8 rounded-xl border border-line bg-panel p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy">
              What to Expect
            </p>
            <p className="mt-3 text-sm text-body-soft leading-relaxed">
              I aim to respond within about a week, though it&apos;s not
              guaranteed for every request. If a guide already answers your
              question, that&apos;s what I&apos;ll point you to instead of
              setting up a call.
            </p>
          </div>

          <div className="mt-10">
            <HelpRequestForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
