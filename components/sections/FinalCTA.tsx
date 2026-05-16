"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import { BookingButton } from "@/components/BookingModal";
import CursorSpotlight from "@/components/CursorSpotlight";

export default function FinalCTA({
  title = "Want to see what this could look like for you?",
}: {
  title?: string;
} = {}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-accent to-white">
      <div className="grain" aria-hidden />
      <CursorSpotlight />
      <motion.div
        className="relative container-page py-24 sm:py-28 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.12, 0.05)}
      >
        <motion.h2
          className="h-section max-w-3xl mx-auto"
          variants={reveal.fadeUpLg}
        >
          {title}
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
    </section>
  );
}
