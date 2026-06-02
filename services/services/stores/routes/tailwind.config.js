/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        primaryDark: "#4F46E5",
        secondary: "#10B981",
        accent: "#F59E0B",
        danger: "#EF4444",
        success: "#22C55E",
        warning: "#F59E0B",

        background: "#F8FAFC",
        surface: "#FFFFFF",

        textDark: "#1E293B",
        textMedium: "#64748B",
        textLight: "#94A3B8",

        border: "#E2E8F0",
      },
    },
  },

  plugins: [],
};
