import type { Metadata } from "next";
import Link from "next/link";
import { siteTiers, growthTiers } from "@/lib/tiers";
import { isPlaceholder } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import CursorSpotlight from "@/components/CursorSpotlight";
import { jsonLdString } from "@/lib/jsonLd";
import { webPresenceServiceSchema } from "@/lib/schema";

const title = "Web Presence | Sites From $299, Hosting Flat at $99/mo";
const description =
  "End-to-end web presence for service businesses. Sites built from $299 one-time, then $99/mo flat hosting forever. Live in 72 hours to 12 days. Google Business Profile setup included.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/web-presence" },
  openGraph: { title, description, url: "/web-presence", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([{ name: "Web Presence", path: "/web-presence" }]);

// Found (index 1) is the featured tier — most service businesses pick it.
const featuredTierId = "found";

const monthlyIncludes = [
  "Managed hosting, SSL, CDN, daily backups",
  "Domain + email forwarding",
  "1 hour of content edits per month",
  "Search Console + indexing monitoring",
  "Quarterly health check",
  "Direct line when something breaks",
];

const faqs = [
  {
    q: "What does the $99/mo cover?",
    a: "Managed hosting, SSL certificate, global CDN, daily backups, domain and email forwarding, 1 hour of content edits per month, Search Console monitoring, a quarterly health check, and a direct line when something breaks. The price is flat and identical across all three tiers: Open, Found, and Polished.",
  },
  {
    q: "I already have a website. Do I have to replace it?",
    a: "No. If your site is solid we can migrate it to our hosting. If it's hurting you (slow, broken on mobile, no schema, nowhere on Google), we rebuild. We'll tell you straight on the discovery call.",
  },
  {
    q: "Who owns the website when I leave?",
    a: "You do. The domain, the code, the content, the Google Business Profile, and your Stripe or Square accounts are all yours. We don't hold anything hostage.",
  },
  {
    q: "Can I cancel whenever?",
    a: "Yes. Presence hosting is month-to-month with no minimum. If you cancel, you leave with your domain, your code, and your Google Business Profile fully intact.",
  },
  {
    q: "How fast can you get me live?",
    a: "Open ships in 72 hours from a signed brief. Found is 5–7 days. Polished is 7–12 days because it includes a full custom design pass. We hold ourselves to these. They're public numbers.",
  },
  {
    q: "What about contracts? I've heard horror stories with Hibu and Scorpion.",
    a: "No 12-month contracts on Presence. No locked-in annual fee. Month-to-month from day one. You're a client because we're doing the work.",
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

function CheckIcon({ featured }: { featured?: boolean }) {
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
      className={`mt-0.5 flex-shrink-0 ${featured ? "text-brand-soft" : "text-brand-deep"}`}
      aria-label="Included"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function WebPresencePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <h1 className="h-display">Web Presence</h1>
            <p className="mt-4 max-w-2xl rounded-xl border border-brand-deep/10 bg-white/60 px-5 py-4 text-brand-deep leading-relaxed">
              Your business runs while you sleep, starting with a site that gets you found.
            </p>
            <p className="lede mt-6 max-w-2xl">
              Site live in 72 hours. Built for your brand, hosted for{" "}
              <strong>$99/mo flat</strong>, indexed on Google from day one.
              Starting from <strong>$299</strong> one-time, then $99/mo
              forever. No tiered hosting nonsense, no contracts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-brand-deep px-8 py-4 text-white font-medium hover:bg-brand-deep/90 transition-colors text-lg"
              >
                Book a 30-minute walkthrough →
              </Link>
              <a
                href="#packages"
                className="inline-flex items-center justify-center rounded-full border border-brand-deep/20 bg-white px-8 py-4 text-brand-deep font-medium hover:border-brand-deep/40 transition-colors text-lg"
              >
                See packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem framing */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">
            Your customers won&rsquo;t buy from a business they can&rsquo;t find online.
          </h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              You&rsquo;ve probably stitched something together: a site a
              nephew built five years ago, a GoDaddy host you&rsquo;re afraid
              to log into, a Facebook page, a Stripe account you set up once and
              forgot, a Google Business Profile that&rsquo;s 40% filled in.
            </p>
            <p>
              The pieces work fine. Nobody&rsquo;s running them as a system.
              The site doesn&rsquo;t rank. Customers can&rsquo;t book.
              Nobody&rsquo;s watching what breaks. And every month you pay
              vendors who blame each other.
            </p>
            <p>
              We replace the whole stack. One team, one bill, one number
              responsible for whether the phone rings, and a site that gets
              you found from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Tier cards */}
      <section id="packages" className="section bg-brand-soft/40">
        <div className="container-page">
          <h2 className="h-section max-w-3xl">
            Pick a build. Pay it once. Monthly stays $99 forever.
          </h2>
          <p className="mt-4 max-w-2xl text-brand-muted">
            The setup fee covers the build. The $99/mo covers hosting,
            maintenance, edits, and the line you call when something breaks.
            Need more later? Upgrade by paying a new build invoice. Your
            monthly never moves.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3 md:items-stretch">
            {siteTiers.map((tier) => {
              const featured = tier.id === featuredTierId;
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
                  <div className="mt-5 space-y-1">
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className={`text-2xl font-medium tabular-nums ${
                          featured ? "text-brand-soft" : "text-brand-ink"
                        }`}
                      >
                        ${tier.setup}
                      </span>
                      <span
                        className={`text-sm ${
                          featured ? "text-brand-soft/60" : "text-brand-muted"
                        }`}
                      >
                        one-time setup
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1.5">
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
                        /mo hosting
                      </span>
                    </div>
                  </div>
                  <p
                    className={`mt-3 text-xs ${
                      featured ? "text-brand-soft/60" : "text-brand-muted"
                    }`}
                  >
                    Live in {tier.liveIn} &middot; Month-to-month
                  </p>
                  <ul className="mt-5 mb-7 space-y-2.5 text-sm flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckIcon featured={featured} />
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

          {/* $99/mo callout */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-xl font-semibold text-brand-deep">
                What the $99/mo covers
              </h3>
              <p className="text-sm text-brand-muted">
                Identical across every tier. No tiered hosting nonsense.
              </p>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm">
              {monthlyIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2">
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
                    aria-label="Included"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-brand-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Ready for more — upgrade path */}
      <section className="section">
        <div className="container-page">
          <h2 className="h-section max-w-3xl">
            Add a growth engine when you&rsquo;re ready.
          </h2>
          <p className="mt-4 max-w-2xl text-brand-muted">
            Your site gets you online and indexed. These programs make the
            phone ring. Each one removes another thing from your plate. Optional,
            priced separately. Start week one or add them later.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {/* Awake */}
            <Link
              href="/pricing#awake"
              className="group lift-card lift-sm block rounded-2xl bg-brand-soft p-6 shadow-soft"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-deep/60 mb-2">
                Need reception?
              </p>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold text-brand-deep">Awake</h3>
                <span className="text-sm font-medium text-brand-ink">
                  ${growthTiers[0].setup} + ${growthTiers[0].monthly}/mo
                </span>
              </div>
              <p className="mt-2 text-brand-muted leading-relaxed text-sm">
                AI chat on your site, missed-call text-back, and DM auto-reply
                24/7. Answers, qualifies, and books while you sleep.
              </p>
              <p className="mt-4 text-sm font-medium text-brand-deep">
                See Awake
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </Link>

            {/* Climbing */}
            <Link
              href="/pricing#climbing"
              className="group lift-card lift-sm block rounded-2xl bg-brand-soft p-6 shadow-soft"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-deep/60 mb-2">
                Want to rank on Google?
              </p>
              <div className="flex items-baseline justify-between gap-3 flex-wrap gap-y-1">
                <h3 className="text-lg font-semibold text-brand-deep">Climbing</h3>
                <span className="text-sm font-medium text-brand-ink">
                  ${growthTiers[1].setup} + ${growthTiers[1].monthly}/mo
                </span>
              </div>
              <p className="mt-1 text-xs text-brand-muted">all-in (includes hosting)</p>
              <p className="mt-2 text-brand-muted leading-relaxed text-sm">
                Reception plus ongoing Google Business Profile work, citation
                cleanup, content cadence, and AI search optimization.
              </p>
              <p className="mt-4 text-sm font-medium text-brand-deep">
                See Climbing
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </Link>

            {/* Scale */}
            <Link
              href="/pricing#scale"
              className="group lift-card lift-sm block rounded-2xl bg-brand-soft p-6 shadow-soft"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-deep/60 mb-2">
                Want a predictable lead pipeline?
              </p>
              <div className="flex items-baseline justify-between gap-3 flex-wrap gap-y-1">
                <h3 className="text-lg font-semibold text-brand-deep">Scale</h3>
                <span className="text-sm font-medium text-brand-ink">
                  ${growthTiers[2].setup} + ${growthTiers[2].monthly}/mo
                </span>
              </div>
              <p className="mt-1 text-xs text-brand-muted">+ ad spend</p>
              <p className="mt-2 text-brand-muted leading-relaxed text-sm">
                Everything in Climbing plus Google and Meta ads managed weekly,
                with AI follow-up on every ad lead.
              </p>
              <p className="mt-4 text-sm font-medium text-brand-deep">
                See Scale
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why not Hibu / Scorpion callout */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">
            No annual contracts. No surprise rate hikes. No vendor runaround.
          </h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              Hibu, Scorpion, and their competitors lock you in for 12 months,
              bundle in services you didn&rsquo;t ask for, and raise your rate on
              renewal. When something breaks, your account manager&rsquo;s
              manager&rsquo;s manager calls you back in four business days.
            </p>
            <p>
              We ship in 72 hours to 12 days, charge $99/mo flat (the price
              doesn&rsquo;t move when you add pages, when we rebuild, or when
              you add a product), and you get a direct line. Month-to-month. No
              12-month trap.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">Common questions.</h2>
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

      {/* Final CTA banner */}
      <section className="relative overflow-hidden section bg-brand-deep text-white">
        <CursorSpotlight />
        <div className="relative container-page max-w-3xl text-center">
          <h2 className="h-section text-white">
            Stop running four vendors.
          </h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            30-minute walkthrough. We&rsquo;ll pull your current site, Google
            Business Profile, and search standing live, show you the gaps, and
            tell you straight what to fix first.
          </p>
          <div className="mt-8">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-brand-deep font-medium hover:bg-white/90 transition-colors text-lg"
            >
              Book a 30-minute walkthrough →
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(webPresenceServiceSchema()) }}
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
