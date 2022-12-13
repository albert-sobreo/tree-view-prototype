import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
import './assets/css/global.css'
import './index.css'

createApp(App).use(store).use(router).mount('#app')
