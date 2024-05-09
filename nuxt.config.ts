// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-headlessui'],

  postcss: {
    plugins: {
      'postcss-import': {},
      'postcss-mixins': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  headlessui: { prefix: 'ui' },

  typescript: { typeCheck: true },

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono' }
      ],
      htmlAttrs: { 'data-theme': 'system' }
    },
    rootId: 'app'
  },

  nitro: {
    preset: 'cloudflare-pages'
  }
});
