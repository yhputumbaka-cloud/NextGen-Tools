export default function CategoryTag({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-navy/10 px-3 py-1 text-xs font-medium text-navy">
      {label}
    </span>
  );
}
