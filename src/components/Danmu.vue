<template >
  <div class="danmus" id="dom">
    <canvas :id="names" class="canvas"></canvas>
    {{dd}}
  </div>
</template>
<style lang="scss" scoped>
.danmus {
  width: 100%;
  height: 100%;
  user-select: none;
  position: relative;
  .canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: inherit;
    height: inherit;
   //  background: rgb(90, 81, 119);
  }
}
</style>

<script>
import { reactive, toRefs, onMounted,ref, watch } from "vue";
function size(name,w, h) {
  const canvas = document.getElementById(name);
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");

  return { canvas, ctx };
}
function move(w,h,ctx,list){
   
   ctx.clearRect(0,0,w,h)
   ctx.font = "15px Arial";
   ctx.fillStyle = "#E8DBBD";
   list.forEach((item,i)=>{
      ctx.fillText(item.say,w-item.right,item.top)
      item.right +=2
      if(item.right - ctx.measureText(item.say).width > w){
         list.splice(i,1)
      }

   })

   requestAnimationFrame(()=>{
      move(w,h,ctx,list)
   })
}
// function print_(str){
//    console.log('dayin',str)
//    if(str>100) return
//    requestAnimationFrame(()=>{
//       str++
//       print_(str)
//    })
// }
export default {
  name: "Danmu",
  props: {
    list: {
      type: Array,
      default: () => {
        return [
          {
            avatar: "https://blogai.cn/static/swiper0.jpg",
            say: "弹幕装载中.....",
            right:20,
            top:20
          }
        ];
      }
    },
    wid: Number,
    hei: Number,
    name:String,
    scroll:Boolean
  },
  setup(props) {
     console.log(props)
    const data = reactive({
      list: props.list,
      names:props.name,
    });
   const data2 = reactive({
      dd:'i am dd,from data2',

   }) 
   let canScroll = ref(props.scroll)
   console.log('sca',props.scroll)
   watch(()=>canScroll,val=>{
      console.log('开始',val)
   })
    onMounted(() => {
      setTimeout(() => {
        let { ctx } = size(data.names,props.wid, props.hei);
        const list_ = data.list.slice()
        move(props.wid,props.hei,ctx,list_)
        
      }, 1000);
    });
    return { ...toRefs(data),...toRefs(data2) };
  }
};
</script>