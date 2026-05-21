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
          soft: "#F6F7F9",
          paper: "#ECEEF2",
          line: "#D7DBE0",

          ink: "#0F172A",
          deep: "#060B17",
          muted: "#475569",
          subtle: "#94A3B8",

          primary: "#047857",
          violet: "#065F46",
          accent: "#D1FAE5",
        },
      },
      backgroundImage: {
        "brand-gradient":
          "radial-gradient(at 30% 20%, rgba(4,120,87,0.10) 0%, transparent 55%), linear-gradient(135deg, #F6F7F9 0%, #ECEEF2 100%)",
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
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 4px 12px rgba(4,120,87,0.06)",
        lift: "0 8px 24px -8px rgba(4,120,87,0.20), 0 2px 6px rgba(15,23,42,0.04)",
        deep: "0 24px 48px -16px rgba(6,11,23,0.32)",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
