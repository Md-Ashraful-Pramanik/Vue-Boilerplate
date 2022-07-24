import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: function () {
            return import('../views/About.vue')
        }
    },
    {
        path: '/notifications',
        name: 'notification',
        component: function () {
            return import('../views/Notifications.vue')
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
