import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — NextGen Tools",
  description: "Ask a question or request a new guide topic.",
};

const CONTACT_EMAIL = "yhputumbaka@gmail.com";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight text-navy-deep sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 text-lg text-body-soft leading-relaxed">
            Have a question, or a guide topic you&apos;d like to see
            covered? Send a note and we&apos;ll get back to you.
          </p>

          <div className="mt-10">
            <ContactForm />
          </div>

          <p className="mt-6 text-sm text-muted">
            Prefer email? Reach out directly at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-navy hover:text-navy-deep"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
