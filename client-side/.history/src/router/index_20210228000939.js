import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/prize/:id',
            name: 'prize-details',
            component: () => import('../components/Prize')
        }
    ]
})