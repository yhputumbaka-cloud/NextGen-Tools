"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

/**
 * Tracks whether an auth session currently exists, client-side, via
 * onAuthStateChange (which fires immediately with the current session on
 * subscribe). `checked` is false until that first callback resolves, so
 * callers can avoid flashing gated UI before the real state is known.
 */
export function useSessionState() {
  const [hasSession, setHasSession] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setHasSession(!!session);
      setChecked(true);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { hasSession, checked };
}
