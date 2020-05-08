<template >
   <div>
      <div class="tips">{{showT}}</div>
   </div>
</template>

<style lang="scss" scoped>
.tips{
   transform: translateY(-1rem);
   text-align: left;
   width: 100%;
   font-size: 0.8rem;
   // background: cornflowerblue;
   position: relative;
   padding: .3rem .2rem;
   border-top-left-radius: .3rem;
   border-top-right-radius: .3rem;
   background: rgb(92, 100, 205);
   color: rgb(232, 233, 224);
   z-index: 2;
   // -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 77%, 67% 76%, 50% 100%, 36% 76%, 0% 75%);
   // clip-path: polygon(0% 0%, 100% 0%, 100% 77%, 67% 76%, 50% 100%, 36% 76%, 0% 75%);
}
.tips::after{
   content: '';
   position: absolute;
   bottom: 0;
   left: 0;
   transform: translateY(100%);
   // background: ;
   width: 1rem;
   height: 1rem;
   background: inherit;

   -webkit-clip-path: polygon(0 0, 50% 100%, 100% 0);
clip-path: polygon(0 0, 50% 100%, 100% 0);
}
</style>
<script>
import { ref } from 'vue'
export default {
   name:'Tips',
   props:{
      text:{
         type:String,
         default:'暂无可查看的内容'
      }
   },
   setup(props){
      const showT = ref(props.text)

      return{showT}
   }
}
</script>