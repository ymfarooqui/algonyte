"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const MISSED = [
  { name: "James W.", job: "Roof inspection", time: "2:42 PM" },
  { name: "Samantha K.", job: "Siding replacement", time: "2:55 PM" },
  { name: "Michael T.", job: "Window installation", time: "3:07 PM" },
];

const STEPS = [
  { title: "New lead captured", sub: "Lead from website", t: "00:00:02" },
  { title: "AI agent responded", sub: "Personalized message sent", t: "00:00:14" },
  { title: "Lead qualified", sub: "Intent confirmed", t: "00:01:27" },
  { title: "Appointment booked", sub: "On calendar", t: "00:01:38" },
  { title: "Confirmation sent", sub: "SMS + Email", t: "00:01:46" },
];

function Money({ value, prefix, className }: { value: number; prefix: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${prefix}$${Math.round(v).toLocaleString()}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration: 1.4, ease: EASE });
    return controls.stop;
  }, [inView, mv, value]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M5.5 4.5a2 2 0 0 1 2-2h2.1a1 1 0 0 1 .97.76l.86 3.45a1 1 0 0 1-.27.95L9.5 9.32a13 13 0 0 0 5.18 5.18l1.66-1.66a1 1 0 0 1 .95-.27l3.45.86a1 1 0 0 1 .76.97V16.5a2 2 0 0 1-2 2A15 15 0 0 1 5.5 4.5Z"
        fill="currentColor"
      />
      <path d="m3 3 18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="m5 12 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Arrow() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
        className="h-10 w-10 rounded-full bg-brand-primary text-white shadow-lg shadow-brand-primary/40 flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 md:rotate-0 rotate-90" fill="none" aria-hidden>
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </div>
  );
}

export default function HeroVisual({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setRevealed(i);
      if (i >= STEPS.length) clearInterval(id);
    }, 380);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ${className}`}
      role="img"
      aria-label="Before and after: leads going cold versus AI following up and booking them"
    >
      <Arrow />

      {/* BEFORE */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE }}
        className="flex flex-col rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/70 p-4 sm:p-5"
      >
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-rose-100 text-rose-700 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide">
            BEFORE
          </span>
          <span className="text-[11px] text-slate-400">Today</span>
        </div>

        <ul className="mt-4 space-y-2.5">
          {MISSED.map((m, i) => (
            <motion.li
              key={m.name}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.18, ease: EASE }}
              className="flex items-center gap-3 rounded-xl bg-rose-50/70 ring-1 ring-rose-100 px-3 py-2.5"
            >
              <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <PhoneIcon className="h-4 w-4" />
                <motion.span
                  className="absolute inset-0 rounded-full ring-2 ring-rose-400/60"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: [0, 1, 0], scale: [0.8, 1.4, 1.6] } : {}}
                  transition={{ duration: 1.4, delay: 0.3 + i * 0.18, repeat: Infinity, repeatDelay: 1.6 }}
                />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900 leading-tight">{m.name}</p>
                  <span className="text-[10px] text-slate-400 shrink-0">{m.time}</span>
                </div>
                <p className="text-xs text-slate-500 leading-snug">{m.job}</p>
              </div>
              <span className="shrink-0 rounded-md bg-rose-600 text-white text-[10px] font-bold tracking-wide px-1.5 py-0.5">
                MISSED
              </span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-auto pt-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
            className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-3 flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-rose-500 ring-1 ring-rose-200 text-lg">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 15c1-1.2 2.4-1.8 4-1.8s3 .6 4 1.8M9 10h.01M15 10h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="text-xs font-medium text-rose-900">Leads went cold. Revenue left behind.</p>
              <Money value={950} prefix="-" className="text-lg font-bold text-rose-600 tabular-nums" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* AFTER */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        className="flex flex-col rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/70 p-4 sm:p-5"
      >
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide">
            AFTER
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Live
          </span>
        </div>

        <ol className="relative mt-4 space-y-3 pl-1">
          <span
            aria-hidden
            className="absolute left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-200 via-emerald-200 to-transparent"
          />
          {STEPS.map((s, i) => {
            const on = i < revealed;
            return (
              <li key={s.title} className="relative flex items-start gap-3">
                <motion.span
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={on ? { scale: 1, opacity: 1 } : { scale: 0.4, opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm shadow-emerald-500/30"
                >
                  <CheckIcon className="h-4 w-4" />
                  {on && i === revealed - 1 && (
                    <motion.span
                      className="absolute inset-0 rounded-full ring-2 ring-emerald-400"
                      initial={{ opacity: 0.8, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.9 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  )}
                </motion.span>
                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  animate={on ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex-1 min-w-0 flex items-center justify-between gap-3 pt-0.5"
                >
                  <p className="min-w-0 text-sm font-semibold text-slate-900 leading-tight">
                    {s.title}
                  </p>
                  <span className="shrink-0 text-[10px] font-mono text-emerald-700 bg-emerald-50 ring-1 ring-emerald-100 rounded px-1.5 py-0.5 tabular-nums">
                    {s.t}
                  </span>
                </motion.div>
              </li>
            );
          })}
        </ol>

        <div className="mt-auto pt-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={revealed >= STEPS.length ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-3 flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-600 ring-1 ring-emerald-200">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                <path d="M4 19h16M6 17V11M11 17V7M16 17v-4M20 17V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="m4 11 5-5 4 3 7-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="text-xs font-medium text-emerald-900">Followed up instantly. Revenue earned.</p>
              {revealed >= STEPS.length && (
                <Money value={950} prefix="+" className="text-lg font-bold text-emerald-600 tabular-nums" />
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
