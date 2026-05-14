import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

const title = "Lead Generator | Paid Ads + AI Follow-Up That Actually Books";
const description =
  "Paid ads on Google and Meta plus AI follow-up that books appointments, not form fills. Landing pages, SMS sequences, closed-loop tracking to booked-job.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/lead-generator" },
  openGraph: { title, description, url: "/lead-generator", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([{ name: "Lead Generator", path: "/lead-generator" }]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/lead-generator#service`,
  serviceType: "Lead Generation",
  name: "Lead Generator by Farooqui Digital",
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  description,
  areaServed: { "@type": "Country", name: "United States" },
};

const faqs = [
  {
    q: "Will you run ads if I don't have the AI receptionist?",
    a: "Yes, but we usually push back. Ads without follow-up is where most of the budget gets wasted. We'd rather fix the leak before opening the faucet.",
  },
  {
    q: "What platforms?",
    a: "Google (Search, Local Service Ads, Performance Max where it fits), Meta (Facebook and Instagram). We pick the channel from your customer behavior, not a default playbook.",
  },
  {
    q: "How long until I see leads?",
    a: "First leads usually within 2-3 weeks of going live. The honest answer: the first 30 days are calibration. Real cost-per-booked-job stabilizes in month 2.",
  },
  {
    q: "What happens to a lead once it comes in?",
    a: "Funnels into the same AI receptionist workflow. SMS reply within seconds, qualifying conversation, booking to your calendar. No 'we'll get back to you in 24 hours.'",
  },
  {
    q: "Do I own the ad accounts?",
    a: "Yes. We build in your accounts on your billing. If we part ways, the data, audiences, and creative all stay with you.",
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
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Lead Generator</p>
            <h1 className="h-display">
              Ads that book{" "}
              <span className="text-brand-deep">appointments,</span> not form fills.
            </h1>
            <p className="lede mt-6 max-w-2xl">
              Paid ads on Google and Meta, landing pages built to convert, and
              AI follow-up that works the lead over SMS and email until
              there&rsquo;s a time on your calendar. Live in 7 to 14 days.
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
          <h2 className="h-section">Most service businesses don&rsquo;t have a lead problem. They have a follow-up problem.</h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              You spend $3,000 on Google ads. You get 40 form fills. Your team
              gets to half of them in 24 hours. By then, 70% have already
              booked with someone else. The CPL looks fine on paper. The
              cost-per-booked-job is brutal.
            </p>
            <p>
              We don&rsquo;t run a lead-gen play unless the follow-up is
              tight. That&rsquo;s why most of our lead-gen clients turn on
              the AI receptionist first.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">The system</p>
          <h2 className="h-section">Ads → Landing page → AI follow-up → Calendar.</h2>
          <ul className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <li>
              <strong className="text-brand-deep">Paid ads on the channel your customers actually use.</strong>{" "}
              Google Search, Local Service Ads, Meta. We pick by behavior, not by what&rsquo;s trendy.
            </li>
            <li>
              <strong className="text-brand-deep">Landing pages built to convert.</strong>{" "}
              One offer, one CTA, fast load. Not your homepage with a form on it.
            </li>
            <li>
              <strong className="text-brand-deep">AI follow-up the second the lead lands.</strong>{" "}
              SMS within seconds. Conversation continues until the booking is on the calendar or the lead opts out.
            </li>
            <li>
              <strong className="text-brand-deep">Closed-loop tracking.</strong>{" "}
              We track ad-spend to booked-job, not ad-spend to form-fill. The metric is revenue, not vanity.
            </li>
            <li>
              <strong className="text-brand-deep">Monthly review with real numbers.</strong>{" "}
              What worked, what didn&rsquo;t, what we&rsquo;d change. No spin.
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">The proof</p>
          <h2 className="h-section">What we&rsquo;ll show you on the call.</h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              We&rsquo;re selective about who we run paid ads for. We&rsquo;d
              rather walk you through a real client account on the
              walkthrough — current ad spend, cost-per-booked-job, what we
              changed, what it cost, what it returned — than pitch you a
              testimonial graphic.
            </p>
            <p>
              If you&rsquo;re comparing us against a generic ads agency, the
              30-minute call will make the difference obvious. If you&rsquo;d
              rather see the numbers in writing first, ask on the call and
              we&rsquo;ll send them.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
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
          <h2 className="h-section text-white">Ready to spend on ads that actually book jobs?</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            30-minute walkthrough. We&rsquo;ll look at your current spend and
            tell you, straight, whether ads are the right move or whether to
            fix follow-up first.
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
