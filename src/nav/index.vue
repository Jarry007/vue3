<!--
 * @Author: your name
 * @Date: 2020-06-10 11:20:49
 * @LastEditTime: 2020-06-10 11:43:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\src\nav\index.vue
--> 
<template>
   <div>
      <SideBar></SideBar>
      <Main></Main>
   </div>
</template>

<script>
import SideBar from './sideBar/sideBar' 
import Main from "./appMain"
export default {
   name:'Side',
   components:{
      SideBar,
      Main
   },
}
</script>