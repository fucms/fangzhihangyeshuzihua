import Layout from "@/layout";

const alhpurchaseRouter = {
  path: "/alhpurchase",
  component: Layout,
  redirect: "/alh_purchase/purchasePrice/index",
  meta: { title: "采购管理", icon: "el-icon-s-check" },
  children: [
    {
      path: "purchasePrice",
      component: () => import("@/views/alh_purchase/purchasePrice/index.vue"),
      name: "purchasePrice",
      meta: { title: "采购单价" },
    },
    {
      path: "buyingRequisition",
      component: () => import("@/views/alh_purchase/buyingRequisition/index.vue"),
      name: "buyingRequisition",
      meta: { title: "请购单" },
    },
    {
      path: "arrivalOfGoods",
      component: () => import("@/views/alh_purchase/arrivalOfGoods/index.vue"),
      name: "arrivalOfGoods",
      meta: { title: "采购订单" },
    },
    {
      path: "warehousing",
      component: () => import("@/views/alh_purchase/warehousing/index.vue"),
      name: "warehousing",
      meta: { title: "到货登记" },
    }
  ],
};

export default alhpurchaseRouter;
