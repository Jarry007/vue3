/*
 * @Author: your name
 * @Date: 2020-06-08 10:17:59
 * @LastEditTime: 2020-06-08 11:35:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\util\role.js
 */ 

// import {useStore} from 'vuex'
import store from '@/store'

const directive_ = {
   beforeUpdate(el,binding){
         const {value} = binding
         // console.log('startbind',value)
         // console.log('这里获取store',store.getters.token)
         const yourRoles = store.getters ? store.getters.token:''
         if(value && value instanceof Array){
            const bindValue = value
            // console.log('bindvalue',bindValue)
            const hasRole_ = bindValue.includes(yourRoles)

            if(!hasRole_){
               el.parentNode && el.parentNode.removeChild(el)
            }
         }
      }
  
}
const data = (app)=>{
   app.directive('hasRole',directive_)
}

export default data
// import {} from 'vue'
// console.log('Vuex',Vuex.useStore().state)

// const data  = (app)=>{
//    app.directive('hasRole',{
//       mounted(el,binding){
//          const {value} = binding
//          // const admin_ = 'admin'
//          // const yourRoles = 'user'
//          const store = Vuex.useStore()
//          console.log('stoer',store.getters)
//          const yourRoles = store.state.token.role ? store.state.token.role:''
//         if(value && value instanceof Array){      
//            const bindValue = value
//            const hasRole_ = bindValue.includes(yourRoles)
//          //   const hasRole_ = bindValue.some(item=>{
//          //      return item === admin_ || role_.includes(item)
//          //   })

//            if (!hasRole_) {
//             el.parentNode && el.parentNode.removeChild(el)
//           }
//         }
//       }
//    })
// }

// export const hasRole = data
