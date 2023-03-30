import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import Cart from './components/Cart.vue'
import Order from './components/Order.vue'
import Checkout from './components/Checkout.vue'

const route_urls = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout
    },
    {
        path: '/order',
        name: 'order',
        component: Order
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: route_urls

})
const app = createApp(App)
app.use(router)
app.mount('#app')
