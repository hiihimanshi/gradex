import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-in-out", 
        moveObject: "moveObject 6s infinite ease-in-out", // New move animation
        spinSlow: "spinSlow 8s linear infinite", // New spin animation
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        moveObject: {
          "0%": { transform: "translateX(100px) translateY(0)" },
          "50%": { transform: "translateX(-100px) translateY(-50px)" },
          "100%": { transform: "translateX(100px) translateY(0)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
} satisfies Config;
