"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import StackMarquee from "@/components/StackMarquee";

export default function IntegrationsStrip() {
  return (
    <section className="relative overflow-hidden border-y border-brand-line bg-brand-soft py-14 sm:py-16">
      <motion.div
        className="container-page"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.12, 0.05)}
      >
        <motion.div
          variants={reveal.fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">Plugs into everything you already use</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-medium tracking-tight text-brand-deep [text-wrap:balance]">
            Every channel in. Every tool out.
          </h2>
        </motion.div>

        <motion.div variants={reveal.fadeUp} className="mt-10">
          <StackMarquee />
        </motion.div>
      </motion.div>
    </section>
  );
}
