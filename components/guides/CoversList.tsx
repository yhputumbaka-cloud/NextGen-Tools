import ReactMarkdown from "react-markdown";

export default function CoversList({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => <p>{children}</p>,
        strong: ({ children }) => (
          <strong className="font-semibold text-navy-deep">{children}</strong>
        ),
        ul: ({ children }) => <ul className="space-y-3">{children}</ul>,
        li: ({ children }) => (
          <li className="flex items-start gap-3 text-body-soft">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
            <span>{children}</span>
          </li>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
