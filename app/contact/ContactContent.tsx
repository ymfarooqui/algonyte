"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  return (
    <section className="section bg-brand-soft">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.12, 0.1)}
        >
          <motion.p className="eyebrow mb-3" variants={reveal.fadeUp}>
            Contact
          </motion.p>
          <motion.h2 className="h-section" variants={reveal.fadeUp}>
            Tell us a bit about your business.
          </motion.h2>
          <motion.p className="lede mt-5" variants={reveal.fadeUp}>
            Send us a few details. We&rsquo;ll come back with a straight
            answer on whether we can help, and if so, what we&rsquo;d do
            first.
          </motion.p>
          <ul className="mt-8 space-y-3 text-brand-ink/90">
            <motion.li className="flex gap-3" variants={reveal.fadeUp}>
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary"
              />
              No sales pitch.
            </motion.li>
            <motion.li className="flex gap-3" variants={reveal.fadeUp}>
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary"
              />
              Clear pricing and scope before any work starts.
            </motion.li>
            <motion.li className="flex gap-3" variants={reveal.fadeUp}>
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary"
              />
              We reply within one business day.
            </motion.li>
          </ul>
        </motion.div>
        <ContactForm />
      </div>
    </section>
  );
}
