// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt', '@oku-ui/motion-nuxt'],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
  motion: {
    //  autoImportComponents?: boolean
    //  prefix?: string
  },
});
