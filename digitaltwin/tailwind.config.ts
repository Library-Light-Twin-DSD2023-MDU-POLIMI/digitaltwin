import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/dashboard/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-pearl': {
          50: '#F3F7FC',
          100: '#E5EFF9',
          200: '#C5D0F2',
          300: '#93C1E6',
          400: '#59A1D7',
          500: '#3486C3',
          600: '#246AA5',
          700: '#1E5586',
          800: '#1D486F',
          900: '#1D3E5D',
          950: '#0D1B2A',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
