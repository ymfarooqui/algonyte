"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { BookingButton } from "@/components/BookingModal";
import CursorSpotlight from "@/components/CursorSpotlight";

const links = [
  { href: "/ai-receptionist", label: "AI Receptionist" },
  { href: "/lead-generator", label: "Lead Generation" },
  { href: "/web-presence", label: "Web Presence" },
  { href: "/pricing", label: "Pricing" },
  { href: "/founding", label: "Founding" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Header reveals on scroll up, hides on scroll down. Never hides:
//   - within the first 120px of the page
//   - while the mobile menu is open
//   - while a focusable element inside the header has focus
const HIDE_THRESHOLD_PX = 120;
const SCROLL_DELTA_PX = 6;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [prevPathname, setPrevPathname] = useState<string | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const lastYRef = useRef(0);

  // Reset the open menu when the route changes. Following React's
  // "adjusting state on prop change" pattern (setState during render is
  // preferred over setState inside useEffect).
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

  // Smart-sticky scroll behavior.
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

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b border-white/5 backdrop-blur transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{
        background:
          "linear-gradient(90deg, #131211 0%, #1A1816 50%, #131211 100%)",
      }}
    >
      <CursorSpotlight />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-brand-primary/[0.18] blur-3xl" />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-[#C9A876]/10 blur-3xl" />
      </div>

      <div className="container-page relative grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4">
        <Link
          href="/"
          className="-ml-2 sm:-ml-4 md:-ml-6 flex items-center justify-self-start"
          aria-label="Algonyte Labs home"
        >
          <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 overflow-hidden flex items-center justify-center drop-shadow-[0_0_24px_rgba(31,79,74,0.55)]">
            <Image
              src="/algonyte-labs-logo.png"
              alt="Algonyte Labs logo"
              width={320}
              height={320}
              priority
              unoptimized
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        <Link
          href="/"
          aria-label="Algonyte Labs home"
          className="flex flex-col items-center justify-self-center leading-none w-full min-w-0 max-w-3xl"
        >
          <span className="block w-full text-center text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-[0.18em] sm:tracking-[0.24em] md:tracking-[0.35em] lg:tracking-[0.45em] text-brand-soft">
            ALGONYTE
          </span>
          <div className="mt-2 sm:mt-3 flex items-center gap-2 sm:gap-3 w-full">
            <span
              aria-hidden
              className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-primary/70 to-brand-primary"
            />
            <span className="text-[11px] sm:text-sm md:text-base lg:text-lg font-medium tracking-[0.35em] sm:tracking-[0.4em] md:tracking-[0.5em] text-brand-soft/90 whitespace-nowrap">
              LABS
            </span>
            <span
              aria-hidden
              className="h-px flex-1 bg-gradient-to-l from-transparent via-brand-primary/70 to-brand-primary"
            />
          </div>
        </Link>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="justify-self-end inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-md border border-white/20 text-white hover:border-brand-primary hover:text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent nav-link"
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
          className="border-t border-white/5 relative"
          style={{
            background:
              "linear-gradient(90deg, #131211 0%, #1A1816 50%, #131211 100%)",
          }}
        >
          <nav className="container-page flex flex-col py-6 gap-4 text-base text-white/90">
            {links.map((l) => (
              <Link
                key={l.label}
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
              Book a Demo
            </BookingButton>
          </nav>
        </div>
      )}
    </header>
  );
}
