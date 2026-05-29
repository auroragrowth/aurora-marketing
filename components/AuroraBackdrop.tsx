// Aurora Borealis ambient backdrop.
// Four blurred, slowly-drifting colour layers in screen blend mode
// stack to produce a flowing northern-lights effect across the full
// logo palette (cyan / coral / pink / violet). Implementation lives
// in globals.css (.aurora-wrap + .aurora-a/b/c/d) so the React
// surface stays tiny and the animation never re-renders.
//
//   intensity="hero"     loud version behind the homepage hero.
//   intensity="section"  softer accent wash behind a specific section.
//   intensity="ambient"  page-level fixed backdrop — mount once in
//                        the root layout to give every route a
//                        gentle continuous borealis behind it.

type Intensity = "hero" | "section" | "ambient";

export default function AuroraBackdrop({
  intensity = "section",
}: {
  intensity?: Intensity;
}) {
  if (intensity === "ambient") {
    // Fixed to the viewport so it stays visible as the user scrolls,
    // mimicking how a real aurora is "behind the sky" the whole time.
    return (
      <div className="aurora-ambient" aria-hidden>
        <div className="aurora-layer aurora-a" />
        <div className="aurora-layer aurora-b" />
        <div className="aurora-layer aurora-c" />
        <div className="aurora-layer aurora-d" />
      </div>
    );
  }

  const opacity = intensity === "hero" ? 1 : 0.45;
  return (
    <div className="aurora-wrap" aria-hidden style={{ opacity }}>
      <div className="aurora-layer aurora-a" />
      <div className="aurora-layer aurora-b" />
      <div className="aurora-layer aurora-c" />
      <div className="aurora-layer aurora-d" />
    </div>
  );
}
