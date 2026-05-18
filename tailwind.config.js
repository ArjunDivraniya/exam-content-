/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          700: '#4f46e5'
        },
        deep: '#0b1020',
        glass: 'rgba(255,255,255,0.06)'
      },
      backdropBlur: {
        xs: '4px'
      }
    }
  },
  plugins: []
}
