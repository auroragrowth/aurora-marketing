import type { Metadata } from "next";
import "./globals.css";
import AuroraBackdrop from "@/components/AuroraBackdrop";
import FCAFooter from "@/components/FCAFooter";
import FloatingParticles from "@/components/FloatingParticles";
import SiteHeader from "@/components/SiteHeader";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Aurora Growth Academy — Investing with structure, not noise",
  description:
    "A structured investing system built to help you think more clearly, plan entries properly, and stay more consistent over time. Educational only — not financial advice.",
  metadataBase: new URL("https://auroragrowth.co.uk"),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Aurora Growth Academy",
    description: "Structured investing — clarity, not guesswork.",
    url: "https://auroragrowth.co.uk",
    siteName: "Aurora Growth Academy",
    locale: "en_GB",
    type: "website",
    images: ["/aurora-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen flex flex-col">
        {/* Site-wide ambient layers — kept deliberately subtle:
            very faint borealis glow + brand-coloured particles drifting
            upward. Both are CSS-only and respect prefers-reduced-motion. */}
        <AuroraBackdrop intensity="ambient" />
        <FloatingParticles />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <FCAFooter />
        <Analytics />
      </body>
    </html>
  );
}
