const EASE = [0.22, 1, 0.36, 1] as const;

// We intentionally avoid `filter: blur(...)` in reveal variants. Browsers
// spin up a GPU compositor layer for the duration of a filter animation;
// when the filter returns to `blur(0px)` the layer is torn down, causing
// a one-frame repaint flicker on the revealed element (and any nested
// hover/transition state). Opacity + translate delivers the same premium
// feel without the post-animation flicker.

export const reveal = {
  container: (stagger = 0.11, delay = 0.1) => ({
    hidden: {},
    visible: {
      transition: { delayChildren: delay, staggerChildren: stagger },
    },
  }),
  fadeUp: {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: EASE },
    },
  },
  fadeUpLg: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  },
  dropTile: {
    hidden: { opacity: 0, y: -56, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: EASE },
    },
  },
};

export const inView = { once: true, amount: 0.2 } as const;
