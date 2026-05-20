"use client";

import Script from "next/script";
import { useBooking } from "@/components/BookingModal";

const FORM_ID = "k6lR7kdiOU2ngqNmphOQ";

export default function ContactForm() {
  const { open } = useBooking();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm space-y-6">
      <div className="overflow-hidden rounded-xl">
        <iframe
          src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
          id={`inline-${FORM_ID}`}
          title="CRM Software Registration"
          style={{
            width: "100%",
            height: "794px",
            border: "none",
            borderRadius: "3px",
          }}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="CRM Software Registration"
          data-height="794"
          data-layout-iframe-id={`inline-${FORM_ID}`}
          data-form-id={FORM_ID}
        />
      </div>

      <div className="rounded-xl bg-brand-soft p-5">
        <p className="text-sm font-medium text-brand-ink">
          Prefer to talk live?
        </p>
        <p className="mt-1 text-sm text-brand-ink/80">
          Book a 20-minute call. No pitch. We&rsquo;ll talk about what you&rsquo;re trying to fix.
        </p>
        <button
          type="button"
          onClick={open}
          className="mt-4 inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primary/90 transition"
        >
          Book a call
        </button>
      </div>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
