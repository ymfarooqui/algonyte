import Link from "next/link";

export default function FoundingStrip() {
  return (
    <section className="bg-brand-soft py-6">
      <div className="container-page">
        <div className="mx-auto max-w-3xl rounded-2xl bg-brand-deep px-6 py-4 shadow-soft">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:gap-6 sm:text-left">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-primary">
                Founding · 3 spots
              </span>
              <span className="ml-3 text-white font-medium">
                50% off setup. 30% off Growth for 6 months.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/contact?topic=founding"
                className="inline-flex items-center justify-center rounded-full bg-brand-primary px-5 py-2 text-sm text-brand-deep font-semibold hover:bg-white transition-colors whitespace-nowrap"
              >
                Apply &rarr;
              </Link>
              <Link
                href="/founding"
                className="text-white/80 hover:text-white underline underline-offset-4 text-sm whitespace-nowrap"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
