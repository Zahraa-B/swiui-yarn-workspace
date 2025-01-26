/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to all your components and screens
  ],
  theme: {
    extend: {},
  },
  plugins: [require("nativewind")],
};
