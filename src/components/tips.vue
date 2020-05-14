<template >
  <div>
    <div class="tips">
      {{showT}}
      <div>
        <span @click="toDetail(postId)">进去看看</span>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tips {
  transform: translateY(-0.2rem);
  text-align: left;
  width: 61%;
  font-size: 0.8rem;
  position: relative;
  padding: 0.4rem 0.3rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background: rgb(92, 100, 205);
  line-height: 1.5rem;
  color: rgb(232, 233, 224);
  z-index: 2;
  div{
     width: 100%;
     text-align: right;
     
  }
  span {
   cursor:pointer;
    font-size: 60%;
    padding: 0.2rem .3rem;
    border-radius: 0.25rem;
    background: #fff;
    color:rgb(92, 100, 205) ;
   //  width: fit-content;  //这是css3属性，需要兼容浏览器
  }
}

.tips::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(90%);
  // background: ;
  z-index: 1;
  width: 0.5rem;
  height: 0.5rem;
  background: inherit;

  -webkit-clip-path: polygon(0 0, 50% 100%, 100% 0);
  clip-path: polygon(0 0, 50% 100%, 100% 0);
}
</style>
<script>
import { ref } from "vue";
import {useRouter} from  'vue-router'
export default {
  name: "Tips",
  props: {
    text: {
      type: String,
      default: "暂无可查看的内容"
    },
    id:Number
  },
  setup(props) {
    const showT = ref(props.text);
    const postId = ref(props.id)
    const router = useRouter()
    const toDetail = ()=>{

      router.push({path:'/posts',query:{postId:(postId.value).toString()}})
      
    }
    return { showT,toDetail,postId};
  }
};
</script> 