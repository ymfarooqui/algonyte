import Link from "next/link";

const perks = ["50% Off Setup", "30% Off Monthly", "Priority Support"];

export default function FoundingStrip() {
  return (
    <section className="bg-brand-deep py-16 sm:py-24">
      <div className="container-page">
        <div className="text-center mb-10">
          <p className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
            Limited
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Founding Member Program
          </h2>
        </div>

        <div className="relative mx-auto max-w-2xl rounded-3xl border-2 border-brand-primary/60 bg-brand-deep/40 p-8 sm:p-12 shadow-[0_0_60px_rgba(56,189,248,0.25)]">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="relative">
              <span className="block rounded-full bg-brand-primary px-6 py-2 text-sm font-bold uppercase tracking-wider text-brand-deep shadow-lg">
                ★ White-Glove Onboarding
              </span>
              <span
                aria-hidden
                className="absolute -left-2 top-full block h-2 w-2 rotate-45 bg-brand-primary/60"
              />
              <span
                aria-hidden
                className="absolute -right-2 top-full block h-2 w-2 rotate-45 bg-brand-primary/60"
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              3 Spots. That&rsquo;s It.
            </h3>
            <p className="mt-5 text-xl sm:text-2xl font-semibold text-brand-primary leading-snug">
              50% off setup · 30% off monthly for 6 months
            </p>
            <p className="mt-6 text-white leading-relaxed max-w-xl mx-auto">
              We&rsquo;re selecting 3 founding clients to partner with closely.
              You get unbeatable pricing. We get your honest feedback and a
              testimonial as we grow together.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {perks.map((perk) => (
              <div
                key={perk}
                className="rounded-xl border-2 border-brand-primary/50 bg-white/10 py-4 text-center text-white font-semibold text-lg"
              >
                {perk}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/contact?topic=founding"
              className="block w-full rounded-full bg-brand-primary px-8 py-4 text-center text-brand-deep font-bold text-lg hover:bg-white transition-colors"
            >
              Apply for a Founding Spot →
            </Link>
            <p className="mt-4 text-center text-sm text-white/90">
              <Link
                href="/founding"
                className="hover:text-brand-primary underline underline-offset-4"
              >
                See full program details
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
