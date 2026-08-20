"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Status = "idle" | "sending" | "sent" | "error";

export default function LoginForm({ next = "/" }: { next?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
      },
    });

    if (error) {
      setStatus("error");
      setErrorMessage(error.message);
    } else {
      setStatus("sent");
    }
  }

  async function handleGoogleLogin() {
    setGoogleLoading(true);
    setErrorMessage("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setGoogleLoading(false);
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-line bg-panel p-8 shadow-sm">
        <p className="text-body-soft">
          Check your email for a link to sign in.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-line bg-panel p-8 shadow-sm">
      <form onSubmit={handleEmailSubmit} className="space-y-5">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-panel px-4 py-2.5 text-sm text-body focus:border-navy focus:outline-none"
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-danger">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "sending" ? "Sending..." : "Send me a login link"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-line" />
        <span className="text-xs font-medium uppercase tracking-wide text-dim">
          or
        </span>
        <div className="h-px flex-1 bg-line" />
      </div>

      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={googleLoading}
        className="w-full rounded-md border border-line bg-panel px-6 py-3 text-sm font-semibold text-body-soft transition-all hover:-translate-y-0.5 hover:border-navy hover:text-navy disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {googleLoading ? "Redirecting..." : "Continue with Google"}
      </button>
    </div>
  );
}
