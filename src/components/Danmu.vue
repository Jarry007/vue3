<template >
   <div class="danmu" id='danmu'>
      <div class="item" v-for="i in list" :key="i.avatar">
         {{i.say}}
      </div>
   </div>
</template>
<style lang="scss" scoped>
.danmu{
   // width: 100%;
   // height: 100%;
   user-select: none;
   position: relative;
   .item{
      position: absolute;

   }
}
</style>

<script>
import { reactive,toRefs } from 'vue'

export default {
   name:'Danmu',
   props:{
      list:{
         type:Array,
         default:()=>{
            return [ {
              avatar:
                "https://blogai.cn/static/swiper0.jpg",
              say: "弹幕装载中....."
            },]
         }
      }
   },
   setup(props){
      console.log('danmu',props.list)
      const data = reactive({
         list:props.list
      })
      
      return {...toRefs(data)}
   }
   
}
</script>