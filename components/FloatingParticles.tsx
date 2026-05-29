// Small brand-coloured dots that drift slowly up the viewport.
// Adds a sense of motion without colour-washing the page — the user
// asked for the "floating bits" feel rather than the heavy ambient
// wash. Positions and per-particle delays are picked from a fixed
// seeded list so the layout is stable between renders (no hydration
// mismatch, no JS at runtime). Pure CSS animation drives the drift.

type Particle = {
  // viewport-X (vw) anchor — particle drifts from bottom of viewport up
  left: number;
  // size in px
  size: number;
  // brand-palette hex
  colour: string;
  // animation classes (1, 2 or 3 — three timing functions for variety)
  variant: 1 | 2 | 3;
  // negative animation-delay so different particles are at different
  // points in their drift on first paint (avoids them all starting
  // at the bottom together)
  delay: number;
};

// Logo's four colours only: turquoise, blue, pink, purple — no warm
// tones. Sizes kept small (2–4 px) so the dots read as distant
// pinpricks of light, not glowing orbs in your face.
const PARTICLES: Particle[] = [
  { left: 6,  size: 3, colour: "#22d3ee", variant: 1, delay: 0 },
  { left: 12, size: 2, colour: "#a78bfa", variant: 2, delay: -8 },
  { left: 18, size: 4, colour: "#3b82f6", variant: 3, delay: -16 },
  { left: 25, size: 2, colour: "#ec4899", variant: 1, delay: -4 },
  { left: 33, size: 3, colour: "#22d3ee", variant: 2, delay: -22 },
  { left: 42, size: 4, colour: "#a78bfa", variant: 3, delay: -12 },
  { left: 50, size: 2, colour: "#3b82f6", variant: 1, delay: -18 },
  { left: 58, size: 3, colour: "#ec4899", variant: 2, delay: -6 },
  { left: 66, size: 4, colour: "#22d3ee", variant: 3, delay: -28 },
  { left: 73, size: 2, colour: "#a78bfa", variant: 1, delay: -14 },
  { left: 81, size: 3, colour: "#3b82f6", variant: 2, delay: -2 },
  { left: 88, size: 4, colour: "#ec4899", variant: 3, delay: -20 },
  { left: 94, size: 2, colour: "#22d3ee", variant: 1, delay: -10 },
];

export default function FloatingParticles() {
  return (
    <div className="particles-layer" aria-hidden>
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={`particle particle-${p.variant}`}
          style={{
            left: `${p.left}vw`,
            // Start each particle just below the viewport — the
            // keyframes carry it up to -120vh.
            bottom: "-10vh",
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.colour,
            // Soft halo (smaller than before so the dot doesn't read
            // as a neon blob in the user's face).
            boxShadow: `0 0 ${p.size * 1.5}px ${p.colour}`,
            opacity: 0.55,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
