# Aurora Growth Academy — Marketing Site

Public marketing site for [auroragrowth.co.uk](https://auroragrowth.co.uk).

The dashboard app lives in a separate repo and is deployed to
`app.auroragrowth.co.uk`. This repo is just the marketing surface:
homepage, starter guide, legal pages.

## Stack

- Next.js 15 (App Router) — fully static, no API routes
- React 19
- Tailwind CSS v4 (`@import "tailwindcss"` syntax)
- TypeScript strict mode
- Deployed on Vercel — auto on push to `main`

## Local dev

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Structure

```
app/
  page.tsx              # Homepage (hero, sections, calculator embed, pricing)
  starter-guide/        # Educational deep dive
  legal/
    risk-warning/       # FCA-friendly risk warning
    terms/              # Terms of service
    privacy/            # UK GDPR privacy policy
  layout.tsx            # Site shell — SiteHeader + FCAFooter
  globals.css           # Tailwind + CSS variables matching the dashboard
components/
  SiteHeader.tsx        # Sticky nav, anchors, mobile menu
  FCAFooter.tsx         # Footer with FCA disclaimer block
  CompoundCalculator.tsx# Pure-SVG compound growth calculator
  LegalLayout.tsx       # Shared chrome for /legal/* pages
```

## Editorial rules

- No promises of returns. Anywhere.
- Always label projections as illustrative.
- Always remind: capital at risk, not FCA authorised, educational only.
- Dashboard links go to `app.auroragrowth.co.uk` (login / signup / upgrade).
