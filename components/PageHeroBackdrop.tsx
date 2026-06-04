"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative backdrop for page hero sections, aurora gradient blobs + film
 * grain. Drop inside any section with `relative overflow-hidden`.
 *
 * Pauses the aurora animations when scrolled off-screen via IntersectionObserver
 *, three 80px-blurred radials drain GPU even when invisible.
 */
export default function PageHeroBackdrop() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Honor reduced-motion, leave layers paused.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle("is-visible", entry.isIntersecting);
      },
      { rootMargin: "100px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={ref} className="aurora" aria-hidden>
        <div className="aurora-layer aurora-a" />
        <div className="aurora-layer aurora-b" />
        <div className="aurora-layer aurora-c" />
      </div>
      <div className="grain" aria-hidden />
    </>
  );
}
