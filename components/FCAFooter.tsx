import Link from "next/link";

// Site-wide footer. Every page renders this. The disclaimer text is the
// minimum-viable UK FCA-friendly wording for an educational platform —
// no claims of authorisation, capital-at-risk warning, educational-only
// statement, past-performance line. Tighten if you get a compliance
// review with specific copy to mirror.

export default function FCAFooter() {
  return (
    <footer
      className="mt-24 border-t"
      style={{
        background: "var(--bg-base)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Top: brand + nav columns */}
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-3">
              <span className="text-cyan-300 text-lg" aria-hidden>
                ✦
              </span>
              <span className="font-bold">Aurora Growth Academy</span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-md"
              style={{ color: "var(--text-3)" }}
            >
              A structured investing system designed to help you think more
              clearly, plan entries properly, and stay more consistent over
              time. Educational only. Not financial advice.
            </p>
          </div>

          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--text-3)" }}
            >
              Platform
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#how-it-works" style={{ color: "var(--text-2)" }}>
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/#calculator" style={{ color: "var(--text-2)" }}>
                  ISA calculator
                </Link>
              </li>
              <li>
                <Link href="/#pricing" style={{ color: "var(--text-2)" }}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/starter-guide" style={{ color: "var(--text-2)" }}>
                  Starter guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--text-3)" }}
            >
              Legal
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/risk-warning" style={{ color: "var(--text-2)" }}>
                  Risk warning
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" style={{ color: "var(--text-2)" }}>
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" style={{ color: "var(--text-2)" }}>
                  Privacy policy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@auroragrowth.co.uk"
                  style={{ color: "var(--text-2)" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Risk / FCA disclaimer block. Renders prominently above the
            copyright line so visitors actually read it. */}
        <div
          className="mt-12 rounded-2xl p-5 border text-xs leading-relaxed"
          style={{
            background: "rgba(248,113,113,0.05)",
            borderColor: "rgba(248,113,113,0.18)",
            color: "var(--text-2)",
          }}
        >
          <p className="font-bold text-white mb-2 text-sm">
            Important information — educational only
          </p>
          <p>
            Aurora Growth Academy provides educational content and software
            tools for individual investors. We do not provide personal
            investment advice, portfolio management, or any service requiring
            authorisation by the Financial Conduct Authority. Aurora Growth
            Academy is not authorised or regulated by the FCA.
          </p>
          <p className="mt-2">
            Investing involves risk. The value of investments can go down as
            well as up and you may get back less than you invested. Past
            performance is not a reliable indicator of future results.
            Examples, calculators and projected outcomes shown on this site
            are illustrative only and assume returns which are not guaranteed
            in real markets. Tax treatment depends on individual
            circumstances and may change.
          </p>
          <p className="mt-2">
            Always consider seeking advice from an appropriately qualified
            and authorised professional before making investment decisions.
          </p>
        </div>

        {/* Copyright */}
        <div
          className="mt-8 pt-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-3)",
          }}
        >
          <p>© {new Date().getFullYear()} Aurora Growth Academy. All rights reserved.</p>
          <p>
            Built in the UK. <span aria-hidden>🇬🇧</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
