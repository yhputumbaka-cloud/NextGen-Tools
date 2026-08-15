import Reveal from "@/components/Reveal";

export default function WhyThisExists() {
  return (
    <section className="border-y border-line bg-panel">
      <Reveal className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-navy">
          Why this exists
        </h2>
        <p className="mt-5 text-2xl font-medium leading-relaxed text-navy-deep sm:text-3xl">
          The gap isn&apos;t effort, and it isn&apos;t intelligence. It&apos;s
          access to the right information at the right time.
        </p>
        <div className="mt-6 space-y-4 text-body-soft">
          <p>
            Independent business owners work harder than almost anyone I
            know, often with less support and thinner margins than the
            businesses around them. What&apos;s usually missing isn&apos;t
            the will to improve, it&apos;s a clear, no-cost path to the
            tools that larger competitors already take for granted.
          </p>
          <p>
            NextGen Tools exists to close that gap: plain, practical guides
            on AI and free digital tools, written for someone running a
            business day to day, not a technology company.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
