import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/clanky/1",
      name: "article",
      component: () => import("../views/OneArticleView.vue"),
    },
    {
      path: "/kontakt",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("../views/FAQView.vue"),
    },
    {
      path: "/prihlaseni",
      name: "signin",
      component: () => import("../views/SignInView.vue"),
    },
    {
      path: "/registrace",
      name: "signup",
      component: () => import("../views/SignUpView.vue"),
    },
    {
      path: "/profil",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/projekt",
      name: "project",
      component: () => import("../views/ProjectView.vue"),
    },
    {
      path: "/vytvorit-rozbor",
      name: "addbook",
      component: () => import("../views/AddBookView.vue"),
    },
    {
      path: "/literatura",
      name: "literature",
      component: () => import("../views/LiteratureView.vue"),
    },
    // 404
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if user is logged in
    const user = await getCurrentUser();
    if (user) {
      // Uživatel je přihlášen, pokračujeme
      next();
    } else {
      // Uživatel není přihlášen, přesměrujeme na stránku přihlášení
      alert("You must be logged in to see this page.");
      next({ name: "signin" });
    }
  } else {
    // Tato cesta nevyžaduje autentizaci, takže pokračujeme
    next();
  }
});

export default router;
