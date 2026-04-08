import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import Lenis from 'lenis'


const lenis = new Lenis({
  autoRaf: true,
});

createApp(App).mount('#app')
