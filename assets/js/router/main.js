import Vue from 'vue';
import VueRouter from 'vue-router'

import Landing from '../views/pages/Landing'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'landing',
        component: Landing
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;