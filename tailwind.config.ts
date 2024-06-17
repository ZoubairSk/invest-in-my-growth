import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        podkova: ["var(--font-podkova)"],
      },
      colors: {
        blue: "#0177FB",
        black: "#141736",
      },
      backgroundImage: {
        heroContainer: "url('/assets/Homepage/Hero/blueRectangle.svg')",
      },
    },
    plugins: [],
  },
};
export default config;
