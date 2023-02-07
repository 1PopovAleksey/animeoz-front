import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/new",
      name: "new",
      component: () => import("../views/NewView.vue"),
    },
  ],
});

export default router;
