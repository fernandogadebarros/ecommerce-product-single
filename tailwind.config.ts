import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xl: '1440px',
        lg: '1200px',
        md: '900px',
        sm: '100%',
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
      fontFamily: {
        kumb: ['var(--font-kumb)', 'sans-serif'],
      },
      colors: {
        primary: {
          orange: '#FF7D1A',
          'pale-orange': '#FFEDE0',
        },
        neutral: {
          darkest: '#1D2026',
          'darkest-blue': '#1D2025',
          'dark-gray': '#68707D',
          'light-gray': '#B6BCC8',
          'lightest-gray': '#F7F8FD',
          gray: '#69707D',
          white: '#FFFFFF',
          black: '#000000',
        },
      },
    },
  },
  plugins: [],
}
export default config
