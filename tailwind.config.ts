import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--navy)",
        brandBlue: "var(--blue)",
        teal: "var(--teal)",
        paper: "var(--paper)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)"
      },
      fontFamily: {
        sans: ["var(--font-source-sans)", "sans-serif"],
        serif: ["var(--font-libre-baskerville)", "serif"]
      },
      maxWidth: {
        site: "1200px"
      }
    }
  },
  plugins: []
};

export default config;
