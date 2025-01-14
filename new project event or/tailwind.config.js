/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        GreatVibes: ["Great Vibes", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      width: {
        23: "23%",
      },
    },
  },
  plugins: [],
};
