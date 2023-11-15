// .vitepress/config.js
export default {
  titleTemplate: ':title - Pomocný češtinář',
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
      {
        text: 'Čeština',
        items: [
          { text: 'Rozbory', link: '/rozbory/' },
          { text: 'Literatura', link: '/literatura/' },
          { text: 'Slohovky', link: '/slohovky/' }
        ]
      }
    ],
    // Anonymous
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "twitter", link: "/profil" },
      // You can also add custom icons by passing SVG as string:
      //Not working
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: "cool link",
      },
    ],
    //Sidebar
    sidebar: {
      "/rozbory/": [
        {
          text: "Světová a česká lit. 18. st.",
          collapsible: true,
          items: [
            { text: "Důmyslný rytíř don Quijote", link: "/rozbory/" },
            { text: "Lakomec", link: "/rozbory/one" },
          ],
        },
        {
          text: "Světová a česká literatura 19. st.",
          collapsible: false,
          items: [
            { text: "Jáma a kyvadlo", link: "/introduction" },
            { text: "Havran", link: "/getting-started" },
            { text: "Quo vadis?", link: "/getting-started" },
            { text: "Obraz Doriana graye", link: "/getting-started" },
          ],
        },
        {
          text: "Světová literatura 20. a 21. st.",
          collapsible: true,
          items: [
            { text: "Stařec a moře", link: "/introduction" },
            { text: "Na západní frotně klid", link: "/getting-started" },
          ],
        },
      ],
      // is on `config` directory.
      "/config/": [
        {
          text: "Config",
          items: [
            { text: "Index", link: "/config/" },
            { text: "Three", link: "/config/three" },
            { text: "Four", link: "/config/four" },
          ],
        },
      ],
    },

    // Footer
    footer: {
      message: "Vytvořeno s ❤️ pro studenty",
      copyright: "Copyright © 2023 - pomocný češtinář",
    },
  },
};
