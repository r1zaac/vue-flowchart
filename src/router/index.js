import { createRouter, createWebHistory } from "vue-router";
import FlowChartPage from "@/views/FlowChartPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "FlowChart",
      component: FlowChartPage,
    },
  ],
});

export default router;
