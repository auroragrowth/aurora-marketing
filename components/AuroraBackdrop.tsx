// Aurora Borealis ambient backdrop.
// Three blurred, slowly-drifting colour layers in screen blend mode
// stack to produce a flowing northern-lights effect. Implementation
// lives in globals.css (.aurora-wrap + .aurora-a/b/c) so the React
// surface stays tiny and the animation never re-renders.
//
// Use `intensity="hero"` behind the homepage hero (the loud version)
// or `intensity="section"` as a softer accent wash behind a section.

type Intensity = "hero" | "section";

export default function AuroraBackdrop({
  intensity = "section",
}: {
  intensity?: Intensity;
}) {
  const opacity = intensity === "hero" ? 1 : 0.45;
  return (
    <div className="aurora-wrap" aria-hidden style={{ opacity }}>
      <div className="aurora-layer aurora-a" />
      <div className="aurora-layer aurora-b" />
      <div className="aurora-layer aurora-c" />
    </div>
  );
}
