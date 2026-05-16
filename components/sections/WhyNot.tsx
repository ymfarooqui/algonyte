"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

const items = [
  {
    q: "Why not a $99/mo AI receptionist?",
    a: "The $99 standalone bots you see advertised answer one channel — usually voice — and stop there. No qualifying logic, no follow-up, no calendar integration, no CRM. Our AI Receptionist starts at $549/mo because it's the whole workflow: phone, SMS, chat, DM, qualifying questions, multi-day follow-up, and the booking on your calendar. (Note: $99/mo also happens to be our Web Presence hosting fee — that's the lights-on cost for your website, not an AI bot. Different product.)",
  },
  {
    q: "Why not hire a virtual assistant?",
    a: "A VA costs $1,500-$3,000/mo, sleeps, takes vacation, and quits. Our system runs 24/7, replies in under a minute, and never forgets to follow up. If you need a human in the loop, we wire alerts to you.",
  },
  {
    q: "Why not just keep doing it myself?",
    a: "Most owners we work with are losing 20 to 40% of leads to slow replies. The math: one missed job per month covers Starter. Two covers Growth. The plan pays for itself before the second invoice clears.",
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
    <section className="section bg-white">
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
