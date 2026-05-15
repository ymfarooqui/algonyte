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
          primary: "#22D3EE",
          violet: "#A855F7",
          deep: "#1E1B4B",
          accent: "#F3E8FF",
          ink: "#111827",
          muted: "#6B7280",
          soft: "#F8FAFC",
        },
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #A855F7 0%, #6366F1 50%, #22D3EE 100%)",
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
