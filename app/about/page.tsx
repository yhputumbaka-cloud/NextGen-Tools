import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — NextGen Tools",
  description:
    "Why NextGen Tools exists, and the story behind the free guide library.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-4xl font-semibold tracking-tight text-navy-deep sm:text-5xl">
            About
          </h1>

          <section className="mt-10">
            <p className="text-lg text-body-soft leading-relaxed">
              NextGen Tools exists to give small business owners access to
              the same tools larger businesses already take for granted:
              plain, practical guides on using AI and free digital tools to
              run a business day to day.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-navy-deep">
              A Note From Yuvan
            </h2>
            <div className="mt-4 space-y-4 text-body-soft leading-relaxed">
              <p>
                I&apos;m a high school student from the Philadelphia area,
                and this project started from something I kept noticing: AI
                was moving fast, faster than most small business owners had
                time to keep up with while they were busy actually running
                their businesses.
              </p>
              <p>
                The owners I talked to weren&apos;t behind because they
                weren&apos;t trying hard enough, and they weren&apos;t
                behind because they weren&apos;t smart enough. They were
                behind because nobody had put the right information in
                front of them at the right time, in a way that didn&apos;t
                assume a technical background or a free afternoon to
                research it.
              </p>
              <p>
                NextGen Tools is my attempt to close that gap: a free
                library of guides written plainly, for someone running a
                business, not a technology company.
              </p>
            </div>
          </section>

          <section className="mt-14 rounded-xl border border-line bg-panel p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy">
              A Few Things Worth Knowing
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-body-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                <span>
                  The tools referenced throughout these guides may change
                  over time as products update or get replaced. We update
                  guides when we can, but it&apos;s worth double-checking a
                  tool&apos;s current details before relying on it.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                <span>
                  Case studies throughout the guide library are fictional
                  mockups used to illustrate what implementing a guide could
                  look like. They are not verified outcomes from real
                  businesses.
                </span>
              </li>
              <li className="flex items-start gap-3 text-body-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                <span>
                  No guide in this library requires a paid subscription to
                  implement at a basic level.
                </span>
              </li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
