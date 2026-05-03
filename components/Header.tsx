"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/why-us", label: "Why Us" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-brand-deep font-semibold tracking-tight">
          <span aria-hidden className="inline-block h-7 w-7 rounded-md bg-brand-deep relative">
            <span className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-brand-primary" />
          </span>
          Farooqui Digital
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm text-brand-ink/80">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-brand-deep">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/free-review" className="hidden lg:inline-flex btn-primary !py-2 !px-4 text-sm whitespace-nowrap">
          Get a Free Website Review
        </Link>

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
            <Link href="/free-review" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Get a Free Website Review
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
