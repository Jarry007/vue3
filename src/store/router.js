/*
 * @Author: your name
 * @Date: 2020-06-22 14:52:22
 * @LastEditTime: 2020-06-28 15:15:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\src\store\router.js
 */ 
import {getUserRouter,getAdminRouter} from  '@/api/menu'

import {coverRouter} from "../../util/utils"
import commonRouter from '@/router/routers'

const routePermission = {
   state:{
      router:[],
      addRouter:[]
   },
   mutations:{
      setRouter(state, router){
         state.addRouter = router
         state.router = commonRouter.concat(router) //合并固定路由
      }
   },
   actions:{
      requestRouter({commit},role){
         return new Promise ((resolve)=>{
            if(role==='admin'){
               getAdminRouter().then(res=>{
               let routeRes = coverRouter(res)
               commit('setRouter',routeRes)
               console.log('路由加载完毕',routeRes)
               resolve(routeRes)
               })
            }else{
               getUserRouter().then(res=>{
                  let routeRes = coverRouter(res)
                  commit('setRouter',routeRes)
                  console.log('路由加载完毕',routeRes)
                  resolve(routeRes)
               })
            }
            
         })
      }
   }
}

export default routePermission