"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

const points = [
  "Built with usability in mind from day one",
  "Tested across key customer paths",
  "Clear reports without technical overwhelm",
  "Practical recommendations your developer or team can use",
  "Affordable options for small businesses",
];

const questions = [
  "Can customers find what they need?",
  "Is the next step obvious?",
  "Does the site work well on mobile?",
  "Are there hidden bugs or broken flows?",
  "Is the site fast enough?",
  "Does the experience build trust?",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section bg-white">
      <motion.div
        className="container-page grid gap-12 lg:grid-cols-2 lg:items-start"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.1, 0.1)}
      >
        <div>
          <motion.p className="eyebrow mb-3" variants={reveal.fadeUp}>
            Why this is different
          </motion.p>
          <motion.h2 className="h-section" variants={reveal.fadeUp}>
            Most websites are built. Few are tested like a customer would use them.
          </motion.h2>
          <motion.p className="lede mt-6" variants={reveal.fadeUp}>
            We combine website building with a quality and usability mindset. Your
            site does not just look good. It works for clarity, ease of use, performance, and real
            customer behavior.
          </motion.p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <motion.li
                key={p}
                className="flex gap-3 text-brand-ink"
                variants={reveal.fadeUp}
              >
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                <span>{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="rounded-2xl bg-brand-accent/60 p-8 sm:p-10"
          variants={reveal.fadeUpLg}
        >
          <h3 className="text-xl font-semibold text-brand-deep">A quality mindset behind every website.</h3>
          <p className="mt-4 text-brand-ink/80">
            We come from a quality assurance background. Every website is approached with a
            tester&rsquo;s eye for clarity, flow, usability, and hidden friction.
          </p>
          <p className="mt-6 text-sm font-medium text-brand-deep">Instead of asking &ldquo;Does this look good?&rdquo; we ask:</p>
          <ul className="mt-3 space-y-2">
            {questions.map((q) => (
              <li key={q} className="flex gap-3 text-brand-ink/90">
                <span aria-hidden className="text-brand-primary">→</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
