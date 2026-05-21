"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useAnimSpeed } from "@/lib/useAnimSpeed";

const EASE = [0.22, 1, 0.36, 1] as const;

type Satellite = {
  label: string;
  icon: React.ReactNode;
};

const Glyphs = {
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <rect x="7" y="12" width="3" height="6" />
      <rect x="13" y="8" width="3" height="10" />
      <rect x="19" y="5" width="3" height="13" opacity="0" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
  card: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h4" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h6" />
    </svg>
  ),
  hash: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18" />
    </svg>
  ),
};

const SATELLITES: Satellite[] = [
  { label: "Phone", icon: Glyphs.phone },
  { label: "Calendar", icon: Glyphs.calendar },
  { label: "Reporting", icon: Glyphs.chart },
  { label: "Chat", icon: Glyphs.chat },
  { label: "Payments", icon: Glyphs.card },
  { label: "Automations", icon: Glyphs.bolt },
  { label: "Notes", icon: Glyphs.doc },
  { label: "Channels", icon: Glyphs.hash },
];

// 8 evenly spaced positions on a circle, starting at top (-90°), going clockwise
const positions = SATELLITES.map((_, i) => {
  const angle = (i / SATELLITES.length) * Math.PI * 2 - Math.PI / 2;
  return {
    x: 50 + Math.cos(angle) * 38,
    y: 50 + Math.sin(angle) * 38,
  };
});

export default function IntegrationHub({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const { s } = useAnimSpeed();

  return (
    <div
      ref={ref}
      className={`relative aspect-square w-full max-w-md mx-auto ${className}`}
      role="img"
      aria-label="AlgoNyte connects to the tools you already use: phone, calendar, chat, payments, reporting, automations, and more."
    >
      {/* Connector lines (SVG layer) */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        {positions.map((p, i) => (
          <motion.line
            key={i}
            x1="50"
            y1="50"
            x2={p.x}
            y2={p.y}
            stroke="rgba(56,189,248,0.55)"
            strokeWidth="0.5"
            strokeDasharray="1.5 1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: s(0.7), delay: s(0.2 + i * 0.06), ease: EASE }}
          />
        ))}
        {/* Pulse dots traveling along two of the lines */}
        {inView &&
          [0, 3].map((i) => {
            const p = positions[i];
            return (
              <motion.circle
                key={`pulse-${i}`}
                r="0.9"
                fill="#0F4C81"
                initial={{ cx: 50, cy: 50, opacity: 0 }}
                animate={{
                  cx: [50, p.x, 50],
                  cy: [50, p.y, 50],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: s(2.6),
                  repeat: Infinity,
                  delay: s(1 + i * 0.7),
                  ease: "easeInOut",
                }}
              />
            );
          })}
      </svg>

      {/* Satellite tiles */}
      {positions.map((p, i) => (
        <motion.div
          key={SATELLITES[i].label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: s(0.55),
            delay: s(0.35 + i * 0.07),
            ease: EASE,
          }}
          style={{
            top: `${p.y}%`,
            left: `${p.x}%`,
            transform: "translate(-50%, -50%) rotate(45deg)",
          }}
          className="absolute flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-md ring-1 ring-slate-200/80 sm:h-16 sm:w-16"
          aria-label={SATELLITES[i].label}
        >
          <span
            className="block h-5 w-5 text-brand-deep sm:h-6 sm:w-6"
            style={{ transform: "rotate(-45deg)" }}
          >
            {SATELLITES[i].icon}
          </span>
        </motion.div>
      ))}

      {/* Center hub */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: s(0.65), delay: s(0.1), ease: EASE }}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(45deg)",
        }}
        className="absolute flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-deep shadow-xl shadow-brand-deep/20 ring-1 ring-brand-deep/30 sm:h-24 sm:w-24"
      >
        <div
          style={{ transform: "rotate(-45deg)" }}
          className="flex flex-col items-center justify-center gap-1 px-2 text-center"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-brand-primary sm:h-5 sm:w-5"
            fill="currentColor"
          >
            <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
          </svg>
          <p className="text-[9px] font-semibold uppercase tracking-wider text-white leading-tight sm:text-[10px]">
            AlgoNyte
            <br />
            Labs
          </p>
        </div>
      </motion.div>
    </div>
  );
}
