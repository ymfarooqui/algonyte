"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

type Para = { text: string; bold: boolean };

const paragraphs: Para[] = [
  {
    text:
      "Many small business websites are hard to navigate, slow to load, unclear on mobile, or missing the simple details that help visitors take action.",
    bold: false,
  },
  {
    text:
      "When customers cannot quickly understand what you offer or how to contact you, they leave.",
    bold: false,
  },
  {
    text: "Farooqui Digital helps you fix that.",
    bold: true,
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section bg-white">
      <motion.div
        className="container-page max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={reveal.container(0.35, 0.1)}
      >
        <motion.h2 className="h-section" variants={reveal.fadeUp}>
          Your website should make it easy for customers to choose you.
        </motion.h2>
        <div className="lede mt-6 space-y-5">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className={p.bold ? "text-brand-ink font-medium" : ""}
              variants={reveal.fadeUp}
            >
              {p.text}
            </motion.p>
          ))}
        </div>

        <motion.div className="mt-12" variants={reveal.fadeUpLg}>
          <Image
            src="/before-and-after.png"
            alt="Before and after website comparison: cluttered low-performing site at 32 vs clear high-performing site at 92"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 800px"
            className="w-full h-auto rounded-2xl shadow-lg ring-1 ring-slate-200"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
