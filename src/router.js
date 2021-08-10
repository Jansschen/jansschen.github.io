import { createRouter, createWebHashHistory, RouterView } from "vue-router";
// import {} from "vue-router"

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/index/index",
    },
    {
      path: "/index/index",
      component: () => import("./pages/index/index.vue"),
    },
    {
      path: "/richtext/index",
      component: () => import("./pages/richtext/index.vue"),
    },
    {
      path: "/webview/index",
      meta: {
        hideHeader: true,
      },
      component: () => import("./pages/webview/index.vue"),
    },
  ],
});
