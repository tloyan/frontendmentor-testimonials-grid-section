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
          4: "hsl(264, 82%, 70%)",
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
      },
      boxShadow: {
        "card": "40px 60px 50px -47px rgba(72, 85, 106, .2474)"
      },
      backgroundImage: {
        'quotation-pattern': "url('/bg-pattern-quotation.svg')",
       }
    },
  },
  plugins: [],
};
export default config;
