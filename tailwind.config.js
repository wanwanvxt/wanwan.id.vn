import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';
import headlessuiPlugin from '@headlessui/tailwindcss';

const colorsConfig = {
  'color': 'rgb(var(--color)/<alpha-value>)',
  'main': 'rgb(var(--ww-background)/<alpha-value>)',

  'primary': 'rgb(var(--ww-primary)/<alpha-value>)',
  'primary-10': 'rgb(var(--ww-primary-10)/<alpha-value>)',
  'primary-20': 'rgb(var(--ww-primary-20)/<alpha-value>)',

  'status-red': 'rgb(var(--ww-status-red)/<alpha-value>)',
  'status-green': 'rgb(var(--ww-status-green)/<alpha-value>)',
  'status-yellow': 'rgb(var(--ww-status-yellow)/<alpha-value>)',
  'status-blue': 'rgb(var(--ww-status-blue)/<alpha-value>)',
  'status-grey': 'rgb(var(--ww-status-grey)/<alpha-value>)',
  'status-purple': 'rgb(var(--ww-status-purple)/<alpha-value>)',
  'status-indication-blue': 'rgb(var(--ww-status-indication-blue)/<alpha-value>)',
  'danger': 'rgb(var(--ww-danger)/<alpha-value>)',
  'danger-10': 'rgb(var(--ww-danger-10)/<alpha-value>)',
  'danger-20': 'rgb(var(--ww-danger-20)/<alpha-value>)',

  'accent': 'rgb(var(--ww-accent)/<alpha-value>)',
  'accent-10': 'rgb(var(--ww-accent-10)/<alpha-value>)',
  'accent-20': 'rgb(var(--ww-accent-20)/<alpha-value>)',
  'accent-30': 'rgb(var(--ww-accent-30)/<alpha-value>)',
  'accent-40': 'rgb(var(--ww-accent-40)/<alpha-value>)',
  'accent-50': 'rgb(var(--ww-accent-50)/<alpha-value>)',
  'accent-hover': 'rgb(var(--ww-accent-hover)/<alpha-value>)',
  'accent-10-hover': 'rgb(var(--ww-accent-10-hover)/<alpha-value>)',
  'accent-20-hover': 'rgb(var(--ww-accent-20-hover)/<alpha-value>)',
  'accent-30-hover': 'rgb(var(--ww-accent-30-hover)/<alpha-value>)',
  'accent-40-hover': 'rgb(var(--ww-accent-40-hover)/<alpha-value>)',
  'accent-50-hover': 'rgb(var(--ww-accent-50-hover)/<alpha-value>)',
  'accent-active': 'rgb(var(--ww-accent-active)/<alpha-value>)',
  'accent-10-active': 'rgb(var(--ww-accent-10-active)/<alpha-value>)',
  'accent-20-active': 'rgb(var(--ww-accent-20-active)/<alpha-value>)',
  'accent-30-active': 'rgb(var(--ww-accent-30-active)/<alpha-value>)',
  'accent-40-active': 'rgb(var(--ww-accent-40-active)/<alpha-value>)',
  'accent-50-active': 'rgb(var(--ww-accent-50-active)/<alpha-value>)',

  'midTone': 'rgb(var(--ww-midTone)/<alpha-value>)',
  'contrast': 'rgb(var(--ww-contrast-1)/<alpha-value>)'
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ...colorsConfig
      },
      fontFamily: {
        'sans': ['Lexend', ...defaultTheme.fontFamily.sans]
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
