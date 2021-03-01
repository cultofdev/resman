import { createRouter, createWebHistory } from "../../node_modules/vue-router/types"
import Home from "@/views/Home.vue";

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;