import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import headlessuiPlugin from '@headlessui/tailwindcss';

const colorsConfig = {
  textCol: 'rgb(var(--color)/<alpha-value>)',
  bgCol: 'rgb(var(--ww-background)/<alpha-value>)',

  primary: {
    DEFAULT: 'rgb(var(--ww-primary)/<alpha-value>)',
    10: 'rgb(var(--ww-primary-10)/<alpha-value>)',
    20: 'rgb(var(--ww-primary-20)/<alpha-value>)'
  },

  status: {
    red: 'rgb(var(--ww-status-red)/<alpha-value>)',
    green: 'rgb(var(--ww-status-green)/<alpha-value>)',
    yellow: 'rgb(var(--ww-status-yellow)/<alpha-value>)',
    blue: 'rgb(var(--ww-status-blue)/<alpha-value>)',
    grey: 'rgb(var(--ww-status-grey)/<alpha-value>)',
    purple: 'rgb(var(--ww-status-purple)/<alpha-value>)',
    'indication-blue': 'rgb(var(--ww-status-indication-blue)/<alpha-value>)'
  },

  danger: {
    DEFAULT: 'rgb(var(--ww-danger)/<alpha-value>)',
    10: 'rgb(var(--ww-danger-10)/<alpha-value>)',
    20: 'rgb(var(--ww-danger-20)/<alpha-value>)'
  },

  accent: {
    DEFAULT: 'rgb(var(--ww-accent)/<alpha-value>)',
    10: 'rgb(var(--ww-accent-10)/<alpha-value>)',
    20: 'rgb(var(--ww-accent-20)/<alpha-value>)',
    30: 'rgb(var(--ww-accent-30)/<alpha-value>)',
    40: 'rgb(var(--ww-accent-40)/<alpha-value>)',
    50: 'rgb(var(--ww-accent-50)/<alpha-value>)',
    hover: 'rgb(var(--ww-accent-hover)/<alpha-value>)',
    '10-hover': 'rgb(var(--ww-accent-10-hover)/<alpha-value>)',
    '20-hover': 'rgb(var(--ww-accent-20-hover)/<alpha-value>)',
    '30-hover': 'rgb(var(--ww-accent-30-hover)/<alpha-value>)',
    '40-hover': 'rgb(var(--ww-accent-40-hover)/<alpha-value>)',
    '50-hover': 'rgb(var(--ww-accent-50-hover)/<alpha-value>)',
    active: 'rgb(var(--ww-accent-active)/<alpha-value>)',
    '10-active': 'rgb(var(--ww-accent-10-active)/<alpha-value>)',
    '20-active': 'rgb(var(--ww-accent-20-active)/<alpha-value>)',
    '30-active': 'rgb(var(--ww-accent-30-active)/<alpha-value>)',
    '40-active': 'rgb(var(--ww-accent-40-active)/<alpha-value>)',
    '50-active': 'rgb(var(--ww-accent-50-active)/<alpha-value>)'
  },

  midTone: 'rgb(var(--ww-midTone)/<alpha-value>)',
  contrast: 'rgb(var(--ww-contrast-1)/<alpha-value>)'
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        ...colorsConfig
      },
      fontFamily: {
        'inter': ['Inter', ...defaultTheme.fontFamily.sans],
        'yuruka': ['Yuruka', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        'grid-areas': (value) => {
          if (value === '') return '';

          const areasList = value.split(',');
          return { 'grid-template-areas': areasList.map((areas) => `"${areas}"`).join(' ') };
        },
        'area': (value) => {
          return { 'grid-area': value };
        }
      });
    }),
    headlessuiPlugin({ prefix: 'ui' })
  ]
};
