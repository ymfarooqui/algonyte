"use client";

import Reveal from "@/components/Reveal";
import { useAnimSpeed } from "@/lib/useAnimSpeed";

function CarWashIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      {/* sparkle (top-left) */}
      <path
        d="M3.5 4l.5 1.4L5.4 6l-1.4.6L3.5 8 3 6.6 1.6 6 3 5.4z"
        fill="currentColor"
      />
      {/* sparkle (top-right, larger) */}
      <path
        d="M20.5 2.5l.7 1.9L23 5.1l-1.8.7-.7 2-.7-2L18 5.1l1.8-.7z"
        fill="currentColor"
      />
      {/* car body silhouette */}
      <path
        d="M2.5 17.5
           q.6-2.6 3-3.2
           l1.6-2.8
           q.5-1.4 2-1.4
           h6
           q1.5 0 2 1.4
           l1.6 2.8
           q2.4.6 3 3.2
           v1.4
           q0 .5-.5.5
           h-18.4
           q-.5 0-.5-.5z"
        fill="currentColor"
      />
      {/* windows (darker inset) */}
      <path
        d="M8 13.8
           l1-2.1
           q.3-.7 1.1-.7
           h3.8
           q.8 0 1.1.7
           l1 2.1z"
        fill="rgba(0,0,0,0.3)"
      />
      {/* window divider */}
      <line x1="12" y1="11" x2="12" y2="13.8" stroke="rgba(255,255,255,0.7)" strokeWidth="0.6" />
      {/* headlight */}
      <circle cx="20.3" cy="15.5" r="0.6" fill="rgba(255,230,150,0.95)" />
      {/* wheels (dark tires + light hubs) */}
      <circle cx="6.5" cy="19" r="2" fill="#0f172a" />
      <circle cx="17.5" cy="19" r="2" fill="#0f172a" />
      <circle cx="6.5" cy="19" r="0.8" fill="#cbd5e1" />
      <circle cx="17.5" cy="19" r="0.8" fill="#cbd5e1" />
    </svg>
  );
}

type Msg =
  | { from: "them"; text: string }
  | { from: "me"; text: string }
  | { from: "me"; kind: "booking"; title: string };

const messages: Msg[] = [
  { from: "them", text: "Hi! I'm interested in the Gold Package." },
  {
    from: "me",
    text:
      "Great choice! 🌟 The Gold Package includes exterior wash, wax, wheel cleaning, and interior vacuum & wipe-down. Would you like to book an appointment?",
  },
  { from: "them", text: "Yes, I'd like to book it for this Saturday." },
  {
    from: "me",
    text: "Perfect! You can book your Gold Package Car Wash here:",
  },
  { from: "me", kind: "booking", title: "Book Gold Package Car Wash" },
  { from: "them", text: "All set! See you Saturday morning at 10:00 AM." },
  {
    from: "me",
    text:
      "You're all set! ✅ Your Gold Package appointment is confirmed for Sat, May 17 at 10:00 AM. We can't wait to make your car look amazing!",
  },
];

const annotations = [
  {
    title: "Lead Message",
    body: "Customer reaches out expressing interest in the Gold Package.",
    color: "sky",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0116 0" />
      </svg>
    ),
  },
  {
    title: "AI Reply",
    body: "AI instantly replies with details about the Gold Package and asks to book.",
    color: "rose",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M5 17h14M5 17a2 2 0 01-2-2v-3l2-5a2 2 0 012-2h10a2 2 0 012 2l2 5v3a2 2 0 01-2 2M7 17v2M17 17v2" />
        <circle cx="7.5" cy="14" r="1" fill="currentColor" />
        <circle cx="16.5" cy="14" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Booking Link",
    body: "AI shares an easy booking link to schedule the appointment.",
    color: "rose",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" />
      </svg>
    ),
  },
  {
    title: "Confirmation",
    body: "AI confirms the appointment and sends all the details.",
    color: "emerald",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="m5 12 4.5 4.5L19 7" />
      </svg>
    ),
  },
];

const annotationStyles: Record<string, { bg: string; text: string; ring: string }> = {
  sky: { bg: "bg-sky-100", text: "text-sky-600", ring: "ring-sky-200" },
  rose: { bg: "bg-rose-100", text: "text-rose-600", ring: "ring-rose-200" },
  emerald: {
    bg: "bg-emerald-100",
    text: "text-emerald-600",
    ring: "ring-emerald-200",
  },
};

function Bubble({ msg, index }: { msg: Msg; index: number }) {
  const isThem = msg.from === "them";
  const isBooking = msg.from === "me" && "kind" in msg && msg.kind === "booking";
  const showAvatar = !isThem && !isBooking;
  const { s } = useAnimSpeed();

  return (
    <Reveal
      y={8}
      duration={s(0.45)}
      delay={s(index * 0.12)}
      className={`flex items-end gap-1.5 ${isThem ? "justify-start" : "justify-end"}`}
    >
      {isThem && (
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0116 0H4z" />
          </svg>
        </span>
      )}

      {isBooking ? (
        <div className="max-w-[85%] rounded-2xl bg-[#3478F6] px-4 py-3 text-white shadow-sm">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M3 7l9-4 9 4M5 9v8l7 4 7-4V9M12 13l-7-4M12 13l7-4M12 13v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="text-sm font-semibold leading-tight">{(msg as { title: string }).title}</p>
          </div>
        </div>
      ) : (
        <div
          className={`max-w-[78%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug ${
            isThem
              ? "rounded-bl-sm bg-slate-200 text-slate-900"
              : "rounded-br-sm bg-[#3478F6] text-white"
          }`}
        >
          {(msg as { text: string }).text}
        </div>
      )}

      {showAvatar && (
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3478F6] text-white">
          <CarWashIcon className="h-3.5 w-3.5" />
        </span>
      )}
    </Reveal>
  );
}

function PhoneFrame() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px]">
      <div className="relative isolate rounded-[2.5rem] border-[8px] border-slate-900 bg-white shadow-2xl ring-1 ring-slate-900/10 overflow-hidden">
        {/* dynamic island */}
        <div
          aria-hidden
          className="absolute left-1/2 top-2.5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-900"
        />

        {/* status bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1.5 text-[11px] font-semibold text-slate-900">
          <span>9:41</span>
          <span className="flex items-center gap-1 text-slate-700">
            <svg viewBox="0 0 18 12" className="h-2.5 w-3.5" fill="currentColor" aria-hidden>
              <rect x="0" y="8" width="3" height="4" rx="0.5" />
              <rect x="4.5" y="6" width="3" height="6" rx="0.5" />
              <rect x="9" y="3" width="3" height="9" rx="0.5" />
              <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
            </svg>
            <svg viewBox="0 0 16 12" className="h-2.5 w-3" fill="currentColor" aria-hidden>
              <path d="M8 2.5c1.9 0 3.6.7 4.9 1.9l1.4-1.4A9 9 0 008 .5 9 9 0 001.7 3l1.4 1.4A7 7 0 018 2.5zm0 3.5c1 0 1.9.4 2.5 1.1l1.4-1.4A6 6 0 008 4 6 6 0 004.1 5.7l1.4 1.4A3.5 3.5 0 018 6zm0 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
            </svg>
            <span className="ml-0.5 inline-block h-2.5 w-5 rounded-[2px] border border-slate-700 px-[1px] py-[1px]">
              <span className="block h-full w-full rounded-[1px] bg-slate-700" />
            </span>
          </span>
        </div>

        {/* contact header */}
        <div className="flex flex-col items-center border-b border-slate-200 bg-white px-3 pb-3 pt-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-white shadow-md ring-1 ring-sky-300/40">
            <CarWashIcon className="h-7 w-7" />
          </div>
          <p className="mt-2 text-[13px] font-semibold tracking-tight text-slate-900">
            (312) 999-9090
          </p>
        </div>

        {/* subheader */}
        <div className="bg-white pt-2 text-center">
          <p className="text-[10px] text-slate-400">
            Text Message
            <br />
            Today 9:41 AM
          </p>
        </div>

        {/* conversation */}
        <div className="space-y-2 bg-white px-3 pt-3 pb-4">
          {messages.map((m, i) => (
            <Bubble key={i} msg={m} index={i} />
          ))}
        </div>

        {/* input bar */}
        <div className="flex items-center gap-2 border-t border-slate-100 bg-white px-3 py-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
          <span className="flex-1 rounded-full bg-slate-100 px-3 py-1.5 text-[11px] text-slate-400">
            Text Message
          </span>
        </div>
      </div>
    </div>
  );
}

function Annotation({
  a,
  index,
}: {
  a: (typeof annotations)[number];
  index: number;
}) {
  const style = annotationStyles[a.color];
  const { s } = useAnimSpeed();
  return (
    <Reveal
      as="li"
      x={10}
      y={0}
      duration={s(0.5)}
      delay={s(0.2 + index * 0.15)}
      className="relative flex items-start gap-3"
    >
      <span
        className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ring-1 ${style.bg} ${style.text} ${style.ring}`}
      >
        {a.icon}
      </span>
      <div className="min-w-0 pt-1">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-deep">
          {a.title}
        </p>
        <p className="mt-1 text-sm text-brand-muted leading-relaxed">{a.body}</p>
      </div>
    </Reveal>
  );
}

export default function PhoneConversation() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
      <PhoneFrame />
      <ol className="relative space-y-7">
        <span
          aria-hidden
          className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-slate-200 via-slate-200 to-transparent"
        />
        {annotations.map((a, i) => (
          <Annotation key={a.title} a={a} index={i} />
        ))}
      </ol>
    </div>
  );
}
