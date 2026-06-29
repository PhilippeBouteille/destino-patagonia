/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fjord: {
          900: "#0E2A30",
          700: "#1B4A52",
          400: "#3E7A82",
        },
        glacier: {
          400: "#6FB3B8",
          200: "#BFE0E1",
        },
        ice: {
          100: "#EAF3F2",
          50: "#F6FAF9",
        },
        rock: {
          600: "#8C7A63",
          400: "#B3A286",
        },
        slate: {
          600: "#3A4A4D",
          500: "#51666B",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)"],
        body: ["var(--font-poppins)"],
        mono: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
