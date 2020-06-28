/*
 * @Author: your name
 * @Date: 2020-06-22 14:52:22
 * @LastEditTime: 2020-06-28 15:15:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\src\store\router.js
 */ 
import {getRouter} from  '@/api/menu'

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
         state.router = commonRouter.concat(router)
      }
   },
   actions:{
      requestRouter({commit}){
         return new Promise ((resolve)=>{
            getRouter().then(res=>{
               let routeRes = coverRouter(res)
               commit('setRouter',routeRes)
               resolve(routeRes)
            })
         })
      }
   }
}

export default routePermission