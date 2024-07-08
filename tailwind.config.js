import defaultConfig from 'tailwindcss/defaultConfig';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', ...defaultConfig.theme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
