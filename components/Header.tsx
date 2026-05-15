"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BookingButton } from "@/components/BookingModal";

const links = [
  { href: "/ai-receptionist", label: "AI Receptionist" },
  { href: "/lead-generator", label: "Lead Generator" },
  { href: "/seo", label: "SEO" },
  { href: "/pricing", label: "Pricing" },
  { href: "/founding", label: "Founding" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 backdrop-blur"
      style={{
        background:
          "linear-gradient(90deg, #0A0A14 0%, #0F0B1F 50%, #0A0A14 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-brand-violet/20 blur-3xl" />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl" />
      </div>

      <div className="container-page relative flex items-center justify-between gap-4">
        <Link
          href="/"
          className="-ml-4 sm:-ml-6 flex items-center gap-2"
          aria-label="Algonyte Labs home"
        >
          <div className="h-28 w-28 sm:h-32 sm:w-32 overflow-hidden flex items-center justify-center drop-shadow-[0_0_24px_rgba(168,85,247,0.5)]">
            <Image
              src="/logo-mark.png"
              alt=""
              width={320}
              height={320}
              priority
              className="h-full w-full object-contain scale-[2.1] translate-y-3"
            />
          </div>
          <div className="flex flex-col items-center leading-none">
            <span className="text-3xl sm:text-4xl font-bold tracking-[0.18em] text-white">
              ALGONYTE
            </span>
            <div className="mt-3 flex items-center gap-2">
              <span
                aria-hidden
                className="h-px w-10 sm:w-14 bg-gradient-to-r from-transparent via-brand-violet to-brand-violet"
              />
              <span className="text-sm sm:text-base font-semibold tracking-[0.4em] text-white">
                LABS
              </span>
              <span
                aria-hidden
                className="h-px w-10 sm:w-14 bg-gradient-to-l from-transparent via-brand-primary to-brand-primary"
              />
            </div>
          </div>
        </Link>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-white/20 text-white hover:border-brand-primary hover:text-brand-primary transition-colors"
        >
          <span className="sr-only">Menu</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="border-t border-white/10 relative"
          style={{
            background:
              "linear-gradient(90deg, #0A0A14 0%, #0F0B1F 50%, #0A0A14 100%)",
          }}
        >
          <nav className="container-page flex flex-col py-6 gap-4 text-base text-white/90">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 hover:text-brand-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <BookingButton
              className="btn-primary mt-3"
              onBeforeOpen={() => setOpen(false)}
            >
              Book a Demo
            </BookingButton>
          </nav>
        </div>
      )}
    </header>
  );
}
