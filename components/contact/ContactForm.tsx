"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-line bg-panel p-8 shadow-sm">
        <p className="text-body-soft">
          Thanks — your message is on its way. We&apos;ll get back to you
          soon.
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
            htmlFor="message"
            className="block text-sm font-medium text-body-soft"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1.5 w-full rounded-lg border border-line bg-panel px-4 py-2.5 text-sm text-body focus:border-navy focus:outline-none"
          />
        </div>

        {state.status === "error" && (
          <p className="text-sm text-danger">{state.message}</p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
