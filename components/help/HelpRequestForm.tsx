"use client";

import { useActionState } from "react";
import { sendHelpRequest, type HelpFormState } from "@/app/1-1-help/actions";
import { INDUSTRIES } from "@/lib/industries";

const initialState: HelpFormState = { status: "idle" };

export default function HelpRequestForm() {
  const [state, formAction, pending] = useActionState(
    sendHelpRequest,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-line bg-panel p-8 shadow-sm">
        <p className="text-body-soft">
          Got it, I&apos;ll personally follow up within a week or so.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-xl border border-line bg-panel p-8 shadow-sm"
    >
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-body-soft"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-line bg-panel px-4 py-2.5 text-sm text-body focus:border-navy focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-body-soft"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-line bg-panel px-4 py-2.5 text-sm text-body focus:border-navy focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="businessName"
            className="block text-sm font-medium text-body-soft"
          >
            Business name
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-line bg-panel px-4 py-2.5 text-sm text-body focus:border-navy focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="industry"
            className="block text-sm font-medium text-body-soft"
          >
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            required
            defaultValue=""
            className="mt-1.5 w-full rounded-lg border border-line bg-panel px-4 py-2.5 text-sm text-body focus:border-navy focus:outline-none"
          >
            <option value="" disabled>
              Select your industry
            </option>
            {INDUSTRIES.map((industry) => (
              <option key={industry.slug} value={industry.name}>
                {industry.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="problem"
            className="block text-sm font-medium text-body-soft"
          >
            What are you trying to work through?
          </label>
          <textarea
            id="problem"
            name="problem"
            rows={5}
            required
            placeholder="Be as specific as you can, what's the actual situation."
            className="mt-1.5 w-full rounded-lg border border-line bg-panel px-4 py-2.5 text-sm text-body placeholder:text-dim focus:border-navy focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="triedGuides"
            className="block text-sm font-medium text-body-soft"
          >
            Have you already tried any of the guides for this?
          </label>
          <textarea
            id="triedGuides"
            name="triedGuides"
            rows={3}
            className="mt-1.5 w-full rounded-lg border border-line bg-panel px-4 py-2.5 text-sm text-body focus:border-navy focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contactPreference"
            className="block text-sm font-medium text-body-soft"
          >
            Best way and time to reach you
          </label>
          <input
            id="contactPreference"
            name="contactPreference"
            type="text"
            className="mt-1.5 w-full rounded-lg border border-line bg-panel px-4 py-2.5 text-sm text-body focus:border-navy focus:outline-none"
          />
        </div>

        {state.status === "error" && (
          <p className="text-sm text-danger">{state.message}</p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] hover:bg-navy-deep active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100"
        >
          {pending ? "Sending..." : "Request 1:1 Help"}
        </button>

        <p className="text-sm text-muted">
          Free, no strings attached. I read every request myself and follow
          up personally, usually within a week.
        </p>
      </div>
    </form>
  );
}
