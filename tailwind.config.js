/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-bg': '#0f172a',           // Deep Slate Background
        'theme-text-primary': '#f8fafc', // Crisp Off-White
        'theme-text-secondary': '#94a3b8', // Soft Slate Gray
        'theme-accent': '#38bdf8',       // Aerospace Blue
        'theme-border': '#1e293b',       // Faint Border Color
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 10px 30px -10px rgba(56, 189, 248, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}