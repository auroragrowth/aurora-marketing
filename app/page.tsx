import Link from "next/link";
import CompoundCalculator from "@/components/CompoundCalculator";

const SIGNUP_URL = "https://app.auroragrowth.co.uk/signup";
const UPGRADE_URL = "https://app.auroragrowth.co.uk/upgrade";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Platform />
      <ISASection />
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
      {/* Aurora glow background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(34,211,238,0.18) 0%, rgba(2,6,23,0) 60%), radial-gradient(40% 40% at 80% 30%, rgba(167,139,250,0.16) 0%, rgba(2,6,23,0) 60%)",
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
          <span
            style={{
              background: "linear-gradient(90deg,#22d3ee 0%,#a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
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
              },
              {
                n: "02",
                t: "Plan entries with the Blue Aurora ladder",
                d: "Pre-define buy zones at staggered prices. You're never left wondering 'should I buy here?'",
              },
              {
                n: "03",
                t: "Stay consistent with one dashboard",
                d: "Watchlist, positions, calculator and ladders in one place — built so you check it weekly, not hourly.",
              },
            ].map((c) => (
              <div
                key={c.n}
                className="rounded-2xl p-6 border"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(34,211,238,0.05) 0%, rgba(2,6,23,0) 100%)",
                  borderColor: "var(--border-cyan)",
                }}
              >
                <p
                  className="text-xs font-bold mb-3"
                  style={{ color: "var(--accent-cyan)" }}
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
      className="py-20 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The platform"
          title="Everything in one focused dashboard"
          subtitle="No tabs to juggle, no five different tools. Just the workflow Aurora is built around."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <FeatureCard
            title="Cross-device Watchlist"
            body="Track the stocks you've vetted. Notes, scores, ladder progress — all synced across devices."
            bullet={[
              "Aurora score 0–100 on every name",
              "Group by sector or strategy",
              "Quick-add from search anywhere on the site",
            ]}
          />
          <FeatureCard
            title="Blue Aurora ladders"
            body="Pre-plan staggered buy levels so falling prices become opportunities, not panic."
            bullet={[
              "Define ladders per stock",
              "Track which rungs have filled",
              "Profit ladder for invested positions",
            ]}
          />
          <FeatureCard
            title="Compound calculator"
            body="Model contributions, returns and timeframes. See what consistency actually does over decades."
            bullet={[
              "Adjust monthly contribution",
              "Tweak return and horizon",
              "Visualise growth vs contributions",
            ]}
          />
          <FeatureCard
            title="Trading 212 connection"
            body="Optional integration with Trading 212 — pull live positions and portfolio metrics into the dashboard."
            bullet={[
              "Paper or live mode",
              "Encrypted API credentials",
              "Read-only by default",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  body,
  bullet,
}: {
  title: string;
  body: string;
  bullet: string[];
}) {
  return (
    <div
      className="rounded-2xl p-7 border"
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border)",
      }}
    >
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "var(--text-2)" }}
      >
        {body}
      </p>
      <ul className="space-y-1.5 text-sm" style={{ color: "var(--text-2)" }}>
        {bullet.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span
              className="mt-1 inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--accent-cyan)" }}
              aria-hidden
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- ISA section ---------- */

function ISASection() {
  return (
    <section
      className="py-20 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
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
      <p
        className="text-2xl font-extrabold"
        style={{
          background: "linear-gradient(90deg,#22d3ee 0%,#a78bfa 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {value}
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
              Connect your Trading 212 account to pull live positions into
              Aurora. You still place every trade — Aurora just gives you
              the live picture next to your plan.
            </p>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--text-2)" }}
            >
              <li>• Live portfolio sync</li>
              <li>• Paper or live mode</li>
              <li>• API credentials encrypted at rest</li>
            </ul>
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
      className="py-20 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  ? "linear-gradient(180deg, rgba(34,211,238,0.08) 0%, rgba(2,6,23,0) 100%)"
                  : "var(--bg-card)",
                borderColor: p.highlight
                  ? "var(--border-cyan)"
                  : "var(--border)",
              }}
            >
              {p.highlight && (
                <p
                  className="inline-flex self-start rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] mb-3"
                  style={{
                    background: "rgba(34,211,238,0.18)",
                    color: "var(--accent-cyan)",
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
                          ? "var(--accent-cyan)"
                          : "var(--accent-violet)",
                      }}
                      aria-hidden
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={UPGRADE_URL}
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
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Build the habit. Trust the process.
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
  title: string;
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
