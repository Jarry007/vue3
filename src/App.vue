<template>
  <div id="app" :class="the_?'dark':'light'">
    <header class="head">
      <span>LOGO</span>
      <ul class="list">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/index">主页</router-link>
        </li>
      </ul>
      <div class="right" @click="changeThems">
        <i class="blog icon-theme"></i>
      </div>
    </header>

    <div class="temporary-block">
      <div :class="`temporary-item vivify ${i === deleInd?'popOutLeft':'popInLeft'}  ${i<5?`t-width-${i+1}`:'t-width'}`" v-for="(item,i) in list" :key='i'>
       <span @click="toPost(item.id)"> {{i}}{{item.title}} </span> <div class="close" @click="remove(i)">X</div>
      </div>
     
    </div>

    <router-view />
  </div>
</template>

<style lang="scss">
$fff: #fff;
$black: rgb(60, 67, 75);
$darkg: #394c5d;

$bheight: 6.25rem;
.temporary-block {
  width: 12.5rem;
  position: fixed;
  left: 0;
  top: 10rem;
  cursor: pointer;
  .temporary-item {
    position: relative;
    min-width: 20%;
    height: 2rem;
    background: #7379ab;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: .1rem;
    color: #f1f2f8;
    border-top-right-radius: 3.125rem;
    border-bottom-right-radius: 3.125rem;
    box-shadow:0rem 0.2rem 0.5rem #20202059;
    margin-bottom: 1rem; 
    margin-top: 0.5rem;
    transition: width 0.2s ease-out;
    overflow: hidden;
    padding:0 .625rem;
    text-align: left;
    span{
      // margin-left: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width:calc(100% - 1.875rem) ;
      display: inline-block;
      // background: cornflowerblue;
    }
    .close{
      width: 1.875rem;
    line-height: inherit;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    background: #ff9b93;
    }
  }
  .temporary-item:hover{
    width: 100%;
  }
}
.t-width{
  width: 30%;
}
  @for $i from  1 through  5 {
     .t-width-#{$i} { width: 80% - $i * 10%; }
  }

#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.dark {
  background: $black;
  color: $fff;
  transition: all 0.3s linear;
  a {
    text-decoration: none;
    color: $fff;
  }
  a:active {
    color: $fff;
  }
}
.light {
  transition: all 0.3s linear;
  background: $fff;
  color: $darkg;
  a {
    text-decoration: none;
    color: $darkg;
  }
  a:active {
    color: $darkg;
  }
}
.bgcover {
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(0.625rem);
  z-index: 1;
  width: 100%;
  height: 100vh;
  background: rgba(211, 211, 211, 0.6);
}
router-link {
  color: #fff;
}

.head {
  // border-bottom: 1px solid #fff;
  height: 5rem;
  width: 100%;
  display: flex;
}
.head span {
  flex: 1;
  align-self: center;
  justify-self: center;
  text-align: center;
}
.head .list {
  flex: 5;
  align-self: center;
  text-align: left;
  /* background: violet; */
}
.list li {
  display: inline-block;
  width: 6.25rem;
}
.head .right {
  flex: 1;
  align-self: center;
  font-size: 2rem;
  transform-origin: center;
  transform: rotate(180deg);
  // transition:  0.2s ease-out;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import { ref, watch, onMounted, reactive ,toRefs} from "vue";
import {useStore} from 'vuex'
import { useRouter, useRoute } from 'vue-router';
export default {
  setup() {
    const the_ = ref(false);
    const changeThems = () => {
      // console.log("dianji");
      the_.value = !the_.value;
    };
    // const datas = ref('')
    const store = useStore()

    const temList = reactive({
      list:store.state.temporary
    })
    onMounted(()=>{
      watch(store.state,val=>{
        temList.list = val.temporary
        console.log('chang,',val.temporary)
    })
    })
    const deleInd = ref('')
    const remove = (index)=>{
      console.log(index)
      deleInd.value = index
      setTimeout(()=>{
        store.commit('delList',index)
        deleInd.value = ''
      },500)
      
    }
    const router = useRouter()
    const route = useRoute()
    const toPost = (id)=>{
      if(route.path!=='/posts'||route.query.postId!=id){
      router.push({path:'/posts',query:{postId:id}})
      }
    }
      
    return { the_, changeThems,remove,...toRefs(temList),deleInd,toPost };
  }
};
</script>
