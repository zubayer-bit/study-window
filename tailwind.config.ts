import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar: "var(--color-navbar)",
        cta: "var(--color-cta)",
        "cta-dark": "var(--color-cta-dark)",
      },
    },
  },
  plugins: [],
};

export default config;
