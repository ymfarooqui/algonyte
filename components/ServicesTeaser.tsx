import Link from "next/link";

export default function ServicesTeaser() {
  return (
    <section className="section">
      <div className="container-page">
        <Link
          href="/services"
          className="group relative block overflow-hidden rounded-3xl border border-brand-deep/10 bg-gradient-to-br from-brand-accent via-white to-white p-10 sm:p-14 transition hover:shadow-lg"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-primary/20 blur-3xl transition-transform duration-700 group-hover:scale-110"
          />
          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">See what fits</p>
              <h2 className="h-section">
                Transparent pricing.{" "}
                <span className="text-brand-deep">No agency games.</span>
              </h2>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-deep px-7 py-4 text-base font-medium text-white shadow-sm transition group-hover:bg-brand-ink">
                See Services &amp; Pricing
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
