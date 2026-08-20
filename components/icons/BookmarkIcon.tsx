export default function BookmarkIcon({
  filled = false,
  className = "h-4 w-4",
}: {
  filled?: boolean;
  className?: string;
}) {
  if (filled) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M6 3a2 2 0 0 0-2 2v16l8-5.333L20 21V5a2 2 0 0 0-2-2H6Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 3a2 2 0 0 0-2 2v16l8-5.333L20 21V5a2 2 0 0 0-2-2H6Z" />
    </svg>
  );
}
