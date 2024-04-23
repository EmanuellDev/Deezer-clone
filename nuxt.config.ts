import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@ant-design-vue/nuxt", "@nuxtjs/google-fonts", "@nuxt/image"],
  googleFonts: {
    families: {
      Roboto: true,
      Inter: true,
      Arial: true,
      "Manrope+Sans": true,
    },
  },
  app: {
    head: {
      title: "Deezer clone",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [{ name: "description", content: "shopp" }],
    },
  },
});