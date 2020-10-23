/*
 * @Author: your name
 * @Date: 2020-06-08 10:17:59
 * @LastEditTime: 2020-06-18 09:27:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3\src\main.js
 */ 
import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/ali.css'
import './assets/vivify.css'
import {Highlight} from '../util/highlight'
import hasRole from '../util/role'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


if(process.env.NODE_ENV === 'development') require('@/mock')

// import elementUI from 'element-ui'
// console.log('env',process.env)
const app = createApp(App)
app.config.productionTip = false;
app.use(router).use(store).use(Highlight).use(hasRole).use(Antd).mount('#app')

