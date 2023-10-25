// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-microcms-module", "@nuxtjs/tailwindcss"],
  microCMS: {
    serviceDomain: process.env.NUXT_ENV_MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.NUXT_ENV_MICROCMS_API_KEY,
  },
  tailwindcss: {
    config: {
      content: [],
      plugins: [tailwindTypography],
    },
  },
});
// as anyでmicroCMSの型定義がないためエラーが出るので回避
