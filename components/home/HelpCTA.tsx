import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function HelpCTA() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center">
      <Reveal>
        <h2 className="text-xl font-semibold text-navy-deep">
          Want to work through something specific?
        </h2>
        <p className="mt-3 text-body-soft leading-relaxed">
          If a guide doesn&apos;t quite cover your situation, I offer free,
          limited one-on-one help, alongside school. You tell me what
          you&apos;re working through, and I follow up personally.
        </p>
        <Link
          href="/1-1-help"
          className="mt-6 inline-flex items-center justify-center rounded-md border border-line bg-panel px-6 py-3 text-sm font-semibold text-body-soft transition-[transform,border-color,color] hover:-translate-y-0.5 hover:border-navy hover:text-navy active:scale-[0.97]"
        >
          Get 1:1 Help
        </Link>
      </Reveal>
    </section>
  );
}
