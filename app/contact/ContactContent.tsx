"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { reveal, inView } from "@/lib/motion";
import ContactForm from "./ContactForm";

function ContactBody() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section bg-brand-soft">
      <div
        className={
          submitted
            ? "container-page max-w-2xl mx-auto"
            : "container-page grid gap-12 lg:grid-cols-2 lg:items-start"
        }
      >
        {!submitted && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={reveal.container(0.12, 0.1)}
          >
            <motion.p className="eyebrow mb-3" variants={reveal.fadeUp}>
              Contact
            </motion.p>
            <motion.h1 className="h-section" variants={reveal.fadeUp}>
              Tell us a bit about your business.
            </motion.h1>
            <motion.p className="lede mt-5" variants={reveal.fadeUp}>
              <>
                Send us a few details. We&rsquo;ll come back with a straight
                answer on whether we can help, and if so, what we&rsquo;d do
                first.
              </>
            </motion.p>
            <ul className="mt-8 space-y-3 text-brand-ink/90">
              <>
                <motion.li className="flex gap-3" variants={reveal.fadeUp}>
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  Clear pricing and scope before any work starts.
                </motion.li>
                <motion.li className="flex gap-3" variants={reveal.fadeUp}>
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  Onboarded in days, not months.
                </motion.li>
                <motion.li className="flex gap-3" variants={reveal.fadeUp}>
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  Zero obligation walkthrough.
                </motion.li>
              </>
            </ul>
          </motion.div>
        )}
        <ContactForm
          onSubmitted={() => setSubmitted(true)}
          onReset={() => setSubmitted(false)}
        />
      </div>
    </section>
  );
}

export default function ContactContent() {
  return <ContactBody />;
}
