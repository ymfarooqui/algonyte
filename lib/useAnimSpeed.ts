"use client";

import { useEffect, useState } from "react";

const MOBILE_MULT = 0.55;
const MOBILE_BREAKPOINT = 640;

export function useAnimSpeed() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const mult = isMobile ? MOBILE_MULT : 1;
  const s = (n: number) => n * mult;
  return { mult, s, isMobile };
}
