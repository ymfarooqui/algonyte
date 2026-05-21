"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

type RevealProps = {
  /** Element/tag to render. Defaults to a div. */
  as?: ElementType;
  /** Animation delay in seconds (use for staggering siblings). */
  delay?: number;
  /** Vertical slide distance in px. */
  y?: number;
  /** Horizontal slide distance in px. */
  x?: number;
  /** Duration in seconds. */
  duration?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Record<string, unknown>;

/**
 * Scroll-reveal (fade + slide) driven by a native CSS transition.
 *
 * Deliberately NOT Framer Motion: Framer auto-promotes every animated element
 * to its own GPU layer (translateZ(0)), and animating opacity on a freshly
 * promoted layer flashes once on iOS Safari. A plain CSS transition keeps the
 * element off that path, so the identical fade+slide is flicker-free on iPhone.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  y = 12,
  x = 0,
  duration = 0.45,
  className,
  style,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Reduced-motion users get an effectively-instant reveal via the global
  // `prefers-reduced-motion` rule in globals.css (it zeroes transition-duration).
  const Comp = Tag as ElementType;
  return (
    <Comp
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translate(${x}px, ${y}px)`,
        transition: `opacity ${duration}s ${EASE} ${delay}s, transform ${duration}s ${EASE} ${delay}s`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
