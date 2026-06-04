"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useAnimSpeed } from "@/lib/useAnimSpeed";
import { services, type ServiceIconId } from "@/lib/services";

const EASE = [0.22, 1, 0.36, 1] as const;
const AUTOPLAY_MS = 5000;

/* ---------------- service icons (self-contained) ---------------- */

const ICONS: Record<ServiceIconId, ReactNode> = {
  phone: (
    <path
      d="M6.5 4.5a2 2 0 0 1 2-2h1.6a1 1 0 0 1 .98.79l.66 3.1a1 1 0 0 1-.27.92L10.1 8.7a12 12 0 0 0 5.2 5.2l1.4-1.38a1 1 0 0 1 .92-.27l3.1.66a1 1 0 0 1 .79.98v1.6a2 2 0 0 1-2 2A14.5 14.5 0 0 1 6.5 4.5Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  ),
  chat: (
    <path
      d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4 3.5V16H6.5A2.5 2.5 0 0 1 4 13.5v-7Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  ),
  revive: (
    <>
      <path d="M5 12a7 7 0 1 1 2 4.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4.5 19.5V15h4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M3.5 12h17M12 3.5c2.3 2.3 3.5 5.3 3.5 8.5s-1.2 6.2-3.5 8.5c-2.3-2.3-3.5-5.3-3.5-8.5S9.7 5.8 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </>
  ),
  star: (
    <path
      d="m12 3.5 2.6 5.3 5.9.86-4.25 4.14 1 5.87L12 17.9l-5.25 2.74 1-5.87L3.5 9.66l5.9-.86L12 3.5Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </>
  ),
  send: (
    <>
      <path d="m22 2-7 20-4-9-9-4 20-7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M22 2 11 13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </>
  ),
};

function Icon({ id, className }: { id: ServiceIconId; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      {ICONS[id]}
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" className="mt-0.5 shrink-0 text-emerald-400" aria-hidden>
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const STAGES = services;
const N = STAGES.length;

/* ---------------- shared tile content ---------------- */

function TileBody({ service, index }: { service: (typeof services)[number]; index: number }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-brand-soft ring-1 ring-inset ring-white/15">
          <Icon id={service.icon} className="h-5 w-5" />
        </span>
        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-soft/45">
          {String(index + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold leading-tight text-white">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-soft/70">{service.job}</p>

      <ul className="mt-4 flex-1 space-y-2 text-sm">
        {service.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-start gap-2 text-brand-soft/75">
            <Check />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-baseline gap-2 border-t border-white/10 pt-4">
        <span className="text-3xl font-semibold tabular-nums text-white">{service.stat.value}</span>
        <span className="text-[11px] text-brand-soft/60">{service.stat.label}</span>
      </div>
    </>
  );
}

/* ---------------- top-down orbital ring ---------------- */

const TILE_W = 300;
const TILE_H = 470;
const RX = 380; // horizontal orbit radius
const RY = 158; // vertical orbit radius (squashed = top-down)

function OrbitTile({
  index,
  active,
  setActive,
}: {
  index: number;
  active: number;
  setActive: (i: number) => void;
}) {
  const service = STAGES[index];
  const step = (Math.PI * 2) / N;
  let theta = (index - active) * step;
  while (theta > Math.PI) theta -= Math.PI * 2;
  while (theta < -Math.PI) theta += Math.PI * 2;

  const x = Math.sin(theta) * RX;
  const y = Math.cos(theta) * RY;
  const front = (1 + Math.cos(theta)) / 2;
  const scale = 0.4 + 0.7 * front * front;
  const opacity = 0.05 + 0.95 * Math.pow(front, 1.5);
  const z = Math.round(front * 100);
  const isFront = index === active;

  return (
    <button
      type="button"
      onClick={() => setActive(index)}
      aria-label={`Show ${service.name}`}
      aria-pressed={isFront}
      className="absolute left-1/2 top-[38%] cursor-pointer text-left focus:outline-none"
      style={{
        width: TILE_W,
        height: TILE_H,
        marginLeft: -TILE_W / 2,
        marginTop: -TILE_H / 2,
        zIndex: z,
        opacity,
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
        transition:
          "transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.7s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div
        className={`relative flex h-full flex-col rounded-3xl border bg-gradient-to-br from-brand-ink to-brand-deep p-6 transition-shadow ${
          isFront
            ? "border-white/20 shadow-[0_28px_70px_-18px_rgba(99,102,241,0.55)] ring-1 ring-inset ring-white/15"
            : "border-white/10 shadow-2xl shadow-black/40"
        }`}
      >
        {/* glossy top sheen */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent"
        />
        {isFront && (
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-3 rounded-[2rem]"
            style={{
              background:
                "radial-gradient(closest-side, rgba(99,102,241,0.30), transparent 70%)",
              zIndex: -1,
            }}
          />
        )}

        <div className="relative flex h-full flex-col text-brand-soft">
          <TileBody service={service} index={index} />
        </div>
      </div>
    </button>
  );
}

function Ring({
  active,
  setActive,
}: {
  active: number;
  setActive: (i: number) => void;
}) {
  return (
    <div className="relative h-[640px] w-full sm:h-[680px]">
      {/* elliptical orbit path */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2"
        width={RX * 2 + 80}
        height={RY * 2 + 80}
        viewBox={`0 0 ${RX * 2 + 80} ${RY * 2 + 80}`}
      >
        <ellipse
          cx={RX + 40}
          cy={RY + 40}
          rx={RX}
          ry={RY}
          fill="none"
          stroke="rgba(99,102,241,0.20)"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
      </svg>

      {/* central hub */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative flex h-20 w-20 items-center justify-center">
          <motion.div
            className="absolute inset-0 rounded-full bg-brand-primary/20 blur-2xl"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-deep shadow-xl shadow-brand-deep/40 ring-2 ring-brand-primary/40">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-primary" fill="currentColor">
              <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* orbiting tiles */}
      {STAGES.map((s, i) => (
        <OrbitTile key={s.id} index={i} active={active} setActive={setActive} />
      ))}

      {/* ground shadow under the front card */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] h-4 w-64 -translate-x-1/2 rounded-full bg-black/40 blur-xl"
        animate={{ y: RY + TILE_H / 2 - 8 }}
        transition={{ duration: 1, ease: EASE }}
      />
    </div>
  );
}

/* ---------------- edge arrow ---------------- */

function ArrowButton({
  dir,
  onClick,
}: {
  dir: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous service" : "Next service"}
      className={`absolute top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-brand-deep/80 text-brand-soft shadow-[0_8px_22px_-6px_rgba(6,11,23,0.7)] ring-1 ring-inset ring-white/10 backdrop-blur-sm transition hover:border-brand-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
        dir === "prev" ? "left-2 sm:left-3" : "right-2 sm:right-3"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path
          d={dir === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/* ---------------- main component ---------------- */

export default function ServicesFlowVisual({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.25 });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { mult } = useAnimSpeed();

  const go = (delta: number) => {
    setPaused(true);
    setActive((a) => (a + delta + N) % N);
  };

  useEffect(() => {
    if (!inView || paused) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % N);
    }, AUTOPLAY_MS * mult);
    return () => clearInterval(id);
  }, [inView, paused, mult]);

  // Sync mobile scroller position when active changes from autoplay/arrows/dots
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[active] as HTMLElement | undefined;
    if (!child) return;
    const target = child.offsetLeft - (el.clientWidth - child.clientWidth) / 2;
    if (Math.abs(el.scrollLeft - target) > 4) {
      el.scrollTo({ left: target, behavior: "smooth" });
    }
  }, [active]);

  // Update active when user swipes the mobile scroller
  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let nearest = 0;
    let best = Infinity;
    for (let i = 0; i < el.children.length; i++) {
      const c = el.children[i] as HTMLElement;
      const cCenter = c.offsetLeft + c.clientWidth / 2;
      const d = Math.abs(cCenter - center);
      if (d < best) {
        best = d;
        nearest = i;
      }
    }
    if (nearest !== active) setActive(nearest);
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-deep via-brand-ink to-[#0a1330] px-2 py-6 sm:px-6 sm:py-8">
        {/* edge arrows (drive both the orbital ring and the mobile scroller) */}
        <ArrowButton dir="prev" onClick={() => go(-1)} />
        <ArrowButton dir="next" onClick={() => go(1)} />

        {/* Mobile: swipeable carousel */}
        <div className="sm:hidden">
          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-[10%] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {STAGES.map((service, i) => (
              <div
                key={service.id}
                className="relative flex w-[80%] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-ink to-brand-deep p-5 text-brand-soft shadow-2xl shadow-black/40 ring-1 ring-inset ring-white/10"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
                />
                <TileBody service={service} index={i} />
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-[11px] font-medium uppercase tracking-wider text-brand-soft/50">
            Swipe or tap the arrows
          </p>
        </div>

        {/* Desktop: orbital ring */}
        <div className="hidden sm:block">
          <Ring active={active} setActive={setActive} />
        </div>

        {/* progress dots */}
        <div className="relative z-10 mt-4 flex items-center justify-center gap-1.5 sm:mt-8">
          {STAGES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i - active)}
              aria-label={`Go to ${s.name}`}
              aria-pressed={i === active}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ease-out ${
                i === active ? "w-6 bg-brand-primary" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
