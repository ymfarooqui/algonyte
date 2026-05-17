import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          soft: "#FAF7F2",
          paper: "#F2EEE6",
          line: "#E5E0D6",

          ink: "#2A2622",
          deep: "#1A1816",
          muted: "#6B665E",
          subtle: "#A8A29C",

          primary: "#1F4F4A",
          violet: "#143534",
          accent: "#E4ECE8",
        },
      },
      backgroundImage: {
        "brand-gradient":
          "radial-gradient(at 30% 20%, rgba(31,79,74,0.08) 0%, transparent 55%), linear-gradient(135deg, #FAF7F2 0%, #F2EEE6 100%)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "1200px",
        prose: "65ch",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26,24,22,0.04), 0 4px 12px rgba(31,79,74,0.05)",
        lift: "0 8px 24px -8px rgba(31,79,74,0.18), 0 2px 6px rgba(26,24,22,0.04)",
        deep: "0 24px 48px -16px rgba(20,53,52,0.28)",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
