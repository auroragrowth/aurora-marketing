"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Anchors on the homepage. The starter guide is a real route. Login goes
// straight to the dashboard subdomain. Get Started routes to the upgrade
// page on the dashboard so users land where they can pick a tier.
const NAV_LINKS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#platform", label: "Platform" },
  { href: "/#calculator", label: "ISA Calculator" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/starter-guide", label: "Starter Guide" },
];

const LOGIN_URL = "https://app.auroragrowth.co.uk/login";
const SIGNUP_URL = "https://app.auroragrowth.co.uk/signup";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-xl"
      style={{
        background: "rgba(2,6,23,0.78)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo — full Aurora wordmark + mountain mark */}
          <Link href="/" className="flex items-center" aria-label="Aurora Growth Academy">
            <Image
              src="/aurora-logo.png"
              alt="Aurora Growth Academy"
              width={1463}
              height={540}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm transition"
                style={{ color: "var(--text-2)" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={LOGIN_URL}
              className="text-sm font-semibold transition"
              style={{ color: "var(--text-1)" }}
            >
              Login
            </Link>
            <Link
              href={SIGNUP_URL}
              className="btn-aurora rounded-full px-4 py-2 text-sm transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-md p-2 text-white"
            aria-label="Toggle navigation"
          >
            <span className="block h-0.5 w-5 bg-white mb-1" />
            <span className="block h-0.5 w-5 bg-white mb-1" />
            <span className="block h-0.5 w-5 bg-white" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className="md:hidden border-t pb-4 pt-3"
            style={{ borderColor: "var(--border)" }}
          >
            <nav className="flex flex-col gap-3 text-sm">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ color: "var(--text-2)" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href={LOGIN_URL}
                onClick={() => setOpen(false)}
                className="font-semibold"
                style={{ color: "var(--text-1)" }}
              >
                Login
              </Link>
              <Link
                href={SIGNUP_URL}
                onClick={() => setOpen(false)}
                className="btn-aurora rounded-full px-4 py-2 text-center"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
