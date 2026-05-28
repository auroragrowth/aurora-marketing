import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict React rules in dev catch the kind of subtle bugs the dashboard
  // hits when something accidentally renders twice.
  reactStrictMode: true,
  // Pin tracing root to this project so Next doesn't walk up and pick
  // a stray ~/package-lock.json as the workspace root.
  outputFileTracingRoot: path.join(__dirname),
  // Marketing site — nothing user-specific is fetched here, so we can let
  // Next aggressively cache. App-tier interactive things (compound
  // calculator, mobile menu) are client components and don't need
  // revalidation tags.
  images: {
    // Real screenshots of app.auroragrowth.co.uk get baked into /public,
    // so no remote image sources to allow yet. Add hostnames here if we
    // ever pull dashboard previews directly from the live app.
    remotePatterns: [],
  },
};

export default nextConfig;
