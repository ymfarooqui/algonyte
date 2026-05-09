"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

const companies = [
  "Amazon",
  "Walmart",
  "Meta",
  "Microsoft",
  "Shopify",
  "Klarna",
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

export default function AboutSnippet() {
  return (
    <section className="section">
      <motion.div
        className="container-page"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.12, 0.05)}
      >
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div>
            <motion.p className="eyebrow mb-4" variants={reveal.fadeUp}>
              Why now
            </motion.p>
            <motion.h2 className="h-section" variants={reveal.fadeUpLg}>
              The big players already made the move.
            </motion.h2>
            <motion.p
              className="lede mt-6"
              variants={reveal.fadeUp}
            >
              Every company you order from, every brand you scroll past, every
              app on your phone is using AI to talk to customers. Some have
              been doing it for years.
            </motion.p>
            <motion.p
              className="mt-4 text-brand-ink font-medium text-lg"
              variants={reveal.fadeUp}
            >
              The same tools are now in reach for businesses your size.
            </motion.p>
          </div>

          <div>
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-6 gap-4"
              variants={reveal.container(0.06, 0.1)}
            >
              {companies.map((c) => (
                <motion.div
                  key={c}
                  variants={reveal.fadeUp}
                  className="flex items-center justify-center rounded-xl border border-slate-200 bg-white py-4 px-2 text-center"
                >
                  <span className="text-sm sm:text-base font-semibold text-brand-deep tracking-tight">
                    {c}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.ul
              className="mt-8 space-y-4"
              variants={reveal.container(0.12, 0.2)}
            >
              {examples.map((ex) => (
                <motion.li
                  key={ex.company}
                  variants={reveal.fadeUp}
                  className="flex gap-4"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-deep flex-shrink-0" />
                  <p className="text-brand-muted leading-relaxed">
                    <span className="font-semibold text-brand-deep">
                      {ex.company}.
                    </span>{" "}
                    {ex.note}
                  </p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              className="mt-8 text-brand-ink font-medium"
              variants={reveal.fadeUp}
            >
              If they&rsquo;re using AI to talk to customers, your business
              can too.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
