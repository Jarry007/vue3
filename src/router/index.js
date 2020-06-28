/*
 * @Author: your name
 * @Date: 2020-05-07 15:50:01
 * @LastEditTime: 2020-06-28 17:02:54
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
  routes:routes
})


/**
 * 路由守卫，进行检验
 */

router.beforeEach(async (to, from, next) => {
  const token = getToken()
  if (!token && to.name !== loginName) {
 
    next({
      name: loginName
    })
  } else if (!token && to.name === loginName) {

    next()
  } else if (token && to.name === loginName) {
 
    next({
      name: homeName
    })
  } else {
    //有token,并且跳转的页面不是登录页
    if(!store.getters.getter_routes.length){
      try {
        let res = await store.dispatch('requestRouter')
        router.addRoute(...res)
        next({ ...to, replace: true })
        // next() //此时还没有挂载成功,刷新之后会消失
      } catch{
        store.dispatch('logout')
        next({
          name: loginName
        })
      }
    }else{
      next()
    }
    
    // store.dispatch('requestRouter').then(res=>{

    // }).catch(()=>{

    // })
    // next()
  }
})

// router.afterEach(()=>{
//   window.screenTop(0,0)
// })
export default router
