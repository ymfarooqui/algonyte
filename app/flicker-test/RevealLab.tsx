"use client";

import { motion } from "motion/react";

const EASE_ARR = [0.22, 1, 0.36, 1] as const;

const SHADOW = "rounded-2xl bg-white p-7 shadow-xl ring-1 ring-slate-200/70";
const FLAT = "rounded-2xl bg-white p-7 border-2 border-slate-300";

function CardBody({ id, note }: { id: string; note: string }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-slate-900 text-white px-2.5 py-0.5 text-xs font-semibold">
          TILE {id}
        </span>
        <span className="text-xs text-slate-400">{note}</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-slate-900">Tile {id}</h3>
      <p className="mt-2 text-slate-500 leading-relaxed">
        Watch this tile the moment it scrolls into view. Does it blink once?
      </p>
    </>
  );
}

function Block({
  id,
  desc,
  children,
}: {
  id: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="mb-5">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-xl">
          {id}
        </span>
        <p className="mt-3 text-sm font-medium text-slate-700">{desc}</p>
      </div>
      {children}
    </section>
  );
}

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.5, ease: EASE_ARR },
} as const;

export default function RevealLab() {
  return (
    <div className="mx-auto max-w-md px-5 pb-40">
      <div className="min-h-screen flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-slate-900">Flicker test — round 2</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Four tiles. Two variables: <strong>animated vs. static</strong> and{" "}
          <strong>shadow vs. no shadow</strong>. This pins down exactly what
          causes the flash.
        </p>
        <ul className="mt-4 text-slate-600 leading-relaxed list-disc pl-5 space-y-1">
          <li><strong>A</strong> — static card with a shadow (does NOT animate)</li>
          <li><strong>B</strong> — animated card with a shadow</li>
          <li><strong>C</strong> — animated card, NO shadow</li>
          <li><strong>D</strong> — static card, NO shadow</li>
        </ul>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Scroll slowly and tell me which letters flash. Even the static ones
          (A, D) — just scroll them into view and watch.
        </p>
      </div>

      <Block id="A" desc="STATIC + shadow. Does not animate at all — if this flashes as you scroll past, the cause is iOS repainting the shadow during scroll, not the reveal.">
        <div className={SHADOW}>
          <CardBody id="A" note="static · shadow" />
        </div>
      </Block>

      <Block id="B" desc="ANIMATED + shadow. Fades and slides in (this is the current site behaviour).">
        <motion.div {...reveal} className={SHADOW}>
          <CardBody id="B" note="animated · shadow" />
        </motion.div>
      </Block>

      <Block id="C" desc="ANIMATED + NO shadow (flat border instead). If this is clean but B flashes, the shadow is the culprit.">
        <motion.div {...reveal} className={FLAT}>
          <CardBody id="C" note="animated · no shadow" />
        </motion.div>
      </Block>

      <Block id="D" desc="STATIC + NO shadow. Baseline — this should be perfectly clean.">
        <div className={FLAT}>
          <CardBody id="D" note="static · no shadow" />
        </div>
      </Block>

      <div className="min-h-[50vh] flex flex-col justify-center">
        <p className="text-slate-600">
          Report which letters flashed. That tells me whether it&rsquo;s the
          shadow, the reveal, or something global — and I&rsquo;ll fix the right
          thing.
        </p>
      </div>
    </div>
  );
}
