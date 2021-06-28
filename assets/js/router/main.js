import Vue from 'vue';
import VueRouter from 'vue-router'

import Landing from '../views/pages/Landing'
import Dashboard from '../views/Dashboard'
import store from '../store/main'

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
        component: Dashboard,
        meta: { requiresAuth: true },
        beforeEach: (to,from,next)=> {
            if(!store.getters['auth/isAuthenticated']){
                return next({
                    name: 'landing'
                })

            }
            next()
        }
    },
 
  
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;