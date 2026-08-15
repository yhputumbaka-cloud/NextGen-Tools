import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left">
        <p>
          Free guides to help independent business owners put AI and
          digital tools to work.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/disclaimer" className="transition-colors hover:text-navy">
            Disclaimer
          </Link>
          <span className="text-dim">
            &copy; {year} NextGen Tools
          </span>
        </div>
      </div>
    </footer>
  );
}
