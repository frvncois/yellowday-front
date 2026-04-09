import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import Lenis from 'lenis'
import { router } from './router'

new Lenis({ autoRaf: true })

createApp(App).use(router).mount('#app')
