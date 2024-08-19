import Layout from "@/layout";

const alhsaleRouter = {
  path: "/alhsale",
  component: Layout,
  redirect: "/alh_sale/saleDetails/index",
  meta: { title: "订单管理", icon: "el-icon-s-check" },
  children: [
    {
      path: "saleDetails",
      component: () => import("@/views/alh_sale/saleDetails/index.vue"),
      name: "saleDetails",
      meta: { title: "订单管理" },
    },
    {
      path: "priceDetails",
      component: () => import("@/views/alh_sale/priceDetails/index.vue"),
      name: "priceDetails",
      meta: { title: "销售发票" },
    },
    {
      path: "otherDetails",
      component: () => import("@/views/alh_sale/otherDetails/index.vue"),
      name: "otherDetails",
      meta: { title: "其他销售单" },
    },
  ],
};

export default alhsaleRouter;
