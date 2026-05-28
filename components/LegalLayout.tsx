// Shared chrome for /legal/* pages. Keeps the markdown-ish content
// readable and consistent across Risk Warning, Terms and Privacy.
// Anything inside `children` should be plain prose — this wrapper
// styles headings, paragraphs and lists via descendant selectors.

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string; // ISO date e.g. "2026-05-29"
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <p
          className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
          style={{ color: "var(--accent-cyan)" }}
        >
          Legal
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          {title}
        </h1>
        <p
          className="mt-3 text-sm"
          style={{ color: "var(--text-3)" }}
        >
          Last updated: {updated}
        </p>
      </header>

      <div
        className="space-y-5 leading-relaxed text-base legal-prose"
        style={{ color: "var(--text-2)" }}
      >
        {children}
      </div>

      <style>{`
        .legal-prose h2 {
          color: #fff;
          font-weight: 700;
          font-size: 1.5rem;
          margin-top: 2.25rem;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }
        .legal-prose h3 {
          color: #fff;
          font-weight: 600;
          font-size: 1.125rem;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .legal-prose ul, .legal-prose ol {
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .legal-prose ul { list-style: disc; }
        .legal-prose ol { list-style: decimal; }
        .legal-prose strong { color: #fff; }
        .legal-prose a { color: var(--accent-cyan); text-decoration: underline; }
      `}</style>
    </article>
  );
}
