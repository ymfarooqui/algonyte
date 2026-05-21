"use client";

import { MotionConfig } from "motion/react";
import { useState } from "react";

// On touch devices (iPhone/iPad) the entrance reveals' translateY slide moves
// each card's box-shadow across a freshly-promoted GPU layer, which iOS Safari
// re-rasterizes — the one-by-one flicker users see on load. Treating motion as
// "reduced" on touch makes Framer Motion skip transform/layout animations (the
// slide) while keeping opacity fades. The lazy initializer resolves this on the
// first client render so no transform animation ever starts; MotionConfig emits
// no DOM, so there's no hydration mismatch. Continuous marquees are CSS-driven
// and unaffected.
function detectReducedMotion(): "user" | "always" {
  if (typeof window === "undefined") return "user";
  return window.matchMedia("(hover: none) and (pointer: coarse)").matches
    ? "always"
    : "user";
}

export default function MotionRoot({ children }: { children: React.ReactNode }) {
  const [reducedMotion] = useState<"user" | "always">(detectReducedMotion);
  return <MotionConfig reducedMotion={reducedMotion}>{children}</MotionConfig>;
}
