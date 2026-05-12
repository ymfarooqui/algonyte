"use client";

import { useBooking } from "@/components/BookingModal";

export default function ContactForm() {
  const { open } = useBooking();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-brand-ink">
          Start the conversation
        </h2>
        <p className="mt-2 text-brand-ink/80">
          Tap the chat in the bottom-right corner and tell us a bit about your
          business. We&rsquo;ll come back the same business day with a straight
          answer on whether we can help.
        </p>
      </div>

      <div className="rounded-xl bg-brand-soft p-5">
        <p className="text-sm font-medium text-brand-ink">
          Prefer to talk live?
        </p>
        <p className="mt-1 text-sm text-brand-ink/80">
          Grab a 20-minute intro call. No pitch, just a real conversation about
          what you&rsquo;re trying to fix.
        </p>
        <button
          type="button"
          onClick={open}
          className="mt-4 inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primary/90 transition"
        >
          Book a call
        </button>
      </div>
    </div>
  );
}
