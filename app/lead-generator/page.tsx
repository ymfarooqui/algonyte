import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import FinalCTA from "@/components/sections/FinalCTA";
import { jsonLdString } from "@/lib/jsonLd";
import { growthTiers } from "@/lib/tiers";

const scale = growthTiers[2];

const title = "Lead Generation for Service Businesses | Google + Meta Ads";
const description = `Paid ads on Google and Meta with AI follow-up that books appointments, not form fills. Part of Scale ($${scale.monthly.toLocaleString()}/mo + ad spend on your card). Closed-loop tracking. No markup on ad spend.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/lead-generator" },
  openGraph: { title, description, url: "/lead-generator", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Lead Generation", path: "/lead-generator" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/lead-generator#service`,
  serviceType: "Paid Lead Generation Management",
  name: `Lead Generation by AlgoNyte, ${scale.name} tier`,
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  description:
    "Google Search Ads, Local Service Ads, and Meta Ads managed for service businesses. Ad spend goes directly to Google and Meta, no markup, no bundling. Part of the Scale tier.",
  areaServed: { "@type": "Country", name: "United States" },
  offers: {
    "@type": "Offer",
    name: scale.name,
    price: scale.monthly,
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: scale.monthly,
      priceCurrency: "USD",
      unitCode: "MON",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
    },
    eligibleTransactionVolume: {
      "@type": "PriceSpecification",
      price: scale.setup,
      priceCurrency: "USD",
      description: `One-time setup: $${scale.setup}`,
    },
    availability: "https://schema.org/InStock",
    url: `${siteConfig.url}/pricing#scale`,
    description: `Ad spend on customer's card. No markup on ad spend.`,
  },
};

const faqs = [
  {
    q: "How much ad spend do I need to start?",
    a: "Honest range: $1,500–$5,000/mo is the minimum to see signal on Google Search Ads in most service markets. Below that, the auction dynamics work against you. You're competing against businesses spending 5x more per day. If you're starting at $1,500, we'll tell you which channel stretches it furthest.",
  },
  {
    q: "What if my ads aren't working?",
    a: "The first 30 days are calibration. We're building negative keyword lists, testing match types, and watching what converts. We share the numbers transparently every month. If CPL is too high after 60 days, we change the approach. If the market doesn't support ads economically for your service, we'll tell you that too.",
  },
  {
    q: "How fast do I see leads?",
    a: "First leads usually within 1–2 weeks of go-live. Campaigns launch within the first 14 days of onboarding. Month one is learning. Month two is when cost-per-booked-job starts to stabilize.",
  },
  {
    q: "What happens to my accounts if I cancel?",
    a: "You keep everything. The Google Ads and Meta accounts are set up in your name on your billing. The campaigns, audiences, ad creative, and conversion data all stay with you. No lock-in, no hostage accounts.",
  },
  {
    q: "Do you handle creative for the ads?",
    a: "Yes. Meta Ads creative (static images, copy, basic video) is included. For Google Search Ads, we write and A/B test the ad copy. The 2 landing pages per quarter are built by us, not handed off to you as a template.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function LeadGeneratorPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="max-w-3xl">
            <h1 className="h-display">
              Lead Generation for{" "}
              <span className="text-brand-deep">Service Businesses</span>
            </h1>
            <p className="lede mt-6 max-w-2xl">
              Google Search, Local Service Ads, Meta. Landing pages built
              to convert, AI follow-up that books appointments. Closed-loop
              tracking from ad click to booked job. Part of the{" "}
              <strong className="text-brand-deep">{scale.name}</strong> tier.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/pricing#scale"
                className="inline-flex items-center justify-center rounded-full bg-brand-deep px-8 py-4 text-white font-medium hover:bg-brand-deep/90 transition-colors text-lg"
              >
                Talk to us about {scale.name} &rarr;
              </Link>
              <Link
                href="/web-presence"
                className="text-sm text-brand-deep underline decoration-brand-deep/30 underline-offset-4 hover:decoration-brand-deep transition-colors"
              >
                Don&rsquo;t have a website yet? Start here &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand frame */}
      <section className="section bg-brand-deep text-white">
        <div className="container-page max-w-3xl text-center">
          <p className="text-xl sm:text-2xl font-medium leading-snug text-white/90 italic">
            &ldquo;Your business runs while you sleep, including the ads, the landing pages, and the follow-up.&rdquo;
          </p>
        </div>
      </section>

      {/* What it does */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">The full paid-lead system.</h2>
          <ul className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <li>
              <strong className="text-brand-deep">Google Search Ads + Local Service Ads (LSAs).</strong>{" "}
              Managed and A/B tested weekly. Match types, negative keywords, and bid strategy
              tuned to cost-per-booked-job, not cost-per-click.
            </li>
            <li>
              <strong className="text-brand-deep">Meta Ads (Facebook + Instagram) with creative testing.</strong>{" "}
              Multiple ad sets, audience testing, and creative variants. We iterate
              until CPL is tight, then scale.
            </li>
            <li>
              <strong className="text-brand-deep">2 conversion-optimized landing pages per quarter.</strong>{" "}
              One offer, one CTA, fast load. Not your homepage with a form on it.
            </li>
            <li>
              <strong className="text-brand-deep">AI follow-up on every ad lead via SMS + email.</strong>{" "}
              The moment a form fill lands, the lead gets an SMS. The conversation continues
              until there&rsquo;s a time on the calendar or the lead opts out.
            </li>
            <li>
              <strong className="text-brand-deep">Closed-loop tracking: ad click &rarr; form fill &rarr; booked job &rarr; revenue.</strong>{" "}
              We track the full funnel. The number we optimize is cost-per-booked-job, not
              cost-per-lead.
            </li>
            <li>
              <strong className="text-brand-deep">Monthly performance review with CPL, CAC, booked-rate, and ROAS.</strong>{" "}
              Real numbers, no spin. What worked, what didn&rsquo;t, and what we change next month.
            </li>
          </ul>
        </div>
      </section>

      {/* No markup callout */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <div className="rounded-2xl border-2 border-brand-deep bg-brand-accent/30 p-8 sm:p-10">
            <h2 className="h-section text-brand-deep">Ad spend is yours. Always.</h2>
            <div className="mt-4 space-y-4 text-brand-muted leading-relaxed">
              <p>
                You hold the Google Ads and Meta accounts. Ad spend goes on your credit card,
                directly to Google and Meta. Never touches us, no markup, ever.
                The ${scale.monthly.toLocaleString()}/mo is for the work; the spend is yours.
                You see every dollar.
              </p>
              <p>
                If you ever leave us, the accounts and campaigns stay yours.
              </p>
              <p className="text-sm text-brand-muted/80 border-t border-brand-deep/10 pt-4">
                Most agencies run ads through their own accounts. You never see the real
                spend, and when you leave, the data, audiences, and campaign history
                go with them. We don&rsquo;t do that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scale tier CTA card */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">Lead generation is part of {scale.name}.</h2>
          <div className="mt-6 lift-card rounded-2xl bg-white p-8 sm:p-10 border border-slate-200">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-muted">
                  Growth Tier
                </p>
                <p className="text-3xl font-bold text-brand-deep mt-1">{scale.name}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-brand-muted">Setup</p>
                <p className="text-2xl font-bold text-brand-deep">${scale.setup}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-baseline gap-2">
              <span className="text-4xl font-bold text-brand-deep">
                ${scale.monthly.toLocaleString()}
              </span>
              <span className="text-brand-muted">/mo, {scale.monthlyNote}</span>
            </div>

            <div className="mt-2 flex flex-wrap gap-4 text-sm text-brand-muted">
              <span>Live in {scale.liveIn}</span>
              <span>&middot;</span>
              <span>6 months on SEO work, 3 months on ad work</span>
            </div>

            <ul className="mt-6 space-y-3 text-brand-muted leading-relaxed">
              {scale.features.slice(0, 6).map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 text-brand-deep font-bold text-xs">&#10003;</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/pricing#scale"
                className="inline-flex items-center justify-center rounded-full bg-brand-deep px-8 py-4 text-white font-medium hover:bg-brand-deep/90 transition-colors text-lg"
              >
                Talk to us about {scale.name} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive comparison */}
      <section className="section">
        <div className="container-page max-w-5xl">
          <p className="eyebrow mb-4">How we compare</p>
          <h2 className="h-section">Paid ads transparency, side by side.</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 text-brand-muted font-medium w-40"></th>
                  <th className="py-3 px-4 text-brand-deep font-bold bg-brand-accent/40 rounded-t-lg">
                    AlgoNyte {scale.name}
                  </th>
                  <th className="py-3 px-4 text-brand-muted font-medium">Scorpion</th>
                  <th className="py-3 px-4 text-brand-muted font-medium">Blue Corona</th>
                  <th className="py-3 px-4 text-brand-muted font-medium">Hibu</th>
                  <th className="py-3 px-4 text-brand-muted font-medium">Hook Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-4 pr-4 font-medium text-brand-deep">Monthly</td>
                  <td className="py-4 px-4 bg-brand-accent/20 font-medium text-brand-deep">
                    ${scale.monthly.toLocaleString()} + ad spend
                  </td>
                  <td className="py-4 px-4 text-brand-muted">$2,500&ndash;$8,000+</td>
                  <td className="py-4 px-4 text-brand-muted">$3,500&ndash;$10,000</td>
                  <td className="py-4 px-4 text-brand-muted">$449+ (real: $1,500&ndash;$7K)</td>
                  <td className="py-4 px-4 text-brand-muted">$3,000+</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-brand-deep">Setup</td>
                  <td className="py-4 px-4 bg-brand-accent/20 font-medium text-brand-deep">
                    ${scale.setup}
                  </td>
                  <td className="py-4 px-4 text-brand-muted">$5,000&ndash;$50,000</td>
                  <td className="py-4 px-4 text-brand-muted">$2,500&ndash;$3,500 audit</td>
                  <td className="py-4 px-4 text-brand-muted">$499</td>
                  <td className="py-4 px-4 text-brand-muted">Custom</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-brand-deep">Contract</td>
                  <td className="py-4 px-4 bg-brand-accent/20 font-medium text-brand-deep">
                    3 months on ad work
                  </td>
                  <td className="py-4 px-4 text-brand-muted">12&ndash;24 months</td>
                  <td className="py-4 px-4 text-brand-muted">Quote-based</td>
                  <td className="py-4 px-4 text-brand-muted">12 months</td>
                  <td className="py-4 px-4 text-brand-muted">Quote-based</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-brand-deep">Ad spend on YOUR card</td>
                  <td className="py-4 px-4 bg-brand-accent/20 font-bold text-green-700">YES</td>
                  <td className="py-4 px-4 text-brand-muted">No (their account)</td>
                  <td className="py-4 px-4 text-brand-muted">No</td>
                  <td className="py-4 px-4 text-brand-muted">No</td>
                  <td className="py-4 px-4 text-brand-muted">Varies</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-brand-deep">No markup on ad spend</td>
                  <td className="py-4 px-4 bg-brand-accent/20 font-bold text-green-700">Yes, none</td>
                  <td className="py-4 px-4 text-brand-muted">Opaque</td>
                  <td className="py-4 px-4 text-brand-muted">Quote-based</td>
                  <td className="py-4 px-4 text-brand-muted">Quote-based</td>
                  <td className="py-4 px-4 text-brand-muted">Quote-based</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-brand-muted leading-relaxed max-w-3xl">
            Most agencies bundle ad spend into a giant retainer with opaque markups. We split
            it: you pay us for the work, you pay Google and Meta for the clicks. No markup on
            ad spend, ever. If you leave, the accounts and the data go with you.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">Straight answers on paid lead generation.</h2>
          <dl className="mt-6 divide-y divide-slate-200">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="text-lg font-semibold text-brand-deep">{f.q}</dt>
                <dd className="mt-2 text-brand-muted leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <FinalCTA title="Ready to run ads that book jobs?" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumb) }}
      />
    </>
  );
}

export const dynamic = "force-static";

