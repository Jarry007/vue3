<!--
 * @Author: your name
 * @Date: 2020-06-08 10:17:59
 * @LastEditTime: 2020-06-24 13:43:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\src\views\About.vue
--> 
<template>
  <div class="about">
    <SideBar ></SideBar>
    <h1 @click="addClick">This is an about page{{double.value}}</h1>
    <!-- <AppMain></AppMain> -->
    <h2 v-for="i in count" :key='i' >{{i}}</h2>
  </div>
</template>

<script>
import SideBar from '@/nav/sideBar/sideBar' 
// import AppMain from '@/nav/appMain'
import {reactive,toRefs, computed,ref} from 'vue'
// import {useStore} from 'vuex'
export default  {
  components:{
      SideBar,
   },
  name:'about',
  setup(){
    
    const data = reactive({
      obj:[1,2,3,4,5,6,7,8,9],
      count:6,
      // double:computed(()=>data.count * 2,)
    })
    const addClick = ()=>{
      data.count ++ 
    }
    const double = ref(0)
    double.value = computed(()=>data.count * 2)

    return {...toRefs(data),addClick,double}
  }
}
</script>
