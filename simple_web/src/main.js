import { createApp } from 'vue'
import App from './App.vue'
import createRouter from './router.js'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


const router = createRouter(createWebHistory())
const app = createApp(App)

app.use(router)

app.mount('#app')