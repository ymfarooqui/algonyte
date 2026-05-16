import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import CursorSpotlight from "@/components/CursorSpotlight";
import FinalCTA from "@/components/sections/FinalCTA";

const title = "Web Presence | Websites From $279, Hosting From $99/mo";
const description =
  "End-to-end web presence for service businesses. Websites built from $279 one-time, then $99/mo for hosting, maintenance, and SEO indexing. Grow into Local SEO, online booking, and payments when you're ready. Live in 5 to 14 days.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/web-presence" },
  openGraph: { title, description, url: "/web-presence", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([{ name: "Web Presence", path: "/web-presence" }]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/web-presence#service`,
  serviceType: "Web Design, Hosting, and Local SEO",
  name: "Web Presence by Algonyte Labs",
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  description,
  areaServed: { "@type": "Country", name: "United States" },
};

const tiers = [
  {
    id: "foundation",
    name: "Foundation",
    setup: "279",
    monthly: "99",
    timeline: "Ships in 5-7 days",
    tagline:
      "You don't have a website, or the one you have is broken. We build a fast, mobile-first 5-page site and get it indexed on Google.",
    features: [
      "5-page site: Home, Services, About, Reviews, Contact",
      "Mobile-first, Core Web Vitals tuned",
      "On-page SEO + LocalBusiness schema",
      "Google Search Console + sitemap submitted",
      "Google Business Profile baseline setup",
      "Contact form + click-to-call",
      "Stripe or Square payment link",
    ],
    cta: "Start here",
    featured: false,
  },
  {
    id: "growth",
    name: "Growth",
    setup: "549",
    monthly: "99",
    timeline: "Ships in 7-10 days",
    tagline:
      "Foundation plus the pieces that turn a site into a system: more pages, AI search optimization, real online booking, and full checkout.",
    features: [
      "Everything in Foundation",
      "Up to 8 pages with location + service pages",
      "FAQ + Review schema + author bylines",
      "AI search optimization (llms.txt, answer-first content)",
      "Full Google Business Profile rebuild",
      "Online booking calendar integrated",
      "Stripe + Square — full checkout, invoices, deposits",
    ],
    cta: "Most businesses pick this",
    featured: true,
  },
  {
    id: "command",
    name: "Command",
    setup: "799",
    monthly: "99",
    timeline: "Ships in 10-14 days",
    tagline:
      "Growth plus the automation hooks. Up to 12 pages, custom design, AI receptionist widget wired in, and a landing page for paid campaigns.",
    features: [
      "Everything in Growth",
      "Up to 12 pages — full location + industry coverage",
      "Custom design pass (not a template variant)",
      "AI Receptionist widget wired in (chat + missed-call text-back)",
      "Review engine wired in, ready to activate",
      "1 conversion-optimized landing page",
      "30 days of priority support post-launch",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

const monthlyIncludes = [
  "Managed hosting, SSL, CDN, daily backups",
  "Domain + email forwarding",
  "1 hour of content edits per month",
  "Search Console + indexing monitoring",
  "Quarterly health check",
  "Direct line when something breaks",
];

const ongoingPrograms = [
  {
    name: "Local SEO program",
    price: "From $1,500/mo",
    body:
      "Active citation cleanup, monthly content cadence, GBP posts and photos, Map Pack ranking work.",
    href: "/pricing#local-seo",
  },
  {
    name: "Lead Generator",
    price: "From $1,500/mo + ad spend",
    body:
      "Google + Meta paid ads, conversion landing pages, AI follow-up that books appointments.",
    href: "/lead-generator",
  },
  {
    name: "Reputation Manager",
    price: "$299/mo",
    body:
      "Automated post-job review requests with smart routing for unhappy customers.",
    href: "/reputation-manager",
  },
  {
    name: "AI Receptionist",
    price: "From $549/mo",
    body:
      "Phone, SMS, chat, and DM coverage 24/7. Answers, qualifies, books — never sleeps.",
    href: "/ai-receptionist",
  },
];

const pillars = [
  {
    title: "Build",
    body:
      "We design and build a modern site for your business. No drag-and-drop themes, no Wix. Fast, clean, and built to convert.",
  },
  {
    title: "Host",
    body:
      "We host, secure, back up, and update everything. SSL, CDN, daily backups. You never touch a control panel.",
  },
  {
    title: "Rank",
    body:
      "Local SEO that gets you into the Google Map Pack and AI search. GBP, citations, schema, content, llms.txt.",
  },
  {
    title: "Book",
    body:
      "Calendar booking that drops into your CRM. Customers self-schedule and we follow up automatically until they show.",
  },
  {
    title: "Get Paid",
    body:
      "Stripe or Square wired up for deposits, invoices, recurring, and one-tap checkout. Money in the bank, not in a back-and-forth.",
  },
  {
    title: "Run It",
    body:
      "Monthly review with real numbers: leads, bookings, revenue, rank. We change what's not working. No spin.",
  },
];

const timeline = [
  {
    label: "Days 1-3",
    body:
      "Discovery call, brand audit, content inventory. We pull your current GBP, site, and search standing live so you can see the gaps.",
  },
  {
    label: "Days 4-10",
    body:
      "We build the site, set up hosting and payments, and ship the technical SEO foundation. You review one draft, we revise once.",
  },
  {
    label: "Days 11-14",
    body:
      "Site goes live. Google Business Profile rebuild ships. Booking and payment flows tested with a real transaction.",
  },
  {
    label: "Month 2 onward",
    body:
      "Content cadence, citation cleanup, AI search work, and a monthly review meeting where we show what moved.",
  },
];

const faqs = [
  {
    q: "I already have a website. Do I have to replace it?",
    a: "No. If your site is solid we keep it and migrate it to our hosting (or stay where you are). If it's hurting you — slow, ugly on mobile, no schema — we rebuild. We'll tell you straight on the discovery call.",
  },
  {
    q: "Who owns the website when I leave?",
    a: "You do. The domain, the code, the content, the GBP, the Stripe and Square accounts — all yours and stay yours. We don't hold anything hostage.",
  },
  {
    q: "How does the payment piece work?",
    a: "We set up Stripe or Square (or both) under your business name and bank account. We wire checkout, deposits, recurring, and invoicing into your site and booking flow. Money lands in your account, not ours.",
  },
  {
    q: "What about Google Ads or Meta Ads?",
    a: "Ad spend is separate from our fee on the Command plan. We manage the accounts, build the landing pages, and tie ads to AI follow-up that books appointments instead of collecting form fills.",
  },
  {
    q: "How long until I see results?",
    a: "Site live in 5 to 14 days. Booking and payment flows live in the same window. Google Map Pack movement starts in 30-60 days. Organic ranking for non-branded keywords takes 3-6 months. Anyone promising faster is selling you something else.",
  },
  {
    q: "Can you guarantee rankings?",
    a: "No. We guarantee the work — site shipped, GBP rebuilt, citations cleaned, content shipped, payments live. Rankings are downstream of consistent execution, not a contract clause.",
  },
  {
    q: "What's the contract?",
    a: "Month to month after the build period. 6-month minimum on Growth and Command because SEO and ads need time to compound. 30-day money-back on the subscription if we're not a fit.",
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

export default function WebPresencePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Web Presence</p>
            <h1 className="h-display">
              Your entire web presence,{" "}
              <span className="text-brand-deep">run by one team.</span>
            </h1>
            <p className="lede mt-6 max-w-2xl">
              We build the site, host it, get it indexed on Google, and run it
              for you month to month. Builds from <strong>$279</strong>{" "}
              one-time. Hosting + maintenance + edits at a flat{" "}
              <strong>$99/mo</strong> on every tier. Live in 5 to 14 days.
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

      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">The problem</p>
          <h2 className="h-section">
            Your customers won&rsquo;t buy from a business they can&rsquo;t find online.
          </h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              You&rsquo;ve probably stitched a presence together: a site
              someone&rsquo;s nephew built five years ago, a GoDaddy host
              you&rsquo;re afraid to log into, a Facebook page, a Stripe
              account you set up once and forgot, a GBP that&rsquo;s 40%
              filled in.
            </p>
            <p>
              It&rsquo;s not that the pieces are wrong. It&rsquo;s that
              nobody&rsquo;s running them as a system. The site doesn&rsquo;t
              talk to the booking calendar. The calendar doesn&rsquo;t talk to
              payments. None of it ranks. And every month you keep paying
              three different vendors who all blame each other.
            </p>
            <p>
              We replace the whole stack. One team, one bill, one operator
              responsible for whether the phone rings.
            </p>
          </div>
        </div>
      </section>

      <section id="packages" className="section bg-brand-soft/40">
        <div className="container-page">
          <p className="eyebrow mb-4">Build packages</p>
          <h2 className="h-section max-w-3xl">
            Pick a build. Pay it once. Monthly stays $99 forever.
          </h2>
          <p className="mt-4 max-w-2xl text-brand-muted">
            The setup fee covers the build. The $99/mo covers hosting,
            maintenance, edits, and the line you call when something breaks.
            Upgrade by paying a build invoice — your monthly never moves.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.id}
                className={`card relative flex flex-col ${
                  t.featured
                    ? "ring-2 ring-brand-deep border-brand-deep/20 shadow-md"
                    : ""
                }`}
              >
                {t.featured && (
                  <div className="pointer-events-none absolute -top-3 inset-x-0 flex justify-center">
                    <span className="pointer-events-auto rounded-full bg-brand-deep px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-brand-deep">
                  {t.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-semibold text-brand-ink">
                    ${t.setup}
                  </span>
                  <span className="text-brand-muted text-sm">one-time</span>
                </div>
                <p className="mt-1 text-sm text-brand-deep font-medium">
                  + ${t.monthly}/mo hosting &amp; maintenance
                </p>
                <p className="mt-1 text-xs text-brand-muted">{t.timeline}</p>
                <p className="mt-4 text-brand-muted text-sm leading-relaxed min-h-[4.5rem]">
                  {t.tagline}
                </p>
                <ul className="mt-5 mb-7 space-y-2 text-sm flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
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
                      <span className="text-brand-muted">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book" className="btn-primary w-full text-center">
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-xl font-semibold text-brand-deep">
                What the $99/mo covers
              </h3>
              <p className="text-sm text-brand-muted">
                Same across every tier. No tiered hosting nonsense.
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

      <section className="section">
        <div className="container-page">
          <p className="eyebrow mb-4">Run programs</p>
          <h2 className="h-section max-w-3xl">
            Add a growth engine when you&rsquo;re ready.
          </h2>
          <p className="mt-4 max-w-2xl text-brand-muted">
            The build gets you online and indexed. These programs make the
            phone ring. They&rsquo;re optional, priced separately, and you can
            start them whenever — week one or year two.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {ongoingPrograms.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group block rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-deep/30 hover:shadow-md"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold text-brand-deep">
                    {p.name}
                  </h3>
                  <span className="text-sm font-medium text-brand-ink">
                    {p.price}
                  </span>
                </div>
                <p className="mt-2 text-brand-muted leading-relaxed">
                  {p.body}
                </p>
                <p className="mt-4 text-sm font-medium text-brand-deep">
                  Learn more
                  <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <p className="eyebrow mb-4">What we run</p>
          <h2 className="h-section max-w-3xl">
            Six jobs. One team. One bill.
          </h2>
          <p className="mt-4 max-w-2xl text-brand-muted">
            Each piece is a thing most owners hire a different vendor for. We
            do all of it under one roof, on purpose, because the handoffs are
            where the leads die.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-brand-deep">
                  {p.title}
                </h3>
                <p className="mt-2 text-brand-muted leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Timeline</p>
          <h2 className="h-section">From handshake to live, in two weeks.</h2>
          <ol className="mt-8 space-y-6">
            {timeline.map((step) => (
              <li
                key={step.label}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-deep">
                  {step.label}
                </p>
                <p className="mt-2 text-brand-muted leading-relaxed">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">FAQ</p>
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

      <section className="relative overflow-hidden section bg-brand-deep text-white">
        <CursorSpotlight />
        <div className="relative container-page max-w-3xl text-center">
          <h2 className="h-section text-white">
            Stop running four vendors.
          </h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            30-minute walkthrough. We&rsquo;ll pull your current site, GBP,
            and search standing live, show you the gaps, and tell you straight
            what to fix first.
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

      <FinalCTA title="Want to see what this looks like for your business?" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
