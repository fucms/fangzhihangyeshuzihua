import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
/* Layout */
import Layout from "@/layout";
/* Router Modules */
// import DocumentationRouter from "./modules/documentation"; //基础信息

// import AddressRouter from "./lh_modlues/address";
// import unifyRouter from "./lh_modlues/unify";
import alhSystemRouter from "./lh_modlues/alh_system";
import alhsaleRouter from "./lh_modlues/alh_sale";
import alhplanRouter from "./lh_modlues/alh_plan";
import alhpurchaseRouter from "./lh_modlues/alh_purchase";
import alhtechnologyRouter from "./lh_modlues/alh_technology";
import alhchecklistRouter from "./lh_modlues/alh_checklist";
import sendOutGoodsRouter from "./lh_modlues/alh_warehousing";
import alhfinanceRouter from "./lh_modlues/alh_finance";

// constantRoutes 没有权限的基页，所有角色都可以查看
export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/auth-redirect",
    component: () => import("@/views/login/auth-redirect"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404"),
    hidden: true,
  },
  {
    path: "/401",
    component: () => import("@/views/error-page/401"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index"),
        name: "Dashboard",
        meta: { title: "首页", icon: "el-icon-s-home", affix: true },
      },
    ],
  },
  {
    path: "/profile",
    component: Layout,
    redirect: "/profile/index",
    hidden: true,
    children: [
      {
        path: "index",
        component: () => import("@/views/profile/index"),
        name: "Profile",
        meta: { title: "个人概要", icon: "user", noCache: true },
      },
    ],
  },
];
// asyncRoutes 需要根据用户角色动态加载的路由
export const asyncRoutes = [
  // DocumentationRouter,
  alhSystemRouter,
  alhsaleRouter,
  alhplanRouter,
  alhpurchaseRouter,
  alhtechnologyRouter,
  alhchecklistRouter,
  sendOutGoodsRouter,
  alhfinanceRouter,
  // AddressRouter,
  // unifyRouter,
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
