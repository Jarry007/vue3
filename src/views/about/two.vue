<!--
 * @Author: your name
 * @Date: 2020-06-24 10:53:02
 * @LastEditTime: 2020-06-24 11:03:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\src\views\about\two.vue
--> 
<template>
  <div>
    <div class="btn-title">
      <a-button type="primary">新增权限</a-button>
    </div>

    <div>
       <a-table :columns='columns' :data-source='list'>

       </a-table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from "vuex";

export default {
   setup(){
      const store = useStore()
      const columns = ref('')
      const list = ref('')

      columns.value = [{title:'name',dataIndex:'name'},{title:'key',dataIndex:'key'},{title:'描述',dataIndex:'desc'},]
      list.value = store.getters.getter_routes

      console.log('路由列表',list.value)

      return {columns,list}
   }
};
</script>
<style lang='scss' scoped>
.btn-title{
   padding: 20px 0;
  text-align: left;
}
</style>