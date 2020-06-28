<!--
 * @Author: your name
 * @Date: 2020-06-10 11:24:15
 * @LastEditTime: 2020-06-24 16:34:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\src\nav\sideBar.vue
--> 
<template>
  
    <div class="side-bar">
      <div class="main" v-for="(item) in List" :key="item.name">
        <router-link :to='item.path'>{{item.meta?item.meta.title:item.name}}</router-link>
          <div v-for="child in item.children" :key="child.name" class="children">
            <router-link :to="`${item.path}/${child.path}`">{{child.meta?child.meta.title:child.name}}</router-link>
          </div>

      </div>
      <!-- <template v-for="(item,index) in List" >
       <div v-else class="main" :key="item.name" @click="openOrClose(index)">
          {{item.meta.title}}
        </div>
        
      </template> -->
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
    const toPath = (item)=>{
     if(item.component !== 'main'){
        console.log(item.path)
        router.push({
           path:item.path
        })
     } 
    }

    const openOrClose = (index)=>{
     console.log('index',index)
    }
    return { List ,toPath,openOrClose};
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