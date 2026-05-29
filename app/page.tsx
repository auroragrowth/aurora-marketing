import Link from "next/link";
import BalancedPortfolioVisual from "@/components/BalancedPortfolioVisual";
import CompoundCalculator from "@/components/CompoundCalculator";
import FullDashboardTour from "@/components/FullDashboardTour";

const SIGNUP_URL = "https://app.auroragrowth.co.uk/signup";
// Unauthenticated visitors hit /signup, not /upgrade — /upgrade requires
// an active session, so it would bounce a marketing-site click to the
// login page and the tier intent gets lost. Pass the tier as ?plan so
// signup can pre-select or hand off to checkout once they're signed in.
const signupForPlan = (plan: "core" | "pro" | "elite") =>
  `${SIGNUP_URL}?plan=${plan}`;

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Platform />
      <ISASection />
      <BalancedPortfolioSection />
      <ManualAutoSection />
      <CalculatorSection />
      <Pricing />
      <CTA />
    </>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle headline glow — a single soft radial in the brand
          gradient, sitting above the global ambient backdrop. Kept
          deliberately gentle so it complements the floating particles
          rather than competing with them. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[90%] pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 30%, rgba(34,211,238,0.10) 0%, rgba(236,72,153,0.06) 45%, rgba(2,6,23,0) 75%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <p
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] mb-6"
          style={{
            borderColor: "var(--border-cyan)",
            color: "var(--accent-cyan)",
            background: "rgba(34,211,238,0.06)",
          }}
        >
          <span aria-hidden>✦</span> Structured investing system
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
          Most people don't lose money because of the market.
          <br />
          <span className="aurora-text">
            They lose because they don't have a process.
          </span>
        </h1>
        <p
          className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed"
          style={{ color: "var(--text-2)" }}
        >
          Aurora Growth Academy is a structured system designed to help you
          think more clearly, plan entries properly, and stay more consistent
          over time — without trying to predict the market.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={SIGNUP_URL}
            className="btn-aurora rounded-full px-6 py-3 text-sm"
          >
            Start your free account
          </Link>
          <Link
            href="/starter-guide"
            className="rounded-full px-6 py-3 text-sm font-semibold border transition"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-1)",
            }}
          >
            Read the starter guide
          </Link>
        </div>
        <p
          className="mt-5 text-xs"
          style={{ color: "var(--text-3)" }}
        >
          Educational platform. Not regulated by the FCA. Capital at risk.
        </p>
      </div>
    </section>
  );
}

/* ---------- Problem / Solution ---------- */

function ProblemSolution() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The problem"
          title="Investing without a process is just guessing"
          subtitle="Most people freeze when prices fall and chase when they rise. They don't have a structure for what to buy, when to buy more, or when to stop."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {[
            {
              t: "No filter for what to buy",
              d: "Endless tickers, headlines, and tips. No way to separate signal from noise.",
            },
            {
              t: "No plan for falling prices",
              d: "When markets drop, panic takes over. You either freeze or sell at the worst moment.",
            },
            {
              t: "No record of what works",
              d: "Without consistency, you can't tell whether your decisions are improving — or just lucky.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl p-6 border"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              <h3 className="text-white font-bold mb-2">{c.t}</h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-2)" }}
              >
                {c.d}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeader
            eyebrow="The solution"
            title="A repeatable framework for buying, holding and adding"
            subtitle="Aurora gives you a system: clear screening rules, planned entry ladders, and a dashboard that keeps you focused on the few things that actually matter."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              {
                n: "01",
                t: "Filter using Aurora screening rules",
                d: "Stocks are scored on quality, growth and value. You only ever look at the names that pass.",
                accent: "#22d3ee",
                wash: "rgba(34,211,238,0.06)",
                border: "rgba(34,211,238,0.22)",
              },
              {
                n: "02",
                t: "Plan entries with the Blue Aurora ladder",
                d: "Pre-define buy zones at staggered prices. You're never left wondering 'should I buy here?'",
                accent: "#ec4899",
                wash: "rgba(236,72,153,0.06)",
                border: "rgba(236,72,153,0.25)",
              },
              {
                n: "03",
                t: "Stay consistent with one dashboard",
                d: "Watchlist, positions, calculator and ladders in one place — built so you check it weekly, not hourly.",
                accent: "#a78bfa",
                wash: "rgba(167,139,250,0.06)",
                border: "rgba(167,139,250,0.25)",
              },
            ].map((c) => (
              <div
                key={c.n}
                className="rounded-2xl p-6 border"
                style={{
                  background: `linear-gradient(180deg, ${c.wash} 0%, rgba(2,6,23,0) 100%)`,
                  borderColor: c.border,
                }}
              >
                <p
                  className="text-xs font-bold mb-3"
                  style={{ color: c.accent }}
                >
                  {c.n}
                </p>
                <h3 className="text-white font-bold mb-2">{c.t}</h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-2)" }}
                >
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Platform ---------- */

function Platform() {
  return (
    <section
      id="platform"
      className="relative py-20 border-t overflow-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Take the tour"
          title={
            <>
              Three views, one <span className="aurora-text">focused</span> workflow
            </>
          }
          subtitle="The Aurora dashboard is built around weekly check-ins, not daily refreshing. Here's how the main screens work."
        />

        <div className="mt-16">
          <FullDashboardTour />
        </div>
      </div>
    </section>
  );
}

/* ---------- ISA section ---------- */

function ISASection() {
  return (
    <section
      className="relative py-20 border-t overflow-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Pink-leaning aurora wash — visually anchors the "UK investors"
          eyebrow's violet accent. */}
      <div
        aria-hidden
        className="absolute -top-1/4 -right-1/4 w-[60%] h-[120%] pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(236,72,153,0.18) 0%, rgba(2,6,23,0) 70%)",
          filter: "blur(40px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p
            className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
            style={{ color: "var(--accent-violet)" }}
          >
            UK investors
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built around the Stocks &amp; Shares ISA
          </h2>
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "var(--text-2)" }}
          >
            UK investors can put up to £20,000 a year into a Stocks &amp;
            Shares ISA, free of UK capital gains and dividend tax. Aurora is
            designed to make the most of that allowance with a structured,
            unhurried process you can stick to year after year.
          </p>
          <p
            className="mt-4 text-sm"
            style={{ color: "var(--text-3)" }}
          >
            Tax treatment depends on your circumstances and may change. ISA
            rules are set by HMRC.
          </p>
        </div>
        <div
          className="rounded-3xl p-8 border"
          style={{
            background:
              "linear-gradient(160deg, rgba(167,139,250,0.08) 0%, rgba(34,211,238,0.05) 100%)",
            borderColor: "var(--border)",
          }}
        >
          <div className="grid grid-cols-2 gap-6">
            <Stat label="ISA allowance / year" value="£20,000" />
            <Stat label="UK CGT inside an ISA" value="£0" />
            <Stat label="Dividend tax inside an ISA" value="£0" />
            <Stat label="Accounts you can open" value="Multiple per type" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p
        className="text-xs uppercase tracking-[0.16em] font-bold mb-1"
        style={{ color: "var(--text-3)" }}
      >
        {label}
      </p>
      <p className="text-2xl font-extrabold aurora-text">{value}</p>
    </div>
  );
}

/* ---------- Balanced portfolio ---------- */

function BalancedPortfolioSection() {
  return (
    <section
      id="balanced-portfolio"
      className="relative py-20 border-t overflow-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Balanced portfolio"
          title={
            <>
              Diversification is the <span className="aurora-text">first risk control</span>
            </>
          }
          subtitle="Aurora's structure pushes you toward a balanced shape: enough exposure across sectors that no single bad call ruins the year, but concentrated enough that the winners actually move the needle."
        />

        <div className="mt-12">
          <BalancedPortfolioVisual />
        </div>

        {/* Three principles below the visual — short, practical, no
            return promises. The middle card uses coral/orange as its
            accent to anchor the palette point. */}
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          <PrincipleCard
            n="01"
            accent="#22d3ee"
            wash="rgba(34,211,238,0.06)"
            border="rgba(34,211,238,0.22)"
            title="Spread across sectors"
            body="Pick stocks whose drivers don't all move together. Tech, consumer, healthcare and finance respond to different cycles — that's what makes the basket steadier."
          />
          <PrincipleCard
            n="02"
            accent="#fb923c"
            wash="rgba(251,146,60,0.07)"
            border="rgba(251,146,60,0.28)"
            title="Cap the biggest position"
            body="No single name above ~25–30% of the portfolio. Aurora's ladder system makes this natural — you size each position before the prices ever move."
          />
          <PrincipleCard
            n="03"
            accent="#a78bfa"
            wash="rgba(167,139,250,0.06)"
            border="rgba(167,139,250,0.25)"
            title="Keep cash as a tool"
            body="A small cash buffer is a feature, not lazy investing. It funds the lower rungs of every ladder if markets drop, which is when planned buying matters most."
          />
        </div>

        <p
          className="mt-8 text-xs text-center max-w-3xl mx-auto leading-relaxed"
          style={{ color: "var(--text-3)" }}
        >
          Sample allocations shown are illustrative only. Diversification
          reduces idiosyncratic risk but does not eliminate market risk and
          does not guarantee a positive outcome. Aurora does not recommend
          specific holdings.
        </p>
      </div>
    </section>
  );
}

function PrincipleCard({
  n,
  accent,
  wash,
  border,
  title,
  body,
}: {
  n: string;
  accent: string;
  wash: string;
  border: string;
  title: string;
  body: string;
}) {
  return (
    <div
      className="rounded-2xl p-6 border"
      style={{
        background: `linear-gradient(180deg, ${wash} 0%, rgba(2,6,23,0) 100%)`,
        borderColor: border,
      }}
    >
      <p className="text-xs font-bold mb-3" style={{ color: accent }}>
        {n}
      </p>
      <h3 className="text-white font-bold mb-2">{title}</h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-2)" }}
      >
        {body}
      </p>
    </div>
  );
}

/* ---------- Manual or Auto ---------- */

function ManualAutoSection() {
  return (
    <section
      className="py-20 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Two ways to invest"
          title="Manual control or assisted execution"
          subtitle="Pick the workflow that fits how much time you want to spend in the dashboard."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div
            className="rounded-2xl p-7 border"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <h3 className="text-white font-bold text-xl mb-2">
              Manual workflow
            </h3>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--text-2)" }}
            >
              You review Aurora's ladders, decide which rungs to fill, and
              place trades yourself in your broker. Aurora keeps the plan;
              you execute it.
            </p>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--text-2)" }}
            >
              <li>• Full control of every order</li>
              <li>• Works with any broker</li>
              <li>• Best if you enjoy hands-on investing</li>
            </ul>
          </div>

          <div
            className="rounded-2xl p-7 border"
            style={{
              background:
                "linear-gradient(180deg, rgba(34,211,238,0.06) 0%, rgba(2,6,23,0) 100%)",
              borderColor: "var(--border-cyan)",
            }}
          >
            <h3 className="text-white font-bold text-xl mb-2">
              Assisted with Trading 212
            </h3>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--text-2)" }}
            >
              Connect your Trading 212 account in either{" "}
              <strong style={{ color: "#fff" }}>Demo</strong> or{" "}
              <strong style={{ color: "#fff" }}>Live</strong> mode and Aurora
              pulls your positions, cash and P&amp;L into the dashboard. You
              still place every trade — Aurora gives you the live picture
              next to your plan.
            </p>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--text-2)" }}
            >
              <li>
                • <strong style={{ color: "#fff" }}>Demo account</strong>{" "}
                — practise the system with virtual money before going live
              </li>
              <li>
                • <strong style={{ color: "#fff" }}>Live account</strong>{" "}
                — same workflow, real positions, separate API key
              </li>
              <li>• API credentials encrypted at rest (AES-256)</li>
              <li>• Read-only by default — Aurora never places orders for you</li>
            </ul>
          </div>
        </div>

        {/* Telegram alerts feature strip — sits below the two workflow
            cards because both manual and assisted users benefit from it. */}
        <div
          className="mt-6 rounded-2xl p-6 border flex flex-col sm:flex-row sm:items-center gap-5"
          style={{
            background:
              "linear-gradient(90deg, rgba(34,211,238,0.05) 0%, rgba(236,72,153,0.04) 50%, rgba(167,139,250,0.05) 100%)",
            borderColor: "rgba(34,211,238,0.20)",
          }}
        >
          {/* Logo-style icon for Telegram (paper-plane chevron in cyan).
              Inline SVG so it inherits the brand palette without any
              icon-library dependency. */}
          <div
            className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,211,238,0.25), rgba(167,139,250,0.25))",
              border: "1px solid rgba(34,211,238,0.35)",
            }}
            aria-hidden
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </div>
          <div className="flex-1">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.18em] mb-1"
              style={{ color: "var(--accent-cyan)" }}
            >
              Telegram alerts
            </p>
            <h3 className="text-white font-bold text-lg mb-1.5">
              Aurora pings you the moment something matters
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-2)" }}
            >
              Link your Telegram in one tap and Aurora will send you a
              message when a ladder rung is hit, an Aurora score changes
              materially, or your watchlist needs attention. No daily-noise
              digests — just the events you actually need to know about.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Calculator ---------- */

function CalculatorSection() {
  return (
    <section
      id="calculator"
      className="py-20 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="See it on paper"
          title="What does staying consistent actually do?"
          subtitle="Move the sliders. Numbers are illustrative — real markets don't return a steady percent every year — but the maths shows why time in the market matters more than timing it."
        />
        <div className="mt-12">
          <CompoundCalculator />
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */

type Plan = {
  slug: "core" | "pro" | "elite";
  name: string;
  tagline: string;
  monthly: string;
  yearly: string;
  highlight?: boolean;
  features: string[];
  cta: string;
};

const PLANS: Plan[] = [
  {
    slug: "core",
    name: "Core",
    tagline: "Start with the system",
    monthly: "£19.99",
    yearly: "£199.90",
    features: [
      "Aurora screening rules access",
      "Watchlist (up to 5 stocks)",
      "Compound calculator",
      "Starter guide & education",
    ],
    cta: "Start with Core",
  },
  {
    slug: "pro",
    name: "Pro",
    tagline: "The full structured workflow",
    monthly: "£59",
    yearly: "£590",
    highlight: true,
    features: [
      "Everything in Core",
      "Watchlist up to 8 stocks",
      "Blue Aurora ladders",
      "Trading 212 connection",
      "Dashboard analytics",
    ],
    cta: "Get Pro",
  },
  {
    slug: "elite",
    name: "Elite",
    tagline: "For serious, active investors",
    monthly: "£149",
    yearly: "£1,490",
    features: [
      "Everything in Pro",
      "Unlimited watchlist",
      "Profit ladder for live positions",
      "Make Investment workflow",
      "Priority support",
    ],
    cta: "Go Elite",
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-20 border-t overflow-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Pick the tier that fits how you invest"
          subtitle="Monthly or yearly. Yearly saves roughly 17%. Cancel any time."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl p-7 border flex flex-col"
              style={{
                background: p.highlight
                  ? "linear-gradient(180deg, rgba(236,72,153,0.10) 0%, rgba(167,139,250,0.05) 50%, rgba(2,6,23,0) 100%)"
                  : "var(--bg-card)",
                borderColor: p.highlight
                  ? "rgba(236,72,153,0.30)"
                  : "var(--border)",
              }}
            >
              {p.highlight && (
                <p
                  className="inline-flex self-start rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] mb-3"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(34,211,238,0.18), rgba(236,72,153,0.25))",
                    color: "#fff",
                  }}
                >
                  Most popular
                </p>
              )}
              <h3 className="text-white font-bold text-xl">{p.name}</h3>
              <p
                className="text-sm mb-5"
                style={{ color: "var(--text-3)" }}
              >
                {p.tagline}
              </p>
              <p className="flex items-baseline gap-1.5 mb-1">
                <span className="text-3xl font-extrabold text-white">
                  {p.monthly}
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--text-3)" }}
                >
                  / month
                </span>
              </p>
              <p
                className="text-xs mb-6"
                style={{ color: "var(--text-3)" }}
              >
                or {p.yearly} / year
              </p>
              <ul
                className="space-y-2 text-sm mb-7 flex-1"
                style={{ color: "var(--text-2)" }}
              >
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className="mt-1 inline-block h-1.5 w-1.5 rounded-full"
                      style={{
                        background: p.highlight
                          ? "#f472b6"
                          : "var(--accent-violet)",
                      }}
                      aria-hidden
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={signupForPlan(p.slug)}
                className={
                  p.highlight
                    ? "btn-aurora rounded-full px-4 py-2.5 text-sm text-center"
                    : "rounded-full px-4 py-2.5 text-sm font-semibold text-center border"
                }
                style={
                  p.highlight
                    ? undefined
                    : {
                        borderColor: "var(--border)",
                        color: "var(--text-1)",
                      }
                }
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */

function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Build the habit. <span className="aurora-text">Trust the process.</span>
        </h2>
        <p
          className="mt-4 mx-auto max-w-2xl text-base leading-relaxed"
          style={{ color: "var(--text-2)" }}
        >
          Spend less time predicting and more time executing a structured
          plan. Open a free account and explore the dashboard for yourself.
        </p>
        <div className="mt-7">
          <Link
            href={SIGNUP_URL}
            className="btn-aurora rounded-full px-6 py-3 text-sm inline-block"
          >
            Create your free account
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Shared bits ---------- */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <p
        className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
        style={{ color: "var(--accent-cyan)" }}
      >
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-base leading-relaxed"
          style={{ color: "var(--text-2)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
