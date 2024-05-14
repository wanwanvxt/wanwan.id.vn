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
      htmlAttrs: { 'data-theme': 'system' }
    },
    rootId: 'app'
  },

  nitro: {
    preset: 'cloudflare-pages'
  }
});
