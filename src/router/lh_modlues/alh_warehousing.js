import Layout from "@/layout";

const sendOutGoodsRouter = {
  path: "/sendOutGoods",
  component: Layout,
  redirect: "/sendOutGoods/index",
  meta: { title: "仓储管理", icon: "el-icon-s-check" },
  children: [
    {
      path: "sendOutGoods",
      component: () => import("@/views/alh_warehousing/sendOutGoods/index.vue"),
      name: "sendOutGoods",
      meta: { title: "发货登记" },
    },
    {
      path: "inWarehous",
      component: () => import("@/views/alh_warehousing/inWarehous/index.vue"),
      name: "inWarehous",
      meta: { title: "入库单" },
    },
    {
      path: "outWarehous",
      component: () => import("@/views/alh_warehousing/outWarehous/index.vue"),
      name: "outWarehous",
      meta: { title: "出库单" },
    }
  ],
};

export default sendOutGoodsRouter;
