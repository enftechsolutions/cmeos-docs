/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './theme.config.tsx',
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        background: 'oklch(0.98 0.01 260)',
        foreground: 'oklch(0.25 0.02 260)',
        brand: {
          primary: 'oklch(0.45 0.15 260)',
          secondary: 'oklch(0.85 0.10 160)',
        },
        ui: {
          label: 'oklch(0.50 0.02 260)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        headings: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'Menlo', 'Consolas'],
      },
      borderRadius: {
        'brand': '1.5rem', // example for 2xl/3xl mix
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require("tailwindcss-animate"),
  ],
}
