/*
 * @Author: your name
 * @Date: 2020-05-07 15:50:01
 * @LastEditTime: 2020-06-22 18:48:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\router\index.js
 */ 
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routers'
import store from '@/store'
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
    //有token,并且跳转的页面不是登录页
    // 这时，进行路由查询
    console.log('else')

    store.dispatch('requestRouter').then(res=>{
      // console.log('dispatch',res)
      // router.addRoutes(res)
      router.addRoute(res)
      // next({..})
      // console.log('to',to)
      next()
    }).catch(()=>{
      store.dispatch('logout')
      next({
        name:loginName
      })
    })
    // next()
  }
})

// router.afterEach(()=>{
//   window.screenTop(0,0)
// })
export default router
