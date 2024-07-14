import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      colors: {
        black: {
          thin: '#383838',
        },
        pink: {
          primary: '#fd1c79',
        },
        gray: {
          icon: '#a9a9a9',
          thin: '#00000021',
          medium: '#6c757d',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
