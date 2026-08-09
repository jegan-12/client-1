/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#85D600',
          lime: '#75a12eff',
          bg: '#E4E2E3',
          dark: '#161616',
          light: '#FEF8E8',
          card: '#FFFFFF',
          slate: '#2D3748'
        }
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        casko: ['"Casko Luxury Demo"', 'sans-serif'],
        clash: ['"Clash Display"', 'sans-serif'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
        priestacy: ['Priestacy', 'cursive'],
        hochland: ['Hochland', 'sans-serif']
      },
      animation: {
        'marquee': 'marquee 22s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' }
        }
      }
    },
  },
  plugins: [],
}
