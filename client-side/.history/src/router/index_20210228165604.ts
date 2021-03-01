import { createWebHistory, createRouter } from 'vue-router';
import Home from "@/views/Home.vue";
import Prize from '@/views/Prize.vue';
import SignUp from '@/views/SignUp.vue';

const routes = [
  {
    path: '/',
    component: '',
    children: [
      {
        path: "",
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
    component: SignUp
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