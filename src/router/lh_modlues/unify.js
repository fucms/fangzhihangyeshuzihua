import Layout from "@/layout";

const unifyRouter = {
  path: "/alh_unify",
  component: Layout,
  redirect: "/alh_unify/index",
  meta: { title: "统一用户管理系统", icon: "el-icon-s-check" },
  children: [
    {
      path: "menhu",
      component: () => import("@/views/alh_unify/menhu"),
      name: "menhu",
      meta: { title: "统一门户管理" },
    },
    {
      path: "zhanghao_unify",
      component: () => import("@/views/alh_unify/zhanghao_unify"),
      name: "zhanghao_unify",
      meta: { title: "统一账号管理" },
    },
    {
      path: "zhanghao",
      component: () => import("@/views/alh_unify/zhanghao"),
      name: "zhanghao",
      meta: { title: "账号管理" },
    },
    {
      path: "zuzhi",
      component: () => import("@/views/alh_unify/zuzhi/index.vue"),
      name: "zuzhi",
      meta: { title: "统一组织管理" },
      redirect: "/alh_unify/zuzhi/zuzhi_other/index.vue",
      children: [
        {
          path: "zuzhi_other",
          component: () =>
            import("@/views/alh_unify/zuzhi/zuzhi_other/index.vue"),
          name: "zuzhi_other",
          meta: { title: "组织管理" },
        },
        {
          path: "zuzhi_message",
          component: () => import("@/views/alh_unify/zuzhi/zuzhi_message/index.vue"),
          name: "zuzhi_message",
          meta: { title: "岗位信息管理" },
        },
      ],
    },
  ],
};

export default unifyRouter;
