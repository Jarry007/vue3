<template>
  <div class="about">
    <h1 @click="addClick">This is an about page{{double}}</h1>
    <h2 v-for="i in count" :key='i' >{{i}}</h2>
  </div>
</template>

<script>
import {reactive,toRefs, watch, computed} from 'vue'
export default  {
  name:'about',
  setup(){
    const data = reactive({
      obj:[1,2,3,4,5,6,7,8,9],
      count:6,
      double:computed(()=>data.count * 2,)
    })
    const addClick = ()=>{
      data.count ++ 
    }
    watch(()=>data.count,val=>{
      console.log('va',val)
    })
    return {...toRefs(data),addClick}
  }
}
</script>
