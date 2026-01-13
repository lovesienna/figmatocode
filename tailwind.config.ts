import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#FFFFFF",
        "bg-secondary": "#FAFAFA",
        "bg-tertiary": "#F1F1F2",
        "content-primary": "#09090B",
        "content-secondary": "#71717A",
        "content-tertiary": "#A1A1AA",
        "border-primary": "#E4E4E7",
        "border-secondary": "#D4D4D8",
        "accent-green": "#14B8A6",
        "accent-green-soft": "#CCFBF1",
        "accent-indigo": "#6366F1",
        "accent-indigo-soft": "#E0E7FF",
        "accent-rose": "#F43F5E",
        "accent-rose-soft": "#FFE4E6",
        "accent-amber": "#F59E0B",
        "accent-emerald": "#22C55E"
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 40, 0.06)"
      },
      fontSize: {
        "xxs": ["0.625rem", { lineHeight: "0.875rem" }]
      }
    }
  },
  plugins: []
};

export default config;
