"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import { faqs } from "@/lib/faqs";

export default function Faq() {
  return (
    <section id="faq" className="section bg-brand-soft">
      <motion.div
        className="container-page max-w-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.08, 0.1)}
      >
        <motion.p className="eyebrow mb-3" variants={reveal.fadeUp}>FAQ</motion.p>
        <motion.h2 className="h-section" variants={reveal.fadeUp}>Questions, answered.</motion.h2>

        <motion.div
          className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white"
          variants={reveal.container(0.08, 0.05)}
        >
          {faqs.map((f) => (
            <motion.details key={f.q} className="group p-5 sm:p-6" variants={reveal.fadeUp}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-brand-ink">
                {f.q}
                <span
                  aria-hidden
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-brand-deep transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-brand-muted leading-relaxed">{f.a}</p>
            </motion.details>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
