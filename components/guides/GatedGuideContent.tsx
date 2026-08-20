"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { GuideFaq, GuideStep } from "@/lib/guide-constants";
import { useSessionState } from "@/lib/hooks/useSessionState";
import { isGuideUnlocked } from "@/lib/unlocked-guides";
import AIPromptBlock from "@/components/guides/AIPromptBlock";
import MarkdownText from "@/components/guides/MarkdownText";
import RequirementCallout from "@/components/guides/RequirementCallout";

export default function GatedGuideContent({
  industry,
  slug,
  steps,
  faqs,
}: {
  industry: string;
  slug: string;
  steps: GuideStep[];
  faqs: GuideFaq[];
}) {
  const { hasSession, checked } = useSessionState();
  const [unlockedLocally, setUnlockedLocally] = useState(false);

  useEffect(() => {
    // localStorage isn't available during the server render, so the server
    // always renders "locked". Reading it here (post-mount) and syncing to
    // state is required to avoid a hydration mismatch — computing it
    // directly during render would make the client's hydration pass
    // disagree with the server-rendered HTML.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUnlockedLocally(isGuideUnlocked(industry, slug));
  }, [industry, slug]);

  if (unlockedLocally || (checked && hasSession)) {
    return (
      <>
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-navy-deep">
            Step-by-Step Guide
          </h2>
          <ol className="relative mt-6">
            {steps.map((step, i) => (
              <li
                key={step.number}
                className="relative flex gap-5 pb-10 last:pb-0"
              >
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-5 top-10 bottom-0 w-px bg-line"
                  />
                )}
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                  {step.number}
                </span>
                <div className="flex-1 pt-1.5">
                  <h3 className="font-semibold text-navy-deep">
                    {step.title}
                  </h3>
                  <div className="mt-3 space-y-4 text-body-soft">
                    {step.blocks.map((block, bi) => {
                      if (block.type === "prompt") {
                        return <AIPromptBlock key={bi} prompt={block.content} />;
                      }
                      if (block.type === "requirement") {
                        return (
                          <RequirementCallout key={bi} content={block.content} />
                        );
                      }
                      return <MarkdownText key={bi} content={block.content} />;
                    })}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-navy-deep">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 divide-y divide-line border-t border-line">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <p className="font-semibold text-navy-deep">{faq.question}</p>
                <div className="mt-2 text-body-soft">
                  <MarkdownText content={faq.answer} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }

  if (!checked) return null;

  return (
    <section className="mt-14">
      <div className="relative">
        <div
          aria-hidden
          className="space-y-4"
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        >
          <div className="h-5 w-1/3 rounded bg-line" />
          <div className="h-4 w-full rounded bg-line" />
          <div className="h-4 w-5/6 rounded bg-line" />
          <div className="h-10 w-10 rounded-full bg-line" />
          <div className="h-4 w-full rounded bg-line" />
          <div className="h-4 w-2/3 rounded bg-line" />
        </div>

        <div className="-mt-8 rounded-xl border-2 border-navy bg-panel p-8 text-center shadow-sm">
          <p className="text-lg font-semibold text-navy-deep">
            Sign up free to keep reading
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-body-soft">
            The whole library is free. Signing up just keeps track of who&apos;s
            using it.
          </p>
          <Link
            href={`/login?next=${encodeURIComponent(`/guides/${industry}/${slug}`)}`}
            className="mt-5 inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-deep"
          >
            Sign Up Free
          </Link>
          <p className="mt-3 text-xs text-muted">
            Free forever. No card. No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
