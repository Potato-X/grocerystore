import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    children: [
      {
        path: "knowledge",
        children: [
          {
            path: "vue",
            component: () => import("@/views/home/knowledge/vue/index.vue"),
          },
          {
            path: "vuemount",
            component: () =>
              import("@/views/home/knowledge/vuemount/index.vue"),
          },
          {
            path: "reactiveobj",
            component: () =>
              import("@/views/home/knowledge/reactiveobj/index.vue"),
          },
          {
            path: "communication",
            component: () =>
              import("@/views/home/knowledge/communication/index.vue"),
          },
          {
            path: "bind",
            component: () => import("@/views/home/knowledge/bind/index.vue"),
          },
          {
            path: "nexttick",
            component: () =>
              import("@/views/home/knowledge/nexttick/index.vue"),
          },
          {
            path: "observable",
            component: () =>
              import("@/views/home/knowledge/observable/index.vue"),
          },
          {
            path: "permission",
            component: () =>
              import("@/views/home/knowledge/permission/index.vue"),
          },
          {
            path: "proxy",
            component: () => import("@/views/home/knowledge/proxy/index.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (to.hash) {
      console.log("to===>", to);
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
