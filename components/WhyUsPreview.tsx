"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

const points = [
  "Tested like a customer would actually use it",
  "Clear reports, no technical overwhelm",
  "Small-business pricing with direct, no-runaround communication",
];

export default function WhyUsPreview() {
  return (
    <section className="section bg-white">
      <motion.div
        className="container-page max-w-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.18, 0.1)}
      >
        <motion.p className="eyebrow mb-3" variants={reveal.fadeUp}>
          Why this is different
        </motion.p>
        <motion.h2 className="h-section" variants={reveal.fadeUp}>
          A quality mindset behind every website.
        </motion.h2>
        <ul className="mt-8 space-y-3">
          {points.map((p) => (
            <motion.li
              key={p}
              className="flex gap-3 text-brand-ink text-lg"
              variants={reveal.fadeUp}
            >
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
              <span>{p}</span>
            </motion.li>
          ))}
        </ul>
        <motion.div className="mt-8" variants={reveal.fadeUp}>
          <Link href="/why-us" className="btn-secondary">
            See the full story
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
