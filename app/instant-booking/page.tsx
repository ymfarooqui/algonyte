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

const title = "Instant Booking | 24/7 AI Appointment Scheduling";
const description =
  "Let customers book in seconds, any hour, across web chat, SMS, Instagram DM, and voice. AI qualifies first, books to your calendar, and cuts no-shows.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/instant-booking" },
  openGraph: { title, description, url: "/instant-booking", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "How is this different from just adding a booking link to my site?",
    a: "A booking link only works for the small slice of customers who find it, click it, and book themselves. Most people call, text, or DM with a question first. Instant booking puts an AI agent on every one of those channels that answers the question, qualifies the lead, and then books, so you capture the people a plain calendar link never would.",
  },
  {
    q: "Does it qualify leads or just book anyone?",
    a: "It qualifies first. The agent asks the questions you'd ask, service type, urgency, location, the basics you need to triage, before it offers a time, so you're not filling your calendar with jobs you can't take or won't drive to. You set the rules; it enforces them.",
  },
  {
    q: "Will it work with the calendar I already use?",
    a: "Yes. It books into your existing calendar or scheduling tool so there's one source of truth and no double-bookings. Your team keeps working the way they already do; the agent just fills the open slots.",
  },
  {
    q: "How does it reduce no-shows?",
    a: "Automatic SMS and email reminders go out on a schedule that matches your job type, and the agent makes rescheduling a quick text instead of a missed appointment. Fewer empty slots, less idle time for your staff.",
  },
  {
    q: "What happens if someone needs a human?",
    a: "Anything outside the agent's scope, an unusual request, a complaint, a complex quote, routes to you with the full conversation attached, so you pick up with all the context instead of starting over.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/instant-booking#service`,
  serviceType: "AI Appointment Booking",
  name: "Instant Booking by AlgoNyte",
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  description,
  areaServed: [
    { "@type": "AdministrativeArea", name: "Chicago metropolitan area" },
    { "@type": "AdministrativeArea", name: "Midwest United States" },
    { "@type": "Country", name: "United States" },
  ],
};

const breadcrumb = breadcrumbJsonLd([{ name: "Instant Booking", path: "/instant-booking" }]);

export default function InstantBookingPage() {
  return (
    <>
      <LandingHero
        eyebrow="Instant Booking"
        title={{ pre: "Let customers book you", accent: "in seconds", post: ", any hour." }}
        lede="24/7 booking across web chat, SMS, Instagram and Facebook DM, and voice, the AI qualifies the lead first, then drops a confirmed appointment straight onto your calendar. No phone tag, no waiting for business hours."
        secondary={{ href: "/ai-receptionist", label: "See the full AI receptionist →" }}
      />

      <ProseSection
        heading="People book the business that lets them book right now."
        paragraphs={[
          "Booking an appointment with most service businesses is still a chore: call during business hours, leave a voicemail, wait for a callback, play phone tag, finally land a time. Every step in that chain is a chance for the customer to give up, and a competitor who lets them book instantly is one tap away.",
          "The way people schedule everything else, food, rides, reservations, has trained them to expect to book in the moment, on whatever channel they're already on. If they have to wait until 9am Monday to reach you, a lot of them simply won't. The intent was there at 9pm Sunday; by Monday it's gone.",
          "Instant booking removes the friction. The moment someone's ready, on your site, over text, in a DM, or on the phone, they can get a real, confirmed appointment, and you wake up to a fuller calendar instead of a list of voicemails to chase.",
        ]}
      />

      <FeatureGrid
        heading="Booking that works on every channel."
        cards={[
          {
            title: "Book across every channel",
            body: "Web chat, SMS, Instagram, Facebook, WhatsApp, and voice all lead to the same place: a confirmed appointment. Customers book where they already are.",
          },
          {
            title: "Qualify before you book",
            body: "The agent asks your qualifying questions first, service, urgency, location, budget, so the calendar fills with jobs you actually want.",
          },
          {
            title: "Real-time calendar sync",
            body: "Appointments land in the calendar you already use, with no double-bookings and one source of truth for the whole team.",
          },
          {
            title: "Reminders that cut no-shows",
            body: "Automatic SMS and email reminders on a cadence that fits your job type, plus easy rescheduling so a conflict becomes a moved appointment, not a lost one.",
          },
          {
            title: "After-hours and overflow",
            body: "Nights, weekends, and the moments your team is heads-down get covered. The biggest booking window is often when you're closed.",
          },
          {
            title: "Human handoff when needed",
            body: "Anything the agent shouldn't decide routes to you with the full context, so judgment calls stay with your team.",
          },
        ]}
      />

      <ProseSection
        bg
        eyebrow="Real client"
        heading="Car Hub, Macomb Township: 10 booked jobs in week one."
        paragraphs={[
          "Our first client is an independent auto shop outside Detroit. Before the system went live, after-hours calls and form fills died in voicemail. In the first week it was live, the agent qualified and booked 10 appointments the shop would otherwise have lost, the difference between a missed call and a confirmed time on the calendar.",
          "That's the entire idea behind instant booking: collapse the distance between a customer's intent and a real appointment to seconds, on whatever channel they showed up on.",
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

      <FAQSection heading="Straight answers on instant booking." faqs={faqs} />

      <FinalCTA title="Ready to fill your calendar on autopilot?" />

      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumb} />
    </>
  );
}
