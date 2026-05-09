"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import { BookingButton } from "@/components/BookingModal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-accent to-white">
      <motion.div
        className="container-page py-24 sm:py-28 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.12, 0.05)}
      >
        <motion.h2
          className="h-section max-w-3xl mx-auto"
          variants={reveal.fadeUpLg}
        >
          Want to see what this could look like for you?
        </motion.h2>
        <motion.p className="lede mt-6 max-w-2xl mx-auto" variants={reveal.fadeUp}>
          Grab 30 minutes with us. We&rsquo;ll look at how leads come into your
          business today and show you where you&rsquo;re leaving money on the
          table.
        </motion.p>
        <motion.div className="mt-8" variants={reveal.fadeUp}>
          <BookingButton className="btn-primary">
            Show me what this looks like for my business
          </BookingButton>
        </motion.div>
      </motion.div>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl"
      />
    </section>
  );
}
