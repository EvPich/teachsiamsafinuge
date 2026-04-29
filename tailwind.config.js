/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface:         '#FBF8F0',
        'surface-alt':   '#F2EDE2',
        'surface-inv':   '#2A2119',
        'fg-primary':    '#2A2119',
        'fg-secondary':  '#6B5A49',
        'fg-inv':        '#FFFFFF',
        'fg-muted':      '#9B8A79',
        accent:          '#5A3A28',
        'accent-gold':   '#C9A24D',
        'accent-olive':  '#617043',
        border:          '#DDD3C3',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter:    ['Raleway', 'sans-serif'],
        mono:     ['"Geist Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
