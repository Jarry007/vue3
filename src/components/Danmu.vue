<template >
  <div class="danmus" id="dom">
    <canvas :id="names" class="canvas"></canvas>
   
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
var ps
import {deepCopy} from "../../util/utils"
import { reactive, toRefs, onMounted, watchEffect } from "vue";
function size(name, w, h) {
  const canvas = document.getElementById(name);
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");

  return { canvas, ctx };
}
function move(w, h, ctx, list) {
  ctx.clearRect(0, 0, w, h);
  ctx.font = "15px Arial";
  ctx.fillStyle = "#E8DBBD";
  list.forEach((item, i) => {
    ctx.fillText(item.say, w - item.right, item.top);
    item.right += 2;
    if (item.right - ctx.measureText(item.say).width > w) {
      list.splice(i, 1);
    }
  });

  ps =  requestAnimationFrame(() => {
    if (!list.length) {
      ps = ''
      return;
      }
    move(w, h, ctx, list);
  });
 
  //    setTimeout(()=>{
  //      cancelAnimationFrame(ps)
  //      console.log('zanding')
  //    },2000)
}
// move.prototype.pause =
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
            right: 20,
            top: 20
          }
        ];
      }
    },
    wid: Number,
    hei: Number,
    name: String,
    scroll: Boolean
  },
  setup(props) {
    let ctx_;
    const data = reactive({
      list: props.list,
      names: props.name
    });
    // const data2 = reactive({
    //   dd: "i am dd,from data2"
    // });
    watchEffect(() => {
      // console.log("watchEffect", props.scroll,ps);
      if(!props.scroll){
        cancelAnimationFrame(ps)
        ps = ''
      }else if(props.scroll && !ps){
        // console.log('重新开始')
        const list_ = deepCopy(data.list);
         move(props.wid, props.hei, ctx_, list_);
      }
    });

    onMounted(() => {
      setTimeout(() => {
        let { ctx } = size(data.names, props.wid, props.hei);
        ctx_ = ctx;
        if(props.scroll){
          const list_ = deepCopy(data.list);
           move(props.wid, props.hei, ctx_, list_);
        }
       
      }, 1000);
    });
    // watch(props.scroll,val=>{
      
    // })
    return { ...toRefs(data) };
  }
};
</script>