import type { Metadata } from "next";
import Link from "next/link";
import FinalCTA from "@/components/sections/FinalCTA";
import WhyNot from "@/components/sections/WhyNot";
import { tiers, HOSTING_FLAT } from "@/lib/tiers";
import { isPlaceholder } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import { jsonLdString } from "@/lib/jsonLd";
import { pricingSchema } from "@/lib/schema";

const breadcrumb = breadcrumbJsonLd([{ name: "Pricing", path: "/pricing" }]);

const pricingTitle = "Pricing | AlgoNyte — Plans from $99/mo";
const pricingDescription =
  "Three offerings. From $99/mo to $749/mo. Live in 5 days to 2 weeks. Month-to-month. No long-term contracts.";

export const metadata: Metadata = {
  title: pricingTitle,
  description: pricingDescription,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: pricingTitle,
    description: pricingDescription,
    url: "/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pricingTitle,
    description: pricingDescription,
  },
};

const commitmentLabel: Record<string, string> = {
  "month-to-month": "Month-to-month",
};

const differentiators = [
  "No long-term contracts. Ever.",
  `$${HOSTING_FLAT}/mo flat hosting on Found. Forever. Never increases.`,
  "Fast turnaround: Found in 5–7 days, reception in 5 days.",
  'Transparent pricing: every number on this page. No "book a call to learn pricing".',
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-shrink-0 text-brand-primary"
      aria-label="Included"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent/60 via-brand-soft to-brand-soft">
        <PageHeroBackdrop />
        <div className="container-page pt-10 pb-16 sm:pt-14 sm:pb-20">
          <h1 className="h-display max-w-3xl">Pricing</h1>
          <p className="lede mt-6 max-w-2xl">
            A site that gets found. A team that never sleeps. Pick where you need help most.
          </p>
          <p className="mt-4 max-w-2xl rounded-xl border border-brand-deep/10 bg-white/60 px-5 py-4 text-brand-deep leading-relaxed">
            Every offering removes one more thing from your plate. Your business runs while you sleep.
          </p>
        </div>
      </section>

      {/* Start-here wizard placeholder */}
      <section className="pb-12 pt-4">
        <div className="container-page">
          <details className="rounded-2xl border border-brand-deep/15 bg-white p-5 shadow-soft open:pb-8">
            <summary className="cursor-pointer select-none text-brand-deep font-medium flex items-center justify-between gap-3 list-none">
              <span>Not sure where to start? Three quick questions</span>
              <span aria-hidden className="text-brand-deep/60">&#8595;</span>
            </summary>
            <div className="mt-5 space-y-5 text-sm text-brand-muted leading-relaxed">
              <div>
                <p className="font-semibold text-brand-ink mb-1.5">1. Broken-state check</p>
                <ul className="list-disc ml-4 space-y-1">
                  <li>Do you have a working website that looks professional and loads fast?</li>
                  <li>Can customers find you on Google when they search your service + city?</li>
                  <li>Are you missing leads because calls, texts, or DMs go unanswered?</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-brand-ink mb-1.5">2. Urgency</p>
                <ul className="list-disc ml-4 space-y-1">
                  <li>Do you need something live this week, or can you wait two weeks for a fuller build?</li>
                  <li>Is the problem you&rsquo;re solving costing you money every day it goes unsolved?</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-brand-ink mb-1.5">3. Budget</p>
                <ul className="list-disc ml-4 space-y-1">
                  <li>Can you do a one-time build investment now, or do you need to start monthly-only?</li>
                  <li>Is your budget under $100/mo, under $600/mo, or open to full management?</li>
                </ul>
              </div>
              <p className="pt-2 text-brand-deep/70 italic">
                Interactive wizard coming soon. For now, browse the offerings below, or{" "}
                <Link href="/contact" className="underline underline-offset-2 text-brand-deep hover:text-brand-primary transition-colors">
                  book a 30-min call
                </Link>{" "}
                and we&rsquo;ll pick the right one for you.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* At-a-glance table */}
      <section className="pb-16">
        <div className="container-page">
          <p className="eyebrow mb-4">At a glance</p>
          <h2 className="h-section mb-8 max-w-2xl">Three offerings. Every number on the table.</h2>

          {/* Desktop table */}
          <div className="hidden sm:block rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-brand-soft/50">
                  <th className="text-left py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Offering
                  </th>
                  <th className="text-right py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Setup
                  </th>
                  <th className="text-right py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Monthly
                  </th>
                  <th className="text-left py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Live in
                  </th>
                  <th className="text-left py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Commitment
                  </th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((tier) => (
                  <tr
                    key={tier.id}
                    className={`border-b border-slate-100 last:border-0 ${
                      tier.featured ? "bg-brand-accent/20" : ""
                    }`}
                  >
                    <td className="py-3.5 px-5">
                      <span className="font-medium text-brand-ink">{tier.name}</span>
                    </td>
                    <td className="py-3.5 px-5 text-right tabular-nums text-brand-muted">
                      ${tier.setup}
                    </td>
                    <td className="py-3.5 px-5 text-right tabular-nums font-medium text-brand-ink">
                      ${tier.monthly}/mo
                      {tier.monthlyNote && (
                        <span className="block text-xs font-normal text-brand-muted">
                          {tier.monthlyNote}
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-5 text-brand-muted">{tier.liveIn}</td>
                    <td className="py-3.5 px-5 text-brand-muted">
                      {commitmentLabel[tier.commitment]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden space-y-3">
            {tiers.map((tier) => (
              <div key={tier.id} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-brand-ink">{tier.name}</span>
                </div>
                <dl className="grid grid-cols-2 gap-y-2 text-sm">
                  <dt className="text-brand-muted">Setup</dt>
                  <dd className="text-right tabular-nums text-brand-ink font-medium">
                    ${tier.setup}
                  </dd>
                  <dt className="text-brand-muted">Monthly</dt>
                  <dd className="text-right tabular-nums text-brand-ink font-medium">
                    ${tier.monthly}/mo
                    {tier.monthlyNote && (
                      <span className="block text-xs font-normal text-brand-muted">
                        {tier.monthlyNote}
                      </span>
                    )}
                  </dd>
                  <dt className="text-brand-muted">Live in</dt>
                  <dd className="text-right text-brand-muted">{tier.liveIn}</dd>
                  <dt className="text-brand-muted">Commitment</dt>
                  <dd className="text-right text-brand-muted">
                    {commitmentLabel[tier.commitment]}
                  </dd>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting callout */}
      <section className="pb-16">
        <div className="container-page">
          <div className="rounded-2xl border border-brand-deep/20 bg-gradient-to-br from-brand-accent/40 via-white to-white p-6 sm:p-8">
            <p className="text-lg font-semibold text-brand-deep">
              ${HOSTING_FLAT}/mo flat hosting on Found. Forever. Never moves as you grow.
            </p>
            <p className="mt-3 text-brand-muted leading-relaxed max-w-2xl">
              One flat hosting price on Found. Includes SSL, CDN, 1 hour of edits per month,
              and a direct line when something breaks. Climbing is all-in (hosting included).
            </p>
          </div>
        </div>
      </section>

      {/* Offerings grid */}
      <section className="pb-20">
        <div className="container-page">
          <p className="eyebrow mb-4">Offerings</p>
          <h2 className="h-section max-w-3xl mb-10">
            Pick the offering that matches what&rsquo;s broken.
          </h2>
          <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
            {tiers.map((tier) => {
              const featured = tier.featured === true;
              return (
                <div
                  key={tier.id}
                  id={tier.id}
                  className={`relative flex h-full flex-col rounded-2xl p-7 ${
                    featured
                      ? "bg-brand-deep text-brand-soft shadow-deep -translate-y-2 sm:-translate-y-4"
                      : "lift-card bg-brand-soft shadow-soft"
                  }`}
                >
                  {featured && (
                    <div className="pointer-events-none absolute -top-3 inset-x-0 flex justify-center">
                      <span className="pointer-events-auto rounded-md bg-brand-primary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-soft">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3
                    className={`text-xl font-medium tracking-tight ${
                      featured ? "text-brand-soft" : "text-brand-deep"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`mt-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                      featured ? "text-brand-soft/50" : "text-brand-deep/50"
                    }`}
                  >
                    Stop worrying about {tier.stopWorryingAbout}.
                  </p>
                  <div className="mt-5 space-y-1.5">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <span
                        className={`text-4xl font-medium tracking-tight tabular-nums ${
                          featured ? "text-brand-soft" : "text-brand-deep"
                        }`}
                      >
                        ${tier.monthly}
                      </span>
                      <span
                        className={`text-sm ${
                          featured ? "text-brand-soft/60" : "text-brand-muted"
                        }`}
                      >
                        /mo
                      </span>
                      {tier.monthlyNote && (
                        <span
                          className={`text-sm ${
                            featured ? "text-brand-soft/60" : "text-brand-muted"
                          }`}
                        >
                          {tier.monthlyNote}
                        </span>
                      )}
                    </div>
                    {tier.setup > 0 && (
                      <p
                        className={`text-sm ${
                          featured ? "text-brand-soft/60" : "text-brand-muted"
                        }`}
                      >
                        + ${tier.setup} setup
                      </p>
                    )}
                  </div>
                  <p
                    className={`mt-3 text-xs ${
                      featured ? "text-brand-soft/60" : "text-brand-muted"
                    }`}
                  >
                    Live in {tier.liveIn} &middot; {commitmentLabel[tier.commitment]}
                  </p>

                  <ul className="mt-5 mb-7 space-y-2.5 text-sm flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span
                          className={featured ? "text-brand-soft/85" : "text-brand-muted"}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={isPlaceholder(tier.checkoutUrl) ? "/contact" : tier.checkoutUrl}
                    className={`${featured ? "btn-primary-featured" : "btn-primary"} w-full text-center`}
                  >
                    {isPlaceholder(tier.checkoutUrl) ? "Talk to us" : "Get started"}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What makes this different */}
      <section className="pb-20">
        <div className="container-page">
          <p className="eyebrow mb-4">Why AlgoNyte</p>
          <h2 className="h-section max-w-2xl mb-8">What makes this different.</h2>
          <div className="max-w-xl rounded-2xl border border-brand-deep/15 bg-white p-6 sm:p-8">
            <ul className="space-y-3">
              {differentiators.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-brand-muted leading-relaxed">
                  <CheckIcon />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Honest answers / cheaper options */}
      <WhyNot />

      <FinalCTA title="Get started." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(pricingSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumb) }}
      />
    </>
  );
}

export const dynamic = "force-static";
