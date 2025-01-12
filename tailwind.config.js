/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          light: '#60A5FA'
        },
        secondary: {
          success: '#10B981',
          warning: '#FBBF24'
        },
        neutral: {
          dark: '#1F2937',
          light: '#F3F4F6'
        },
        accent: {
          red: '#EF4444',
          purple: '#8B5CF6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}