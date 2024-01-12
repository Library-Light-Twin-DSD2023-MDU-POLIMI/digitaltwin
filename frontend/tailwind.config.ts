import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    '**/*.tsx',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    }
  },
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {}, 
          colors: {
            background: '#dff1fe',
            foreground: '#093343', 
            primary: {
              50: '#f0f9fe',
              100: '#dff1fe',
              200: '#bae6fc',
              300: '#7cd3fc',
              400: '#37bcf8',
              500: '#0ba5e9',
              600: '#0084c7',
              700: '#0d7490',
              800: '#155e75',
              900: '#164e63',
              DEFAULT: '#f0f9fe',
              foreground: '#093343'
            },
            focus: '#38bdf8'
           }, 
        },
        dark: {
          layout: {}, 
          colors: {
            background: '#155e75',
            foreground: '#ffffff',
            primary: {
              50: '#164e63',
              100: '#155e75',
              200: '#0d7490',
              300: '#0084c7',
              400: '#0ba5e9',
              500: '#37bcf8',
              600: '#7cd3fc',
              700: '#bae6fc',
              800: '#dff1fe',
              900: '#f0f9fe',
              DEFAULT: '#164e63',
              foreground: '#ffffff'
            },
            focus: '#3b81f6'
           },
        },
        modern: {
          extend: 'dark', 
          colors: {
            background: '#0D001A',
            foreground: '#ffffff',
            primary: {
              50: '#3B096C',
              100: '#520F83',
              200: '#7318A2',
              300: '#9823C2',
              400: '#c031e2',
              500: '#DD62ED',
              600: '#F182F6',
              700: '#FCADF9',
              800: '#FDD5F9',
              900: '#FEECFE',
              DEFAULT: '#DD62ED',
              foreground: '#ffffff'
            },
            focus: '#3b81f6'
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '1px',
              medium: '2px',
              large: '4px'
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px'
            },
          },
        },
      },
    }),
  ],
};
export default config
