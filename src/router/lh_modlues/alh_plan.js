import Layout from "@/layout";

const alhplanRouter = {
  path: "/alhplan",
  component: Layout,
  redirect: "/alh_plan/systemDeatils/index",
  meta: { title: "计划管理", icon: "el-icon-s-check" },
  children: [
    {
      path: "systemDeatils",
      component: () => import("@/views/alh_plan/systemDeatils/index.vue"),
      name: "systemDeatils",
      meta: { title: "销售订单" },
    },
    {
      path: "planImportDetails",
      component: () => import("@/views/alh_plan/planImportDetails/index.vue"),
      name: "planImportDetails",
      meta: { title: "预计订单" },
    },
    {
      path: "rated",
      component: () => import("@/views/alh_plan/rated/index.vue"),
      name: "rated",
      meta: { title: "额定产能" },
    },
    {
      path: "mainTask",
      component: () => import("@/views/alh_plan/mainTask/index.vue"),
      name: "mainTask",
      meta: { title: "主任务" },
    },
    {
      path: "productionTasks",
      component: () => import("@/views/alh_plan/productionTasks/index.vue"),
      name: "productionTasks",
      meta: { title: "生产任务单" },
    },
    {
      path: "dispatch",
      component: () => import("@/views/alh_plan/dispatch/index.vue"),
      name: "dispatch",
      meta: { title: "派工单" },
    },
    {
      path: "unqualified",
      component: () => import("@/views/alh_plan/unqualified/index.vue"),
      name: "unqualified",
      meta: { title: "不合格评审" },
    },
  ],
};

export default alhplanRouter;
