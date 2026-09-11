"use client";

import { useState } from "react";
import Link from "next/link";
import { useSessionState } from "@/lib/hooks/useSessionState";

const DISMISS_KEY = "nextgen_signup_banner_dismissed";

function readDismissed(): boolean {
  try {
    return window.localStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    // Not yet in a browser (server render pass) or storage unavailable —
    // default to hidden so there's no flash-of-banner before hydration.
    return true;
  }
}

export default function SignupBanner() {
  const { hasSession, checked } = useSessionState();
  const [dismissed, setDismissed] = useState(readDismissed);

  function handleDismiss() {
    setDismissed(true);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // localStorage unavailable — banner just won't stay dismissed.
    }
  }

  if (!checked || hasSession || dismissed) return null;

  return (
    <div className="mb-10 rounded-xl border border-navy/15 bg-navy/5 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-navy-deep">
            Sign up free to unlock the full library, takes 10 seconds, no
            password required
          </p>
          <p className="mt-1 text-xs text-muted">
            Free forever. No card. No spam. Unsubscribe anytime.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Link
            href="/login"
            className="rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-navy-deep active:scale-[0.97]"
          >
            Sign Up Free
          </Link>
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss"
            className="text-lg leading-none text-muted transition-[color,transform] hover:text-body-soft active:scale-95"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}
