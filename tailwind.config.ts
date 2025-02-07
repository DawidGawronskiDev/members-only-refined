import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        grey: "var(--grey)",
        accentPrimary: "var(--accent-primary)",
        accentSecondary: "var(--accent-secondary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
