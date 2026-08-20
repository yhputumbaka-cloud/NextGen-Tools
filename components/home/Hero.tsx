import Link from "next/link";
import { INDUSTRIES } from "@/lib/industries";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/home/StatCounter";

const STATS = [
  { value: "90+", label: "guides" },
  { value: String(INDUSTRIES.length), label: "industries" },
  { value: "$0", label: "cost" },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20 pt-20 text-center sm:pt-28">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-navy">
          Powering your business with AI
        </p>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-navy-deep sm:text-4xl md:text-5xl">
          The tools big brands take for granted, made for the owner still
          doing it all themselves.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-body-soft">
          NextGen Tools is a free library of guides on using AI and free
          digital tools for marketing, customer relationships, operations,
          and keeping track of the numbers.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/guides"
            className="rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-deep"
          >
            Browse the Guides
          </Link>
          <Link
            href="https://discord.gg/SpSMwbP2z"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-line bg-panel px-6 py-3 text-sm font-semibold text-body-soft transition-all hover:-translate-y-0.5 hover:border-navy hover:text-navy"
          >
            Join the Community
          </Link>
        </div>

        <Link
          href="/quiz"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-colors hover:text-navy-deep"
        >
          Not sure where to start? Take the 1-minute Guide Finder
          <span aria-hidden>&rarr;</span>
        </Link>
      </Reveal>

      <Reveal
        delayMs={150}
        className="mx-auto mt-16 flex max-w-md items-start justify-center gap-10 sm:gap-16"
      >
        {STATS.map((stat) => (
          <StatCounter key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </Reveal>
    </section>
  );
}
