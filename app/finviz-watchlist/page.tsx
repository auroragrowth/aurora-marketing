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

// The tool is a self-contained page hosted on GitHub Pages. We show it full-screen
// here so it lives at www.auroragrowth.co.uk/finviz-watchlist while the code stays
// single-source (any fix to the tool updates this page automatically).
export default function FinvizWatchlistPage() {
  return (
    <iframe
      src="https://auroragrowth.github.io/finviz-tradingview/"
      title="Finviz to TradingView Watchlist Tool"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: 0,
        zIndex: 9999,
      }}
    />
  );
}
