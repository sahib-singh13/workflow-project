
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom primary color to match the design
        primary: {
          DEFAULT: '#4A3AFF', // The main vibrant blue
          light: '#F0EEFF',   // A light purple for backgrounds/hovers
        },
        'light-bg': '#F7F8FA', // The main background color for the content area
      },
    },
  },
  plugins: [],
}