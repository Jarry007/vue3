<!--
 * @Author: your name
 * @Date: 2020-06-03 09:25:50
 * @LastEditTime: 2020-06-03 19:22:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\views\login.vue
--> 
<template>
   <div>
      <h1>Login</h1>
      <button @click="loginBtn">
         登录
      </button>
   </div>
</template>

<script>
// import {setup} from 'vue'
import {useStore} from 'vuex'
import { useRouter } from 'vue-router'
export default {
   setup(){
      const store = useStore()
      const router = useRouter()
      const loginBtn = ()=>{
         console.log('denmg;i ')
         // const tokenValue = new Date().toLocaleString()
         const tokenValue = {
            token:new Date().valueOf(),
            role:'user'
         }
         store.dispatch('login',tokenValue).then(res=>{
            console.log(res)
            router.push({
               name:'Index'
            })
         })
      }

   return { loginBtn}
   }
}
</script>
