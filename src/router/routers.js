// import { resolve } from 'core-js/fn/promise';

/*
 * @Author: your name
 * @Date: 2020-06-03 17:57:43
 * @LastEditTime: 2020-06-28 13:37:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\router\routers.js
 */ 

import Side from '@/nav/index.vue'
const loadView = (view) => { // 路由懒加载
  return () =>  import(`@/views/${view}`) 
}
export default  [
   {
      path: '/main',
      name: 'Main',
      // redirect:'/about',
      component:()=>import ('@/views/main/main.vue')
    },
   {
      path: '/',
      name: 'Home',
      // redirect:'/about',
      component: Side
    },
   {
     path:'/login',
     name:'Login',
     component:()=>import ('@/views/login.vue')
   },
 
 {
   path: '/about',
   name: 'About',
   // route level code-splitting
   // this generates a separate chunk (about.[hash].js) for this route
   // which is lazy-loaded when the route is visited.
   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
   children:[
    {
      path:'one',
      name:'One',
      component:()=>import ('@/views/about/one.vue')
    },{
      path:'two',
      name:'Two',
      component:()=>import ('@/views/about/two.vue')
    }
   ]
 },
 {
  name: 'four', path: '/four', component: Side, meta: {
     title: '四',
     icon: 'four'
  }, children: [
     {
        name: 'onefirst', path: 'onefirst', meta: {
           title: '四的第一',
           icon: 'first'
        }, component: loadView('four/first/index')
     },
     {
        name: 'onesecond', path: 'onesecond', meta: {
           title: '四的第二',
           icon: 'second'
        }, component: "four/second/index"
     },
     {
        name: 'onethird', path: 'onethird', meta: {
           title: '四的第三',
           icon: 'third'
        }, component: "four/third/index"
     }
  ],
},
 {
   path:'/index',
   name:'Index',
   component:()=> import ('../views/index.vue')
 },
 {
   path:'/posts',
   name:'Posts',
   component:()=>import('../views/posts.vue')
 }
 ]