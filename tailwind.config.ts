import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background color
        foreground: "var(--foreground)", // Custom foreground color
      },

      keyframes: {
        loading: {
          "0%": {
            transform: "translateX(-100%) scaleX(0.7)", // Start big
          },
          "100%": {
            transform: "translateX(100%) scaleX(0.1)", // End smaller
          },
        },
      },
      animation: {
        loading: "loading 2s infinite linear", // Custom loading animation
      },
    },
  },
  plugins: [],
};

export default config;
