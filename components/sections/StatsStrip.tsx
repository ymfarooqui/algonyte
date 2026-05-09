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
    <section className="border-y border-slate-200 bg-white">
      <motion.div
        className="container-page grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.12, 0.05)}
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={reveal.fadeUpLg}
            className="px-6 py-10 text-center"
          >
            <div className="text-5xl sm:text-6xl font-semibold text-brand-deep leading-none tabular-nums">
              {s.value}
            </div>
            <p className="mt-3 text-sm text-brand-muted uppercase tracking-wide">
              {s.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
