import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finviz → TradingView Watchlist Tool — Aurora Growth Academy",
  description:
    "Turn a Finviz stock screen into a clean, de-duplicated ticker list, ready to paste or import into a TradingView watchlist. Free, runs entirely in your browser.",
  alternates: { canonical: "/finviz-watchlist" },
  openGraph: {
    title: "Finviz → TradingView Watchlist Tool",
    description:
      "Turn a Finviz screen into a clean ticker list for TradingView — in a couple of clicks.",
    url: "/finviz-watchlist",
    siteName: "Aurora Growth Academy",
    type: "website",
  },
};

// The tool is a self-contained page hosted on GitHub Pages, shown below the site's
// sticky 64px header. It carries its own title/intro, so no separate intro here.
// Loading the GitHub Pages copy keeps the code single-source (fixes auto-flow through).
export default function FinvizWatchlistPage() {
  return (
    <iframe
      src="https://auroragrowth.github.io/finviz-tradingview/"
      title="Finviz to TradingView Watchlist Tool"
      style={{
        display: "block",
        width: "100%",
        height: "calc(100dvh - 4rem)", // full viewport minus the 4rem (64px) sticky header
        border: 0,
      }}
    />
  );
}
