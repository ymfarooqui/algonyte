"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import { growthTiers } from "@/lib/tiers";

// growthTiers[0] = Awake, growthTiers[1] = Climbing
const awake = growthTiers[0];
const climbing = growthTiers[1];

const items = [
  {
    q: "Why not Podium ($498/mo on annual)?",
    a: `Podium locks you into a 12-month contract. ${awake.name} at $${awake.monthly}/mo is more, but it's month-to-month, fully done-for-you, and covers every DM channel — phone, SMS, chat, Facebook, Instagram, WhatsApp, and Google Business Messages. With Podium you still configure the flows yourself.`,
  },
  {
    q: "Why not Scorpion, Blue Corona, or Hibu?",
    a: `Those agencies run $2,500–$10,000/mo with $5K–$50K in setup and 12–24 month contracts. ${climbing.name} at $${climbing.monthly}/mo is all-in (hosting included) — 40–60% less with no annual commitment past 6 months. And on Scale, your ad spend goes straight to Google and Meta on your card. Never touches us, never has a markup.`,
  },
  {
    q: "Why not a $59 DIY tool (Goodcall, Numa)?",
    a: "Those are cheap because you build and maintain the system yourself. Algonyte is done-for-you — we set up the flows, write the scripts, connect the channels, and keep it running. If something breaks at 11pm, we fix it. Not you.",
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
      <motion.div
        className="container-page"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.12, 0.05)}
      >
        <motion.p className="eyebrow mb-4" variants={reveal.fadeUp}>
          Honest answers
        </motion.p>
        <motion.h2 className="h-section max-w-2xl" variants={reveal.fadeUp}>
          What about the cheaper options?
        </motion.h2>

        <motion.dl
          className="mt-10 grid gap-5 md:grid-cols-3"
          variants={reveal.container(0.12, 0.1)}
        >
          {items.map((item) => (
            <motion.div key={item.q} variants={reveal.fadeUpLg}>
              <div className="card h-full">
                <dt className="font-semibold text-brand-deep">{item.q}</dt>
                <dd className="mt-3 text-sm text-brand-muted leading-relaxed">
                  {item.a}
                </dd>
              </div>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
