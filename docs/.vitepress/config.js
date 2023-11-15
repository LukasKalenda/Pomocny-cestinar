// .vitepress/config.js
export default {
  title: "Pomocný češtinár",
  description: "Rozbory díla k maturitě a čeština pro střední školy",
  lang: "cs-CZ",
  rewrites: {
    "packages/:pkg/src/(.*)": ":pkg/index.md",
  },

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Pomocný češtinář",

    nav: [
      { text: "Projekt", link: "/projekt" },
      { text: "Pro školy", link: "/pro-skoly" },
      { text: "Vytvořit rozbor", link: "/vytvorit-rozbor" },
      { text: "Changelog", link: "https://github.com/Evavic44" },
    ],
    // Anonymous
    socialLinks: [
      { icon: "/user.svg", link: "/neco" },
      { icon: "github", link: "https://github.com/Evavic44/adocs" },
    ],
    //Sidebar
    sidebar: [
      {
        text: "Section A",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Section B",
        collapsible: false,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Section C",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],

    // Footer
    footer: {
      message: "Vytvořeno s ❤️ pro studenty",
      copyright: "Copyright © 2023 - pomocný češtinář",
    },
  },
};
