// Full-page-style dashboard mock-ups.
//
// Three signature views from the Aurora dashboard rendered inline as
// CSS+SVG mock-ups, each framed inside a "browser chrome" so they
// feel like real screenshots. Three scenes:
//
//   1. Main dashboard     — sidebar, watchlist, signal status, portfolio
//   2. Market Scanner     — Aurora-scored stock list with filters
//   3. Calculator         — the dashboard's in-app compound tool
//
// All numbers are illustrative. The component is purely presentational
// (no client interactivity) so it can stay server-rendered and ship
// zero JS.

import Image from "next/image";

export default function FullDashboardTour() {
  return (
    <div className="space-y-20">
      <TourFrame
        eyebrow="01 · The Dashboard"
        title="Your portfolio, your watchlist, your plan — one screen"
        body="The home screen surfaces only the few things that matter weekly: which positions moved, which watchlist rungs are getting close, how the portfolio sits versus your target shape."
        mock={<DashboardScene />}
        alignment="left"
      />
      <TourFrame
        eyebrow="02 · The Market Scanner"
        title="Aurora's screening rules, ranked top to bottom"
        body="Thousands of tickers are scored 0–100 on quality, growth and value. The scanner ranks everything that passes the filter so you only ever spend time on names worth looking at."
        mock={<ScannerScene />}
        alignment="right"
      />
      <TourFrame
        eyebrow="03 · The Calculator"
        title="Compound growth, modelled in seconds"
        body="The in-app calculator runs the same projection as the public ISA tool, but pulls in your saved contributions, plan tier and timeframe so the numbers reflect your actual setup."
        mock={<CalculatorScene />}
        alignment="left"
      />
    </div>
  );
}

/* ============================================================
   Layout: framed mock-up + copy column
   ============================================================ */

function TourFrame({
  eyebrow,
  title,
  body,
  mock,
  alignment,
}: {
  eyebrow: string;
  title: string;
  body: string;
  mock: React.ReactNode;
  alignment: "left" | "right";
}) {
  const mockOrder =
    alignment === "left" ? "lg:order-2" : "lg:order-1";
  const copyOrder =
    alignment === "left" ? "lg:order-1" : "lg:order-2";
  return (
    <div className="grid lg:grid-cols-12 gap-8 items-center">
      <div className={`lg:col-span-4 ${copyOrder}`}>
        <p
          className="text-[11px] font-bold uppercase tracking-[0.18em] mb-3"
          style={{ color: "var(--accent-blue)" }}
        >
          {eyebrow}
        </p>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h3>
        <p
          className="mt-4 text-base leading-relaxed"
          style={{ color: "var(--text-2)" }}
        >
          {body}
        </p>
      </div>
      <div className={`lg:col-span-8 ${mockOrder}`}>
        <BrowserFrame>{mock}</BrowserFrame>
      </div>
    </div>
  );
}

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl border overflow-hidden shadow-2xl"
      style={{
        background: "var(--bg-deep)",
        borderColor: "var(--border)",
        boxShadow:
          "0 30px 80px -20px rgba(34,211,238,0.18), 0 20px 50px -25px rgba(236,72,153,0.18)",
      }}
    >
      {/* Mock browser chrome */}
      <div
        className="flex items-center gap-1.5 px-3 py-2 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        <span
          className="ml-3 text-[10px] font-mono"
          style={{ color: "var(--text-3)" }}
        >
          app.auroragrowth.co.uk
        </span>
      </div>
      {children}
    </div>
  );
}

/* ============================================================
   Shared chrome: sidebar + topbar used by all three scenes
   ============================================================ */

function Sidebar({ active }: { active: string }) {
  const items = [
    { label: "Dashboard", icon: "▦" },
    { label: "Watchlist", icon: "★" },
    { label: "Market Scanner", icon: "⌕" },
    { label: "Calculator", icon: "Σ" },
    { label: "Connections", icon: "⇄" },
    { label: "Alerts", icon: "◉" },
    { label: "Settings", icon: "⚙" },
  ];
  return (
    <aside
      className="w-[140px] shrink-0 p-3 border-r flex flex-col gap-1"
      style={{
        background: "var(--bg-base)",
        borderColor: "var(--border)",
      }}
    >
      <div className="flex items-center gap-2 px-2 py-2 mb-2">
        <Image
          src="/aurora-logo.png"
          alt=""
          width={1463}
          height={540}
          className="h-5 w-auto"
        />
      </div>
      {items.map((i) => {
        const isActive = i.label === active;
        return (
          <div
            key={i.label}
            className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px]"
            style={{
              background: isActive
                ? "linear-gradient(90deg, rgba(34,211,238,0.15), rgba(167,139,250,0.10))"
                : "transparent",
              color: isActive ? "#fff" : "var(--text-2)",
            }}
          >
            <span
              className="text-[10px] w-3 text-center"
              style={{
                color: isActive ? "var(--accent-cyan)" : "var(--text-3)",
              }}
            >
              {i.icon}
            </span>
            <span>{i.label}</span>
          </div>
        );
      })}
    </aside>
  );
}

function Topbar({ title, sub }: { title: string; sub?: string }) {
  return (
    <div
      className="flex items-center justify-between px-4 py-2.5 border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div>
        <p className="text-white text-[13px] font-bold leading-none">
          {title}
        </p>
        {sub && (
          <p
            className="text-[10px] mt-0.5"
            style={{ color: "var(--text-3)" }}
          >
            {sub}
          </p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span
          className="text-[10px] px-2 py-0.5 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(34,211,238,0.15), rgba(236,72,153,0.15))",
            color: "#fff",
          }}
        >
          Pro
        </span>
        <span
          className="w-6 h-6 rounded-full"
          style={{
            background: "linear-gradient(135deg,#22d3ee,#a78bfa)",
          }}
        />
      </div>
    </div>
  );
}

/* ============================================================
   Scene 1: Main dashboard
   ============================================================ */

function DashboardScene() {
  return (
    <div className="flex" style={{ minHeight: 460 }}>
      <Sidebar active="Dashboard" />
      <div className="flex-1 flex flex-col">
        <Topbar
          title="Good morning, Paul"
          sub="Markets open in 2h 14m · S&P futures +0.4%"
        />
        <div className="grid grid-cols-12 gap-3 p-4">
          {/* Portfolio summary tile */}
          <div
            className="col-span-5 rounded-xl border p-4"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.18em] font-bold"
              style={{ color: "var(--text-3)" }}
            >
              Portfolio
            </p>
            <p className="text-white text-2xl font-extrabold mt-1 leading-none">
              £24,815.32
            </p>
            <p
              className="text-[10px] mt-1 font-mono"
              style={{ color: "#34d399" }}
            >
              +£412.18 today · +1.69%
            </p>

            <svg viewBox="0 0 240 50" className="w-full h-10 mt-3">
              <defs>
                <linearGradient id="d1s" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="55%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
                <linearGradient id="d1f" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,38 L20,34 L40,36 L60,30 L80,31 L100,24 L120,26 L140,18 L160,22 L180,14 L200,18 L220,10 L240,14 L240,50 L0,50 Z"
                fill="url(#d1f)"
              />
              <path
                d="M0,38 L20,34 L40,36 L60,30 L80,31 L100,24 L120,26 L140,18 L160,22 L180,14 L200,18 L220,10 L240,14"
                fill="none"
                stroke="url(#d1s)"
                strokeWidth="1.75"
              />
            </svg>
          </div>

          {/* Allocation tile */}
          <div
            className="col-span-3 rounded-xl border p-4 space-y-2"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.18em] font-bold"
              style={{ color: "var(--text-3)" }}
            >
              Allocation
            </p>
            {[
              { l: "Tech", v: 32, c: "#22d3ee" },
              { l: "Consumer", v: 22, c: "#3b82f6" },
              { l: "Health", v: 18, c: "#ec4899" },
              { l: "Finance", v: 14, c: "#a78bfa" },
              { l: "Cash", v: 14, c: "rgba(255,255,255,0.2)" },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-1.5">
                <span
                  className="text-[10px] w-12"
                  style={{ color: "var(--text-2)" }}
                >
                  {s.l}
                </span>
                <div
                  className="flex-1 h-1 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${s.v}%`, background: s.c }}
                  />
                </div>
                <span
                  className="text-[10px] font-mono w-6 text-right"
                  style={{ color: "var(--text-3)" }}
                >
                  {s.v}%
                </span>
              </div>
            ))}
          </div>

          {/* Alerts tile */}
          <div
            className="col-span-4 rounded-xl border p-4"
            style={{
              background:
                "linear-gradient(180deg, rgba(34,211,238,0.06) 0%, rgba(2,6,23,0) 100%)",
              borderColor: "rgba(34,211,238,0.22)",
            }}
          >
            <div className="flex items-center justify-between">
              <p
                className="text-[10px] uppercase tracking-[0.18em] font-bold"
                style={{ color: "var(--accent-cyan)" }}
              >
                Alerts
              </p>
              <span
                className="text-[9px] px-1.5 py-0.5 rounded-full"
                style={{
                  background: "rgba(34,211,238,0.15)",
                  color: "var(--accent-cyan)",
                }}
              >
                Telegram on
              </span>
            </div>
            <div className="space-y-1.5 mt-2">
              {[
                { t: "NVDA signal turned ready", h: "07:42" },
                { t: "MSFT Aurora score rose to 91", h: "Yesterday" },
                { t: "Watchlist export sent to Telegram", h: "Yesterday" },
              ].map((a) => (
                <div
                  key={a.t}
                  className="flex items-start gap-2 text-[10px]"
                >
                  <span
                    className="mt-1 inline-block w-1 h-1 rounded-full"
                    style={{ background: "var(--accent-cyan)" }}
                  />
                  <span style={{ color: "var(--text-2)" }} className="flex-1">
                    {a.t}
                  </span>
                  <span style={{ color: "var(--text-3)" }}>{a.h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Watchlist tile (wider) */}
          <div
            className="col-span-7 rounded-xl border p-4"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <p
                className="text-[10px] uppercase tracking-[0.18em] font-bold"
                style={{ color: "var(--text-3)" }}
              >
                Watchlist
              </p>
              <span
                className="text-[10px]"
                style={{ color: "var(--text-3)" }}
              >
                5 / 8 used
              </span>
            </div>
            <div className="space-y-1">
              {[
                { t: "MSFT", n: "Microsoft", s: 91, c: 1.2 },
                { t: "NVDA", n: "NVIDIA", s: 88, c: 2.8 },
                { t: "GOOG", n: "Alphabet", s: 82, c: -0.4 },
                { t: "ASML", n: "ASML", s: 79, c: 0.6 },
                { t: "V", n: "Visa", s: 76, c: -0.9 },
              ].map((r) => (
                <div
                  key={r.t}
                  className="flex items-center gap-2 px-2 py-1.5 rounded"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-[11px] font-bold leading-none">
                      {r.t}
                    </p>
                    <p
                      className="text-[9px] truncate leading-none mt-0.5"
                      style={{ color: "var(--text-3)" }}
                    >
                      {r.n}
                    </p>
                  </div>
                  <div
                    className="text-[10px] font-bold rounded-md px-1.5 py-0.5"
                    style={{
                      background:
                        r.s >= 85
                          ? "linear-gradient(90deg, rgba(34,211,238,0.25), rgba(236,72,153,0.25))"
                          : "rgba(167,139,250,0.18)",
                      color: r.s >= 85 ? "#fff" : "#c4b5fd",
                    }}
                  >
                    {r.s}
                  </div>
                  <span
                    className="text-[10px] font-mono w-10 text-right"
                    style={{ color: r.c >= 0 ? "#34d399" : "#fb7185" }}
                  >
                    {r.c >= 0 ? "+" : ""}
                    {r.c.toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Ready-to-invest signal tile — placeholder until the
              Pine Script is wired in. Each row shows a watchlist
              stock plus the simple blue/red signal status
              (ready / not yet) calculated from the last peak. */}
          <div
            className="col-span-5 rounded-xl border p-4"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <p
                className="text-[10px] uppercase tracking-[0.18em] font-bold"
                style={{ color: "var(--text-3)" }}
              >
                Ready-to-invest signal
              </p>
              <span
                className="text-[10px]"
                style={{ color: "var(--text-3)" }}
              >
                from last peak
              </span>
            </div>
            <div className="space-y-1.5">
              {[
                { t: "NVDA", pct: -22, ready: true },
                { t: "ASML", pct: -18, ready: true },
                { t: "GOOG", pct: -11, ready: false },
                { t: "MSFT", pct: -6, ready: false },
                { t: "V", pct: -3, ready: false },
              ].map((r) => (
                <div
                  key={r.t}
                  className="flex items-center gap-2 px-2 py-1.5 rounded"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  {/* Status dot — blue = ready, red = not yet.
                      Mirrors the line colours the Pine Script will draw
                      on the chart so the language stays consistent. */}
                  <span
                    className="inline-block w-2 h-2 rounded-full"
                    style={{
                      background: r.ready ? "#3b82f6" : "#fb7185",
                      boxShadow: `0 0 6px ${r.ready ? "#3b82f6" : "#fb7185"}`,
                    }}
                    aria-hidden
                  />
                  <span className="text-white text-[11px] font-bold w-12">
                    {r.t}
                  </span>
                  <span
                    className="text-[10px] font-mono flex-1"
                    style={{ color: "var(--text-3)" }}
                  >
                    {r.pct}% from peak
                  </span>
                  <span
                    className="text-[10px] font-bold"
                    style={{
                      color: r.ready ? "#3b82f6" : "var(--text-3)",
                    }}
                  >
                    {r.ready ? "Ready" : "Wait"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Scene 2: Market Scanner
   ============================================================ */

function ScannerScene() {
  const rows = [
    { t: "MSFT", n: "Microsoft", sec: "Tech", q: 95, g: 88, v: 70, s: 91 },
    { t: "NVDA", n: "NVIDIA", sec: "Tech", q: 92, g: 96, v: 56, s: 88 },
    { t: "GOOG", n: "Alphabet", sec: "Tech", q: 89, g: 78, v: 72, s: 82 },
    { t: "ASML", n: "ASML", sec: "Tech", q: 86, g: 82, v: 64, s: 79 },
    { t: "V", n: "Visa", sec: "Finance", q: 91, g: 71, v: 62, s: 76 },
    { t: "MA", n: "Mastercard", sec: "Finance", q: 90, g: 73, v: 60, s: 75 },
    { t: "UNH", n: "UnitedHealth", sec: "Health", q: 84, g: 70, v: 68, s: 74 },
    { t: "COST", n: "Costco", sec: "Consumer", q: 87, g: 64, v: 52, s: 71 },
    { t: "LIN", n: "Linde", sec: "Industrial", q: 80, g: 68, v: 56, s: 69 },
  ];

  return (
    <div className="flex" style={{ minHeight: 460 }}>
      <Sidebar active="Market Scanner" />
      <div className="flex-1 flex flex-col">
        <Topbar
          title="Market Scanner"
          sub="Aurora screening rules · 4,128 scanned · 287 passing"
        />

        {/* Filter chips row */}
        <div
          className="flex items-center gap-2 px-4 py-2.5 border-b overflow-x-auto"
          style={{ borderColor: "var(--border)" }}
        >
          {[
            { l: "Score ≥ 70", active: true },
            { l: "All sectors" },
            { l: "Market cap > £1B" },
            { l: "PEG ≤ 1.5" },
            { l: "ROE ≥ 15%" },
          ].map((c, i) => (
            <span
              key={i}
              className="text-[10px] font-semibold px-2 py-1 rounded-full whitespace-nowrap"
              style={{
                background: c.active
                  ? "linear-gradient(90deg, rgba(34,211,238,0.2), rgba(251,146,60,0.2))"
                  : "rgba(255,255,255,0.05)",
                color: c.active ? "#fff" : "var(--text-2)",
                border: c.active
                  ? "1px solid rgba(34,211,238,0.35)"
                  : "1px solid var(--border)",
              }}
            >
              {c.l}
            </span>
          ))}
          <span className="ml-auto text-[10px]" style={{ color: "var(--text-3)" }}>
            Last sync 06:32 UTC
          </span>
        </div>

        {/* Scanner table */}
        <div className="flex-1 px-4 py-3">
          <div
            className="grid gap-1 text-[10px] uppercase tracking-[0.14em] font-bold px-2 pb-2"
            style={{
              gridTemplateColumns: "1.5fr 2fr 1fr 1fr 1fr 1fr 1fr",
              color: "var(--text-3)",
            }}
          >
            <span>Ticker</span>
            <span>Name</span>
            <span>Sector</span>
            <span className="text-right">Quality</span>
            <span className="text-right">Growth</span>
            <span className="text-right">Value</span>
            <span className="text-right">Score</span>
          </div>
          <div className="space-y-1">
            {rows.map((r, i) => (
              <div
                key={r.t}
                className="grid gap-1 text-[11px] px-2 py-1.5 rounded items-center"
                style={{
                  gridTemplateColumns:
                    "1.5fr 2fr 1fr 1fr 1fr 1fr 1fr",
                  background:
                    i === 0
                      ? "linear-gradient(90deg, rgba(34,211,238,0.08), rgba(236,72,153,0.05))"
                      : "rgba(255,255,255,0.02)",
                  border:
                    i === 0
                      ? "1px solid rgba(34,211,238,0.25)"
                      : "1px solid transparent",
                }}
              >
                <span className="text-white font-bold">{r.t}</span>
                <span style={{ color: "var(--text-2)" }} className="truncate">
                  {r.n}
                </span>
                <span style={{ color: "var(--text-3)" }}>{r.sec}</span>
                <MiniBar value={r.q} colour="#22d3ee" />
                <MiniBar value={r.g} colour="#3b82f6" />
                <MiniBar value={r.v} colour="#a78bfa" />
                <span
                  className="text-right font-bold rounded px-1.5 py-0.5 inline-block w-fit ml-auto"
                  style={{
                    background:
                      r.s >= 85
                        ? "linear-gradient(90deg, rgba(34,211,238,0.25), rgba(236,72,153,0.25))"
                        : "rgba(167,139,250,0.15)",
                    color: r.s >= 85 ? "#fff" : "#c4b5fd",
                  }}
                >
                  {r.s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniBar({
  value,
  colour,
}: {
  value: number;
  colour: string;
}) {
  return (
    <div className="flex items-center gap-1.5 justify-end">
      <div
        className="h-1 w-10 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <div
          className="h-full rounded-full"
          style={{ width: `${value}%`, background: colour }}
        />
      </div>
      <span
        className="text-[10px] font-mono w-5 text-right"
        style={{ color: "var(--text-2)" }}
      >
        {value}
      </span>
    </div>
  );
}

/* ============================================================
   Scene 3: Calculator
   ============================================================ */

function CalculatorScene() {
  // Reproduce the public calculator at a smaller scale.
  return (
    <div className="flex" style={{ minHeight: 460 }}>
      <Sidebar active="Calculator" />
      <div className="flex-1 flex flex-col">
        <Topbar title="Compound calculator" sub="Model your plan" />
        <div className="grid grid-cols-2 gap-4 p-4">
          {/* Inputs */}
          <div className="space-y-3">
            {[
              { l: "Monthly contribution", v: "£200", slider: 18 },
              { l: "Annual return target", v: "10%", slider: 16 },
              { l: "Horizon", v: "30 years", slider: 75 },
              { l: "Starting balance", v: "£0", slider: 0 },
            ].map((f) => (
              <div
                key={f.l}
                className="rounded-lg border p-3"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className="text-[10px] uppercase tracking-[0.16em] font-bold"
                    style={{ color: "var(--text-3)" }}
                  >
                    {f.l}
                  </span>
                  <span className="text-white text-xs font-bold">{f.v}</span>
                </div>
                <div
                  className="h-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${f.slider}%`,
                      background:
                        "linear-gradient(90deg,#22d3ee,#3b82f6,#ec4899,#a78bfa)",
                    }}
                  />
                </div>
              </div>
            ))}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["5%", "10%", "20%", "Aim"].map((p, i) => (
                <span
                  key={p}
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    background:
                      i === 1
                        ? "linear-gradient(90deg, rgba(34,211,238,0.18), rgba(236,72,153,0.18))"
                        : "rgba(255,255,255,0.04)",
                    color: i === 1 ? "#fff" : "var(--text-2)",
                    border:
                      i === 1
                        ? "1px solid rgba(34,211,238,0.35)"
                        : "1px solid var(--border)",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Result panel */}
          <div className="space-y-3">
            <div
              className="rounded-xl border p-4"
              style={{
                background: "var(--bg-card)",
                borderColor: "rgba(34,211,238,0.22)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.16em] font-bold"
                style={{ color: "var(--text-3)" }}
              >
                Projected balance · 30 yr
              </p>
              <p
                className="text-3xl font-extrabold mt-1"
                style={{
                  background:
                    "linear-gradient(90deg,#22d3ee 0%,#3b82f6 35%,#ec4899 70%,#a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                £472,180
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2 text-[10px]">
                <div>
                  <p style={{ color: "var(--text-3)" }}>Contributed</p>
                  <p className="text-white font-semibold">£72,000</p>
                </div>
                <div>
                  <p style={{ color: "var(--text-3)" }}>Compound growth</p>
                  <p style={{ color: "#34d399" }} className="font-semibold">
                    £400,180
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-xl border p-4"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              <svg viewBox="0 0 240 90" className="w-full h-20">
                <defs>
                  <linearGradient id="cs1" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="35%" stopColor="#3b82f6" />
                    <stop offset="70%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                  <linearGradient id="cf1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,82 L20,80 L40,77 L60,72 L80,66 L100,57 L120,46 L140,34 L160,25 L180,17 L200,11 L220,7 L240,4 L240,90 L0,90 Z"
                  fill="url(#cf1)"
                />
                <path
                  d="M0,82 L20,80 L40,77 L60,72 L80,66 L100,57 L120,46 L140,34 L160,25 L180,17 L200,11 L220,7 L240,4"
                  fill="none"
                  stroke="url(#cs1)"
                  strokeWidth="2"
                />
                {/* contributions reference line */}
                <path
                  d="M0,86 L240,68"
                  fill="none"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
              </svg>
              <div
                className="flex justify-between text-[9px] mt-1"
                style={{ color: "var(--text-3)" }}
              >
                <span>Yr 0</span>
                <span>Yr 15</span>
                <span>Yr 30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
