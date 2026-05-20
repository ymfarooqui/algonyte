import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { siteTiers, growthTiers, founding } from "@/lib/tiers";
import { foundingOfferSchema } from "@/lib/schema";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import CursorSpotlight from "@/components/CursorSpotlight";
import { jsonLdString } from "@/lib/jsonLd";

const title =
  "Founding Member Program | 3 Spots, 50% Off Setup, 30% Off for 6 Months";
const description =
  "Join one of three Algonyte founding spots. 50% off any setup fee. 30% off Awake, Climbing, or Scale for 6 months. In exchange: feedback and one testimonial.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/founding" },
  openGraph: { title, description, url: "/founding", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([{ name: "Founding", path: "/founding" }]);

export default function FoundingPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4 text-brand-deep">
              Limited &middot; {founding.spots} spots only
            </p>
            <h1 className="h-display">
              Founding Member{" "}
              <span className="text-brand-deep">Program.</span>
            </h1>
            <p className="lede mt-6 max-w-2xl">
              We&rsquo;re selecting {founding.spots} founding clients to build
              Algonyte&rsquo;s first case studies with. In exchange for honest
              feedback and a testimonial when you have results, you get{" "}
              {founding.setupDiscountPct}% off your setup fee on any tier, plus{" "}
              {founding.growthDiscountPct}% off any Growth retainer for your
              first {founding.discountDurationMonths} months.
            </p>
            <div className="mt-8">
              <Link
                href="/contact?topic=founding"
                className="inline-flex items-center justify-center rounded-full bg-brand-deep px-8 py-4 text-white font-medium hover:bg-brand-deep/90 transition-colors text-lg"
              >
                Apply for a founding spot &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand frame ─────────────────────────────────────────────── */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="lede text-brand-deep font-medium">
            Your business runs while you sleep. 50% off setup and 30% off Growth for 6 months. The work doesn&rsquo;t change.
          </p>
        </div>
      </section>

      {/* ── What you get: discount tables ────────────────────────────── */}
      <section className="section">
        <div className="container-page max-w-4xl">
          <h2 className="h-section">The founding pricing breakdown.</h2>

          {/* Setup discounts */}
          <h3 className="mt-10 text-lg font-semibold text-brand-deep">
            {founding.setupDiscountPct}% off setup, every tier
          </h3>

          {/* Mobile: stacked cards */}
          <div className="md:hidden mt-4 space-y-3">
            {[...siteTiers, ...growthTiers].map((tier) => {
              const discountedSetup = Math.round(
                tier.setup * (1 - founding.setupDiscountPct / 100),
              );
              return (
                <div
                  key={tier.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-base font-semibold text-brand-deep">
                    {tier.name}
                  </p>
                  <dl className="mt-3 grid grid-cols-3 gap-3 text-center">
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wider text-brand-muted">
                        Standard
                      </dt>
                      <dd className="mt-1 text-sm text-brand-muted">
                        ${tier.setup}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wider text-brand-deep">
                        Founding
                      </dt>
                      <dd className="mt-1 text-sm font-bold text-brand-deep">
                        ${discountedSetup}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wider text-brand-deep">
                        You save
                      </dt>
                      <dd className="mt-1 text-sm font-bold bg-brand-gradient bg-clip-text text-transparent">
                        ${tier.setup - discountedSetup}
                      </dd>
                    </div>
                  </dl>
                </div>
              );
            })}
          </div>

          {/* Desktop: table */}
          <div className="hidden md:block mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-brand-soft text-sm">
                <tr>
                  <th className="px-5 py-3 font-medium text-brand-ink">
                    Tier
                  </th>
                  <th className="px-5 py-3 font-medium text-brand-ink">
                    Standard setup
                  </th>
                  <th className="px-5 py-3 font-medium text-brand-deep">
                    Founding setup
                  </th>
                  <th className="px-5 py-3 font-medium text-brand-deep">
                    You save
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-200">
                {siteTiers.map((tier) => {
                  const discountedSetup = Math.round(
                    tier.setup * (1 - founding.setupDiscountPct / 100),
                  );
                  return (
                    <tr key={tier.id}>
                      <td className="px-5 py-4 font-medium text-brand-deep">
                        {tier.name}
                      </td>
                      <td className="px-5 py-4 text-brand-muted">
                        ${tier.setup}
                      </td>
                      <td className="px-5 py-4 font-semibold text-brand-deep">
                        ${discountedSetup}
                      </td>
                      <td className="px-5 py-4 font-bold bg-brand-gradient bg-clip-text text-transparent">
                        ${tier.setup - discountedSetup}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-brand-soft/20">
                  <td
                    colSpan={4}
                    className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-muted"
                  >
                    Growth tiers (reception + SEO + ads)
                  </td>
                </tr>
                {growthTiers.map((tier) => {
                  const discountedSetup = Math.round(
                    tier.setup * (1 - founding.setupDiscountPct / 100),
                  );
                  return (
                    <tr key={tier.id}>
                      <td className="px-5 py-4 font-medium text-brand-deep">
                        {tier.name}
                      </td>
                      <td className="px-5 py-4 text-brand-muted">
                        ${tier.setup}
                      </td>
                      <td className="px-5 py-4 font-semibold text-brand-deep">
                        ${discountedSetup}
                      </td>
                      <td className="px-5 py-4 font-bold bg-brand-gradient bg-clip-text text-transparent">
                        ${tier.setup - discountedSetup}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Monthly discount on Growth tiers */}
          <h3 className="mt-10 text-lg font-semibold text-brand-deep">
            {founding.growthDiscountPct}% off monthly retainer, Growth
            tiers only, first {founding.discountDurationMonths} months
          </h3>
          <p className="mt-2 text-sm text-brand-muted">
            After {founding.discountDurationMonths} months, all founding members
            revert to standard pricing. You can cancel anytime once the promotional period ends.
          </p>

          {/* Mobile: stacked cards */}
          <div className="md:hidden mt-4 space-y-3">
            {growthTiers.map((tier) => {
              const discountedMonthly = Number(
                (
                  tier.monthly *
                  (1 - founding.growthDiscountPct / 100)
                ).toFixed(2),
              );
              const totalSavings = Number(
                (
                  (tier.monthly - discountedMonthly) *
                  founding.discountDurationMonths
                ).toFixed(2),
              );
              return (
                <div
                  key={tier.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-base font-semibold text-brand-deep">
                    {tier.name}
                    {tier.monthlyNote && (
                      <span className="ml-2 text-xs font-normal text-brand-muted">
                        ({tier.monthlyNote})
                      </span>
                    )}
                  </p>
                  <dl className="mt-3 grid grid-cols-3 gap-3 text-center">
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wider text-brand-muted">
                        Standard
                      </dt>
                      <dd className="mt-1 text-sm text-brand-muted">
                        ${tier.monthly}/mo
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wider text-brand-deep">
                        Founding
                      </dt>
                      <dd className="mt-1 text-sm font-bold text-brand-deep">
                        ${discountedMonthly}/mo
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wider text-brand-deep">
                        Saved over {founding.discountDurationMonths}&nbsp;mo
                      </dt>
                      <dd className="mt-1 text-sm font-bold bg-brand-gradient bg-clip-text text-transparent">
                        ${totalSavings.toLocaleString()}
                      </dd>
                    </div>
                  </dl>
                </div>
              );
            })}
          </div>

          {/* Desktop: table */}
          <div className="hidden md:block mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-brand-soft text-sm">
                <tr>
                  <th className="px-5 py-3 font-medium text-brand-ink">
                    Growth tier
                  </th>
                  <th className="px-5 py-3 font-medium text-brand-ink">
                    Standard monthly
                  </th>
                  <th className="px-5 py-3 font-medium text-brand-deep">
                    Founding monthly
                  </th>
                  <th className="px-5 py-3 font-medium text-brand-deep">
                    Saved over {founding.discountDurationMonths} months
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-200">
                {growthTiers.map((tier) => {
                  const discountedMonthly = Number(
                    (
                      tier.monthly *
                      (1 - founding.growthDiscountPct / 100)
                    ).toFixed(2),
                  );
                  const totalSavings = Number(
                    (
                      (tier.monthly - discountedMonthly) *
                      founding.discountDurationMonths
                    ).toFixed(2),
                  );
                  return (
                    <tr key={tier.id}>
                      <td className="px-5 py-4 font-medium text-brand-deep">
                        {tier.name}
                        {tier.monthlyNote && (
                          <span className="ml-2 text-xs font-normal text-brand-muted">
                            ({tier.monthlyNote})
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-brand-muted">
                        ${tier.monthly}/mo
                      </td>
                      <td className="px-5 py-4 font-semibold text-brand-deep">
                        ${discountedMonthly}/mo
                        <span className="ml-1 text-xs text-brand-muted font-normal">
                          for {founding.discountDurationMonths} mo, then standard
                        </span>
                      </td>
                      <td className="px-5 py-4 font-bold bg-brand-gradient bg-clip-text text-transparent">
                        ${totalSavings.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-brand-muted">
            Scale ad spend goes on your card directly to Google and Meta. No markup, never touches Algonyte.
          </p>
        </div>
      </section>

      {/* ── What you give ────────────────────────────────────────────── */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">What you give in return</p>
          <h2 className="h-section">Three simple asks.</h2>
          <ul className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <li>
              <strong className="text-brand-deep">Honest feedback.</strong>{" "}
              Tell us what&rsquo;s working, what isn&rsquo;t, what to build
              next. You&rsquo;re shaping the product.
            </li>
            <li>
              <strong className="text-brand-deep">One testimonial.</strong>{" "}
              Once the system is producing results for you, a quote and a number
              we can share. When you&rsquo;re ready.
            </li>
            <li>
              <strong className="text-brand-deep">
                Optional reference call.
              </strong>{" "}
              For one or two future prospects who ask, we may put you on a
              15-minute call to share your experience. Always with your
              approval, capped at two calls total.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Fast turnaround (no live-call build) ─────────────────────── */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">15-minute form. No 2-hour call.</h2>
          <p className="mt-6 text-brand-muted leading-relaxed">
            Onboarding is a 15-minute intake form. No 2-hour configuration
            call. Your Awake reception system is live in 5 days, your site in
            72 hours to 12 days (Presence tiers), or your full stack in 14 days
            (Scale). You fill out the form; we build it.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-brand-muted">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-brand-deep font-semibold">
                Awake
              </span>
              <span>
                Live in 5 days: reception, missed-call text-back, DM
                auto-reply, review workflow.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-brand-deep font-semibold">
                Presence tiers
              </span>
              <span>
                Open live in 72 hours. Found in 5&ndash;7 days. Polished in
                7&ndash;12 days.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-brand-deep font-semibold">
                Climbing / Scale
              </span>
              <span>Full stack live in 10&ndash;14 days.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Why we&rsquo;re doing this ────────────────────────────────── */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">Case studies. References. Real data.</h2>
          <p className="mt-6 text-brand-muted leading-relaxed">
            Algonyte is early. We have the infrastructure, the processes, and
            the conviction, but no documented results from paying clients to
            show the next business owner who asks. Founding members fix that.
            You get a significant discount on a working product; we get the
            proof that earns us the next client at full price. No mystery, no spin.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden section bg-brand-deep text-white">
        <CursorSpotlight />
        <div className="relative container-page max-w-3xl text-center">
          <p className="eyebrow mb-4 text-brand-primary">
            {founding.spots} spots &middot; First-come, first-served
          </p>
          <h2 className="h-section text-white">Apply for a founding spot.</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Tell us about your business. The founder responds within 24 hours
            with whether you&rsquo;re a fit. Spots are first-come,
            first-served. Once they&rsquo;re gone, they&rsquo;re gone.
          </p>
          <div className="mt-8">
            <Link
              href="/contact?topic=founding"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-brand-deep font-medium hover:bg-white/90 transition-colors text-lg"
            >
              Apply for a founding spot &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── JSON-LD ───────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(foundingOfferSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumb) }}
      />
    </>
  );
}
