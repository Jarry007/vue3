/*
 * @Author: your name
 * @Date: 2020-06-03 17:57:43
 * @LastEditTime: 2020-06-03 19:25:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\router\routers.js
 */ 
export default  [
   {
      path: '/',
      name: 'Home',
      component: ()=>import ('@/views/Home.vue')
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
   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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