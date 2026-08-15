"use client";

import { useState } from "react";

function renderWithVariables(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="text-prompt-var">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export default function AIPromptBlock({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="overflow-hidden rounded-lg border border-prompt-border bg-prompt-bg">
      <div className="flex items-center justify-between border-b border-prompt-border px-4 py-2.5">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          AI Prompt
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="text-xs font-medium text-slate-400 transition-colors hover:text-white"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap px-4 py-4 font-mono text-sm leading-relaxed text-slate-200">
        {renderWithVariables(prompt)}
      </pre>
    </div>
  );
}
