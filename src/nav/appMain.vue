<!--
 * @Author: your name
 * @Date: 2020-06-22 19:48:32
 * @LastEditTime: 2020-06-24 16:40:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\src\nav\appMain.vue
--> 
<template>
  <section class="app-main">
      <router-view />
   
  </section>
</template>

<script>
export default {
};
</script>
<style lang='scss' scoped>
.app-main{
  position: fixed;
  top: 200px;
  width: calc(100% - 250px);
  left: 250px;
  height: 100%;
  background: cornflowerblue;
}
</style>