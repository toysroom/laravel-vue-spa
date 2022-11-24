import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store/index";
import auth from "@/middleware/auth";
import admin from "@/middleware/admin";
import guest from "@/middleware/guest";
import middlewarePipeline from "@/router/middlewarePipeline";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "home" */ "../views/HomeView"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: { middleware: [auth] },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/DashboardView"),
  },
  {
    path: "/user",
    name: "user",
    meta: { middleware: [auth] },
    component: () => import(/* webpackChunkName: "user" */ "../views/UserView"),
  },
  {
    path: "/users",
    name: "users",
    meta: { middleware: [auth, admin] },
    component: () => import(/* webpackChunkName: "users" */ "../views/UsersView"),
  },
  {
    path: "/login",
    name: "login",
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "login" */ "../views/LoginView"),
  },
  {
    path: "/register",
    name: "register",
    meta: { middleware: [guest] },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/RegisterView"),
  },
  {
    path: "/reset-password",
    name: "resetPassword",
    meta: { middleware: [guest] },
    component: () =>
      import(/* webpackChunkName: "reset-password" */ "../views/ResetPasswordView"),
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    meta: { middleware: [guest] },
    component: () =>
      import(
        /* webpackChunkName: "forgot-password" */ "../views/ForgotPasswordView"
      ),
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFoundView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
})

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware;
  const context = { to, from, next, store };

  if (!middleware) {
    return next();
  }

  middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
