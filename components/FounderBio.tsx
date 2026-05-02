export default function FounderBio() {
  return (
    <section className="section bg-white">
      <div className="container-page max-w-3xl">
        <p className="eyebrow mb-3">Who&rsquo;s behind it</p>
        <h2 className="h-section">Run by a QA professional, not an agency.</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-[auto,1fr] sm:items-start">
          <div
            aria-hidden
            className="hidden sm:inline-flex h-24 w-24 rounded-2xl bg-brand-accent items-center justify-center text-3xl font-semibold text-brand-deep"
          >
            YF
          </div>
          <div className="space-y-4 text-brand-muted leading-relaxed">
            <p className="text-brand-ink">
              <span className="font-semibold">Yaseen Farooqui</span>. Founder, builder, and the
              person you&rsquo;ll actually talk to.
            </p>
            <p>
              Years spent in software quality assurance taught me one thing: the difference
              between a website that works and one that doesn&rsquo;t isn&rsquo;t how it looks.
              It&rsquo;s whether real customers can find what they need, trust what they see, and
              take the next step without friction.
            </p>
            <p>
              I started Farooqui Digital to bring that QA mindset to small business websites.
              Affordable, tested, and built around the customer journey instead of the trend
              cycle. No layers between you and the work. No agency bloat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
