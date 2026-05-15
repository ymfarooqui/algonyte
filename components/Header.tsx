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
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-brand-deep font-semibold tracking-tight" aria-label="Algonyte Labs home">
          <Image
            src="/logo-mark.png"
            alt=""
            width={36}
            height={36}
            priority
            className="h-8 w-8 object-contain"
          />
          Algonyte Labs
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm text-brand-ink/80">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-brand-deep">
              {l.label}
            </Link>
          ))}
        </nav>

        <BookingButton className="hidden lg:inline-flex btn-primary !py-2 !px-4 text-sm whitespace-nowrap">
          Book a Demo
        </BookingButton>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200"
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="container-page flex flex-col py-4 gap-3 text-sm">
            {links.map((l) => (
              <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className="py-1">
                {l.label}
              </Link>
            ))}
            <BookingButton
              className="btn-primary mt-2"
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
