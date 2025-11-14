import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Emerald Green
        "primary-green": "var(--color-primary-green)",
        "primary-green-90": "var(--color-primary-green-90)",
        "primary-green-80": "var(--color-primary-green-80)",
        "primary-green-70": "var(--color-primary-green-70)",
        "primary-green-60": "var(--color-primary-green-60)",
        "primary-green-50": "var(--color-primary-green-50)",
        "primary-green-35": "var(--color-primary-green-35)",
        "primary-green-25": "var(--color-primary-green-25)",
        "primary-green-15": "var(--color-primary-green-15)",

        // Primary Colors - Nile Blue
        "primary-blue": "var(--color-primary-blue)",
        "primary-blue-90": "var(--color-primary-blue-90)",
        "primary-blue-80": "var(--color-primary-blue-80)",
        "primary-blue-70": "var(--color-primary-blue-70)",
        "primary-blue-60": "var(--color-primary-blue-60)",
        "primary-blue-50": "var(--color-primary-blue-50)",
        "primary-blue-35": "var(--color-primary-blue-35)",
        "primary-blue-25": "var(--color-primary-blue-25)",
        "primary-blue-15": "var(--color-primary-blue-15)",

        // Primary Colors - Blue
        blue: "var(--color-blue)",
        "blue-70": "var(--color-blue-70)",
        "blue-50": "var(--color-blue-50)",

        // Secondary Colors - Pinks
        "light-rose": "var(--color-light-rose)",
        "dark-rose": "var(--color-dark-rose)",
        fire: "var(--color-fire)",
        "access-persimon": "var(--color-access-persimon)",

        // Secondary Colors - Neutrals
        state: "var(--color-state)",
        porcelain: "var(--color-porcelain)",
        "off-white": "var(--color-off-white)",
        "golden-flow": "var(--color-golden-flow)",

        // Secondary Colors - Greens
        "pine-green": "var(--color-pine-green)",
        "sea-green": "var(--color-sea-green)",
        "spark-green": "var(--color-spark-green)",

        // Feedback Colors
        "success-light": "var(--color-success-light)",
        "success-dark": "var(--color-success-dark)",
        "error-light": "var(--color-error-light)",
        "error-dark": "var(--color-error-dark)",
        "info-light": "var(--color-info-light)",
        "info-dark": "var(--color-info-dark)",
        "warning-light": "var(--color-warning-light)",
        "warning-dark": "var(--color-warning-dark)",

        // Other System Colors
        "link-blue": "var(--color-link-blue)",
        "water-sector": "var(--color-water-sector)",
        "energy-sector": "var(--color-energy-sector)",
        "agriculture-sector": "var(--color-agriculture-sector)",
        "logistics-packaging": "var(--color-logistics-packaging)",
        "advanced-materials-sector": "var(--color-advanced-materials-sector)",
        "rejected-assessment-status": "var(--color-rejected-assessment-status)",
        "very-light-grey": "var(--color-very-light-grey)",
        "business-potential": "var(--color-business-potential)",
        "attractiveness-transaction": "var(--color-attractiveness-transaction)",
        "blue-other": "var(--color-blue-other)",
        "dark-blue": "var(--color-dark-blue)",

        // Disabled States
        "disabled-dark": "var(--color-disabled-dark)",
        "disabled-light": "var(--color-disabled-light)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
