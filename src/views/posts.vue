<template>
   <div >
      <div v-hljs class="posts" v-html="html_"></div>
   </div>
</template>

<style lang="scss" scoped>
.posts{
   width: 80%;
   // width: 100%;
   margin-left: 10%;
   // word-wrap: break-word;
   // background: cadetblue;
   text-align: left;
   .code-style{
      border-radius: 0.8rem;
      box-shadow: .125rem .2rem .625rem rgb(43, 43, 43);
   }
   
}
</style>

<script>
import {result} from '../../util/sql'
import { onMounted,ref } from 'vue'
export default  {
   name: 'posts',
   setup(){
      // console.log()
      const html_ = ref('')
      onMounted(()=>{
      //   console.log(result)
         // const jsonRes = JSON.stringify(result)
         html_.value = result
         // setTimeout(()=>{
         //    html_.value = "<pre> <code class='language-javascript'> console.log('ddd')</code></pre>"
         // },3000)
      })

      return {html_}
   }
}
</script>