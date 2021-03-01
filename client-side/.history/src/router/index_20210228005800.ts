import Vue from 'vue';
import Router from 'vue-router';

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home.vue')
        }
    ]
})