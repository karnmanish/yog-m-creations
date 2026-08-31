import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base — warm paper & ink (the shared ground for the whole site)
        paper: "#F8F4EC",
        "paper-dim": "#F1EADB",
        ink: "#211F1C",
        "ink-soft": "#514C45",
        "ink-faint": "#8A8375",
        line: "#DED4BF",

        // Brand accents — each of the three pillars gets its own voice
        marigold: {
          DEFAULT: "#C68A2E",
          dark: "#96631C",
          light: "#EBD3A0",
        }, // Bhavatu Sarvam — devotional, warm gold
        teal: {
          DEFAULT: "#1F4B4A",
          dark: "#123231",
          light: "#CDE0DD",
        }, // StoryKahani — quiet, inked storytelling
        berry: {
          DEFAULT: "#9C4258",
          dark: "#6E2C3E",
          light: "#EFD4DA",
        }, // Smart Finds — curated, considered
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(33, 31, 28, 0.18)",
        card: "0 1px 0 rgba(33,31,28,0.06), 0 12px 24px -16px rgba(33,31,28,0.22)",
      },
      backgroundImage: {
        grain: "url('/grain.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
