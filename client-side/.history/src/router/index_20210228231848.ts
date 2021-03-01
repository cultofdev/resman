import { createWebHistory, createRouter } from 'vue-router';
import Home from "@/views/Home.vue";
import Prize from '@/views/Prize.vue';
import SignUp from '@/views/SignUp.vue';
import SignIn from '@/views/SignIn.vue';

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
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }
];

function routeGuard(to: any, from: any, next: any) {
  let isAuthorized: boolean;

  if(localStorage.getItem('isUserAuthenticated')) {
    isAuthorized = true;
  } else {
    isAuthorized = false;
  }
}
  
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;