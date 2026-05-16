import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { plans } from "@/lib/constants";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import CursorSpotlight from "@/components/CursorSpotlight";

const title = "Founding Member Program | 3 Spots Only";
const description =
  "3 founding spots only. 50% off setup ($275) and 30% off monthly for 6 months. Unbeatable pricing in exchange for honest feedback and a testimonial.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/founding" },
  openGraph: { title, description, url: "/founding", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([{ name: "Founding", path: "/founding" }]);

const offerJsonLd = {
  "@context": "https://schema.org",
  "@type": "Offer",
  "@id": `${siteConfig.url}/founding#offer`,
  name: "Founding Member Program",
  description,
  priceCurrency: "USD",
  price: 275,
  url: `${siteConfig.url}/founding`,
  eligibleQuantity: { "@type": "QuantitativeValue", value: 3 },
  availability: "https://schema.org/LimitedAvailability",
  seller: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
};

const foundingMonthly = (price: number) => Math.round(price * 0.7);

export default function FoundingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4 text-brand-deep">Limited · 3 spots</p>
            <h1 className="h-display">
              Founding Member{" "}
              <span className="text-brand-deep">Program.</span>
            </h1>
            <p className="lede mt-6 max-w-2xl">
              We&rsquo;re selecting 3 founding clients to partner with closely.
              You get unbeatable pricing. We get your honest feedback and a
              testimonial as we grow together.
            </p>
            <div className="mt-8">
              <Link
                href="/contact?topic=founding"
                className="inline-flex items-center justify-center rounded-full bg-brand-deep px-8 py-4 text-white font-medium hover:bg-brand-deep/90 transition-colors text-lg"
              >
                Apply for a founding spot →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">What you get</p>
          <h2 className="h-section">The pricing won&rsquo;t exist again.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-deep/20 bg-brand-soft/40 p-6">
              <p className="text-sm font-medium text-brand-muted">Setup fee</p>
              <p className="mt-2 text-3xl font-semibold text-brand-deep">
                $275
              </p>
              <p className="mt-1 text-sm text-brand-muted">
                <s>$549</s> · 50% off
              </p>
            </div>
            <div className="rounded-2xl border border-brand-deep/20 bg-brand-soft/40 p-6">
              <p className="text-sm font-medium text-brand-muted">Monthly</p>
              <p className="mt-2 text-3xl font-semibold text-brand-deep">
                30% off
              </p>
              <p className="mt-1 text-sm text-brand-muted">
                For 6 months on any plan
              </p>
            </div>
            <div className="rounded-2xl border border-brand-deep/20 bg-brand-soft/40 p-6">
              <p className="text-sm font-medium text-brand-muted">Support</p>
              <p className="mt-2 text-xl font-semibold text-brand-deep">
                Priority access
              </p>
              <p className="mt-1 text-sm text-brand-muted">
                Direct line to founder. Same-day answers.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-deep/20 bg-brand-soft/40 p-6">
              <p className="text-sm font-medium text-brand-muted">Onboarding</p>
              <p className="mt-2 text-xl font-semibold text-brand-deep">
                White-glove
              </p>
              <p className="mt-1 text-sm text-brand-muted">
                We build the script with you on a live call.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Founding pricing by plan</p>
          <h2 className="h-section">What you actually pay for 6 months.</h2>
          {/* Mobile: stacked cards */}
          <div className="md:hidden mt-8 space-y-3">
            {plans.map((p) => {
              const founding = foundingMonthly(p.price);
              const savings = (p.price - founding) * 6;
              return (
                <div
                  key={p.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-base font-semibold text-brand-deep">{p.name}</p>
                  <dl className="mt-4 grid grid-cols-3 gap-3 text-center">
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wider text-brand-muted">
                        Normal
                      </dt>
                      <dd className="mt-1 text-sm text-brand-muted">${p.price}/mo</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wider text-brand-deep">
                        Founding
                      </dt>
                      <dd className="mt-1 text-sm font-bold text-brand-deep">${founding}/mo</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wider text-brand-deep">
                        You save
                      </dt>
                      <dd className="mt-1 text-sm font-bold bg-brand-gradient bg-clip-text text-transparent">
                        ${savings.toLocaleString()}
                        <span className="block text-[10px] text-brand-muted font-normal">over 6 mo</span>
                      </dd>
                    </div>
                  </dl>
                </div>
              );
            })}
            <div className="rounded-2xl border border-slate-200 bg-brand-soft/40 p-5">
              <p className="text-base font-semibold text-brand-deep">Setup</p>
              <dl className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-wider text-brand-muted">
                    Normal
                  </dt>
                  <dd className="mt-1 text-sm text-brand-muted">$549 one-time</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-wider text-brand-deep">
                    Founding
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-brand-deep">$275 one-time</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-wider text-brand-deep">
                    You save
                  </dt>
                  <dd className="mt-1 text-sm font-bold bg-brand-gradient bg-clip-text text-transparent">$274</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Desktop: table */}
          <div className="hidden md:block mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-brand-soft text-sm">
                <tr>
                  <th className="px-5 py-3 font-medium text-brand-ink">Plan</th>
                  <th className="px-5 py-3 font-medium text-brand-ink">Normal</th>
                  <th className="px-5 py-3 font-medium text-brand-deep">Founding</th>
                  <th className="px-5 py-3 font-medium text-brand-deep">You save</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {plans.map((p) => {
                  const founding = foundingMonthly(p.price);
                  const savings = (p.price - founding) * 6;
                  return (
                    <tr key={p.id} className="border-t border-slate-200">
                      <td className="px-5 py-4 font-medium text-brand-deep">{p.name}</td>
                      <td className="px-5 py-4 text-brand-muted">${p.price}/mo</td>
                      <td className="px-5 py-4 font-semibold text-brand-deep">${founding}/mo</td>
                      <td className="px-5 py-4 font-bold bg-brand-gradient bg-clip-text text-transparent">${savings.toLocaleString()} over 6 mo</td>
                    </tr>
                  );
                })}
                <tr className="border-t border-slate-200 bg-brand-soft/30">
                  <td className="px-5 py-4 font-medium text-brand-deep">Setup</td>
                  <td className="px-5 py-4 text-brand-muted">$549 one-time</td>
                  <td className="px-5 py-4 font-semibold text-brand-deep">$275 one-time</td>
                  <td className="px-5 py-4 font-bold bg-brand-gradient bg-clip-text text-transparent">$274</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-brand-muted">
            After 6 months you revert to standard pricing. Month to month, cancel anytime.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">The deal</p>
          <h2 className="h-section">What we want from you in return.</h2>
          <ul className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <li>
              <strong className="text-brand-deep">Real feedback.</strong>{" "}
              Tell us what&rsquo;s working, what isn&rsquo;t, what to build next.
              You&rsquo;re shaping the product, not just buying it.
            </li>
            <li>
              <strong className="text-brand-deep">A testimonial.</strong>{" "}
              Once the system is producing for you, we want a quote and a
              number we can show future clients. No pressure on timing — when
              you&rsquo;re ready.
            </li>
            <li>
              <strong className="text-brand-deep">A reference call.</strong>{" "}
              For one or two future clients who ask, we may put you on a 15-minute
              call to vouch. Always with your approval.
            </li>
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden section bg-brand-deep text-white">
        <CursorSpotlight />
        <div className="relative container-page max-w-3xl text-center">
          <p className="eyebrow mb-4 text-brand-primary">3 spots · First-come, first-served</p>
          <h2 className="h-section text-white">Apply for a founding spot.</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Tell us about your business. We&rsquo;ll come back the same
            business day with whether you&rsquo;re a fit.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?topic=founding"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-brand-deep font-medium hover:bg-white/90 transition-colors text-lg"
            >
              Apply for a founding spot →
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
