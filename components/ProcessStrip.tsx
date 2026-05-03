"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

const steps = [
  { title: "Share", body: "Send your site, goals, or what you want built." },
  { title: "Review or build", body: "We build, audit, or improve based on your package." },
  { title: "Deliver", body: "You get a launched site, a clear report, and recommendations." },
  { title: "Improve", body: "Use the findings, hand them to your team, or stay on monthly care." },
];

export default function ProcessStrip() {
  return (
    <section id="process" className="section bg-white">
      <motion.div
        className="container-page"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.13, 0.1)}
      >
        <motion.div className="max-w-2xl" variants={reveal.fadeUp}>
          <p className="eyebrow mb-3">How it works</p>
          <h2 className="h-section">A simple process from first look to finished roadmap.</h2>
        </motion.div>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.li key={s.title} className="card" variants={reveal.dropTile}>
              <span
                aria-hidden
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-deep text-white font-semibold"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-brand-ink">{s.title}</h3>
              <p className="mt-2 text-brand-muted leading-relaxed text-sm">{s.body}</p>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
