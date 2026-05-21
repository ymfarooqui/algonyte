"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";
const EASE_ARR = [0.22, 1, 0.36, 1] as const;

function useInView<T extends HTMLElement>(amount = 0.4) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: amount },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [amount]);
  return { ref, inView };
}

const CARD = "rounded-2xl bg-white p-7 shadow-xl ring-1 ring-slate-200/70";

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

// A — CONTROL: Framer Motion (Web Animations API), opacity + slide.
function TechA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: EASE_ARR }}
      className={CARD}
    >
      <CardBody id="A" note="Framer Motion: fade + slide" />
    </motion.div>
  );
}

// B — Native CSS transition (NOT Framer/WAAPI), opacity + slide. Default hidden.
function TechB() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={CARD}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ${EASE_CSS}, transform 0.5s ${EASE_CSS}`,
      }}
    >
      <CardBody id="B" note="CSS transition: fade + slide" />
    </div>
  );
}

// C — Framer Motion, SLIDE ONLY (no opacity).
function TechC() {
  return (
    <motion.div
      initial={{ y: 24 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: EASE_ARR }}
      className={CARD}
    >
      <CardBody id="C" note="Framer Motion: slide only (no fade)" />
    </motion.div>
  );
}

// D — Framer Motion, OPACITY ONLY (no slide).
function TechD() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: EASE_ARR }}
      className={CARD}
    >
      <CardBody id="D" note="Framer Motion: fade only (no slide)" />
    </motion.div>
  );
}

export default function RevealLab() {
  return (
    <div className="mx-auto max-w-md px-5 pb-40">
      <div className="min-h-screen flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-slate-900">Flicker test — round 3</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          We know the animation itself flickers (not the shadow). Now we find{" "}
          <strong>what</strong> about it. Four tiles:
        </p>
        <ul className="mt-4 text-slate-600 leading-relaxed list-disc pl-5 space-y-1">
          <li><strong>A</strong> — Framer Motion, fade + slide (current site)</li>
          <li><strong>B</strong> — plain CSS, fade + slide (different engine)</li>
          <li><strong>C</strong> — Framer Motion, slide only (no fade)</li>
          <li><strong>D</strong> — Framer Motion, fade only (no slide)</li>
        </ul>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Scroll slowly and tell me which letters flash. The big questions:
          does <strong>B</strong> (plain CSS) flash like A? And do <strong>C</strong> or{" "}
          <strong>D</strong> stay clean?
        </p>
      </div>

      <Block id="A" desc="Framer Motion, fade + slide. The current site behaviour — expected to flash.">
        <TechA />
      </Block>
      <Block id="B" desc="Plain CSS transition, fade + slide. Same look, different engine (no Framer). If this is clean, the fix is to switch engines.">
        <TechB />
      </Block>
      <Block id="C" desc="Framer Motion, slide only — no opacity fade. If clean, the fade is the trigger.">
        <TechC />
      </Block>
      <Block id="D" desc="Framer Motion, fade only — no slide. If clean, the slide is the trigger.">
        <TechD />
      </Block>

      <div className="min-h-[50vh] flex flex-col justify-center">
        <p className="text-slate-600">
          Report which letters flashed. That tells me whether to switch animation
          engine (if B is clean) or change which property we animate (if C or D is
          clean), and I&rsquo;ll roll the fix out site-wide.
        </p>
      </div>
    </div>
  );
}
