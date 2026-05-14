import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

const title = "Local SEO | Rank in the Google Map Pack";
const description =
  "Local SEO for service businesses: Google Map Pack ranking, citation cleanup, on-page, schema, and llms.txt for AI search. Initial setup in 14 to 21 days.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/seo" },
  openGraph: { title, description, url: "/seo", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([{ name: "SEO", path: "/seo" }]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/seo#service`,
  serviceType: "Search Engine Optimization",
  name: "Local SEO by Farooqui Digital",
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  description,
  areaServed: { "@type": "Country", name: "United States" },
};

const faqs = [
  {
    q: "How long until I see results?",
    a: "Map Pack movement usually starts in 30-60 days. Organic ranking for non-branded keywords typically takes 3-6 months. Anyone promising you faster is selling you something else.",
  },
  {
    q: "Will you guarantee rankings?",
    a: "No. We guarantee the work — Google Business Profile fully optimized, citations cleaned, content shipped, technical fixes deployed. Rankings are downstream of consistent execution, not a contract clause.",
  },
  {
    q: "What's different about AI search?",
    a: "ChatGPT, Claude, and Perplexity are pulling answers from sources Google doesn't rank the same way. We optimize for citation, not just ranking — schema, llms.txt, answer-first content structure, and authoritative author bylines.",
  },
  {
    q: "Do I need separate pages for each city I serve?",
    a: "If you operate across distinct cities or service areas, yes. One location-specific page per city, with real content about that city, not a template with the name swapped. Google penalizes the swap.",
  },
  {
    q: "Can I do this myself?",
    a: "GBP optimization and basic citation cleanup, yes — and we'll tell you exactly how. The on-page, schema, and content cadence is where most owners run out of time, which is when we usually get hired.",
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

export default function SEOPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Local SEO</p>
            <h1 className="h-display">
              Rank where your customers{" "}
              <span className="text-brand-deep">actually search.</span>
            </h1>
            <p className="lede mt-6 max-w-2xl">
              Local SEO that gets service businesses into the Google Map Pack
              and onto AI search results. Google Business Profile, citation
              cleanup, on-page, schema, and content built for your service
              area. Initial setup in 14 to 21 days; ranking impact over 30 to
              90.
            </p>
            <div className="mt-8">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-brand-deep px-8 py-4 text-white font-medium hover:bg-brand-deep/90 transition-colors text-lg"
              >
                Book a 30-minute walkthrough →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">The problem</p>
          <h2 className="h-section">Most service-business SEO is a checklist with no execution.</h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              You&rsquo;ve probably been pitched the same audit ten times.
              Citations need cleanup, GBP needs more photos, you should
              publish blog posts. Fine. Now do it for 18 months while running
              a service business.
            </p>
            <p>
              The work isn&rsquo;t complicated. It&rsquo;s the consistency.
              That&rsquo;s what most owners hire out, and that&rsquo;s what we
              run.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">The system</p>
          <h2 className="h-section">GBP → Citations → On-page → Content → AI search.</h2>
          <ul className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <li>
              <strong className="text-brand-deep">Google Business Profile, properly.</strong>{" "}
              Services, categories, attributes, photos, posts, products. Most GBPs are 40% complete; we get to 100% and keep it there.
            </li>
            <li>
              <strong className="text-brand-deep">Citation cleanup and consistency.</strong>{" "}
              NAP (name, address, phone) consistent across the directories Google actually checks. Removals where there&rsquo;s wrong data.
            </li>
            <li>
              <strong className="text-brand-deep">On-page + technical fixes.</strong>{" "}
              Title and meta tags, schema markup (LocalBusiness, Service, FAQPage), site speed, mobile UX, broken-link cleanup.
            </li>
            <li>
              <strong className="text-brand-deep">Location and industry pages.</strong>{" "}
              One real page per city you serve, one per industry you specialize in. Substantive content, not template-with-name-swap.
            </li>
            <li>
              <strong className="text-brand-deep">AI search optimization.</strong>{" "}
              llms.txt, answer-first content, author bylines with Person schema, FAQ schema everywhere it fits. Citable by ChatGPT, Claude, Perplexity.
            </li>
            <li>
              <strong className="text-brand-deep">Monthly review with real numbers.</strong>{" "}
              Map Pack rank changes, organic traffic, leads-from-search, what we shipped. No spin.
            </li>
          </ul>
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

      <section className="section bg-brand-deep text-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="h-section text-white">Stop being invisible on Google.</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            30-minute walkthrough. We&rsquo;ll pull your current GBP and Map
            Pack standing live, show you the gaps, and tell you straight
            whether SEO or paid ads is the faster move for your business.
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
