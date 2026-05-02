export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white"
    >
      <div className="container-page pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Affordable websites · Audits · Optimization · Care</p>
          <h1 className="h-display">
            Affordable websites built for{" "}
            <span className="text-brand-deep">clear customer journeys.</span>
          </h1>
          <p className="lede mt-6 max-w-2xl">
            Already have a website? Find out if it&rsquo;s costing you customers.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/free-review" className="btn-primary">Get a Free Website Review</a>
            <a href="/services" className="btn-secondary">View Services</a>
          </div>

          <p className="mt-6 text-sm text-brand-muted">
            Clear recommendations. No agency bloat.
          </p>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl"
      />
    </section>
  );
}
