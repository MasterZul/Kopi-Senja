import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-nunito)', 'sans-serif'],
      },
      colors: {
        cream: '#F8EDD9',
        'cream-dark': '#EDD5B3',
        'coffee-light': '#C8955C',
        'coffee-mid': '#8B5E30',
        'coffee-dark': '#3D1F0D',
        'coffee-black': '#160800',
        golden: '#D4822A',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
export default config
