// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-microcms-module", "@nuxtjs/tailwindcss"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  tailwindcss: {
    config: {
      content: [],
      plugins: [tailwindTypography],
    },
  },
});

console.log("MICROCMS_SERVICE_DOMAIN:", process.env.MICROCMS_SERVICE_DOMAIN);
console.log("MICROCMS_API_KEY:", process.env.MICROCMS_API_KEY);

// as anyでmicroCMSの型定義がないためエラーが出るので回避
