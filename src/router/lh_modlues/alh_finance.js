import Layout from "@/layout";

const alhfinanceRouter = {
  path: "/alhfinance",
  component: Layout,
  redirect: "/alh_finance/expenditure/index",
  meta: { title: "财务管理", icon: "el-icon-s-check" },
  children: [
    {
      path: "expenditure",
      component: () => import("@/views/alh_finance/expenditure/index.vue"),
      name: "expenditure",
      meta: { title: "账户支出" },
    },
    {
      path: "accountsPayable",
      component: () => import("@/views/alh_finance/accountsPayable/index.vue"),
      name: "accountsPayable",
      meta: { title: "应付款" },
    }
  ],
};

export default alhfinanceRouter;
