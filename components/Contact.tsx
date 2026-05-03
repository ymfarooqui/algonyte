"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section bg-brand-soft">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.12, 0.1)}
        >
          <motion.p className="eyebrow mb-3" variants={reveal.fadeUp}>Contact</motion.p>
          <motion.h2 className="h-section" variants={reveal.fadeUp}>
            Tell us about your website.
          </motion.h2>
          <motion.p className="lede mt-5" variants={reveal.fadeUp}>
            Share a few details and we&rsquo;ll come back with a straight answer on what would
            actually help, whether that&rsquo;s a new website, a refresh, an audit, or ongoing care.
          </motion.p>
          <ul className="mt-8 space-y-3 text-brand-ink/90">
            <motion.li className="flex gap-3" variants={reveal.fadeUp}>
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
              No pressure, no agency-speak.
            </motion.li>
            <motion.li className="flex gap-3" variants={reveal.fadeUp}>
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
              Clear pricing and scope before any work begins.
            </motion.li>
            <motion.li className="flex gap-3" variants={reveal.fadeUp}>
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
              Reply within 1&ndash;2 business days.
            </motion.li>
          </ul>
        </motion.div>
        <ContactForm />
      </div>
    </section>
  );
}
