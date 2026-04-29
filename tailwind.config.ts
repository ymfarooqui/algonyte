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
          primary: "#38BDF8",
          deep: "#0F4C81",
          accent: "#E0F7FF",
          ink: "#111827",
          muted: "#6B7280",
          soft: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
