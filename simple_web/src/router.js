import { createRouter, createWebHistory } from 'vue-router'
import About from './components/About.vue'
import News from './components/News.vue'
import FeaturedDishes from './components/FeaturedDishes.vue'
import Menu from './components/Menu.vue'
import Reservation from './components/Reservation.vue'
const routes = [
    { path: '/', component: FeaturedDishes },
    { path: '/about', component: About },
    { path: '/news', component: News },
    { path: '/menu', component: Menu },
    { path: '/reservation', component: Reservation }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})