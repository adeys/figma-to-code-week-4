import { fontFamily } from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          foreground: '#FFFFFF',
          hover: '#404040',
          'hover-foreground': '#FFFFFF',
          active: '#FFFFFF',
          'active-foreground': '#000000',
        },
        neutral: '#404040'
      },
      fontFamily: {
        sans: ['Sora Variable', ...fontFamily.sans],
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {

    })
  ],
}

