"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

const stats = [
  { value: "60 sec", label: "From new lead to first reply" },
  { value: "24/7", label: "Answering, qualifying, booking" },
  { value: "0", label: "Missed leads, ever" },
];

export default function StatsStrip() {
  return (
    <section className="relative overflow-hidden border-y border-brand-deep/10 bg-gradient-to-b from-white via-brand-accent/40 to-white">
      {/* subtle ambient glow on either side */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-brand-violet/20 blur-3xl" />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl" />
      </div>

      <motion.div
        className="relative container-page grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-brand-deep/10"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.12, 0.05)}
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={reveal.fadeUpLg}
            className="px-6 py-12 sm:py-14 text-center"
          >
            <div className="bg-brand-gradient bg-clip-text text-transparent text-5xl sm:text-6xl font-semibold leading-none tabular-nums">
              {s.value}
            </div>
            <p className="mt-4 text-sm font-medium text-brand-deep/70 uppercase tracking-[0.18em]">
              {s.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
