import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import FCAFooter from "@/components/FCAFooter";
import SiteHeader from "@/components/SiteHeader";

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
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <FCAFooter />
      </body>
    </html>
  );
}
