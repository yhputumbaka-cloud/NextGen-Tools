import ReactMarkdown from "react-markdown";

export default function MarkdownText({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => (
          <p className="mb-4 leading-relaxed last:mb-0">{children}</p>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-navy-deep">{children}</strong>
        ),
        em: ({ children }) => <em>{children}</em>,
        a: ({ children, href }) => (
          <a
            href={href}
            className="text-navy underline underline-offset-2 hover:text-navy-deep"
          >
            {children}
          </a>
        ),
        ul: ({ children }) => (
          <ul className="mb-4 list-disc space-y-1 pl-5 last:mb-0">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-4 list-decimal space-y-1 pl-5 last:mb-0">
            {children}
          </ol>
        ),
        li: ({ children }) => <li>{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="mb-4 border-l-2 border-navy/30 pl-4 text-body-soft last:mb-0">
            {children}
          </blockquote>
        ),
        code: ({ children }) => (
          <code className="rounded bg-line/60 px-1 py-0.5 font-mono text-[0.9em]">
            {children}
          </code>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
