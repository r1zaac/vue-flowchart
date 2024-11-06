import { createRouter, createWebHistory } from "vue-router";
import FlowChartPage from "@/views/FlowChartPage.vue";

const routes = [
  { path: "/", name: "FlowChart", component: FlowChartPage },
  { path: "/node/:id", name: "NodeDetails", component: FlowChartPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
