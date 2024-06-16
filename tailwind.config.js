/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'white-primary': "#FAFAFA",
        'black-primary': '#161618',
        'gray-primary': '#27272A',
        'gray-secondary': '#18181B'
      }
    },
  },
  plugins: [],
}

