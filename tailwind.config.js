/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        subtitle: ['"Roboto Flex"', 'sans-serif'],
        lexend: ['"Lexend"', 'sans-serif'],
        'lexend-deca': ['"Lexend Deca"', 'sans-serif'],
        zalando: ['"Zalando Sans Expanded"', 'sans-serif'], // Fallback needed if not available
        hand: ['"Delius"', 'cursive'],
        script: ['"Updock"', 'cursive'],
      },
      colors: {
        background: '#0a0a0a',
        surface: '#121212',
        primary: '#ffffff',
        secondary: '#a1a1aa',
        accent: '#3b82f6',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
