import type { Metadata } from "next";
import Link from "next/link";
import FinalCTA from "@/components/sections/FinalCTA";
import WhyNot from "@/components/sections/WhyNot";
import ServiceSections from "@/components/sections/ServiceSections";
import GuaranteeStrip from "@/components/sections/GuaranteeStrip";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import { jsonLdString } from "@/lib/jsonLd";

const breadcrumb = breadcrumbJsonLd([{ name: "Pricing", path: "/pricing" }]);

const pricingTitle = "Pricing | AlgoNyte, Done-for-you AI services";
const pricingDescription =
  "Done-for-you AI services for service businesses. Pick what you need or bundle a few. 30-day money-back, no long-term contracts. Book a call for a scoped quote.";

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

const differentiators = [
  "Done-for-you: we build it, launch it, and run it.",
  "30-day money-back. If it isn't working, you don't pay.",
  "No long-term contracts. Add or drop a service any month.",
  "Ad spend stays on your card, no markup, ever.",
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
          <h1 className="h-display max-w-3xl">Simple, and scoped to you.</h1>
          <p className="lede mt-6 max-w-2xl">
            Pick the services that fix what&rsquo;s costing you most, then bundle a few if it
            makes sense. We scope the build to your business and give you one clear number on a
            quick call.
          </p>
          <p className="mt-4 max-w-2xl rounded-xl border border-brand-deep/10 bg-white/60 px-5 py-4 text-brand-deep leading-relaxed">
            Every service is done-for-you and backed by a 30-day money-back guarantee. Your
            business runs while you sleep.
          </p>
          <div className="mt-8">
            <Link href="/book" className="btn-primary-featured">
              Book a 30-minute call
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <ServiceSections
        eyebrow="The services"
        heading="What you can put to work."
        subhead="Start with one. Stack more whenever you're ready. We'll scope and price the build to your business on a quick call."
        className="bg-white"
      />

      <GuaranteeStrip />

      {/* What makes this different */}
      <section className="pb-20">
        <div className="container-page">
          <p className="eyebrow mb-4">Why AlgoNyte</p>
          <h2 className="h-section max-w-2xl mb-8">What makes this different.</h2>
          <div className="max-w-xl rounded-2xl border border-brand-deep/15 bg-white p-6 sm:p-8">
            <ul className="space-y-3">
              {differentiators.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 text-sm text-brand-muted leading-relaxed"
                >
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
        dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumb) }}
      />
    </>
  );
}

export const dynamic = "force-static";
