"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "algonyte:cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (stored) return;
    const t = window.setTimeout(() => setVisible(true), 800);
    return () => window.clearTimeout(t);
  }, []);

  if (!visible) return null;

  const dismiss = (value: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    window.dispatchEvent(
      new CustomEvent("algonyte:consent", { detail: value })
    );
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie notice"
      className="fixed inset-x-4 bottom-4 z-[80] sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md"
    >
      <div className="rounded-2xl bg-brand-deep p-5 text-sm text-brand-soft/90 ring-1 ring-brand-soft/10 shadow-deep">
        <p className="leading-relaxed">
          We use cookies for analytics so we can see what&rsquo;s working. No
          ads, no resale. See our{" "}
          <Link
            href="/privacy"
            className="font-medium text-brand-soft underline underline-offset-4 decoration-brand-soft/40 hover:decoration-brand-soft"
          >
            privacy policy
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => dismiss("accepted")}
            className="btn-primary-featured text-sm py-2 px-4"
          >
            OK, got it
          </button>
          <button
            type="button"
            onClick={() => dismiss("declined")}
            className="text-xs font-medium text-brand-soft/70 underline-offset-4 hover:text-brand-soft hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-deep"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
