/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f4f6fb',
          100: '#e8ecf6',
          200: '#c9d2e8',
          300: '#9fabd4',
          400: '#7186ba',
          500: '#52689e',
          600: '#425382',
          700: '#38446a',
          800: '#313a57',
          900: '#2f344b',
          950: '#171a2b',
        },
      },
    },
  },
  plugins: [],
};
