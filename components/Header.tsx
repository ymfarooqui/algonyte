"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { BookingButton } from "@/components/BookingModal";

const primaryLinks = [
  { href: "/ai-receptionist", label: "AI Receptionist" },
  { href: "/web-presence", label: "Web Presence" },
  { href: "/pricing", label: "Pricing" },
];

const secondaryLinks = [
  { href: "/lead-generator", label: "Lead Generation" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const HIDE_THRESHOLD_PX = 120;
const SCROLL_DELTA_PX = 6;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [prevPathname, setPrevPathname] = useState<string | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const lastYRef = useRef(0);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      const el = headerRef.current;
      if (el && !el.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    let frame = 0;
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        const delta = y - lastYRef.current;

        if (open) {
          setHidden(false);
        } else if (y < HIDE_THRESHOLD_PX) {
          setHidden(false);
        } else if (delta > SCROLL_DELTA_PX) {
          setHidden(true);
        } else if (delta < -SCROLL_DELTA_PX) {
          setHidden(false);
        }

        lastYRef.current = y;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [open]);

  const allLinks = [...primaryLinks, ...secondaryLinks];

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b border-brand-line/70 bg-brand-soft transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-6 py-4">
        <Link
          href="/"
          aria-label="AlgoNyte home"
          className="flex items-center gap-2.5 font-medium tracking-tight text-brand-deep text-lg sm:text-xl"
        >
          <Image
            src="/algonyte-labs-logo.png"
            alt="AlgoNyte logo"
            width={96}
            height={96}
            unoptimized
            className="h-[2.5em] w-[2.5em] object-contain"
          />
          AlgoNyte
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-brand-muted">
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link hover:text-brand-deep focus:outline-none focus-visible:text-brand-deep"
            >
              {l.label}
            </Link>
          ))}
          <BookingButton className="rounded-full bg-brand-primary px-4 py-1.5 text-sm font-medium text-brand-soft hover:bg-brand-violet transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
            Book a call
          </BookingButton>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-line text-brand-deep hover:border-brand-primary hover:text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 nav-link"
        >
          <span className="sr-only">Menu</span>
          <svg
            width="22"
            height="22"
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
        <div className="md:hidden border-t border-brand-line/70 bg-brand-soft">
          <nav className="container-page flex flex-col py-6 gap-4 text-base text-brand-deep">
            {allLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 hover:text-brand-primary focus:outline-none focus-visible:text-brand-primary nav-link"
              >
                {l.label}
              </Link>
            ))}
            <BookingButton
              className="btn-primary mt-3"
              onBeforeOpen={() => setOpen(false)}
            >
              Book a call
            </BookingButton>
          </nav>
        </div>
      )}
    </header>
  );
}
