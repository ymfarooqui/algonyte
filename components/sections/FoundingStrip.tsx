import Link from "next/link";

const perks = [
  "50% Off Setup",
  "30% Off Monthly",
  "Priority Support",
  "White-Glove Onboarding",
];

export default function FoundingStrip() {
  return (
    <section className="bg-brand-deep py-16 sm:py-24">
      <div className="container-page">
        <div className="text-center mb-10">
          <p className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
            Limited
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            Founding Member Program
          </h2>
        </div>

        <div className="mx-auto max-w-2xl rounded-3xl border-2 border-brand-primary/40 bg-brand-deep/50 p-8 sm:p-12 shadow-[0_0_60px_rgba(94,234,212,0.15)]">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              3 Spots. That&rsquo;s It.
            </h3>
            <p className="mt-5 text-xl sm:text-2xl font-medium text-brand-primary leading-snug">
              50% off setup · 30% off monthly for 6 months
            </p>
            <p className="mt-6 text-white/70 leading-relaxed max-w-xl mx-auto">
              We&rsquo;re selecting 3 founding clients to partner with closely.
              You get unbeatable pricing. We get your honest feedback and a
              testimonial as we grow together.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {perks.map((perk) => (
              <div
                key={perk}
                className="rounded-xl border border-brand-primary/30 bg-white/5 py-4 text-center text-brand-primary font-medium"
              >
                {perk}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/contact?topic=founding"
              className="block w-full rounded-full bg-brand-primary px-8 py-4 text-center text-brand-deep font-semibold text-lg hover:bg-brand-primary/90 transition-colors"
            >
              Apply for a Founding Spot →
            </Link>
            <p className="mt-4 text-center text-sm text-white/50">
              <Link href="/founding" className="hover:text-white underline-offset-4 hover:underline">
                See full program details
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
