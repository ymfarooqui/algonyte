"use client";

import { useEffect, useRef } from "react";

/**
 * Renders a cursor-following radial glow. Drop inside any section with
 * `relative overflow-hidden`. The component finds its closest positioned
 * ancestor and listens to mousemove on it, so the parent doesn't need to
 * become a client component.
 */
export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.offsetParent as HTMLElement | null;
    if (!parent) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = parent.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    };

    parent.addEventListener("mousemove", onMove);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className="spotlight" aria-hidden />;
}
