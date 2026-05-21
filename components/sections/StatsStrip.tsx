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
    <section className="relative overflow-hidden border-y border-brand-line bg-brand-paper">
      {/* Single ambient glow — petrol, off-center to break symmetry */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-[40rem] rounded-full bg-brand-primary/[0.06] blur-3xl" />
      </div>

      <motion.div
        className="relative container-page grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-brand-line"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.12, 0.05)}
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={reveal.fadeUpLg}
            className="px-6 py-14 sm:py-16 text-center"
          >
            <div className="text-brand-deep text-5xl sm:text-6xl lg:text-7xl font-medium leading-none tracking-tightest tabular-nums">
              {s.value}
            </div>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-muted">
              {s.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
