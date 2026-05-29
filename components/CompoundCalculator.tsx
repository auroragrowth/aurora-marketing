"use client";

import { useMemo, useState } from "react";

// React port of the WordPress compound calculator. Defaults mirror the
// original widget: £200/month, 7% annual return, 30 years. The chart is
// pure SVG so we don't need a charting dep — keeps the bundle small and
// the marketing page fast to render.

const fmtGBP = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(n);

function project(
  monthly: number,
  annualRate: number,
  years: number,
  startingPot: number,
): { year: number; contributed: number; balance: number }[] {
  const r = annualRate / 100 / 12;
  const points: { year: number; contributed: number; balance: number }[] = [
    { year: 0, contributed: startingPot, balance: startingPot },
  ];
  let balance = startingPot;
  let contributed = startingPot;
  for (let m = 1; m <= years * 12; m++) {
    balance = balance * (1 + r) + monthly;
    contributed += monthly;
    if (m % 12 === 0) {
      points.push({ year: m / 12, contributed, balance });
    }
  }
  return points;
}

// Preset chips so users have anchor points instead of guessing what
// number to type. "Aim" is intentionally a lower-prominence option than
// the historical S&P benchmark so the page doesn't *lead* with a high
// number — visitors have to choose to drag it up.
const RATE_PRESETS = [
  { value: 5, label: "Cautious", sub: "≈ Cash ISA + inflation" },
  { value: 10, label: "Historic S&P", sub: "long-run average" },
  { value: 20, label: "Ambitious", sub: "well above market" },
  { value: 50, label: "Aim", sub: "illustrative target" },
];

export default function CompoundCalculator() {
  const [monthly, setMonthly] = useState(200);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(30);
  const [starting, setStarting] = useState(0);

  const series = useMemo(
    () => project(monthly, rate, years, starting),
    [monthly, rate, years, starting],
  );
  const final = series[series.length - 1];
  const interest = final.balance - final.contributed;

  // SVG geometry
  const W = 600;
  const H = 220;
  const PAD_L = 40;
  const PAD_R = 12;
  const PAD_T = 12;
  const PAD_B = 28;
  const maxY = Math.max(final.balance, 1);
  const x = (i: number) =>
    PAD_L + (i / (series.length - 1)) * (W - PAD_L - PAD_R);
  const y = (v: number) =>
    H - PAD_B - (v / maxY) * (H - PAD_T - PAD_B);

  const balPath = series
    .map((p, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(p.balance)}`)
    .join(" ");
  const contribPath = series
    .map((p, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(p.contributed)}`)
    .join(" ");
  const fillPath =
    `${balPath} L${x(series.length - 1)},${H - PAD_B} L${x(0)},${H - PAD_B} Z`;

  return (
    <div
      className="rounded-3xl p-6 sm:p-8 border"
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border)",
      }}
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-5">
          <div>
            <label
              className="block text-xs font-bold uppercase tracking-[0.18em] mb-2"
              style={{ color: "var(--text-3)" }}
            >
              Starting amount
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={0}
                step={100}
                value={starting}
                onChange={(e) => setStarting(Math.max(0, +e.target.value))}
                className="w-28 rounded-lg px-3 py-2 text-white border"
                style={{
                  background: "var(--bg-deep)",
                  borderColor: "var(--border)",
                }}
              />
              <input
                type="range"
                min={0}
                max={50000}
                step={500}
                value={starting}
                onChange={(e) => setStarting(+e.target.value)}
                className="flex-1 accent-cyan-400"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-xs font-bold uppercase tracking-[0.18em] mb-2"
              style={{ color: "var(--text-3)" }}
            >
              Monthly contribution
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={0}
                step={25}
                value={monthly}
                onChange={(e) => setMonthly(Math.max(0, +e.target.value))}
                className="w-28 rounded-lg px-3 py-2 text-white border"
                style={{
                  background: "var(--bg-deep)",
                  borderColor: "var(--border)",
                }}
              />
              <input
                type="range"
                min={0}
                max={2000}
                step={25}
                value={monthly}
                onChange={(e) => setMonthly(+e.target.value)}
                className="flex-1 accent-cyan-400"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-xs font-bold uppercase tracking-[0.18em] mb-2"
              style={{ color: "var(--text-3)" }}
            >
              Estimated annual return ({rate}%)
            </label>
            <input
              type="range"
              min={1}
              max={60}
              step={0.5}
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
              className="w-full accent-pink-400"
            />
            {/* Preset chips — anchor users with realistic reference
                points before they decide where to drag the slider. */}
            <div className="mt-3 flex flex-wrap gap-2">
              {RATE_PRESETS.map((p) => {
                const active = Math.abs(rate - p.value) < 0.01;
                return (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => setRate(p.value)}
                    className="rounded-full px-3 py-1 text-[11px] font-semibold border transition"
                    style={{
                      background: active
                        ? "linear-gradient(90deg, rgba(34,211,238,0.2), rgba(236,72,153,0.2))"
                        : "transparent",
                      borderColor: active
                        ? "var(--accent-cyan)"
                        : "var(--border)",
                      color: active ? "#fff" : "var(--text-2)",
                    }}
                    title={p.sub}
                  >
                    {p.value}% · {p.label}
                  </button>
                );
              })}
            </div>
            <p
              className="mt-2 text-[11px] leading-relaxed"
              style={{ color: "var(--text-3)" }}
            >
              For reference: long-run S&amp;P 500 ≈ 10% p.a., Warren Buffett's
              lifetime ≈ 20%. Sustained returns above 20% are very rare and
              are not implied or promised by Aurora.
            </p>
          </div>

          <div>
            <label
              className="block text-xs font-bold uppercase tracking-[0.18em] mb-2"
              style={{ color: "var(--text-3)" }}
            >
              Investment horizon ({years} years)
            </label>
            <input
              type="range"
              min={1}
              max={40}
              step={1}
              value={years}
              onChange={(e) => setYears(+e.target.value)}
              className="w-full accent-violet-400"
            />
          </div>

          <p className="text-xs" style={{ color: "var(--text-3)" }}>
            Illustrative only. Returns are not guaranteed. Real markets are
            volatile and your actual outcome will differ. Aurora Growth
            Academy provides education, not investment advice.
          </p>
        </div>

        {/* Output */}
        <div className="space-y-4">
          <div
            className="rounded-2xl p-5 border"
            style={{
              background: "var(--bg-deep)",
              borderColor: "var(--border-cyan)",
            }}
          >
            <p
              className="text-xs uppercase tracking-[0.18em] font-bold mb-1"
              style={{ color: "var(--text-3)" }}
            >
              Projected balance in {years} years
            </p>
            <p
              className="text-4xl font-extrabold"
              style={{
                background:
                  "linear-gradient(90deg,#22d3ee 0%,#ec4899 55%,#a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {fmtGBP(final.balance)}
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
              <div>
                <p style={{ color: "var(--text-3)" }}>You'd contribute</p>
                <p className="text-white font-semibold text-base">
                  {fmtGBP(final.contributed)}
                </p>
              </div>
              <div>
                <p style={{ color: "var(--text-3)" }}>Growth from compounding</p>
                <p
                  className="font-semibold text-base"
                  style={{ color: "var(--accent-emerald)" }}
                >
                  {fmtGBP(interest)}
                </p>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div
            className="rounded-2xl p-4 border"
            style={{
              background: "var(--bg-deep)",
              borderColor: "var(--border)",
            }}
          >
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="w-full h-auto"
              role="img"
              aria-label="Projected portfolio growth over time"
            >
              <defs>
                <linearGradient id="agFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity="0.35" />
                  <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="agStroke" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="35%" stopColor="#3b82f6" />
                  <stop offset="70%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
              {/* y-axis grid lines */}
              {[0.25, 0.5, 0.75, 1].map((f) => (
                <line
                  key={f}
                  x1={PAD_L}
                  x2={W - PAD_R}
                  y1={H - PAD_B - f * (H - PAD_T - PAD_B)}
                  y2={H - PAD_B - f * (H - PAD_T - PAD_B)}
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth={1}
                />
              ))}
              {/* contributions line */}
              <path
                d={contribPath}
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth={1.5}
                strokeDasharray="4 4"
              />
              {/* balance fill + line */}
              <path d={fillPath} fill="url(#agFill)" />
              <path
                d={balPath}
                fill="none"
                stroke="url(#agStroke)"
                strokeWidth={2.5}
              />
              {/* x-axis labels */}
              {[0, Math.floor(years / 2), years].map((yr) => {
                const idx = series.findIndex((p) => p.year === yr);
                if (idx < 0) return null;
                return (
                  <text
                    key={yr}
                    x={x(idx)}
                    y={H - 8}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.5)"
                    fontSize="10"
                  >
                    Yr {yr}
                  </text>
                );
              })}
              {/* y-axis label (max) */}
              <text
                x={PAD_L - 6}
                y={PAD_T + 10}
                textAnchor="end"
                fill="rgba(255,255,255,0.5)"
                fontSize="10"
              >
                {fmtGBP(maxY)}
              </text>
            </svg>
            <div
              className="mt-2 flex items-center gap-4 text-xs"
              style={{ color: "var(--text-3)" }}
            >
              <span className="flex items-center gap-2">
                <span
                  className="inline-block w-3 h-0.5"
                  style={{
                    background:
                      "linear-gradient(90deg,#22d3ee,#3b82f6,#ec4899,#a78bfa)",
                  }}
                />
                Projected balance
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block w-3 border-t border-dashed border-white/40" />
                Total contributed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
