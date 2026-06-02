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

const title = "Database Reactivation | Rebook Past Customers With AI Texts";
const description =
  "A one-time AI text campaign that re-engages past customers and dead leads in your CRM and rebooks them — the cheapest revenue you can turn on.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/database-reactivation" },
  openGraph: { title, description, url: "/database-reactivation", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "What exactly is a database reactivation campaign?",
    a: "It's a one-time, AI-driven text campaign sent to the past customers and old leads already sitting in your CRM, phone, or spreadsheets. The agent opens a real conversation, re-qualifies interest, and books appointments — turning a dormant list you already paid to build into booked revenue, usually within days.",
  },
  {
    q: "Isn't mass-texting my list spammy or risky?",
    a: "It's only safe when it's done right, and that's the whole point of having us run it. We message contacts who have an existing relationship with you, send from a properly registered (10DLC) business number, personalize every message, honor opt-outs instantly, and throttle sends so you don't burn your number with the carriers. We'd rather under-send to the right people than blast everyone.",
  },
  {
    q: "How big does my list need to be?",
    a: "It works at almost any size — even a few hundred past customers can produce booked jobs, because these people already know and trust you. Larger lists obviously yield more, but the value is in the relationship, not just the volume.",
  },
  {
    q: "What do I need to provide?",
    a: "Your customer or lead list (an export from your CRM, point-of-sale, or even a spreadsheet) and the offer or reason to come back. We handle the segmentation, the copy, the sending infrastructure, the AI conversation, and the booking.",
  },
  {
    q: "Is this a one-time thing or ongoing?",
    a: "Both are options. Many businesses start with a one-time reactivation to pull in fast revenue, then keep the engine running as part of an ongoing plan so new leads and lapsed customers are continuously followed up. We'll scope which fits on a quick call.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/database-reactivation#service`,
  serviceType: "Database Reactivation Campaign",
  name: "Database Reactivation by AlgoNyte",
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  description,
  areaServed: [
    { "@type": "AdministrativeArea", name: "Chicago metropolitan area" },
    { "@type": "AdministrativeArea", name: "Midwest United States" },
    { "@type": "Country", name: "United States" },
  ],
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Database Reactivation", path: "/database-reactivation" },
]);

export default function DatabaseReactivationPage() {
  return (
    <>
      <LandingHero
        eyebrow="Database Reactivation"
        title={{ pre: "Turn your old customer list into", accent: "booked revenue", post: "." }}
        lede="A one-time AI text campaign that re-engages the past customers and dead leads already sitting in your CRM, your phone, and your inbox — and books them straight back onto your calendar."
        secondary={{ href: "/ai-receptionist", label: "See the always-on follow-up system →" }}
      />

      <ProseSection
        heading="You're sitting on revenue you already paid for."
        paragraphs={[
          "Every service business has it: a list of past customers who haven't been back, quotes that never closed, and leads that went cold because nobody followed up in time. You spent real money — ads, referrals, years of work — to earn those contacts. Then they went quiet, and you moved on to chasing new ones.",
          "New leads are the most expensive way to grow. The people who already know you, already bought from you, or already raised their hand are far cheaper to convert — they just need a timely, personal nudge. The problem is nobody has time to text hundreds of old contacts one by one, so the list sits there doing nothing.",
          "Reactivation fixes that. Instead of buying more new leads, you mine the goldmine you already own — and it's usually the fastest revenue a business can turn on.",
        ]}
      />

      <FeatureGrid
        heading="How the campaign runs."
        intro="We do the whole thing. You hand over a list and an offer; we hand back booked appointments."
        cards={[
          {
            title: "Segment the list",
            body: "We pull your past customers and dead leads from your CRM, POS, or a spreadsheet and group them by recency, service, and value so each gets the right message.",
          },
          {
            title: "Craft the offer & copy",
            body: "A reason to come back — a check-up, a seasonal offer, a 'we miss you' — written to sound like you, not a blast. Personalized per segment.",
          },
          {
            title: "AI runs the conversation",
            body: "Messages send from a registered business number, and the AI handles the replies: answers questions, re-qualifies interest, and moves the conversation toward a booking.",
          },
          {
            title: "Book & hand off",
            body: "Interested contacts get booked straight onto your calendar. Anything that needs a human — a complaint, a complex job — routes to you with the full thread.",
          },
          {
            title: "Compliant by design",
            body: "Proper 10DLC registration, instant opt-out handling, sensible send throttling. We protect your number and your reputation while we do it.",
          },
          {
            title: "Measured, not guessed",
            body: "You see exactly how many contacts replied, how many booked, and what it's worth — so you know what the dormant list was actually hiding.",
          },
        ]}
      />

      <ProseSection
        bg
        eyebrow="Why it works"
        heading="The follow-up engine that booked 10 jobs in week one for Car Hub."
        paragraphs={[
          "Our first client is an independent auto shop outside Detroit. In its first week live, the AI follow-up system booked 10 jobs the shop would otherwise have lost to voicemail and slow replies. The thing that made it work — instant, persistent, qualified follow-up — is the exact same engine that powers a reactivation campaign.",
          "The only difference is direction: instead of catching new leads as they come in, reactivation reaches back out to the ones you've already earned. Same speed, same conversational quality, same result — appointments on the calendar.",
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

      <FAQSection heading="Straight answers on reactivation." faqs={faqs} />

      <FinalCTA title="Want to see what's hiding in your list?" />

      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumb} />
    </>
  );
}
