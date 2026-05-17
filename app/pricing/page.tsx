import type { Metadata } from "next";
import Link from "next/link";
import FinalCTA from "@/components/sections/FinalCTA";
import FoundingStrip from "@/components/sections/FoundingStrip";
import { plans, isPlaceholder } from "@/lib/constants";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";

const breadcrumb = breadcrumbJsonLd([{ name: "Pricing", path: "/pricing" }]);

const pricingTitle = "AI Receptionist Pricing | Plans From $549/mo";
const pricingDescription =
  "Flat monthly pricing for AI receptionist plans: $549 Starter, $749 Growth, $1,299 Pro AI. No per-minute charges, no overages. 30-day money-back guarantee.";

export const metadata: Metadata = {
  title: pricingTitle,
  description: pricingDescription,
  alternates: { canonical: "/pricing" },
  openGraph: { title: pricingTitle, description: pricingDescription, url: "/pricing", type: "website" },
  twitter: { card: "summary_large_image", title: pricingTitle, description: pricingDescription },
};

const foundation = {
  id: "web-presence",
  name: "Web Presence",
  price: "From $279",
  cadence: "one-time + $99/mo",
  note: "Website build + hosting + SEO indexing",
  tagline:
    "We build your website, host it, and get it indexed on Google. Flat $99/mo across every build tier covers hosting, maintenance, and edits.",
  bullets: [
    "Foundation build — $279 one-time (5 pages)",
    "Growth build — $549 one-time (8 pages + booking)",
    "Command build — $799 one-time (12 pages + automation)",
    "$99/mo hosting, backups, SSL, edits",
    "On-page SEO + schema + GBP setup",
    "Add Local SEO or Ads program when ready",
  ],
  href: "/web-presence",
};

const growthPrograms = [
  {
    id: "lead-generator",
    name: "Lead Generator",
    price: "From $1,500",
    cadence: "/mo + ad spend",
    note: "3-month minimum",
    tagline:
      "Paid ads on Google and Meta, landing pages built to convert, and AI follow-up that books appointments not form fills.",
    bullets: [
      "Google Search + Local Service Ads",
      "Meta (Facebook + Instagram)",
      "Landing pages built to convert",
      "AI follow-up over SMS and email",
      "Closed-loop tracking to booked-job",
      "Monthly review with real numbers",
    ],
    href: "/lead-generator",
  },
  {
    id: "local-seo",
    name: "Local SEO Program",
    price: "From $1,500",
    cadence: "/mo",
    note: "6-month minimum",
    tagline:
      "Active Local SEO retainer to move you up the Map Pack and onto AI search. GBP work, citations, content cadence, ranking reports.",
    bullets: [
      "Google Business Profile optimization",
      "Citation cleanup + monthly consistency",
      "On-page + technical fixes",
      "Location + industry pages (1-2 / mo)",
      "AI search (llms.txt, schema, FAQs)",
      "Monthly rank + traffic review",
    ],
    href: "/book",
  },
  {
    id: "reputation-manager",
    name: "Reputation Manager",
    price: "$299",
    cadence: "/mo",
    note: "Included on Growth + Pro AI",
    tagline:
      "Automated post-job review requests with smart routing for unhappy customers. Move your Google rating in 60 days.",
    bullets: [
      "Trigger on job completion",
      "Smart routing for negative responses",
      "Multi-platform (Google, Yelp, Facebook)",
      "Polite drip for slow responders",
      "Dashboard with the metric that matters",
    ],
    href: "/reputation-manager",
  },
];

const paths = [
  {
    label: "New to the internet",
    body: "You don't have a site, or the one you have is broken. Start with Web Presence — $279 build, $99/mo hosting.",
    cta: "See Web Presence →",
    href: "/web-presence",
  },
  {
    label: "Phone won't stop ringing",
    body: "Leads are coming in but you can't keep up. Start with the AI Receptionist — answers, qualifies, books 24/7.",
    cta: "See plans below ↓",
    href: "#plans",
  },
  {
    label: "Not enough leads",
    body: "Site's fine, phone's quiet. Add Lead Generator (paid ads) or the Local SEO Program (organic).",
    cta: "See growth programs ↓",
    href: "#growth",
  },
];

const setupFeeUSD: Record<string, number | null> = {
  starter: 549,
  growth: 549,
  "pro-ai": null,
};

const planOfferJsonLd = plans.map((p) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/pricing#${p.id}`,
  name: `${p.name} AI Receptionist`,
  description: p.tagline,
  serviceType: "AI Receptionist",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Midwest United States" },
    { "@type": "Country", name: "United States" },
  ],
  offers: {
    "@type": "Offer",
    name: p.name,
    price: p.price,
    priceCurrency: "USD",
    url: `${siteConfig.url}/pricing#${p.id}`,
    availability: "https://schema.org/InStock",
    category: "subscription",
    priceSpecification: [
      {
        "@type": "UnitPriceSpecification",
        price: p.price,
        priceCurrency: "USD",
        unitCode: "MON",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MON",
        },
      },
      ...(setupFeeUSD[p.id]
        ? [
            {
              "@type": "UnitPriceSpecification",
              name: "One-time setup fee",
              price: setupFeeUSD[p.id],
              priceCurrency: "USD",
            },
          ]
        : []),
    ],
  },
}));

const aggregateOfferJsonLd = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  "@id": `${siteConfig.url}/pricing#aggregate`,
  url: `${siteConfig.url}/pricing`,
  name: "Algonyte Labs AI Receptionist Plans",
  priceCurrency: "USD",
  lowPrice: Math.min(...plans.map((p) => p.price)),
  highPrice: Math.max(...plans.map((p) => p.price)),
  offerCount: plans.length,
  availability: "https://schema.org/InStock",
};

const compareRows = [
  { label: "Missed call text back", values: [true, true, true] },
  { label: "Instant SMS + DM reply", values: [true, true, true] },
  { label: "Lead qualification", values: [true, true, true] },
  { label: "Auto booking to calendar", values: [true, true, true] },
  { label: "Google review requests", values: [true, true, true] },
  { label: "24/7 AI chat agent", values: [false, true, true] },
  { label: "Appointment reminders + follow-ups", values: [false, true, true] },
  { label: "WhatsApp + Instagram DM", values: [false, true, true] },
  { label: "Branching workflows", values: [false, true, true] },
  { label: "Voice AI 24/7 phone agent", values: [false, false, true] },
  { label: "Cold lead re-engagement", values: [false, false, true] },
  { label: "Custom AI training", values: [false, false, true] },
  { label: "Custom integrations", values: [false, false, true] },
  { label: "Dedicated strategist", values: [false, false, true] },
];

const faqs = [
  {
    q: "Is there a setup fee?",
    a: "Yes, $549 one time on Starter and Growth. Pro AI rolls setup into the first month. Founding members get 50% off setup ($275).",
  },
  {
    q: "Can I cancel whenever?",
    a: "Yes. Every plan is month to month. You can cancel from the dashboard or send us an email.",
  },
  {
    q: "What's the 30-day refund?",
    a: "If you decide we're not a good fit in the first 30 days, we give you your money back on the subscription. The setup fee covers the work we already did, so that part stays.",
  },
  {
    q: "Do I need to bring tools I already use?",
    a: "Nope, the platform comes with everything. If there's a tool you can't live without, we can connect it on Growth or Pro AI.",
  },
  {
    q: "What does the $99/mo on Web Presence actually cover?",
    a: "Managed hosting (SSL, CDN, daily backups, security patches), domain and email forwarding, 1 hour of content edits per month, Google Search Console + indexing monitoring, a quarterly health check, and a direct line when something breaks. Same across all three build tiers — only the one-time build fee changes.",
  },
  {
    q: "Who owns the website when I leave?",
    a: "You do. The domain, the code, the content, the Google Business Profile, and any Stripe or Square accounts are all yours and stay yours. If you ever leave, we hand you the keys and help you migrate hosting. No hostage situations.",
  },
  {
    q: "Is the Local SEO Program the same as Web Presence?",
    a: "No. Web Presence is the build and the lights-on hosting ($279+ one-time + $99/mo). The Local SEO Program is an active monthly retainer ($1,500/mo) where we run citations, content, GBP work, and ranking reports. Web Presence gets your site indexed; the Local SEO Program is what moves you up the Map Pack.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteConfig.url}/pricing#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PricingPage() {
  return (
    <>
      <FoundingStrip />

      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent/60 via-brand-soft to-brand-soft">
        <PageHeroBackdrop />
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <p className="eyebrow mb-4">Pricing</p>
          <h1 className="h-display max-w-3xl">
            One platform.{" "}
            <em className="not-italic text-brand-primary">Five products. No hidden fees.</em>
          </h1>
          <p className="lede mt-6 max-w-2xl">
            Pick what fits where you are now. Move up when you outgrow it.
            Every engagement starts with a 30-minute onboarding call, and if
            it&rsquo;s not the right fit in 30 days we refund the subscription.
          </p>
          <p className="mt-4 text-brand-deep font-medium">
            Month to month. Cancel anytime. No long-term contracts.
          </p>
        </div>
      </section>

      <section className="pb-12 sm:pb-16 -mt-8">
        <div className="container-page">
          <p className="eyebrow mb-4">Not sure where to start?</p>
          <div className="grid gap-4 md:grid-cols-3">
            {paths.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="group lift-card lift-sm rounded-2xl bg-brand-soft p-5 shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep/70">
                  {p.label}
                </p>
                <p className="mt-2 text-brand-muted leading-relaxed text-sm">
                  {p.body}
                </p>
                <p className="mt-4 text-sm font-medium text-brand-deep">
                  {p.cta}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="pb-20">
        <div className="container-page">
          <p className="eyebrow mb-4">AI Receptionist plans</p>
          <h2 className="h-section max-w-3xl mb-8">
            Answer, qualify, and book every lead 24/7.
          </h2>
          <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
            {plans.map((p) => {
              const featured = "featured" in p && p.featured;
              return (
                <div
                  key={p.id}
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
                    {p.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span
                      className={`text-5xl font-medium tracking-tightest tabular-nums ${
                        featured ? "text-brand-soft" : "text-brand-deep"
                      }`}
                    >
                      ${p.price}
                    </span>
                    <span
                      className={`text-sm ${
                        featured ? "text-brand-soft/60" : "text-brand-muted"
                      }`}
                    >
                      /mo
                    </span>
                  </div>
                  <p
                    className={`mt-5 min-h-[3.5rem] text-sm leading-relaxed ${
                      featured ? "text-brand-soft/70" : "text-brand-muted"
                    }`}
                  >
                    {p.tagline}
                  </p>
                  <ul className="mt-5 mb-7 space-y-2.5 text-sm flex-1">
                    {p.features.map((f) => (
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
                    href={isPlaceholder(p.checkoutUrl) ? "/contact" : p.checkoutUrl}
                    className={featured ? "btn-primary-featured w-full" : "btn-primary w-full"}
                  >
                    {isPlaceholder(p.checkoutUrl) ? "Talk to us" : "Get Started"}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="foundation" className="pb-20">
        <div className="container-page">
          <p className="eyebrow mb-4">Start here — your foundation</p>
          <h2 className="h-section max-w-3xl">
            Don&rsquo;t have a real website yet? Start here.
          </h2>
          <p className="mt-4 max-w-2xl text-brand-muted">
            Web Presence is infrastructure: the site, the hosting, the
            indexing. Pay for the build once, keep the lights on for $99/mo.
            Layer the growth programs below when you&rsquo;re ready to scale.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-[2fr_3fr] items-start">
            <div className="card flex flex-col">
              <h3 className="text-2xl font-semibold text-brand-deep">{foundation.name}</h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-brand-ink">
                  {foundation.price}
                </span>
                <span className="text-brand-muted text-sm">{foundation.cadence}</span>
              </div>
              <p className="mt-1 text-xs text-brand-deep/70 font-medium">
                {foundation.note}
              </p>
              <p className="mt-4 text-brand-muted text-sm leading-relaxed">
                {foundation.tagline}
              </p>
              <ul className="mt-5 mb-7 space-y-2 text-sm flex-1">
                {foundation.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 flex-shrink-0 text-brand-deep"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-brand-muted">{b}</span>
                  </li>
                ))}
              </ul>
              <Link href={foundation.href} className="btn-primary w-full text-center">
                See build tiers
              </Link>
            </div>
            <div className="rounded-2xl border border-brand-deep/20 bg-gradient-to-br from-brand-accent/40 via-white to-white p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep/70">
                Why a separate foundation tier?
              </p>
              <div className="mt-4 space-y-4 text-sm text-brand-muted leading-relaxed">
                <p>
                  Most agencies bundle hosting into a $1,500/mo retainer.
                  That&rsquo;s a tax on people who just need a working site.
                </p>
                <p>
                  We split it: the build is the build, the hosting is the
                  hosting, the SEO retainer is the retainer. You only pay for
                  the parts you actually need today, and the $99/mo never
                  moves when you grow into the engine programs below.
                </p>
                <p className="text-brand-deep font-medium">
                  Cancel the engine programs whenever. The site stays online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="growth" className="pb-20">
        <div className="container-page">
          <p className="eyebrow mb-4">Growth programs</p>
          <h2 className="h-section max-w-3xl">
            Layer these on once the site is live.
          </h2>
          <p className="mt-4 max-w-2xl text-brand-muted">
            Each runs as a managed monthly engagement on top of your
            subscription. Start with one, add the others when the first one
            pays for itself.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {growthPrograms.map((a) => (
              <div key={a.id} className="card flex flex-col">
                <h3 className="text-xl font-semibold text-brand-deep">{a.name}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-brand-ink">
                    {a.price}
                  </span>
                  <span className="text-brand-muted text-sm">{a.cadence}</span>
                </div>
                <p className="mt-1 text-xs text-brand-deep/70 font-medium">
                  {a.note}
                </p>
                <p className="mt-4 text-brand-muted text-sm leading-relaxed min-h-[3.5rem]">
                  {a.tagline}
                </p>
                <ul className="mt-5 mb-7 space-y-2 text-sm flex-1">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 flex-shrink-0 text-brand-deep"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-brand-muted">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link href={a.href} className="btn-secondary w-full text-center">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft">
        <div className="container-page">
          <p className="eyebrow mb-4">Compare Plans</p>
          <h2 className="h-section mb-10">What&rsquo;s included.</h2>
          <div className="md:hidden space-y-3">
            {compareRows.map((row) => (
              <div
                key={row.label}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <p className="text-sm font-medium text-brand-ink">{row.label}</p>
                <dl className="mt-3 grid grid-cols-3 gap-2">
                  {plans.map((p, i) => (
                    <div
                      key={p.id}
                      className="flex flex-col items-center gap-1 rounded-lg bg-brand-soft py-2"
                    >
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-brand-muted">
                        {p.name}
                      </dt>
                      <dd>
                        {row.values[i] ? (
                          <span className="text-brand-deep" aria-label="Included">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          </span>
                        ) : (
                          <span className="text-slate-300" aria-label="Not included">
                            ·
                          </span>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <div className="hidden md:block rounded-2xl border border-slate-200 bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-5 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.id}
                      className="text-center py-4 px-5 text-base font-semibold text-brand-deep"
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label} className="border-b border-slate-100 last:border-0">
                    <td className="py-3.5 px-5 text-sm text-brand-ink">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="py-3.5 px-5 text-center">
                        {v ? (
                          <span className="text-brand-deep" aria-label="Included">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="inline"
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          </span>
                        ) : (
                          <span className="text-slate-300" aria-label="Not included">
                            ·
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="lg:grid lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">FAQ</p>
              <h2 className="h-section">Common questions.</h2>
              <p className="mt-4 text-brand-muted leading-relaxed max-w-sm">
                Short, honest answers. If you don&rsquo;t see yours, ask us
                directly &mdash; we&rsquo;ll get back the same day.
              </p>
            </div>
            <dl className="mt-10 lg:mt-0 lg:col-span-8 divide-y divide-slate-200">
              {faqs.map((f) => (
                <div key={f.q} className="py-6 first:pt-0">
                  <dt className="text-lg font-semibold text-brand-deep">{f.q}</dt>
                  <dd className="mt-2 text-brand-muted leading-relaxed max-w-2xl">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <FinalCTA title="Get started." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateOfferJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {planOfferJsonLd.map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
