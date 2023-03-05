import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap 5 styles
import 'bootstrap/dist/css/bootstrap.css'

createApp(App)
  .use(router)
  .mount('#app')

