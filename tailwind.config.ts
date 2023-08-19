import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'desktop': '1536px',
      'laptop': '1280px',
      'tablet': '960px',
      'mobile': '480px'
    },
    colors: {
      'primary': '',
      'secondary': '',
      'dark': '#0F172A',
      'light': '#F8FAFC',
      'grey': '',
    }
  },
  plugins: [],
}
export default config
