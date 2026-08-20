"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import BookmarkIcon from "@/components/icons/BookmarkIcon";

export default function SaveButton({
  industry,
  slug,
}: {
  industry: string;
  slug: string;
}) {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const autoSaveHandled = useRef(false);

  useEffect(() => {
    let active = true;
    const supabase = createClient();

    async function init() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!active) return;
      setUserId(user?.id ?? null);

      if (user) {
        const { data } = await supabase
          .from("saved_guides")
          .select("id")
          .eq("user_id", user.id)
          .eq("industry", industry)
          .eq("slug", slug)
          .maybeSingle();
        if (!active) return;

        let isSaved = !!data;

        const params = new URLSearchParams(window.location.search);
        if (
          !autoSaveHandled.current &&
          params.get("autosave") === "1" &&
          !isSaved
        ) {
          autoSaveHandled.current = true;
          const { error } = await supabase
            .from("saved_guides")
            .insert({ user_id: user.id, industry, slug });
          if (!active) return;
          if (!error) isSaved = true;

          params.delete("autosave");
          const query = params.toString();
          router.replace(
            `/guides/${industry}/${slug}${query ? `?${query}` : ""}`,
          );
        }

        setSaved(isSaved);
      }

      if (active) setReady(true);
    }

    init();
    return () => {
      active = false;
    };
  }, [industry, slug, router]);

  async function handleClick() {
    if (!userId) {
      const next = `/guides/${industry}/${slug}?autosave=1`;
      router.push(`/login?reason=save&next=${encodeURIComponent(next)}`);
      return;
    }

    setBusy(true);
    const supabase = createClient();

    if (saved) {
      const { error } = await supabase
        .from("saved_guides")
        .delete()
        .eq("user_id", userId)
        .eq("industry", industry)
        .eq("slug", slug);
      if (!error) setSaved(false);
    } else {
      const { error } = await supabase
        .from("saved_guides")
        .insert({ user_id: userId, industry, slug });
      if (!error) setSaved(true);
    }

    setBusy(false);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={!ready || busy}
      className={`inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 ${
        saved
          ? "border-navy bg-navy/5 text-navy"
          : "border-line bg-panel text-body-soft hover:border-navy hover:text-navy"
      }`}
    >
      <BookmarkIcon filled={saved} className="h-4 w-4" />
      {saved ? "Saved" : "Save to My Library"}
    </button>
  );
}
