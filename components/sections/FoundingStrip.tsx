import Link from "next/link";

export default function FoundingStrip() {
  return (
    <section className="bg-brand-deep">
      <div className="container-page py-4 sm:py-5">
        <Link
          href="/founding"
          className="group flex flex-col items-center justify-center gap-2 text-white text-center sm:flex-row sm:gap-4 sm:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary">
            Limited · 3 spots
          </span>
          <span className="text-sm sm:text-base">
            <strong>Founding Member Program:</strong> 50% off setup + 30% off
            monthly for 6 months.
          </span>
          <span className="text-sm font-medium text-brand-primary group-hover:underline">
            See details →
          </span>
        </Link>
      </div>
    </section>
  );
}
