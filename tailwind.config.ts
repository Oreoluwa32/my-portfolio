import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0f",
        surface: "#11121a",
        border: "#1f2230",
        accent: "#7c5cff",
        accent2: "#22d3ee",
        muted: "#8b8fa3",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(60% 60% at 50% 0%, rgba(124,92,255,0.18) 0%, rgba(10,10,15,0) 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
