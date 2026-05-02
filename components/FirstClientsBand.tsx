import Link from "next/link";

export default function FirstClientsBand() {
  return (
    <section className="section bg-brand-deep text-white">
      <div className="container-page max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-primary">
          Now booking first clients
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
          Introductory pricing for the first wave of small businesses.
        </h2>
        <p className="mt-5 text-white/80 text-lg leading-relaxed">
          We&rsquo;re taking on a small group of early clients at lower rates in exchange for
          honest feedback and a testimonial. You get more attention per project. We get our first
          case studies. Fair trade.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/free-review"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-medium text-brand-deep hover:bg-brand-accent"
          >
            Get a Free Website Review
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-base font-medium text-white hover:bg-white/10"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
