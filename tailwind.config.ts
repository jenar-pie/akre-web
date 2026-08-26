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
          DEFAULT: "#198782",
          dark: "#12635f",
          light: "#e6f6f5",
          hover: "#157570",
        },
        accent: {
          red: "#D32F2F",
          green: "#2E7D32",
          gold: "#C5A059",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          bg: "#F4F8F8",
          muted: "#F8FAFC",
        },
        text: {
          main: "#142120",
          muted: "#5B6B6A",
        }
      },
      fontFamily: {
        sans: ["Poppins", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        subtle: "0 2px 12px rgba(0, 0, 0, 0.06)",
        card: "0 4px 20px rgba(0, 0, 0, 0.05)",
      }
    },
  },
  plugins: [],
};
export default config;
