const EASE = [0.22, 1, 0.36, 1] as const;

export const reveal = {
  container: (stagger = 0.11, delay = 0.1) => ({
    hidden: {},
    visible: {
      transition: { delayChildren: delay, staggerChildren: stagger },
    },
  }),
  fadeUp: {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: EASE },
    },
  },
  fadeUpLg: {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.95, ease: EASE },
    },
  },
  dropTile: {
    hidden: { opacity: 0, y: -56, scale: 0.9, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: EASE },
    },
  },
};

export const inView = { once: true, amount: 0.2 } as const;
