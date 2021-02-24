<!--
 * @Author: your name
 * @Date: 2020-06-22 19:48:32
 * @LastEditTime: 2020-06-24 16:40:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\src\nav\appMain.vue
--> 
<template>
  <section class="app-main" :class="mainClass">
      <router-view />
   
  </section>
</template>

<script>
import {useStore} from 'vuex'
import { computed } from 'vue';
export default {
  setup(){
    const store = useStore()
    let mainClass = computed(()=>store.getters.sidebar?'open-sidebar':'close-sidebar')
    
    return {mainClass}
  }
};
</script>
<style lang='scss' scoped>
.app-main{
  position: fixed;
  top: 200px;
  
  left: 250px;
  height: 100%;
  background: cornflowerblue;
  transition: 0.2s all ease-out;
}
.open-sidebar{
width: calc(100% - 250px);
}
.close-sidebar{
  width: calc(100% - 54px);
}
</style>