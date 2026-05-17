import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import CursorSpotlight from "@/components/CursorSpotlight";
import { jsonLdString } from "@/lib/jsonLd";

const title = "Reputation Manager | More 5-Star Google Reviews on Autopilot";
const description =
  "Automated post-job review requests with smart routing for unhappy customers. Move your Google rating in 60 days. Setup in 5 to 7 days.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/reputation-manager" },
  openGraph: { title, description, url: "/reputation-manager", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([{ name: "Reputation Manager", path: "/reputation-manager" }]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/reputation-manager#service`,
  serviceType: "Reputation Management",
  name: "Reputation Manager by Algonyte Labs",
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  description,
  areaServed: { "@type": "Country", name: "United States" },
};

const faqs = [
  {
    q: "How do you get more reviews?",
    a: "Every completed job triggers an SMS asking for a review within an hour of finishing the work. Timing matters more than the message — that's when customers are happiest.",
  },
  {
    q: "What about unhappy customers?",
    a: "The system asks how the job went before sending the review link. Anyone who responds with a complaint or low rating gets routed to you privately instead of being pushed to leave a public review.",
  },
  {
    q: "Will Google flag this as review gating?",
    a: "We don't gate. Every customer can leave a public review if they want — we just make sure the unhappy ones get heard internally first, which is allowed under Google's policy.",
  },
  {
    q: "Does it work for businesses with a bad rating?",
    a: "Yes, and that's usually where it moves the most. A shop sitting at 3.6 with 40 reviews can be at 4.5 inside 60-90 days of consistent post-job requests.",
  },
  {
    q: "Does it integrate with my CRM?",
    a: "We build on GoHighLevel, so trigger-after-job is built in. If you use a different CRM, we either integrate (most common ones work) or run it in parallel with a job-completion signal from your team.",
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

export default function ReputationManagerPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Reputation Manager</p>
            <h1 className="h-display">
              More 5-star reviews,{" "}
              <span className="text-brand-deep">without asking for them.</span>
            </h1>
            <p className="lede mt-6 max-w-2xl">
              Automated review requests after every job, intelligent routing
              for unhappy customers, and a dashboard that shows what&rsquo;s
              actually moving your Google rating. Live in 5 to 7 days.
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
          <h2 className="h-section">Your happiest customers don&rsquo;t leave reviews. Your unhappy ones do.</h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              The customer whose job went perfectly drives home and forgets.
              The customer who had a problem opens Google before they&rsquo;re
              out of the parking lot. That&rsquo;s why most service businesses
              are stuck below 4.5 stars even when 95% of their work is great.
            </p>
            <p>
              The fix is asking — at the right moment, in the right channel,
              with a smart escape hatch for the small share of customers who
              had a real complaint.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">The system</p>
          <h2 className="h-section">Ask. Route. Track.</h2>
          <ul className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <li>
              <strong className="text-brand-deep">Trigger on job completion.</strong>{" "}
              SMS goes out within an hour of the work being marked done. That window is where the 5-stars live.
            </li>
            <li>
              <strong className="text-brand-deep">Smart routing for unhappy customers.</strong>{" "}
              Anyone who responds negatively gets routed to you privately, not pushed to a public review form.
            </li>
            <li>
              <strong className="text-brand-deep">Multi-platform requests.</strong>{" "}
              Google primarily, with Yelp, Facebook, or industry-specific platforms (BBB, Angi, etc.) layered in.
            </li>
            <li>
              <strong className="text-brand-deep">Drip for the slow responders.</strong>{" "}
              Polite second nudge 3 days later. Stops automatically once the review lands.
            </li>
            <li>
              <strong className="text-brand-deep">Dashboard with the metric that matters.</strong>{" "}
              Reviews-per-job-completed, average rating trend, response-rate by channel. Not vanity counts.
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

      <section className="relative overflow-hidden section bg-brand-deep text-white">
        <CursorSpotlight />
        <div className="relative container-page max-w-3xl text-center">
          <h2 className="h-section text-white">Move your Google rating in 60 days.</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            30-minute walkthrough. We&rsquo;ll show you the trigger flow, the
            unhappy-customer routing, and the dashboard so you can decide if
            it fits your operation.
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
