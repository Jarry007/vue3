<!--
 * @Author: your name
 * @Date: 2020-06-22 19:48:32
 * @LastEditTime: 2020-06-22 20:26:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\src\nav\appMain.vue
--> 
<template>
  <section>
    <keep-alive>
      //include 需要缓存的页面
      <router-view />//如果报错的话，就是这里没有key
    </keep-alive>
  </section>
</template>

<script>
export default {
};
</script>
<style lang='scss' scoped>
</style>