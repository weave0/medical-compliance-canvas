import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#76E4F7',
        accent: '#B794F4'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}
