"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FOUNDATIONS, INDUSTRIES, getIndustry } from "@/lib/industries";
import { QUIZ_PAIN_POINTS } from "@/lib/quiz-pain-points";
import { TIER_CONFIG, type GuideFrontmatter, type GuideTier } from "@/lib/guide-constants";
import { unlockGuides } from "@/lib/unlocked-guides";
import GuideCard from "@/components/guides/GuideCard";

type Familiarity = "new" | "little" | "comfortable";

type Answers = {
  industrySlug: string | null;
  familiarity: Familiarity | null;
  category: string | null;
  tier: GuideTier | null;
};

const INITIAL_ANSWERS: Answers = {
  industrySlug: null,
  familiarity: null,
  category: null,
  tier: null,
};

const TOTAL_QUESTIONS = 4;
const MAX_PATH_LENGTH = 5;

const FAMILIARITY_OPTIONS: { value: Familiarity; label: string }[] = [
  { value: "new", label: "Brand new to it" },
  { value: "little", label: "Used it a little" },
  { value: "comfortable", label: "Pretty comfortable" },
];

const TIME_OPTIONS: { tier: GuideTier; label: string }[] = [
  { tier: 1, label: "Just a few minutes, something plug-and-play" },
  { tier: 2, label: "An hour or two I can set aside" },
  { tier: 3, label: "I want to build something real" },
];

const FOUNDATIONS_STARTER_TITLES = [
  "What Claude Can Actually Do for You",
  "Getting Better Results From Claude",
];

function OptionButton({
  title,
  description,
  onClick,
}: {
  title: string;
  description?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-xl border border-line bg-panel p-5 text-left transition-all hover:-translate-y-0.5 hover:border-navy hover:shadow-md"
    >
      <p className="font-semibold text-navy-deep">{title}</p>
      {description && <p className="mt-1 text-sm text-muted">{description}</p>}
    </button>
  );
}

export default function QuizFlow({ guides }: { guides: GuideFrontmatter[] }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(INITIAL_ANSWERS);

  function reset() {
    setAnswers(INITIAL_ANSWERS);
    setStep(0);
  }

  const path = useMemo(() => {
    if (step < TOTAL_QUESTIONS) return [];

    const result: GuideFrontmatter[] = [];

    if (answers.familiarity === "new") {
      for (const title of FOUNDATIONS_STARTER_TITLES) {
        const guide = guides.find(
          (g) => g.industry === FOUNDATIONS.slug && g.title === title,
        );
        if (guide) result.push(guide);
      }
    }

    const remaining = MAX_PATH_LENGTH - result.length;
    if (remaining > 0 && answers.industrySlug && answers.category && answers.tier) {
      const targetTier = answers.tier;
      const candidates = guides
        .filter(
          (g) =>
            g.industry === answers.industrySlug && g.category === answers.category,
        )
        .sort((a, b) => {
          const distanceA = Math.abs(a.tier - targetTier);
          const distanceB = Math.abs(b.tier - targetTier);
          return distanceA !== distanceB
            ? distanceA - distanceB
            : a.title.localeCompare(b.title);
        });
      result.push(...candidates.slice(0, remaining));
    }

    return result;
  }, [step, answers, guides]);

  useEffect(() => {
    if (step === TOTAL_QUESTIONS && path.length > 0) {
      unlockGuides(path.map((g) => ({ industry: g.industry, slug: g.slug })));
    }
  }, [step, path]);

  if (step === TOTAL_QUESTIONS) {
    const industry = answers.industrySlug ? getIndustry(answers.industrySlug) : undefined;
    const tierLabel = answers.tier ? TIER_CONFIG[answers.tier].label.toLowerCase() : "";

    return (
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-navy">
          Your Results
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-navy-deep sm:text-4xl">
          Your Starting Path
        </h1>
        <p className="mt-4 text-lg text-body-soft">
          Based on what you told us, here&apos;s a path through the{" "}
          {industry?.name ?? "guide"} library focused on {answers.category}, sized
          to a {tierLabel} pace.
        </p>

        {path.length > 0 && (
          <p className="mt-3 text-sm text-muted">
            These guides are unlocked for you right now, no signup needed.{" "}
            <Link href="/login" className="font-medium text-navy hover:text-navy-deep">
              Sign up free
            </Link>{" "}
            to unlock the rest of the library.
          </p>
        )}

        {path.length > 0 ? (
          <ol className="relative mt-10">
            {path.map((guide, i) => (
              <li
                key={`${guide.industry}-${guide.slug}`}
                className="relative flex gap-5 pb-6 last:pb-0"
              >
                {i < path.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-5 top-10 bottom-0 w-px bg-line"
                  />
                )}
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <GuideCard guide={guide} />
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-10 text-muted">
            We couldn&apos;t find a matching guide yet. Browse the full library
            instead.
          </p>
        )}

        <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-line pt-8 text-sm font-medium">
          <button
            type="button"
            onClick={reset}
            className="text-navy hover:text-navy-deep"
          >
            Take the quiz again
          </button>
          {industry && (
            <Link
              href={`/guides/${industry.slug}`}
              className="text-navy hover:text-navy-deep"
            >
              Browse the full {industry.name} library instead
            </Link>
          )}
        </div>
      </section>
    );
  }

  const progress = ((step + 1) / TOTAL_QUESTIONS) * 100;

  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <div className="mb-10">
        <div className="flex items-center justify-between text-sm font-medium text-muted">
          <span>
            Question {step + 1} of {TOTAL_QUESTIONS}
          </span>
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="text-navy hover:text-navy-deep"
            >
              &larr; Back
            </button>
          )}
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-navy transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {step === 0 && (
        <div>
          <h1 className="text-2xl font-semibold text-navy-deep sm:text-3xl">
            What kind of business do you run?
          </h1>
          <div className="mt-8 space-y-3">
            {INDUSTRIES.map((industry) => (
              <OptionButton
                key={industry.slug}
                title={industry.name}
                description={industry.description}
                onClick={() => {
                  setAnswers((a) => ({ ...a, industrySlug: industry.slug }));
                  setStep(1);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h1 className="text-2xl font-semibold text-navy-deep sm:text-3xl">
            How familiar are you with using Claude already?
          </h1>
          <div className="mt-8 space-y-3">
            {FAMILIARITY_OPTIONS.map((option) => (
              <OptionButton
                key={option.value}
                title={option.label}
                onClick={() => {
                  setAnswers((a) => ({ ...a, familiarity: option.value }));
                  setStep(2);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {step === 2 && answers.industrySlug && (
        <div>
          <h1 className="text-2xl font-semibold text-navy-deep sm:text-3xl">
            What&apos;s eating the most time or feels hardest right now?
          </h1>
          <div className="mt-8 space-y-3">
            {(QUIZ_PAIN_POINTS[answers.industrySlug] ?? []).map((point) => (
              <OptionButton
                key={point.category}
                title={point.phrase}
                onClick={() => {
                  setAnswers((a) => ({ ...a, category: point.category }));
                  setStep(3);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h1 className="text-2xl font-semibold text-navy-deep sm:text-3xl">
            How much time do you want to put in this week?
          </h1>
          <div className="mt-8 space-y-3">
            {TIME_OPTIONS.map((option) => (
              <OptionButton
                key={option.tier}
                title={option.label}
                onClick={() => {
                  setAnswers((a) => ({ ...a, tier: option.tier }));
                  setStep(4);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
