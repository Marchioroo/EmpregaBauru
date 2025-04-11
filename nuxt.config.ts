import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

export default defineNuxtConfig({
  modules: ["nuxtjs-naive-ui", "@nuxt/image"],

  css: [
    "@/assets/css/tailwind.css", // Tailwind CSS
  ],

  plugins: [
    "~/plugins/naive-ui.ts", // Plugin para configurar o Naive UI
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()], // Resolver automático para componentes do Naive UI
      }),
    ],
  },

  compatibilityDate: "2025-01-13",
});
