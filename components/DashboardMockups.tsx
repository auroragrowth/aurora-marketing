// Inline dashboard mock-ups for the marketing site.
//
// These are not screenshots — they're CSS/SVG recreations of three
// signature dashboard views. Pros: pixel-sharp at any zoom, always
// theme-matched, no static-asset pipeline. Cons: have to be kept
// roughly aligned with the real product as it evolves. The labelled
// "captions" make clear they are illustrative previews.

export default function DashboardMockups() {
  return (
    <div className="grid lg:grid-cols-3 gap-5">
      <MockCard
        eyebrow="Watchlist"
        title="Every name you've vetted, scored 0–100"
        body="The Aurora score combines quality, growth and value into one number — so the only stocks competing for your attention are ones that already pass the filter."
        mock={<WatchlistMock />}
      />
      <MockCard
        eyebrow="Blue Aurora Ladder"
        title="Buy levels pre-planned, not improvised"
        body="Each rung is a defined buy zone with a defined amount. Falling prices fill rungs automatically — emotion stops being the deciding factor."
        mock={<LadderMock />}
        highlight
      />
      <MockCard
        eyebrow="Portfolio overview"
        title="One screen for everything you hold"
        body="Live positions (via optional Trading 212 sync), allocation by sector, and progress against your plan — all in the same dark-themed dashboard."
        mock={<PortfolioMock />}
      />
    </div>
  );
}

/* ----- Generic card wrapper ----- */

function MockCard({
  eyebrow,
  title,
  body,
  mock,
  highlight,
}: {
  eyebrow: string;
  title: string;
  body: string;
  mock: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className="rounded-2xl p-5 border flex flex-col gap-4"
      style={{
        background: highlight
          ? "linear-gradient(180deg, rgba(236,72,153,0.07) 0%, rgba(2,6,23,0) 60%)"
          : "var(--bg-card)",
        borderColor: highlight
          ? "rgba(236,72,153,0.25)"
          : "var(--border)",
      }}
    >
      {/* The "browser chrome" frame around the mock — sells it as a
          dashboard view rather than a random card. */}
      <div
        className="rounded-xl border overflow-hidden"
        style={{
          background: "var(--bg-deep)",
          borderColor: "var(--border)",
        }}
      >
        <div
          className="flex items-center gap-1.5 px-3 py-2 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <span className="w-2 h-2 rounded-full bg-rose-400/60" />
          <span className="w-2 h-2 rounded-full bg-amber-400/60" />
          <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
          <span
            className="ml-2 text-[10px] font-mono"
            style={{ color: "var(--text-3)" }}
          >
            app.auroragrowth.co.uk
          </span>
        </div>
        <div className="p-4">{mock}</div>
      </div>
      <div>
        <p
          className="text-[11px] font-bold uppercase tracking-[0.18em] mb-1.5"
          style={{
            color: highlight ? "#f472b6" : "var(--accent-cyan)",
          }}
        >
          {eyebrow}
        </p>
        <h3 className="text-white font-bold text-base mb-2">{title}</h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-2)" }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

/* ----- Mock 1: Watchlist ----- */

type Row = { ticker: string; name: string; score: number; chg: number };

const WATCH_ROWS: Row[] = [
  { ticker: "MSFT", name: "Microsoft", score: 91, chg: 1.2 },
  { ticker: "NVDA", name: "NVIDIA", score: 88, chg: 2.8 },
  { ticker: "GOOG", name: "Alphabet", score: 82, chg: -0.4 },
  { ticker: "ASML", name: "ASML", score: 79, chg: 0.6 },
  { ticker: "V", name: "Visa", score: 76, chg: -0.9 },
];

function WatchlistMock() {
  return (
    <div className="space-y-1.5">
      {WATCH_ROWS.map((r) => (
        <div
          key={r.ticker}
          className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
          style={{ background: "rgba(255,255,255,0.02)" }}
        >
          <div className="flex-1 min-w-0">
            <p className="text-white text-[12px] font-bold leading-none">
              {r.ticker}
            </p>
            <p
              className="text-[10px] truncate leading-tight mt-0.5"
              style={{ color: "var(--text-3)" }}
            >
              {r.name}
            </p>
          </div>
          {/* Aurora score chip */}
          <div
            className="text-[10px] font-bold rounded-md px-2 py-0.5"
            style={{
              background:
                r.score >= 85
                  ? "linear-gradient(90deg, rgba(34,211,238,0.25), rgba(236,72,153,0.25))"
                  : "rgba(167,139,250,0.18)",
              color: r.score >= 85 ? "#fff" : "#c4b5fd",
            }}
          >
            {r.score}
          </div>
          <span
            className="text-[10px] font-mono w-10 text-right"
            style={{ color: r.chg >= 0 ? "#34d399" : "#fb7185" }}
          >
            {r.chg >= 0 ? "+" : ""}
            {r.chg.toFixed(1)}%
          </span>
        </div>
      ))}
      <div
        className="flex items-center justify-between mt-3 pt-3 border-t text-[10px]"
        style={{
          borderColor: "var(--border)",
          color: "var(--text-3)",
        }}
      >
        <span>Aurora score</span>
        <span>quality · growth · value</span>
      </div>
    </div>
  );
}

/* ----- Mock 2: Blue Aurora ladder ----- */

function LadderMock() {
  const rungs = [
    { pct: 0, price: 184.5, filled: true, allocation: 25 },
    { pct: -5, price: 175.27, filled: true, allocation: 25 },
    { pct: -10, price: 166.05, filled: false, allocation: 20 },
    { pct: -15, price: 156.82, filled: false, allocation: 15 },
    { pct: -20, price: 147.6, filled: false, allocation: 15 },
  ];
  return (
    <div className="space-y-2">
      <div className="flex items-end justify-between mb-2">
        <div>
          <p className="text-white text-[12px] font-bold leading-none">
            NVDA
          </p>
          <p
            className="text-[10px] mt-0.5"
            style={{ color: "var(--text-3)" }}
          >
            Blue Aurora Ladder
          </p>
        </div>
        <p
          className="text-[10px] font-mono"
          style={{ color: "var(--text-3)" }}
        >
          50% deployed
        </p>
      </div>
      {rungs.map((r, i) => (
        <div key={i} className="flex items-center gap-2">
          <span
            className="text-[9px] font-mono w-8"
            style={{
              color: r.pct === 0 ? "var(--text-2)" : "var(--text-3)",
            }}
          >
            {r.pct === 0 ? "Now" : `${r.pct}%`}
          </span>
          <div
            className="flex-1 h-5 rounded-md relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${
                r.filled
                  ? "rgba(34,211,238,0.4)"
                  : "rgba(255,255,255,0.08)"
              }`,
            }}
          >
            <div
              className="absolute inset-y-0 left-0"
              style={{
                width: r.filled ? "100%" : "0%",
                background:
                  "linear-gradient(90deg, rgba(34,211,238,0.35), rgba(236,72,153,0.25))",
              }}
            />
            <span
              className="absolute inset-0 flex items-center justify-between px-2 text-[10px] font-mono"
              style={{ color: r.filled ? "#fff" : "var(--text-3)" }}
            >
              <span>${r.price.toFixed(2)}</span>
              <span>{r.allocation}%</span>
            </span>
          </div>
          <span
            className="text-[10px] w-3"
            style={{
              color: r.filled ? "#22d3ee" : "var(--text-3)",
            }}
          >
            {r.filled ? "●" : "○"}
          </span>
        </div>
      ))}
      <div
        className="flex items-center justify-between mt-3 pt-3 border-t text-[10px]"
        style={{
          borderColor: "var(--border)",
          color: "var(--text-3)",
        }}
      >
        <span>● Filled</span>
        <span>○ Pending</span>
      </div>
    </div>
  );
}

/* ----- Mock 3: Portfolio overview ----- */

function PortfolioMock() {
  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between">
        <div>
          <p
            className="text-[10px] uppercase tracking-[0.18em] font-bold"
            style={{ color: "var(--text-3)" }}
          >
            Portfolio
          </p>
          <p className="text-white text-xl font-extrabold mt-1 leading-none">
            £24,815.32
          </p>
        </div>
        <div className="text-right">
          <p
            className="text-[10px] font-mono"
            style={{ color: "#34d399" }}
          >
            +£412.18
          </p>
          <p
            className="text-[10px] font-mono"
            style={{ color: "#34d399" }}
          >
            +1.69%
          </p>
        </div>
      </div>

      {/* Sparkline — pure SVG, gradient stroke matches the brand. */}
      <svg
        viewBox="0 0 240 56"
        className="w-full h-12"
        aria-label="Portfolio sparkline"
      >
        <defs>
          <linearGradient id="pfStroke" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="55%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id="pfFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,44 L20,40 L40,42 L60,34 L80,36 L100,28 L120,30 L140,22 L160,26 L180,18 L200,22 L220,12 L240,16 L240,56 L0,56 Z"
          fill="url(#pfFill)"
        />
        <path
          d="M0,44 L20,40 L40,42 L60,34 L80,36 L100,28 L120,30 L140,22 L160,26 L180,18 L200,22 L220,12 L240,16"
          fill="none"
          stroke="url(#pfStroke)"
          strokeWidth="2"
        />
      </svg>

      {/* Allocation bars — sector breakdown, simple but distinctively
          coloured with the aurora palette so it reads as 'on-brand'. */}
      <div className="space-y-1.5">
        {[
          { label: "Tech", pct: 42, c: "#22d3ee" },
          { label: "Consumer", pct: 24, c: "#a78bfa" },
          { label: "Healthcare", pct: 18, c: "#ec4899" },
          { label: "Finance", pct: 10, c: "#34d399" },
          { label: "Cash", pct: 6, c: "rgba(255,255,255,0.3)" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span
              className="text-[10px] w-16"
              style={{ color: "var(--text-2)" }}
            >
              {s.label}
            </span>
            <div
              className="flex-1 h-1.5 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="h-full rounded-full"
                style={{ width: `${s.pct}%`, background: s.c }}
              />
            </div>
            <span
              className="text-[10px] font-mono w-8 text-right"
              style={{ color: "var(--text-3)" }}
            >
              {s.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
