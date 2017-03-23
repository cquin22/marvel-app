import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './HomeApp.vue';
import Error from './404.vue';
Vue.use(VueRouter);

/**
 * The routes of the application
 * @author: <cristianqr22@gmail.com> Cristian Quintero
 * @date: 03 - 19 - 2017
*/

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '*',
            name: 'error',
            component: Error
        }
    ]
});


export default router