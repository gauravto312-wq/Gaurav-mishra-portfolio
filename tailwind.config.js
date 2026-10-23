/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0D14',
          card: '#111622',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: '#161D2D',
          muted: '#8B949E',
        },
        brand: {
          accent: '#10B981', // Clean refined emerald
          accentHover: '#059669',
          accentMuted: 'rgba(16, 185, 129, 0.12)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
