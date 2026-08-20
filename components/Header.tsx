"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useSessionState } from "@/lib/hooks/useSessionState";

const NAV_LINKS = [
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { hasSession } = useSessionState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-line bg-panel/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-baseline gap-2 text-lg font-semibold tracking-tight text-navy-deep"
        >
          <span>NEXT</span>
          <span className="font-thin text-dim">|</span>
          <span>GEN</span>
        </Link>

        <nav className="flex items-center gap-8 text-sm font-medium text-body-soft">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}

          {hasSession ? (
            <div className="flex items-center gap-5">
              <Link href="/account" className="transition-colors hover:text-navy">
                Account
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="transition-colors hover:text-navy"
              >
                Log out
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-deep"
            >
              Log in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
