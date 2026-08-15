import MarkdownText from "./MarkdownText";

export default function RequirementCallout({ content }: { content: string }) {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      <MarkdownText content={content} />
    </div>
  );
}
