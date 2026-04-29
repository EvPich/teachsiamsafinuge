/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface:         '#FAFAF7',
        'surface-alt':   '#F0EDE4',
        'surface-inv':   '#1B3A28',
        'fg-primary':    '#1C2B1E',
        'fg-secondary':  '#5C6B56',
        'fg-inv':        '#FFFFFF',
        'fg-muted':      '#8B9688',
        accent:          '#2C5F3E',
        'accent-gold':   '#C9A24D',
        'accent-olive':  '#6B7C4A',
        border:          '#D4CBB8',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter:    ['Inter', 'sans-serif'],
        mono:     ['"Geist Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
