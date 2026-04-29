export default function FinalCta() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="rounded-3xl bg-brand-deep px-8 py-14 sm:px-14 sm:py-20 text-white relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-primary/30 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Ready to give your customers a clearer path?
            </h2>
            <p className="mt-5 text-white/80 text-lg leading-relaxed">
              Whether you need a simple website, a better user experience, or a full diagnostic
              audit, ClearPath Digital can help you build a site that is easier to use, easier to
              trust, and easier to act on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-medium text-brand-deep hover:bg-brand-accent"
              >
                Get a Free Website Review
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-base font-medium text-white hover:bg-white/10"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
