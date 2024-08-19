import Layout from "@/layout";

const alhchecklistRouter = {
  path: "/alhchecklist",
  component: Layout,
  redirect: "/alh_checklist/inbound/index",
  meta: { title: "质检管理", icon: "el-icon-s-check" },
  children: [
    {
      path: "inbound",
      component: () => import("@/views/alh_checklist/inbound/index.vue"),
      name: "inbound",
      meta: { title: "成品入库" },
    },
    {
      path: "outbound",
      component: () => import("@/views/alh_checklist/outbound/index.vue"),
      name: "outbound",
      meta: { title: "成品出库" },
    }
  ],
};

export default alhchecklistRouter;
