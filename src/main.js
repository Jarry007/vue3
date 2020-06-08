import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/ali.css'
import './assets/vivify.css'
import {Highlight} from '../util/highlight'
import hasRole from '../util/role'
// console.log('env',process.env)
createApp(App).use(router).use(store).use(Highlight).use(hasRole).mount('#app')

