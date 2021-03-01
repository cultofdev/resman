import { createWebHistory, createRouter } from 'vue-router';
import Home from "@/views/Home.vue";
import Prize from '@/views/Prize.vue';
import Signup from '@/views/Signup.vue';

const routes = [
  {
    path: '/',
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/prize",
        name: "Prize",
        component: Prize,
      },
    ]
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
    // {
    //   path: "/",
    //   name: "Home",
    //   component: Home,
    // },
    // {
    //   path: "/prize",
    //   name: "Prize",
    //   component: Prize,
    // },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;