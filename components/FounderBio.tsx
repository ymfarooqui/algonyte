"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

export default function FounderBio() {
  return (
    <section className="section bg-white">
      <motion.div
        className="container-page max-w-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.13, 0.1)}
      >
        <motion.p className="eyebrow mb-3" variants={reveal.fadeUp}>
          Who&rsquo;s behind it
        </motion.p>
        <motion.h2 className="h-section" variants={reveal.fadeUp}>
          Run by a QA professional, not an agency.
        </motion.h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-[auto,1fr] sm:items-start">
          <motion.div variants={reveal.fadeUp}>
            <Image
              src="/yf-headshot.jpg"
              alt="Yaseen Farooqui, founder of Farooqui Digital"
              width={160}
              height={160}
              className="h-32 w-32 sm:h-36 sm:w-36 rounded-2xl object-cover object-top ring-1 ring-slate-200"
            />
          </motion.div>
          <motion.div
            className="space-y-4 text-brand-muted leading-relaxed"
            variants={reveal.fadeUp}
          >
            <p className="text-brand-ink">
              <span className="font-semibold">Yaseen Farooqui</span>. Founder, builder, and the
              person you&rsquo;ll actually talk to.
            </p>
            <p>
              Years spent in software quality assurance taught me one thing: the difference
              between a website that works and one that doesn&rsquo;t isn&rsquo;t how it looks.
              It&rsquo;s whether real customers can find what they need, trust what they see, and
              take the next step without friction.
            </p>
            <p>
              I started Farooqui Digital to bring that quality mindset to small business websites.
              Affordable, tested, and built around the customer journey instead of the trend
              cycle. You talk directly to the person doing the work.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
