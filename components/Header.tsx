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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-deep/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-white font-semibold tracking-tight"
          aria-label="Algonyte Labs home"
        >
          <Image
            src="/logo-mark.png"
            alt=""
            width={56}
            height={56}
            priority
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
          />
          <span className="text-lg sm:text-xl">Algonyte Labs</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm text-white/80">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-brand-primary transition-colors">
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
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white"
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-brand-deep">
          <nav className="container-page flex flex-col py-4 gap-3 text-sm text-white/90">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 hover:text-brand-primary"
              >
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
