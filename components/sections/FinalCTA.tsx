"use client";

import Reveal from "@/components/Reveal";
import { BookingButton } from "@/components/BookingModal";
import CursorSpotlight from "@/components/CursorSpotlight";

export default function FinalCTA({
  title = "Want to see what this could look like for you?",
}: {
  title?: string;
} = {}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-accent to-white">
      <div className="grain" aria-hidden />
      <CursorSpotlight />
      <div className="relative container-page py-24 sm:py-28 text-center">
        <Reveal as="h2" className="h-section max-w-3xl mx-auto">
          {title}
        </Reveal>
        <p className="lede mt-6 max-w-2xl mx-auto">
          Grab 30 minutes with us. We&rsquo;ll look at how leads come into your
          business today and show you where you&rsquo;re leaving money on the
          table.
        </p>
        <div className="mt-8">
          <BookingButton className="btn-primary">
            Show me what this looks like for my business
          </BookingButton>
        </div>
      </div>
    </section>
  );
}
