import type { Metadata } from "next";
import Link from "next/link";
import FinalCTA from "@/components/sections/FinalCTA";
import FoundingStrip from "@/components/sections/FoundingStrip";
import WhyNot from "@/components/sections/WhyNot";
import { siteTiers, growthTiers } from "@/lib/tiers";
import { isPlaceholder } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import { jsonLdString } from "@/lib/jsonLd";
import { pricingSchema, foundingOfferSchema } from "@/lib/schema";

const breadcrumb = breadcrumbJsonLd([{ name: "Pricing", path: "/pricing" }]);

const pricingTitle = "Pricing | Algonyte — Plans from $99/mo";
const pricingDescription =
  "Two products. Six rungs. From $99/mo to $1,199/mo. Live in 72 hours to 14 days. No long-term contracts except 6 months on SEO.";

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
  "6-months": "6 months",
  "6-months-seo-3-months-ads": "6 mo SEO / 3 mo ads",
};

const allTiersFlat = [...siteTiers, ...growthTiers];

const typicalPaths = [
  {
    label: "Just need a site",
    tiers: [siteTiers[0]],
    setup: siteTiers[0].setup,
    monthly: siteTiers[0].monthly,
    monthlyNote: "",
  },
  {
    label: "Want to be findable",
    tiers: [siteTiers[1]],
    setup: siteTiers[1].setup,
    monthly: siteTiers[1].monthly,
    monthlyNote: "",
  },
  {
    label: "Losing leads",
    tiers: [growthTiers[0]],
    setup: growthTiers[0].setup,
    monthly: growthTiers[0].monthly,
    monthlyNote: "",
  },
  {
    label: "Starting fresh, wants reception",
    tiers: [siteTiers[1], growthTiers[0]],
    setup: siteTiers[1].setup + growthTiers[0].setup,
    monthly: siteTiers[1].monthly + growthTiers[0].monthly,
    monthlyNote: "",
  },
  {
    label: "Full reception + SEO",
    tiers: [siteTiers[2], growthTiers[1]],
    // Climbing is all-in (includes hosting), so hosting is bundled into Climbing's monthly
    setup: siteTiers[2].setup + growthTiers[1].setup,
    monthly: siteTiers[2].monthly + growthTiers[1].monthly,
    monthlyNote: "(Climbing all-in includes hosting)",
  },
  {
    label: "Predictable pipeline",
    tiers: [siteTiers[2], growthTiers[2]],
    setup: siteTiers[2].setup + growthTiers[2].setup,
    monthly: siteTiers[2].monthly + growthTiers[2].monthly,
    monthlyNote: "+ ad spend",
  },
];

const differentiators = [
  "No annual contracts. 6 months only on SEO and ads",
  `$${siteTiers[0].monthly}/mo hosting forever, flat, never increases`,
  "Ad spend is yours: your card, your accounts, no markup",
  "Fast turnaround: site in 72 hours, reception in 5 days",
  'Transparent pricing: every number on this page. No "book a call to learn pricing"',
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
      <FoundingStrip />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent/60 via-brand-soft to-brand-soft">
        <PageHeroBackdrop />
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <h1 className="h-display max-w-3xl">Pricing</h1>
          <p className="lede mt-6 max-w-2xl">
            Two products. Six rungs. One question: how far up are you ready to go?
          </p>
          <p className="mt-4 max-w-2xl rounded-xl border border-brand-deep/10 bg-white/60 px-5 py-4 text-brand-deep leading-relaxed">
            Every tier removes one more thing from your plate. Your business runs while you sleep.
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
                  <li>Do you need something live in 72 hours, or can you wait a week for a fuller build?</li>
                  <li>Is the problem you&rsquo;re solving costing you money every day it goes unsolved?</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-brand-ink mb-1.5">3. Budget</p>
                <ul className="list-disc ml-4 space-y-1">
                  <li>Can you do a one-time build investment now, or do you need to start monthly-only?</li>
                  <li>Is your budget under $500/mo, under $1,000/mo, or open to full-stack?</li>
                </ul>
              </div>
              <p className="pt-2 text-brand-deep/70 italic">
                Interactive wizard coming soon. For now, browse the tiers below, or{" "}
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
          <h2 className="h-section mb-8 max-w-2xl">Six tiers. Every number on the table.</h2>

          {/* Desktop table */}
          <div className="hidden sm:block rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-brand-soft/50">
                  <th className="text-left py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Tier
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
                {allTiersFlat.map((tier, i) => {
                  const isGrowth = i >= siteTiers.length;
                  return (
                    <tr
                      key={tier.id}
                      className={`border-b border-slate-100 last:border-0 ${
                        "featured" in tier && tier.featured
                          ? "bg-brand-accent/20"
                          : ""
                      }`}
                    >
                      <td className="py-3.5 px-5">
                        <span className="font-medium text-brand-ink">{tier.name}</span>
                        <span className="ml-2 text-[10px] font-semibold uppercase tracking-wider text-brand-deep/50 bg-brand-soft px-1.5 py-0.5 rounded">
                          {isGrowth ? "Growth" : "Presence"}
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-right tabular-nums text-brand-muted">
                        ${tier.setup}
                      </td>
                      <td className="py-3.5 px-5 text-right tabular-nums font-medium text-brand-ink">
                        ${tier.monthly}/mo
                        {"monthlyNote" in tier && tier.monthlyNote && (
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
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden space-y-3">
            {allTiersFlat.map((tier, i) => {
              const isGrowth = i >= siteTiers.length;
              return (
                <div
                  key={tier.id}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-brand-ink">{tier.name}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-deep/50 bg-brand-soft px-1.5 py-0.5 rounded">
                      {isGrowth ? "Growth" : "Presence"}
                    </span>
                  </div>
                  <dl className="grid grid-cols-2 gap-y-2 text-sm">
                    <dt className="text-brand-muted">Setup</dt>
                    <dd className="text-right tabular-nums text-brand-ink font-medium">
                      ${tier.setup}
                    </dd>
                    <dt className="text-brand-muted">Monthly</dt>
                    <dd className="text-right tabular-nums text-brand-ink font-medium">
                      ${tier.monthly}/mo
                      {"monthlyNote" in tier && tier.monthlyNote && (
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Hosting callout */}
      <section className="pb-16">
        <div className="container-page">
          <div className="rounded-2xl border border-brand-deep/20 bg-gradient-to-br from-brand-accent/40 via-white to-white p-6 sm:p-8">
            <p className="text-lg font-semibold text-brand-deep">
              ${siteTiers[0].monthly}/mo flat hosting. Forever. Never moves as you grow.
            </p>
            <p className="mt-3 text-brand-muted leading-relaxed max-w-2xl">
              One-time hosting price across every Presence tier. Includes SSL, daily backups, CDN,
              1 hour of edits per month, and a direct line when something breaks.
            </p>
          </div>
        </div>
      </section>

      {/* Presence tiers */}
      <section id="site" className="pb-20">
        <div className="container-page">
          <p className="eyebrow mb-4">Presence</p>
          <h2 className="h-section max-w-3xl mb-2">
            Your foundation on the internet.
          </h2>
          <p className="mt-2 max-w-2xl text-brand-muted mb-10">
            Build once. Pay ${siteTiers[0].monthly}/mo to keep it live. Layer Growth tiers when you&rsquo;re ready.
          </p>
          <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
            {siteTiers.map((tier) => (
              <div
                key={tier.id}
                id={tier.id}
                className="relative flex h-full flex-col rounded-2xl p-7 lift-card bg-brand-soft shadow-soft"
              >
                <h3 className="text-xl font-medium tracking-tight text-brand-deep">
                  {tier.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep/50">
                  Stop worrying about {tier.stopWorryingAbout}.
                </p>
                <div className="mt-5 space-y-1.5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-medium tracking-tight tabular-nums text-brand-deep">
                      ${tier.monthly}
                    </span>
                    <span className="text-sm text-brand-muted">/mo hosting</span>
                  </div>
                  <p className="text-sm text-brand-muted">
                    + ${tier.setup} one-time setup
                  </p>
                </div>
                <p className="mt-3 text-xs text-brand-muted">
                  Live in {tier.liveIn} &middot; {commitmentLabel[tier.commitment]}
                </p>
                <ul className="mt-5 mb-7 space-y-2.5 text-sm flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span className="text-brand-muted">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={isPlaceholder(tier.checkoutUrl) ? "/contact" : tier.checkoutUrl}
                  className="btn-primary w-full text-center"
                >
                  {isPlaceholder(tier.checkoutUrl) ? "Talk to us" : "Get started"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth tiers */}
      <section id="growth" className="pb-20">
        <div className="container-page">
          <p className="eyebrow mb-4">Growth</p>
          <h2 className="h-section max-w-3xl mb-2">
            Hand off what you hate doing.
          </h2>
          <p className="mt-2 max-w-2xl text-brand-muted mb-10">
            Reception, ranking, ads. Pick the rung that matches what&rsquo;s broken. We run it from there.
          </p>
          <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
            {growthTiers.map((tier) => {
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

                  {/* Tier-specific callout lines */}
                  {tier.id === "scale" && (
                    <p className="mt-4 text-sm font-medium rounded-lg bg-brand-deep/5 text-brand-deep px-3 py-2">
                      Ad spend goes on your credit card, straight to Google and Meta. Never touches us, never has a markup.
                    </p>
                  )}

                  <ul className="mt-5 mb-7 space-y-2.5 text-sm flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
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

      {/* Typical paths */}
      <section className="pb-20 bg-brand-soft">
        <div className="container-page py-16">
          <p className="eyebrow mb-4">Typical paths</p>
          <h2 className="h-section max-w-2xl mb-8">Common bundles, real numbers.</h2>

          {/* Desktop table */}
          <div className="hidden sm:block rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-brand-soft/50">
                  <th className="text-left py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Situation
                  </th>
                  <th className="text-left py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Tiers
                  </th>
                  <th className="text-right py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Setup
                  </th>
                  <th className="text-right py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Monthly
                  </th>
                </tr>
              </thead>
              <tbody>
                {typicalPaths.map((path) => (
                  <tr key={path.label} className="border-b border-slate-100 last:border-0">
                    <td className="py-3.5 px-5 font-medium text-brand-ink">{path.label}</td>
                    <td className="py-3.5 px-5 text-brand-muted">
                      {path.tiers.map((t) => t.name).join(" + ")}
                    </td>
                    <td className="py-3.5 px-5 text-right tabular-nums text-brand-muted">
                      ${path.setup}
                    </td>
                    <td className="py-3.5 px-5 text-right tabular-nums font-medium text-brand-ink">
                      ${path.monthly}/mo
                      {path.monthlyNote && (
                        <span className="block text-xs font-normal text-brand-muted">
                          {path.monthlyNote}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden space-y-3">
            {typicalPaths.map((path) => (
              <div key={path.label} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="font-medium text-brand-ink mb-1">{path.label}</p>
                <p className="text-xs text-brand-muted mb-3">
                  {path.tiers.map((t) => t.name).join(" + ")}
                </p>
                <dl className="grid grid-cols-2 gap-y-1 text-sm">
                  <dt className="text-brand-muted">Setup</dt>
                  <dd className="text-right tabular-nums text-brand-ink font-medium">
                    ${path.setup}
                  </dd>
                  <dt className="text-brand-muted">Monthly</dt>
                  <dd className="text-right tabular-nums text-brand-ink font-medium">
                    ${path.monthly}/mo
                    {path.monthlyNote && (
                      <span className="block text-xs font-normal text-brand-muted">
                        {path.monthlyNote}
                      </span>
                    )}
                  </dd>
                </dl>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-brand-muted max-w-lg">
            Climbing is all-in: its ${growthTiers[1].monthly}/mo already includes hosting. The &ldquo;Full reception +
            SEO&rdquo; path&rsquo;s ${siteTiers[2].monthly + growthTiers[1].monthly}/mo reflects that. No double-charging.
          </p>
        </div>
      </section>

      {/* What makes this different */}
      <section className="pb-20">
        <div className="container-page">
          <p className="eyebrow mb-4">Why Algonyte</p>
          <h2 className="h-section max-w-2xl mb-8">What makes this different.</h2>
          <div className="max-w-xl rounded-2xl border border-brand-deep/15 bg-white p-6 sm:p-8">
            <ul className="space-y-3">
              {differentiators.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-brand-muted leading-relaxed">
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
        dangerouslySetInnerHTML={{ __html: jsonLdString(foundingOfferSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumb) }}
      />
    </>
  );
}

export const dynamic = "force-static";
