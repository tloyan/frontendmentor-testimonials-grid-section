import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "hsl(263, 55%, 52%)",
          2: "hsl(217, 19%, 35%)",
          3: "hsl(219, 29%, 14%)",
        },
        neutral: {
          1: "hsl(0, 0%, 81%)",
          2: "hsl(210, 46%, 95%)",
        }
      },
      fontSize: {
        '2.75': '0.688rem',
        '3.25': '0.813rem',
      },
      fontFamily: {
        sans: "var(--font-barlow)"
      }
    },
  },
  plugins: [],
};
export default config;
