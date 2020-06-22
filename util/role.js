/*
 * @Author: your name
 * @Date: 2020-06-08 10:17:59
 * @LastEditTime: 2020-06-10 11:12:25
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

