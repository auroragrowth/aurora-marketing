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

// Intro explainer (what it is + why it exists + how it works), then the tool itself
// embedded from GitHub Pages so the code stays single-source and auto-updates.
export default function FinvizWatchlistPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <p
          className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
          style={{ color: "var(--accent-cyan)" }}
        >
          Free tool
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
          Finviz → TradingView Watchlist Tool
        </h1>
        <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--text-2)" }}>
          A few of you came to me with the same frustration: you&rsquo;d built a Finviz
          screen you were happy with, but actually getting that list of tickers{" "}
          <em>into</em> a TradingView watchlist was a fiddly, add-them-one-at-a-time
          chore &mdash; especially on the free Finviz plan, where the results are split
          across pages. So I built this to take the pain out of it. Run your screen and
          it hands you a clean, de-duplicated list ready for TradingView in seconds.
          It&rsquo;s free, it runs entirely in your browser, and nothing you enter is
          stored or sent anywhere.
        </p>

        <div
          className="mt-8 rounded-xl border p-5 sm:p-6"
          style={{ borderColor: "var(--border-cyan)", background: "var(--bg-card)" }}
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.14em] mb-4"
            style={{ color: "var(--accent-cyan)" }}
          >
            How it works
          </p>
          <ol className="space-y-3 text-[15px] leading-relaxed" style={{ color: "var(--text-2)" }}>
            <li>
              <span className="text-white font-semibold">1. Open your screen on Finviz</span>{" "}
              &mdash; use an <em>Open in Finviz</em> link in the tool, or your own saved screen.
            </li>
            <li>
              <span className="text-white font-semibold">2. Grab the tickers</span> &mdash;
              click the <em>Finviz → Watchlist</em> bookmark (a one-time drag to your bookmarks
              bar), which pages through every result for you; or copy Finviz&rsquo;s{" "}
              <em>Tickers</em> view and paste it into the box.
            </li>
            <li>
              <span className="text-white font-semibold">3. Get your clean list</span> &mdash;
              duplicates removed, one tidy comma-separated list. Hit <em>Copy</em> or{" "}
              <em>Download</em>.
            </li>
            <li>
              <span className="text-white font-semibold">4. Drop it into TradingView</span> &mdash;
              open your watchlist, clear it first (<em>⋯ menu → Clear the list</em>, since
              importing adds rather than replaces), then <em>+ Add symbol</em> and paste. Every
              ticker lands at once &mdash; no file to upload.
            </li>
          </ol>
        </div>

        <p className="mt-5 text-xs" style={{ color: "var(--text-2)" }}>
          A simple utility that moves tickers between two apps &mdash; educational only, and not
          financial advice.
        </p>
      </section>

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
    </>
  );
}
