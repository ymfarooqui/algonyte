"use client";

import { motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { reveal, inView } from "@/lib/motion";
import ContactForm from "./ContactForm";

function ContactBody() {
  const params = useSearchParams();
  const isFounding = params.get("topic") === "founding";
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
              {isFounding ? "Founding Application" : "Contact"}
            </motion.p>
            <motion.h1 className="h-section" variants={reveal.fadeUp}>
              {isFounding
                ? "Apply for a founding spot."
                : "Tell us a bit about your business."}
            </motion.h1>
            <motion.p className="lede mt-5" variants={reveal.fadeUp}>
              {isFounding ? (
                <>
                  Fill out the form and tell us: business name, what you do,
                  where you operate, and why you want a founding spot.
                  We&rsquo;ll come back the same business day with a yes, no,
                  or a few clarifying questions.
                </>
              ) : (
                <>
                  Send us a few details. We&rsquo;ll come back with a straight
                  answer on whether we can help, and if so, what we&rsquo;d do
                  first.
                </>
              )}
            </motion.p>
            <ul className="mt-8 space-y-3 text-brand-ink/90">
              {isFounding ? (
                <>
                  <motion.li className="flex gap-3" variants={reveal.fadeUp}>
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                    3 spots total. First-come, first-served.
                  </motion.li>
                  <motion.li className="flex gap-3" variants={reveal.fadeUp}>
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                    50% off setup on any tier + 30% off Growth for 6 months.
                  </motion.li>
                  <motion.li className="flex gap-3" variants={reveal.fadeUp}>
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                    Reply within one business day.
                  </motion.li>
                </>
              ) : (
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
              )}
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
  return (
    <Suspense fallback={null}>
      <ContactBody />
    </Suspense>
  );
}
