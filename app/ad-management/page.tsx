import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import LandingHero from "@/components/landing/LandingHero";
import ProseSection from "@/components/landing/ProseSection";
import FeatureGrid from "@/components/landing/FeatureGrid";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import JsonLd from "@/components/landing/JsonLd";

const title = "Ad Management | Google & Meta Ads That Book Jobs";
const description =
  "Google and Meta ads for service businesses, wired into AI follow-up so every lead is answered in seconds. Your ad account, your card, no markup.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ad-management" },
  openGraph: { title, description, url: "/ad-management", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "Do I have to use your AI system to run ads with you?",
    a: "We strongly prefer it, and we'll tell you why on the call. Ads without instant follow-up is where most budgets get wasted, you pay for the click, the lead comes in, and it sits unanswered until it's cold. We'd rather fix that leak first so your spend actually turns into booked jobs. If you already have solid follow-up, we can work with that.",
  },
  {
    q: "Whose ad account and credit card does the spend go on?",
    a: "Yours. We build and manage the campaigns inside your own Google and Meta accounts, and ad spend goes on your card with no markup. You own the account, the data, and the history, if we ever part ways, none of it is held hostage.",
  },
  {
    q: "What platforms do you run?",
    a: "Primarily Google (Search and Local Services / Google Guaranteed where it fits) and Meta (Facebook and Instagram). Which mix depends on your business, for high-intent emergency services, search usually leads; for awareness and offers, Meta often pulls its weight. We'll recommend based on how your customers actually buy.",
  },
  {
    q: "How do you report, clicks or jobs?",
    a: "Booked jobs. Because the ads feed into the same system that books appointments, we can track closed-loop from ad click to booked revenue, not just impressions and clicks. You see what each campaign actually produced, not a vanity dashboard.",
  },
  {
    q: "Do you lock me into a long contract?",
    a: "We scope a fair commitment up front, ads need a little runway to optimize, and we're clear about it before you sign. The goal is a system that pays for itself, not a contract that traps you.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/ad-management#service`,
  serviceType: "Paid Advertising Management",
  name: "Ad Management by AlgoNyte",
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  description,
  areaServed: [
    { "@type": "AdministrativeArea", name: "Chicago metropolitan area" },
    { "@type": "AdministrativeArea", name: "Midwest United States" },
    { "@type": "Country", name: "United States" },
  ],
};

const breadcrumb = breadcrumbJsonLd([{ name: "Ad Management", path: "/ad-management" }]);

export default function AdManagementPage() {
  return (
    <>
      <LandingHero
        eyebrow="Ad Management"
        title={{ pre: "Paid ads that", accent: "actually book jobs", post: ", not just clicks." }}
        lede="Google and Meta ad management wired straight into the AI follow-up system, so every click that becomes a lead gets answered in seconds. Your ad account, your card, no markup on spend."
        secondary={{ href: "/lead-generator", label: "See how lead capture works →" }}
      />

      <ProseSection
        heading="Most ad budgets don't fail at the click. They fail at the follow-up."
        paragraphs={[
          "Service businesses pour money into Google and Facebook and then wonder why it doesn't turn into work. Usually the ads are doing their job, the leak is everything that happens after the click. A lead fills out the form or calls, nobody answers fast enough, and the budget you spent to generate that lead evaporates into voicemail.",
          "Most agencies optimize for the metrics that look good in a report: impressions, clicks, cost-per-click. None of those pay your bills. What matters is how many of those clicks became a booked job, and that depends entirely on what happens in the minutes after a lead raises their hand.",
          "That's why we run ads differently. We only turn the spend on when the follow-up is solid, then connect the two so the system catches every lead the moment it arrives. Same budget, more booked jobs.",
        ]}
      />

      <FeatureGrid
        heading="Spend that's built to convert."
        cards={[
          {
            title: "Campaigns in your account",
            body: "We build and manage Google and Meta campaigns inside your own ad accounts. You own everything, the account, the data, the history, and spend goes on your card with no markup.",
          },
          {
            title: "Wired into instant follow-up",
            body: "Every lead from an ad flows straight into the AI receptionist, which answers, qualifies, and books in seconds. No lead sits waiting; no budget gets wasted on a slow callback.",
          },
          {
            title: "The right platform mix",
            body: "Search for high-intent emergency demand, Local Services where it fits, Meta for offers and awareness. We recommend based on how your customers actually buy, not a one-size template.",
          },
          {
            title: "Closed-loop tracking",
            body: "Because the ads and the booking live in one system, we track from ad click to booked job, so you can see real return, not impressions and clicks.",
          },
          {
            title: "Landing pages that match",
            body: "Ads point at fast, focused pages built to convert and capture, not your busy homepage, so the click has a clear next step.",
          },
          {
            title: "Reporting on what matters",
            body: "Straight reporting on leads and booked jobs per campaign, so you always know what your spend produced and where to put the next dollar.",
          },
        ]}
      />

      <ProseSection
        bg
        eyebrow="Why follow-up first"
        heading="The same engine that booked 10 jobs in week one for Car Hub."
        paragraphs={[
          "Our first client is an independent auto shop outside Detroit. In its first week live, the AI follow-up system booked 10 jobs that would otherwise have died in voicemail. That's the engine your ad spend should be pouring leads into, because an ad that generates a lead nobody answers is just an expensive way to lose a customer.",
          "Fix the follow-up, then add fuel. When every lead gets caught and booked, more ad spend means more jobs instead of more wasted clicks. That order matters, and it's why we lead with the system and layer ads on top.",
        ]}
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

      <FAQSection heading="Straight answers on ad management." faqs={faqs} />

      <FinalCTA title="Want ad spend that turns into booked work?" />

      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumb} />
    </>
  );
}
