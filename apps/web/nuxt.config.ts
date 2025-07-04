// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  components: [
    '~/components',
    '~/components/base',
    '~/components/layout',
    '~/components/features',
  ],
  runtimeConfig: {
    public: {
      sitename: process.env.NUXT_PUBLIC_SITE_NAME || 'My Turborepo Site',
    },
  },
});
