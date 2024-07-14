import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      colors: {
        black: {
          thin: "#383838",
          medium: "#212529",
        },
        pink: {
          primary: "#fd1c79",
          second: "#da3b85",
        },
        gray: {
          icon: "#a9a9a9",
          thin: "#00000021",
          medium: "#6c757d",
          base: "#373b4d",
          primary: "#8e8987",
        },
        smoke: {
          primary: "#f5f1f2",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lora: ["var(--font-lora)", "sans-serif"],
        catamaran: ["var(--font-catamaran)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
