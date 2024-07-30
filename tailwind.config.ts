import { type Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      textColor: {
        white: 'rgb(var(--text-color))',
        primary: 'rgb(var(--primary-color))',
      },
      backgroundColor: {
        surface: 'rgb(var(--surface-color))',
      },
      borderColor: {
        primary: 'rgb(var(--primary-color))',
        surface: 'rgb(var(--surface-color))',
      },
    },
  },
  plugins: [],
}

export default config
