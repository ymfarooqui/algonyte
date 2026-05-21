"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";
const EASE_ARR = [0.22, 1, 0.36, 1] as const;

// Tiny IntersectionObserver hook for the CSS-transition techniques (no Framer).
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

// A prominent shadow maximises the chance of reproducing the flash.
const CARD = "rounded-2xl bg-white p-7 shadow-xl ring-1 ring-slate-200/70";

function CardBody({ id, note }: { id: string; note: string }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-emerald-100 text-emerald-700 px-2.5 py-0.5 text-xs font-semibold">
          CARD {id}
        </span>
        <span className="text-xs text-slate-400">{note}</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-slate-900">Tile {id}</h3>
      <p className="mt-2 text-slate-500 leading-relaxed">
        Watch the instant this whole tile and its shadow appear. If it blinks
        once, this technique still flickers on your device.
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

// A — CONTROL: Framer Motion (Web Animations API), opacity + slide. Current site.
function TechA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: EASE_ARR }}
      className={CARD}
    >
      <CardBody id="A" note="Framer Motion (current)" />
    </motion.div>
  );
}

// B — Framer Motion + persistent compositor hint (backface-visibility, which
// Framer never overwrites, unlike transform/will-change).
function TechB() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: EASE_ARR }}
      style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" }}
      className={CARD}
    >
      <CardBody id="B" note="Framer + backface-visibility" />
    </motion.div>
  );
}

// C — Native CSS transition (no WAAPI), opacity + slide, on a persistent GPU layer.
function TechC() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={CARD}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ${EASE_CSS}, transform 0.5s ${EASE_CSS}`,
        willChange: "transform, opacity",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      }}
    >
      <CardBody id="C" note="CSS transition + GPU layer" />
    </div>
  );
}

// D — Native CSS transition, opacity ONLY (no transform), persistent GPU layer.
function TechD() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={CARD}
      style={{
        opacity: inView ? 1 : 0,
        transition: `opacity 0.5s ${EASE_CSS}`,
        willChange: "opacity",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      }}
    >
      <CardBody id="D" note="CSS transition, opacity-only" />
    </div>
  );
}

// E — Native CSS transition, opacity + slide, with NO GPU promotion at all.
// Tests whether forcing compositor layers is itself the cause.
function TechE() {
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
      <CardBody id="E" note="CSS transition, no GPU hint" />
    </div>
  );
}

export default function RevealLab() {
  return (
    <div className="mx-auto max-w-md px-5 pb-40">
      <div className="min-h-screen flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-slate-900">Reveal flicker test</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Scroll down slowly on your iPhone. Five tiles (A–E) each appear using a
          different technique. Note which letters <strong>flash or blink once</strong> as
          they appear, and which are <strong>completely clean</strong>.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Then tell me the result — e.g. <em>“A and B flash, C/D/E are clean.”</em>
        </p>
        <p className="mt-6 text-sm text-slate-400">
          Tip: pull-to-refresh and scroll again to re-watch any tile.
        </p>
      </div>

      <Block id="A" desc="Framer Motion, opacity + slide. This is exactly the current site behaviour — the control.">
        <TechA />
      </Block>
      <Block id="B" desc="Framer Motion + a persistent GPU layer (backface-visibility).">
        <TechB />
      </Block>
      <Block id="C" desc="Native CSS transition (no Framer), opacity + slide, on a persistent GPU layer.">
        <TechC />
      </Block>
      <Block id="D" desc="Native CSS transition, fade only (no slide), persistent GPU layer.">
        <TechD />
      </Block>
      <Block id="E" desc="Native CSS transition, opacity + slide, with NO GPU layer forced.">
        <TechE />
      </Block>

      <div className="min-h-[50vh] flex flex-col justify-center">
        <p className="text-slate-600">
          That’s all five. Report which letters flashed and which were clean, and
          I’ll roll the winning technique out across the whole site.
        </p>
      </div>
    </div>
  );
}
