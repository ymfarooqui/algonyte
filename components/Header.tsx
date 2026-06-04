"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { BookingButton } from "@/components/BookingModal";

const primaryLinks = [
  { href: "/services", label: "Services" },
  { href: "/ai-receptionist", label: "AI Receptionist" },
  { href: "/web-presence", label: "Web Presence" },
  { href: "/pricing", label: "Pricing" },
];

const secondaryLinks = [
  { href: "/lead-generator", label: "Lead Generation" },
  { href: "/database-reactivation", label: "Reactivation" },
  { href: "/instant-booking", label: "Instant Booking" },
  { href: "/ad-management", label: "Ad Management" },
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
      className={`sticky top-0 z-50 transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-[150%]" : "translate-y-0"
      }`}
    >
      <div className="container-page pt-3 sm:pt-4">
        {/* Floating glass pill */}
        <div className="relative rounded-full border border-white/20 bg-gradient-to-b from-brand-deep/65 to-brand-deep/82 px-5 py-3 shadow-[0_16px_50px_-12px_rgba(4,120,87,0.45),0_6px_18px_rgba(6,11,23,0.40)] ring-1 ring-inset ring-white/15 backdrop-blur-sm backdrop-saturate-150 sm:px-7">
          {/* glass highlights */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/25 via-white/5 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-6 -bottom-px h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />

          <div className="relative z-10 flex items-center justify-between gap-6">
            <Link
              href="/"
              aria-label="AlgoNyte home"
              className="flex items-center gap-2.5 font-medium tracking-tight text-brand-soft text-lg sm:text-xl"
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

            <nav className="hidden md:flex items-center gap-7 text-sm text-brand-soft/70">
              {primaryLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="nav-link hover:text-brand-soft focus:outline-none focus-visible:text-brand-soft"
                >
                  {l.label}
                </Link>
              ))}
              <BookingButton className="rounded-full bg-gradient-to-br from-emerald-400 to-brand-primary px-4 py-1.5 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_22px_-6px_rgba(4,120,87,0.8)] ring-1 ring-inset ring-white/30 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-deep">
                Book a call
              </BookingButton>
            </nav>

            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-brand-soft hover:border-brand-primary hover:text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-deep nav-link"
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
        </div>

        {open && (
          <div className="md:hidden relative mt-2 rounded-3xl border border-white/20 bg-gradient-to-b from-brand-deep/78 to-brand-deep/88 shadow-[0_16px_50px_-12px_rgba(4,120,87,0.40),0_6px_18px_rgba(6,11,23,0.40)] ring-1 ring-inset ring-white/15 backdrop-blur-sm backdrop-saturate-150">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/15 via-white/[0.03] to-transparent"
            />
            <nav className="relative z-10 flex flex-col p-4 gap-1 text-base text-brand-soft">
              {allLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 hover:text-brand-primary focus:outline-none focus-visible:text-brand-primary nav-link"
                >
                  {l.label}
                </Link>
              ))}
              <BookingButton
                className="btn-primary-featured mt-3 w-full"
                onBeforeOpen={() => setOpen(false)}
              >
                Book a call
              </BookingButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
