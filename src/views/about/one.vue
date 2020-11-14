<!--
 * @Author: your name
 * @Date: 2020-06-24 10:50:12
 * @LastEditTime: 2020-06-24 10:50:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\src\views\about\one.vue
--> 
<template>
<div>
   <a-table :columns='columns' :data-source='list'>

      
   </a-table>
</div>
</template>

<script>
import { ref } from 'vue'
 const newList=()=>{
      const data = []
      for(let i =0;i<50;i++){
         data.push({
            key:i,
            name:`姓名-${i}`,
            age:i,
            gender:i%2?'男':'女'
         })
      }
      return data
   }
  const newCol=()=>{
      return [{
         title:'姓名',
         dataIndex:'name'
      },{
         title:'年龄',
         dataIndex:'age'
      },{
         title:'性别',
         dataIndex:'gender'
      }]
   }
export default {
   setup(){
      const columns = ref('')
      const list = ref('')

      columns.value = newCol()
      list.value = newList()
      return {columns,list}
   }
 
}
</script>
<style lang='scss' scoped>

</style>