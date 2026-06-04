import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { BookingButton } from "@/components/BookingModal";
import {
  services,
  GUARANTEE_SHORT,
  type Service,
  type ServiceIconId,
} from "@/lib/services";

const icons: Record<ServiceIconId, ReactNode> = {
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
      <path
        d="M5 12a7 7 0 1 1 2 4.9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M4.5 19.5V15h4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
};

const categoryLabel: Record<Service["category"], string> = {
  reception: "Reception",
  growth: "Growth",
  presence: "Presence",
};

function ServiceIcon({ id, className }: { id: ServiceIconId; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      {icons[id]}
    </svg>
  );
}

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      className="mt-0.5 shrink-0 text-brand-primary"
      aria-hidden
    >
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** The dynamic, gently-floating stat card that sits beside each service. */
function ServiceVisual({ service }: { service: Service }) {
  const featured = service.popular === true;
  const tags = [service.tagline, categoryLabel[service.category], "Done-for-you"];

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl p-8 sm:p-10 animate-float ${
        featured
          ? "bg-brand-deep text-brand-soft shadow-deep"
          : "bg-white text-brand-deep ring-1 ring-slate-200/80 shadow-soft"
      }`}
    >
      {/* decorative glow */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full blur-3xl ${
          featured ? "bg-brand-primary/30" : "bg-brand-accent/70"
        }`}
      />

      <div className="relative flex items-center justify-between">
        <span
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
            featured ? "bg-white/10 text-brand-soft" : "bg-brand-accent text-brand-deep"
          }`}
        >
          <ServiceIcon id={service.icon} className="h-6 w-6" />
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className={featured ? "text-brand-soft/70" : "text-brand-muted"}>Live</span>
        </span>
      </div>

      <div className="relative mt-9">
        <div
          className={`text-6xl font-semibold tracking-tight tabular-nums ${
            featured ? "text-white" : "text-brand-deep"
          }`}
        >
          {service.stat.value}
        </div>
        <div
          className={`mt-2 text-sm uppercase tracking-wider ${
            featured ? "text-brand-soft/60" : "text-brand-muted"
          }`}
        >
          {service.stat.label}
        </div>
      </div>

      <div className="relative mt-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              featured ? "bg-white/10 text-brand-soft/80" : "bg-brand-soft text-brand-muted"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const featured = service.popular === true;
  const flip = index % 2 === 1;

  return (
    <div
      id={service.id}
      className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      {/* ── Copy: everything about what it is, shown right here ── */}
      <Reveal y={18} className={flip ? "lg:order-2" : ""}>
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent text-brand-deep">
            <ServiceIcon id={service.icon} className="h-6 w-6" />
          </span>
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.16em] text-brand-primary">
              {service.tagline}
            </p>
            <p className="text-xs text-brand-muted">
              {categoryLabel[service.category]}
              {featured && " · Most popular"}
            </p>
          </div>
        </div>

        <h3 className="h-section mt-6">{service.name}</h3>
        <p className="lede mt-4">{service.summary}</p>

        <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-brand-muted leading-relaxed">
              <Check />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
          <BookingButton className="btn-primary">Book a call</BookingButton>
          <span className="inline-flex items-center gap-2 text-sm text-brand-muted">
            <Check />
            {GUARANTEE_SHORT}
          </span>
        </div>
      </Reveal>

      {/* ── Dynamic visual ── */}
      <Reveal y={18} x={flip ? -28 : 28} delay={0.06} className={flip ? "lg:order-1" : ""}>
        <ServiceVisual service={service} />
      </Reveal>
    </div>
  );
}

type Props = {
  eyebrow?: string;
  heading?: string;
  subhead?: string;
  className?: string;
};

export default function ServiceSections({
  eyebrow = "What we do",
  heading = "Pick the services you need. Stack the ones you don't.",
  subhead = "Each one is a done-for-you install that runs while you sleep. Start with one, add more whenever you're ready — no packages, no lock-in.",
  className = "bg-white",
}: Props) {
  return (
    <section className={`section ${className}`}>
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="h-section">{heading}</h2>
          {subhead && <p className="lede mt-5">{subhead}</p>}
        </Reveal>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {services.map((service, i) => (
            <ServiceRow key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
