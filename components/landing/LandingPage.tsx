import Link from "next/link";
import LandingHero from "./LandingHero";
import ProseSection from "./ProseSection";
import FeatureGrid from "./FeatureGrid";
import FAQSection from "./FAQSection";
import JsonLd from "./JsonLd";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  landingServiceJsonLd,
  landingBreadcrumb,
  type LandingContent,
} from "@/lib/landing";

/**
 * Renders a full industry/location landing page from a content object.
 * Section backgrounds alternate white/soft so the page reads in clear bands.
 */
export default function LandingPage({ content }: { content: LandingContent }) {
  return (
    <>
      <LandingHero eyebrow={content.eyebrow} title={content.h1} lede={content.heroSub} />

      <ProseSection heading={content.problem.heading} paragraphs={content.problem.paragraphs} />

      <ProseSection
        bg
        eyebrow="Real client"
        heading={content.proof.heading}
        paragraphs={content.proof.paragraphs}
      >
        <p>
          <Link
            href="/insights/car-hub-macomb-case-study"
            className="text-brand-deep font-medium hover:underline"
          >
            Read the full Car Hub case study →
          </Link>
        </p>
      </ProseSection>

      <FeatureGrid heading="The system, end to end." cards={content.system}>
        <p className="mt-8 text-brand-muted leading-relaxed">
          Want the deeper product breakdown? See the{" "}
          <Link href="/ai-receptionist" className="text-brand-deep font-medium hover:underline">
            AI Receptionist page
          </Link>{" "}
          or jump straight to{" "}
          <Link href="/pricing" className="text-brand-deep font-medium hover:underline">
            pricing
          </Link>
          .
        </p>
      </FeatureGrid>

      <ProseSection bg heading={content.local.heading} paragraphs={content.local.paragraphs} />

      <FAQSection heading={content.faqs.length ? "Common questions." : ""} faqs={content.faqs} />

      <FinalCTA title="Ready to stop losing leads?" />

      <JsonLd data={landingServiceJsonLd(content)} />
      <JsonLd data={landingBreadcrumb(content)} />
    </>
  );
}
