export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: false,
  app: {
    baseURL: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/regiment.member/' : '/'
  },
  router: {
    options: {
      hashMode: true,
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});