<template >
  <div>
    <h2 class="test">这注定是一个与众不同的时刻</h2>
    <div class="list">
      <section class="list-main">
        <div
          class="item"
          @mouseenter="enter(index)"
          @mouseleave="leave"
          v-for="(i,index) in mainList"
          :key="i.title"
        >
          <div class="pic">
            <img :src="i.pic" alt />
            <div class="danmu" id='danmuC' :style="index===showDanmu?'transform: translateY(0);':''">
              <!-- <div class="danmu" id='danmuC'  style="transform: translateY(0)"> -->
              <Danmu :list="i.danmu" :wid='width_' :hei='height_' :name="`danmu${index}`" :scroll='scr_'></Danmu>
            </div>
          </div>
          <div class="title">{{i.title}}</div>
          <div class="time">
            作者: Jarry007
            <span style="float:right">时间: {{now_}}</span>
          </div>
          <div class="body">{{i.body}}</div>
        </div>
      </section>
      <section class="list-side">
        <div class="recommend">
          <div class="title">推荐</div>
          <div v-for="(i,index) in recom" :key="i.rank">
            <Tips v-show="index===showTips" :text="i.title"></Tips>
            <div class="recom-line" @click="showDetail(index)" >
              <span :style="`background:${rank[index].color}`">{{rank[index].text}}</span>
              {{i.title}}
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
function querySize(name){
  const dom = document.querySelector(`#${name}`)
  let wid = dom.clientWidth
  let hei = dom.clientHeight
  console.log('indexDom',wid,hei)
  return {wid,hei}
}
import { reactive, toRefs, onMounted,ref } from "vue";
import Danmu from "../components/Danmu.vue";
import Tips from "@/components/tips.vue";
export default {
  components: {
    Danmu,
    Tips
  },
  setup(prop) {
    console.log("pro", prop);
    const data = reactive({
      mainList: [
        {
          danmu: [
            {
              avatar:
                "https://blogai.cn/static/uploads/82f6bfa51778a0c55d42a334321cabf1/20200508112958_70.png",
              say: "君不见黄河之水天上来",
              right:80,
              top:20
            },
            {
              avatar:
                "https://blogai.cn/static/uploads/82f6bfa51778a0c55d42a334321cabf1/20200508112958_70.png",
              say: "奔流到海不复回",
              right:60,
              top:40
            },
            {
              avatar:
                "https://blogai.cn/static/uploads/82f6bfa51778a0c55d42a334321cabf1/20200508112958_70.png",
              say: "君不见高堂明镜悲白发",
              right:40,
              top:60
            },
            {
              avatar:
                "https://blogai.cn/static/uploads/82f6bfa51778a0c55d42a334321cabf1/20200508112958_70.png",
              say: "朝如青丝暮成雪",
              right:20,
              top:80
            }
          ],
          pic:
            "https://blogai.cn/static/uploads/82f6bfa51778a0c55d42a334321cabf1/20200508112958_70.png",
          title: "关于前端架构的那些事",
          body:
            "从事前端开发的你，不知有没有被问过：「前端有架构吗？」问你的人的身份，可能是你的 boss 或上司，可能是后端同事，也可能是前端同行；问你的人的目的，可能是刁难，可能是嘲讽，也可能是请教。众所周知，做前端开发所依赖的核心技术就是 HTML、CSS 和 JS，就像好"
        },
        {
          pic:
            "https://blogai.cn/static/uploads/82f6bfa51778a0c55d42a334321cabf1/20200508112958_70.png",
          title: "worldPress"
        },
        {
          pic:
            "https://blogai.cn/static/uploads/82f6bfa51778a0c55d42a334321cabf1/20200508112958_70.png",
          title: "worldPress"
        }
      ],
      rank: [
        { text: "爆", color: "#da005b" },
        { text: "沸", color: "#d23d3d" },
        { text: "热", color: "#d88c60" }
      ],
      showDanmu: false,
      showTips:'',
      recom: [
        {
          title: "弹性视角下传统经典架构云原生改造计划",
          rank: "1"
        },
        {
          title: "基础设施发展趋势：混合云(多云)和边缘计算",
          rank: "2"
        },
        {
          title: "Kubernetes多租户对基础设施的挑战与改善措施",
          rank: "3"
        }
      ]
    });
    const now_ = new Date().toLocaleString();
    let scr_ = ref(false)
    data.now_ = now_;
    const enter = e => {
      console.log('进入',e)
      scr_ = true
      data.showDanmu = e;
    };

    const leave = () => {
      // console.log('lika')
      scr_ = false
      data.showDanmu = "";
    };

    const showDetail = (e) => {

      data.showTips = data.showTips === e?'':e
    };
    const width_ = ref(0)
    const height_ = ref(0)
    onMounted(()=>{
      let {wid,hei} =  querySize('danmuC')
      console.log(wid,hei)
      width_.value = wid
      height_.value = hei
    })
    
    return { ...toRefs(data), enter, leave, showDetail,width_,height_ ,scr_};
  }
};
</script>

<style lang="scss" scoped>
$red: #ff3334;
$black: #171c32;
.list {
  display: flex;
  width: 60%;
  margin: 1.25rem auto;
  flex-wrap: wrap;
  .list-main {
    flex: 3;
    min-width: 18.75rem;
    text-align: left;
  }
  .list-side {
    margin-left: 1.875rem;
    flex: 1;
    // background: cadetblue;

    min-width: 12.5rem;
  }
}
.list-main {
  .item:nth-child(1) {
    margin-top: 0;
  }
  .item {
    border-radius: 0.625rem;
    margin-top: 3.125rem;
    overflow: hidden;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid #eee;

    .pic {
      max-height: 12.5rem;
      overflow: hidden;
      position: relative;
      img {
        object-fit: cover;
        width: 100%;
        transition: all 0.2s ease;
        object-position: top left;
        height: auto;
        // transform: scale(1);
      }
      .danmu {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 6.25rem;
        // border: 1px solid #222;
        background: rgba(17, 17, 17, 0.5);
        transition: all 0.3s ease-out;
        transform: translateY(100%);
      }
    }
    .title {
      // background: cadetblue;
      padding-left: 1.875rem;
      width: calc(100% - 3.75rem);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-top: 1.875rem;
      font-size: 1.625rem;
      font-weight: 500;
      line-height: 2.5rem;
    }
    .time {
      font-size: 0.8rem;
      width: calc(100% - 3.75rem);
      padding-left: 1.875rem;
      color: 80%;
    }
    .body {
      text-indent: 2rem;
      margin-top: 0.5rem;
      line-height: 1.6rem;
      width: calc(100% - 3.75rem);
      padding-left: 1.875rem;
      color: 80%;
      overflow: hidden;
      // white-space: nowrap;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:hover {
      box-shadow: 0.625rem 0 1.25rem -0.375rem #eee;
      transition: all 0.3s ease-out;

      img {
        transform: scale(1.2);
      }
    }
  }
}
.list-side {
  .recommend {
    width: 100%;
    // background: chocolate;

    // line-height: 3.125rem;
    .recom-line {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 3.125rem;
    }
    span {
      width: 1rem;
      height: 1rem;
      font-size: 0.6rem;
      display: inline-block;
      border-radius: 0.1875rem;
      line-height: 1rem;
      color: #fff;
    }
    .title {
      text-align: left;
      padding-left: 1.875rem;
      height: 2.5rem;
      position: relative;
      // background: darkcyan;
      line-height: 2.5rem;
      width: 100%;
    }
    .title::before {
      position: absolute;
      top: 0;
      left: 0;

      content: "";
      width: 0.625rem;
      height: 100%;
      border-radius: 0.125rem;
      background: rgb(100, 100, 161);
    }
  }
}
</style>

