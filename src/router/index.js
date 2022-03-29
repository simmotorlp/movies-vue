import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/Pages/Home.vue'
import About from '/src/Pages/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
