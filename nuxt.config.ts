export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/icon",
    "nuxt-highcharts",
  ],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  app: {
    baseURL: "/web-app-dashboard/",
    buildAssetsDir: "assets",
  },

  compatibilityDate: "2024-09-23",
});
