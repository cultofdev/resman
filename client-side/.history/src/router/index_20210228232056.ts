import { createWebHistory, createRouter } from 'vue-router';
import Home from "@/views/Home.vue";
import Prize from '@/views/Prize.vue';
import SignUp from '@/views/SignUp.vue';
import SignIn from '@/views/SignIn.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    beforeEnter: routeGuard,
    component: Home,
  },
  {
    path: "/prize",
    name: "Prize",
    beforeEnter: routeGuard,
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
  var isAuthorized = false;

  if(localStorage.getItem('isUserAuthenticated')) {
    isAuthorized = true;
  } else {
    isAuthorized = false;
  }

  if(isAuthorized) {
    next();
  } else {
    next('/signin');
  }
}
  
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;