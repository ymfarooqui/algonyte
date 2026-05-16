"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import Script from "next/script";
import { calendarSrc } from "@/lib/constants";

type Ctx = { open: () => void; close: () => void; isOpen: boolean };
const BookingCtx = createContext<Ctx | null>(null);

export function useBooking() {
  const ctx = useContext(BookingCtx);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const ctx = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <BookingCtx.Provider value={ctx}>
      {children}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a call"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute inset-0 bg-brand-ink/60 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-brand-ink/10">
            <button
              aria-label="Close booking dialog"
              onClick={close}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-ink shadow ring-1 ring-brand-ink/10 hover:bg-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <div className="flex-1 overflow-y-auto overscroll-contain">
              <iframe
                src={calendarSrc}
                title="Book a call"
                loading="lazy"
                className="block w-full"
                style={{ border: "none", minHeight: "760px" }}
              />
              <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
            </div>
          </div>
        </div>
      )}
    </BookingCtx.Provider>
  );
}

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onBeforeOpen?: () => void;
};

export function BookingButton({ children, className = "btn-primary", onBeforeOpen }: ButtonProps) {
  const { open } = useBooking();
  return (
    <button
      type="button"
      onClick={() => {
        onBeforeOpen?.();
        open();
      }}
      className={className}
    >
      {children}
    </button>
  );
}
