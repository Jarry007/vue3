/*
 * @Author: your name
 * @Date: 2020-05-07 15:50:01
 * @LastEditTime: 2020-06-03 18:47:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\router\index.js
 */ 
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routers'
import { getToken } from '@/libs/util'
import config from '@/config'
const {homeName ,loginName} = config
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


/**
 * 路由守卫，进行检验
 */
router.beforeEach((to,from,next)=>{
  const token = getToken()
  if(!token && to.name !==loginName){
    console.log('if')
    next({
      name:loginName
    })
  }else if(!token && to.name ===loginName){
    console.log('else if')
    next()
  }else if(token && to.name === loginName){
    console.log('else if 2')
    next({
      name:homeName
    })
  }else{
    console.log('else')
    next()
  }
})

// router.afterEach(()=>{
//   window.screenTop(0,0)
// })
export default router
