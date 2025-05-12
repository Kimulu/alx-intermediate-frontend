/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // For any HTML or JS inside the src folder
    "./*.html", // For any HTML file directly in the root (e.g., 1-index.html)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
