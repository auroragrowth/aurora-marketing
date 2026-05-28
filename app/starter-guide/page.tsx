import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starter Guide — Aurora Growth Academy",
  description:
    "How Aurora's structured investing system works: screening rules, Blue Aurora ladders, manual or assisted execution, and the case for consistency over timing.",
};

const SIGNUP_URL = "https://app.auroragrowth.co.uk/signup";

export default function StarterGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <header className="mb-12 text-center">
        <p
          className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
          style={{ color: "var(--accent-cyan)" }}
        >
          Starter Guide
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          What Aurora Growth Academy actually is
        </h1>
        <p
          className="mt-5 text-lg leading-relaxed"
          style={{ color: "var(--text-2)" }}
        >
          A plain-English walkthrough of the system: why structure beats
          guessing, how the ladder approach works, and how to plug Aurora
          into your own investing.
        </p>
      </header>

      <div className="space-y-12">
        <Section title="What Aurora is — and isn't">
          <p>
            Aurora is an <strong>educational platform and software toolkit</strong>{" "}
            for individual investors. It gives you a structured way to filter
            stocks, plan buy levels, and stay consistent across years —
            without trying to predict where the market is heading next week.
          </p>
          <p>
            Aurora is <em>not</em> a financial adviser. We don't tell you
            what to buy, manage money on your behalf, or make any
            return-related promises. Everything you see on the platform is
            educational, and every decision is yours.
          </p>
        </Section>

        <Section title="Why structure matters">
          <p>
            Most retail investors don't lose money because they picked the
            wrong stock. They lose money because they:
          </p>
          <ul>
            <li>Buy at peaks because they're excited.</li>
            <li>Sell at troughs because they're afraid.</li>
            <li>Switch strategies every few months.</li>
            <li>Never keep a record of why they did anything.</li>
          </ul>
          <p>
            A process fixes all four. If you know in advance{" "}
            <strong>what you'd buy, at what price, and how much</strong>, you
            no longer have to make those calls in the moment — when emotions
            run highest. That is the entire point of Aurora.
          </p>
        </Section>

        <Section title="How the strategy works">
          <p>
            Aurora is built around three repeatable steps:
          </p>
          <ol>
            <li>
              <strong>Screen.</strong> Aurora's screening rules score stocks
              on quality, growth and value. You only look at names that pass
              the filter — everything else stays out of view.
            </li>
            <li>
              <strong>Plan.</strong> For each stock, you set a{" "}
              <em>Blue Aurora ladder</em>: a series of staggered buy levels
              below the current price. Each rung is a defined buy zone with
              a defined amount.
            </li>
            <li>
              <strong>Execute consistently.</strong> When price hits a rung,
              you act. When it doesn't, you don't. The dashboard tracks
              which rungs have filled and which are pending.
            </li>
          </ol>
        </Section>

        <Section title="Why a ladder, not a single price?">
          <p>
            Nobody knows where a stock is going next. A ladder accepts that.
            Instead of one all-in entry, you split your planned investment
            across several price levels — say 5%, 10%, 15%, 20% below
            today's price.
          </p>
          <p>
            If the price drops, you buy more at better levels. If it
            doesn't, you simply hold what you have. You stop trying to
            "time the bottom" and replace it with a plan that improves your
            average price the longer the dip lasts.
          </p>
        </Section>

        <Section title="Manual or assisted with Trading 212">
          <p>
            Aurora is broker-agnostic. You can use it with any broker —
            Aurora is the planning system; the broker is just where you
            place the trades.
          </p>
          <p>
            If you use <strong>Trading 212</strong>, you can optionally
            connect your account (paper or live). Aurora will pull in your
            positions so the dashboard shows live data alongside your
            planned ladders. Your API credentials are encrypted at rest and
            used in read-only mode by default.
          </p>
        </Section>

        <Section title="Frequently asked questions">
          <FAQ
            q="Is Aurora regulated by the FCA?"
            a="No. Aurora Growth Academy is an educational platform. We do not provide regulated financial advice, and we are not authorised or regulated by the Financial Conduct Authority. Consider consulting an authorised adviser if you need personal investment advice."
          />
          <FAQ
            q="Will I make money using Aurora?"
            a="There is no guarantee of profit. Investing involves risk and the value of investments can fall as well as rise. Aurora gives you a structured process — it does not give you future returns."
          />
          <FAQ
            q="Do I need a Trading 212 account?"
            a="No. The Trading 212 integration is optional. The screening rules, ladders, watchlist and calculator all work without a broker connection."
          />
          <FAQ
            q="What if I'm a complete beginner?"
            a="Start with the Core tier and read this Starter Guide. The system is designed for clarity — you don't need a finance background. If you're new to investing, take your time learning the basics before committing real money."
          />
          <FAQ
            q="Can I cancel any time?"
            a="Yes. Subscriptions can be cancelled at any time from your account settings."
          />
        </Section>

        {/* CTA */}
        <div
          className="rounded-3xl p-8 border text-center"
          style={{
            background:
              "linear-gradient(180deg, rgba(34,211,238,0.07) 0%, rgba(2,6,23,0) 100%)",
            borderColor: "var(--border-cyan)",
          }}
        >
          <h3 className="text-2xl font-extrabold text-white mb-2">
            Ready to try the system?
          </h3>
          <p
            className="text-sm leading-relaxed mb-6 max-w-xl mx-auto"
            style={{ color: "var(--text-2)" }}
          >
            Create a free account and explore Aurora's dashboard at your
            own pace. You can upgrade when you're ready — there's no
            pressure and no auto-enrol.
          </p>
          <Link
            href={SIGNUP_URL}
            className="btn-aurora rounded-full px-6 py-3 text-sm inline-block"
          >
            Create your free account
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ---------- Helpers ---------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
        {title}
      </h2>
      <div
        className="space-y-4 leading-relaxed text-base"
        style={{ color: "var(--text-2)" }}
      >
        {children}
      </div>
      <style>{`
        section ul, section ol {
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        section ul { list-style: disc; }
        section ol { list-style: decimal; }
        section strong { color: #ffffff; }
      `}</style>
    </section>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details
      className="rounded-xl border p-4 mb-3 group"
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border)",
      }}
    >
      <summary
        className="cursor-pointer text-white font-semibold flex items-center justify-between"
      >
        {q}
        <span
          className="ml-2 transition group-open:rotate-45"
          aria-hidden
          style={{ color: "var(--accent-cyan)" }}
        >
          +
        </span>
      </summary>
      <p
        className="mt-3 text-sm leading-relaxed"
        style={{ color: "var(--text-2)" }}
      >
        {a}
      </p>
    </details>
  );
}
