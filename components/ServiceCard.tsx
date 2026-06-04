import Link from "next/link";
import type { ReactNode } from "react";
import type { Service, ServiceIconId } from "@/lib/services";

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

function CheckIcon({ featured }: { featured?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      className={`mt-0.5 shrink-0 ${featured ? "text-brand-primary" : "text-brand-primary"}`}
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

const arrow = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ServiceCard({ service }: { service: Service }) {
  const featured = service.popular === true;

  return (
    <div
      id={service.id}
      className={`group relative flex h-full flex-col rounded-2xl p-7 ${
        featured
          ? "bg-brand-deep text-brand-soft shadow-deep"
          : "lift-card bg-white ring-1 ring-slate-200/80 shadow-soft"
      }`}
    >
      {featured && (
        <span className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-brand-primary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-soft">
          Most Popular
        </span>
      )}

      <div className="flex items-center justify-between gap-3">
        <span
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
            featured ? "bg-white/10 text-brand-soft" : "bg-brand-accent text-brand-deep"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
            {icons[service.icon]}
          </svg>
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
            featured ? "bg-white/10 text-brand-soft/80" : "bg-brand-soft text-brand-muted"
          }`}
        >
          {categoryLabel[service.category]}
        </span>
      </div>

      <h3
        className={`mt-5 text-xl font-semibold tracking-tight ${
          featured ? "text-brand-soft" : "text-brand-deep"
        }`}
      >
        {service.name}
      </h3>
      <p
        className={`mt-1.5 text-sm leading-relaxed ${
          featured ? "text-brand-soft/75" : "text-brand-muted"
        }`}
      >
        {service.job}
      </p>

      {/* Hero stat */}
      <div className="mt-6">
        <div
          className={`text-4xl font-semibold tracking-tight tabular-nums ${
            featured ? "text-white" : "text-brand-deep"
          }`}
        >
          {service.stat.value}
        </div>
        <div
          className={`mt-1 text-xs uppercase tracking-wider ${
            featured ? "text-brand-soft/60" : "text-brand-muted"
          }`}
        >
          {service.stat.label}
        </div>
      </div>

      <ul className="mt-6 mb-7 space-y-2.5 text-sm flex-1">
        {service.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <CheckIcon featured={featured} />
            <span className={featured ? "text-brand-soft/85" : "text-brand-muted"}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={service.href}
        className={`${featured ? "btn-primary-featured" : "btn-primary"} w-full`}
      >
        See how it works
        <span className="transition-transform group-hover:translate-x-0.5">{arrow}</span>
      </Link>
    </div>
  );
}
