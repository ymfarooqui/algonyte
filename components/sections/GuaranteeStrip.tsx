import { GUARANTEE } from "@/lib/services";

export default function GuaranteeStrip() {
  return (
    <section className="pb-16">
      <div className="container-page">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-brand-deep/15 bg-gradient-to-br from-brand-accent/40 via-white to-white px-6 py-8 text-center sm:flex-row sm:gap-6 sm:text-left">
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-deep text-brand-soft">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
              <path
                d="M12 3 5 6v5.5c0 4.3 3 8.3 7 9.5 4-1.2 7-5.2 7-9.5V6l-7-3Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="m8.8 12 2.2 2.2 4.2-4.4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="flex-1">
            <p className="text-lg font-semibold text-brand-deep">
              {GUARANTEE}. If it&rsquo;s not working, you don&rsquo;t pay.
            </p>
            <p className="mt-1.5 text-brand-muted leading-relaxed">
              We build it, launch it, and run it for you. Try any service for 30 days, if
              it isn&rsquo;t pulling its weight, get your money back. No long-term contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
