// Visual aid for the "Balanced portfolio" section.
// Three example allocations rendered as horizontal stacked bars so the
// concept reads at a glance: too concentrated (one giant block), too
// spread (lots of tiny slivers), and balanced (the goal). Each slice
// gets a colour from the Aurora logo palette to reinforce the brand.

type Slice = { label: string; pct: number; colour: string };

type Sample = {
  title: string;
  caption: string;
  flavour: "danger" | "warn" | "good";
  slices: Slice[];
};

const SAMPLES: Sample[] = [
  {
    title: "Too concentrated",
    caption:
      "One name carries 70% of the portfolio. One bad earnings call and the whole position takes the hit.",
    flavour: "danger",
    slices: [
      { label: "Tech (single name)", pct: 70, colour: "#fb7185" },
      { label: "Cash", pct: 30, colour: "rgba(255,255,255,0.18)" },
    ],
  },
  {
    title: "Balanced",
    caption:
      "Four to seven quality positions across sectors, sized so no single drawdown wrecks the plan.",
    flavour: "good",
    slices: [
      { label: "Tech", pct: 28, colour: "#22d3ee" },
      { label: "Consumer", pct: 22, colour: "#fb923c" },
      { label: "Healthcare", pct: 20, colour: "#ec4899" },
      { label: "Finance", pct: 16, colour: "#a78bfa" },
      { label: "Industrial", pct: 8, colour: "#34d399" },
      { label: "Cash", pct: 6, colour: "rgba(255,255,255,0.18)" },
    ],
  },
  {
    title: "Too spread thin",
    caption:
      "Twenty-five tiny holdings. Diversified on paper, but no single position can move the needle.",
    flavour: "warn",
    slices: Array.from({ length: 20 }).map((_, i) => ({
      label: `Holding ${i + 1}`,
      pct: 5,
      // Cycle through the logo palette so the bar reads as a borealis.
      colour: [
        "#22d3ee",
        "#fb923c",
        "#ec4899",
        "#a78bfa",
        "#34d399",
      ][i % 5],
    })),
  },
];

export default function BalancedPortfolioVisual() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {SAMPLES.map((s) => (
        <SampleCard key={s.title} sample={s} />
      ))}
    </div>
  );
}

function SampleCard({ sample }: { sample: Sample }) {
  const borderColour =
    sample.flavour === "good"
      ? "rgba(251,146,60,0.32)"
      : sample.flavour === "danger"
        ? "rgba(251,113,133,0.28)"
        : "var(--border)";
  const labelColour =
    sample.flavour === "good"
      ? "#fbbf24"
      : sample.flavour === "danger"
        ? "#fb7185"
        : "var(--text-3)";

  return (
    <div
      className="rounded-2xl p-5 border flex flex-col gap-4"
      style={{
        background:
          sample.flavour === "good"
            ? "linear-gradient(180deg, rgba(251,146,60,0.06) 0%, rgba(2,6,23,0) 70%)"
            : "var(--bg-card)",
        borderColor: borderColour,
      }}
    >
      <div>
        <p
          className="text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ color: labelColour }}
        >
          {sample.flavour === "good"
            ? "Aurora's goal"
            : sample.flavour === "danger"
              ? "Too risky"
              : "Diluted"}
        </p>
        <h3 className="text-white font-bold text-base mt-1">{sample.title}</h3>
      </div>

      {/* Stacked bar — each slice's width is proportional to pct. */}
      <div
        className="h-3 rounded-full overflow-hidden flex"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        {sample.slices.map((slice, i) => (
          <div
            key={i}
            style={{
              width: `${slice.pct}%`,
              background: slice.colour,
            }}
            title={`${slice.label} — ${slice.pct}%`}
          />
        ))}
      </div>

      {/* Legend only for the small-slice samples; the concentrated one
          is obvious. */}
      {sample.slices.length <= 8 && (
        <div className="flex flex-wrap gap-x-3 gap-y-1.5">
          {sample.slices.map((slice, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 text-[10px]"
              style={{ color: "var(--text-3)" }}
            >
              <span
                className="inline-block w-2 h-2 rounded-sm"
                style={{ background: slice.colour }}
                aria-hidden
              />
              {slice.label}
              <span style={{ color: "var(--text-2)" }}>{slice.pct}%</span>
            </span>
          ))}
        </div>
      )}

      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-2)" }}
      >
        {sample.caption}
      </p>
    </div>
  );
}
