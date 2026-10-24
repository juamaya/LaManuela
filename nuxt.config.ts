import tailwindcss from "@tailwindcss/vite";

const baseURL = (globalThis as typeof globalThis & {
  process?: { env?: Record<string, string | undefined> };
}).process?.env?.NUXT_APP_BASE_URL || "/";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: {
    enabled: false,
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    baseURL,

    head: {
      title: "La Manuela | Café-Bar",
      meta: [
        {
          name: "description",
          content:
            "Disfruta del mejor café, tapas y buenos momentos en La Manuela Café-Bar.",
        },
      ],
    },
  },
});
