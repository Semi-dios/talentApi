import Vue from 'vue';
import VueRouter from 'vue-router'

import Landing from '../views/pages/Landing'
import Dashboard from '../views/Dashboard'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'landing',
        component: Landing
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
 
  
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;