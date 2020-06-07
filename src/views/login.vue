<template>
   <div>
      <h1>LOgin</h1>
      <button @click="toLogin">登陆</button>
   </div>
</template>

<script>
import {} from 'vue'
export default {
   setup(){
      const toLogin = ()=>{
         console.log('LOGIN')
      }

   return {toLogin}
   }
}
</script>
