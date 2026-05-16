import { BookingButton } from "@/components/BookingModal";
import HeroVisual from "@/components/HeroVisual";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white"
    >
      <PageHeroBackdrop />

      <div className="relative container-page pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
        <div className="max-w-3xl mx-auto text-center px-2 sm:px-0">
          <h1 className="h-display hero-rise-lg">
            Your business should run{" "}
            <span className="text-brand-deep">while you sleep.</span>
          </h1>
          <p className="mt-6 text-sm font-medium uppercase tracking-wider text-brand-deep/80 hero-rise hero-rise-d1">
            {["AI Receptionist", "Voice Agents", "CRM + Pipeline", "Reputation Manager"].map(
              (item, i) => (
                <span key={item} className="whitespace-nowrap">
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="inline-block h-1 w-1 rounded-full bg-brand-deep/50 mx-3 translate-y-[1px] align-middle"
                    />
                  )}
                  {item}
                </span>
              )
            )}
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-4xl hero-rise hero-rise-d2">
          <HeroVisual />
        </div>

        <div className="mt-10 mx-auto max-w-2xl text-center px-2 sm:px-0">
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-brand-ink leading-tight [text-wrap:balance] hero-rise hero-rise-d2">
            AI Bots that answer your leads, follow up, and book them on your
            calendar.
          </p>
          <p className="mt-3 text-lg text-brand-muted hero-rise hero-rise-d3">
            Without you ever having to lift a finger.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 hero-rise hero-rise-d4">
          <BookingButton className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-brand-deep px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-lg shadow-brand-deep/30 ring-1 ring-brand-deep/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-ink hover:shadow-xl hover:shadow-brand-deep/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
            <span
              aria-hidden
              className="absolute -inset-px rounded-full bg-gradient-to-r from-brand-primary/0 via-brand-primary/40 to-brand-primary/0 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="relative">Show me what this looks like for my business</span>
            <svg
              viewBox="0 0 24 24"
              className="relative h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              aria-hidden
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </BookingButton>
        </div>
      </div>
    </section>
  );
}
