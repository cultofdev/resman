import { createWebHistory, createRouter } from 'vue-router';
import Home from "@/views/Home.vue";
import Prize from '@/views/Prize.vue';

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/prize",
      name: "Prize",
      component: Prize,
      props: true,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;