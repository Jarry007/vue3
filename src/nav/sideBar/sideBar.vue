<!--
 * @Author: your name
 * @Date: 2020-06-10 11:24:15
 * @LastEditTime: 2020-06-22 20:24:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\src\nav\sideBar.vue
--> 
<template>
  
    <div class="side-bar">
      <div class="main" v-for="i in List" :key="i.name">
        <block v-if="i.meta">
          <div @click="toPath(i)">{{i.meta.title}}</div>
          <div v-if="i.children.length">
            <div class="children" v-for="item in i.children" :key="item.name" @click="toPath(item)">{{item.meta.title}}</div>
          </div>
        </block>
      </div>
    </div>

</template>

<script>
import { useStore } from "vuex";
import {useRouter } from 'vue-router'
import { ref } from "vue";
export default {
  name: "SideBar",
  setup() {
    const store = useStore();
    const router = useRouter() 
    const List = ref(0);
    List.value = store.getters.getter_routes;
   //  console.log(List.value);
   const toPath = (item)=>{
     if(item.component !== 'main'){
        console.log(item.path)
        router.push({
           path:item.path
        })
     } 
   }
    return { List ,toPath};
  }
};
</script>

<style lang="scss" scoped>
.side-bar {
  text-align: left;
  padding: 0 10px;
  width: 250px;
  height: 90vh;
  position: fixed;
  top: 5vh;
  border: 1px solid #aaa;
  line-height: 50px;
  .main {
    font-size: 16px;
    color: #111;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    .children {
       
      font-size: 14px;
      color: #777;
      margin-left: 10px;
    }
  }
}
</style>