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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      keyframes: {
        loading: {
          "0%": {
            transform: "translateX(-100%) scaleX(0.7)",
          },
          "100%": {
            transform: "translateX(100%) scaleX(0.1)",
          },
        },
        slideInTop: {
          "0%": {
            transform: "translateY(-100%)", // Start above the screen
            opacity: 0, // Hidden initially
          },
          "100%": {
            transform: "translateY(0)", // Slide into place
            opacity: 1, // Fully visible
          },
        },
      },
      animation: {
        loading: "loading 2s infinite linear",
        slideInTop: "slideInTop 0.5s ease-out forwards", // Custom slide-in animation
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
