/**
 * Decorative backdrop for page hero sections — aurora gradient blobs + film
 * grain. Drop inside any section with `relative overflow-hidden` and the
 * brand-accent → white gradient. No props; purely visual.
 */
export default function PageHeroBackdrop() {
  return (
    <>
      <div className="aurora" aria-hidden>
        <div className="aurora-layer aurora-a" />
        <div className="aurora-layer aurora-b" />
        <div className="aurora-layer aurora-c" />
      </div>
      <div className="grain" aria-hidden />
    </>
  );
}
