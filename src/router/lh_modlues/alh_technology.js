import Layout from "@/layout";

const alhtechnologyRouter = {
  path: "/alhtechnology",
  component: Layout,
  redirect: "/alh_technology/index",
  meta: { title: "物料管理", icon: "el-icon-s-check" },
  children: [
    {
      path: "alh_technology",
      component: () => import("@/views/alh_technology/index.vue"),
      name: "alh_technology",
      meta: { title: "物料管理" },
    }
  ],
};

export default alhtechnologyRouter;
