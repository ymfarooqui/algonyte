"use client";

import Reveal from "@/components/Reveal";
import { BookingButton } from "@/components/BookingModal";

const companiesRow1 = [
  { name: "Amazon", slug: "amazon" },
  { name: "Google", slug: "google" },
  { name: "Meta", slug: "meta" },
  { name: "Microsoft", slug: "microsoft" },
  { name: "Walmart", slug: "walmart" },
  { name: "Uber", slug: "uber" },
];

const companiesRow2 = [
  { name: "Airbnb", slug: "airbnb" },
  { name: "Spotify", slug: "spotify" },
  { name: "Shopify", slug: "shopify" },
  { name: "Stripe", slug: "stripe" },
  { name: "Salesforce", slug: "salesforce" },
  { name: "Klarna", slug: "klarna" },
];

const examples = [
  {
    company: "Amazon",
    note: "Uses AI to handle millions of customer chats every day.",
  },
  {
    company: "Walmart",
    note: "Built an AI assistant that helps shoppers find products and answer questions.",
  },
  {
    company: "Klarna",
    note: "Replaced 700 customer service jobs with an AI assistant in its first year.",
  },
];

function LogoMarquee({
  items,
  reverse = false,
  duration = 40,
}: {
  items: { name: string; slug: string }[];
  reverse?: boolean;
  duration?: number;
}) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden relative" aria-hidden="true">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-soft to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-soft to-transparent z-10" />
      <div
        className={`flex gap-4 w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((c, i) => (
          <div
            key={`${c.slug}-${i}`}
            className="logo-card flex items-center justify-center rounded-2xl bg-brand-soft py-6 px-10 min-w-[200px] h-28 shadow-soft"
          >
            <img
              src={`/logos/${c.slug}.svg`}
              alt={c.name}
              loading="lazy"
              className="h-14 w-auto max-w-[160px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutSnippet() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <Reveal as="h2" className="h-section">
            The big players already made the move.
          </Reveal>
          <p className="lede mt-6">
            Every company you order from, every brand you scroll past, every
            app on your phone is using AI to talk to customers. Some have been
            doing it for years.
          </p>
          <p className="mt-4 text-brand-ink font-medium text-lg">
            The same tools are now in reach for businesses your size.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          <LogoMarquee items={companiesRow1} duration={80} />
          <LogoMarquee items={companiesRow2} reverse duration={95} />
        </div>

        <ul className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl">
          {examples.map((ex) => (
            <li key={ex.company} className="flex gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-brand-primary flex-shrink-0" />
              <p className="text-brand-muted leading-relaxed">
                <span className="font-semibold text-brand-deep">
                  {ex.company}.
                </span>{" "}
                {ex.note}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <p className="text-brand-ink font-medium text-lg">
            If they&rsquo;re using AI to talk to customers, your business can too.
          </p>

          <div className="mt-8">
            <BookingButton className="btn-primary">
              Show me what this looks like for my business
            </BookingButton>
          </div>
        </div>
      </div>
    </section>
  );
}
