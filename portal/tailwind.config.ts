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
        // Primary palette - Cyan/Blue (WCAG AAA compliant)
        primary: {
          DEFAULT: '#22D3EE', // cyan-400 - high contrast on dark bg
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63'
        },
        // Role-based accent colors
        role: {
          executive: '#E879F9',    // fuchsia-400
          compliance: '#3B82F6',   // blue-500
          equity: '#10B981',       // emerald-500
          quality: '#F59E0B',      // amber-500
          clinical: '#EF4444',     // red-500
          digital: '#8B5CF6'       // violet-500
        },
        // Semantic colors
        success: '#22C55E',        // green-500
        warning: '#F59E0B',        // amber-500
        error: '#EF4444',          // red-500
        info: '#3B82F6',           // blue-500
        // Glass morphism tokens
        glass: {
          bg: 'rgba(15, 23, 42, 0.6)',        // slate-900/60
          'bg-light': 'rgba(30, 41, 59, 0.4)', // slate-800/40
          border: 'rgba(148, 163, 184, 0.1)',  // slate-400/10
          hover: 'rgba(51, 65, 85, 0.5)'       // slate-700/50
        }
      },
      backdropBlur: {
        xs: '2px'
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(34, 211, 238, 0.15)',
        'glow': '0 0 40px rgba(34, 211, 238, 0.25), 0 0 80px rgba(34, 211, 238, 0.1)',
        'glow-lg': '0 0 60px rgba(34, 211, 238, 0.3), 0 0 100px rgba(34, 211, 238, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5), 0 2px 8px 0 rgba(0, 0, 0, 0.3)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)'
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(203 213 225)',     // slate-300
            '--tw-prose-headings': 'rgb(248 250 252)', // slate-50
            '--tw-prose-links': 'rgb(34 211 238)',     // cyan-400
            '--tw-prose-bold': 'rgb(241 245 249)',     // slate-100
            '--tw-prose-code': 'rgb(34 211 238)',      // cyan-400
            '--tw-prose-pre-bg': 'rgb(15 23 42)',      // slate-900
            '--tw-prose-quotes': 'rgb(148 163 184)',   // slate-400
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
