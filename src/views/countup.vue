<!--
 * @Author: your name
 * @Date: 2020-05-30 15:36:15
 * @LastEditTime: 2020-05-30 16:34:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\views\countup.vue
--> 
<template>
  <div class="count-to-wrapper">
    <slot name="left"/>
    <p class="content-outer"><span :class="['count-to-count-text']" id="counterId">{{ init }}</span></p>
    <slot name="right"/>
  </div>
</template>
<style >
/* .count-to-wrapper{
   width: 31.25rem;
   height: 18.75rem;
   background: cornflowerblue;
} */
</style>
<script>
import CountUp from 'countup'
import { onMounted, nextTick, } from 'vue'
export default {
   name:'CountTo',
   props:{
      init:{
         type:Number,
         default:0
      },
      startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 结束值，即动画结束后显示的数值
     */
    end: {
      type: Number,
      required: true
    },
    /**
     * @description 保留几位小数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 分隔整数和小数的符号，默认是小数点
     */
    decimal: {
      type: String,
      default: '.'
    },
    /**
     * @description 动画持续的时间，单位是秒
     */
    duration: {
      type: Number,
      default: 2
    }
   },
   setup(props){
      let counter 
      const endVal = 1000
      onMounted(()=>{
         console.log('jiazai l count up')
         nextTick(()=>{
            counter = new CountUp('counterId',props.startVal,endVal,props.decimals,props.duration,{
               useEasing:false,
               useGrouping:true
            })

            setTimeout(()=>{
               if(!counter.error) counter.start();
            },2000)
         })
      })

   }
}
</script>