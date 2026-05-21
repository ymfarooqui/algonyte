"use client";

import Reveal from "@/components/Reveal";
import { tiers } from "@/lib/tiers";

const awake = tiers.find((t) => t.id === "awake")!;
const climbing = tiers.find((t) => t.id === "climbing")!;

const items = [
  {
    q: "Why not Podium ($498/mo on annual)?",
    a: `Podium locks you into a 12-month contract. ${awake.name} at $${awake.monthly}/mo is more, but it's month-to-month, fully done-for-you, and covers every DM channel — phone, SMS, chat, Facebook, Instagram, WhatsApp, and Google Business Messages. With Podium you still configure the flows yourself.`,
  },
  {
    q: "Why not Scorpion, Blue Corona, or Hibu?",
    a: `Those agencies run $2,500–$10,000/mo with $5K–$50K in setup and 12–24 month contracts. ${climbing.name} at $${climbing.monthly}/mo is all-in (hosting included) — 40–60% less, month-to-month, no long-term commitment. Your ad spend goes straight to Google and Meta on your card. Never touches us, never has a markup.`,
  },
  {
    q: "Why not a $59 DIY tool (Goodcall, Numa)?",
    a: "Those are cheap because you build and maintain the system yourself. AlgoNyte is done-for-you — we set up the flows, write the scripts, connect the channels, and keep it running. If something breaks at 11pm, we fix it. Not you.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function WhyNot() {
  return (
    <section className="section">
      <div className="container-page">
        <p className="eyebrow mb-4">Honest answers</p>
        <Reveal as="h2" className="h-section max-w-2xl">
          What about the cheaper options?
        </Reveal>

        <dl className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.06}>
              <div className="card h-full">
                <dt className="font-semibold text-brand-deep">{item.q}</dt>
                <dd className="mt-3 text-sm text-brand-muted leading-relaxed">
                  {item.a}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
