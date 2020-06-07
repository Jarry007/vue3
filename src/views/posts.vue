<template>
   <div >
      <span class="add-tem" @click="add">添加到暂存区  标题Id{{postId}}</span>
      <h1 @click="backPre">这是一个标题</h1>
      <div v-hljs class="posts" v-html="html_"></div>
   </div>
</template>

<style lang="scss" scoped>
h1{
   cursor: grab;
}
.add-tem{
  font-size:1.2rem;
   cursor: default;
}
.posts{
   width: 80%;
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
import { onMounted,ref,watch, onBeforeMount,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onRenderTracked,onRenderTriggered} from 'vue'
import {useRouter, useRoute } from 'vue-router'
import {useStore} from 'vuex'
export default  {
   name: 'posts',
   setup(){
      const store = useStore()
       store.commit('reset')

      const html_ = ref('')
      const route = useRoute()
      const postId = ref(route.query.postId)
     
      watch(route,val=>{
         postId.value = val.query.postId
      })
      onMounted(()=>{
         html_.value = result 
      })

      const router_ = useRouter()
      const backPre = ()=>{
         router_.back() 
      }
      
      const add = ()=>{
         let result =  store.state.temporary.filter(({id})=>(id).toString()===postId.value)
         if(result.length){
            backPre()
            return
            }
         const obj = {
            title:(Math.random()).toString(),
            author:'Jarry007',
            id: postId.value
         }
         store.commit('addList',obj)
         backPre()
      }
      onMounted(()=>{
         console.log('onMounted')
      })
      onBeforeMount(()=>{
         console.log('onBeforeMount')
      })
      onBeforeUpdate(()=>{
         console.log('onBeforeUpdate')
      })
      onUpdated(() => {
            console.log('onUpdated')
        })
        onBeforeUnmount(() => {
            console.log('onBeforeUnmount')
        })
        onUnmounted(() => {
            console.log('onUnmounted')
        })
        onRenderTracked(() => {
            console.log('onRenderTracked')
        })
        onRenderTriggered(() => {
            console.log('onRenderTriggered')
        })
      return {html_,backPre,add,postId}
   }
}
</script>