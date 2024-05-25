export default defineNuxtConfig({
  devtools: { enabled: true },
  head: {
    title: "Место штрафов",
    meta: [
      {
        name: "description",
        content:
          "Сайт штрафов: уникальный опыт, который предлагает вам всё необходимое для понимания и применения законов и нормативных актов легко и просто.",
        hid: "og:description",
      },
    ],
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "true",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css",
      },
    ],
  },
  css: ["~/assets/main.scss"],
  modules: ["nuxt-icons"],
  app: {
    pageTransition: {
      name: "page",
      mode: "in-out",
    },
  },
});
