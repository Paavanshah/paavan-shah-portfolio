/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // We will default to a dark theme
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Blueprint Theme Color Palette
      colors: {
        'theme-bg': '#0a192f',       // Dark Navy Blue
        'theme-text-primary': '#ccd6f6', // Light Slate
        'theme-text-secondary': '#8892b0', // Slate Gray
        'theme-accent': '#64ffda',       // Bright Cyan/Mint
        'theme-border': '#172a45',    // Lighter Navy for borders
      },
      fontFamily: {
        // Set Roboto Mono as the primary font
        sans: ['Roboto Mono', 'monospace'],
      },
      // Add a subtle glow effect
      boxShadow: {
        'glow': '0 0 15px rgba(100, 255, 218, 0.3)',
      },
    },
  },
  plugins: [],
}