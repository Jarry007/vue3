<template>
  <div class="side-container">
    <a-menu
      class="side-nav"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :theme="theme"

      :inline-collapsed="collapsed"
    >
      <div class="logo">LOGO</div>

      <Items v-for="i in routerList" :key="i.name" :routerConfig='i' ></Items>
    
      <div class="foot">
        <a-switch  default-checked
      checked-children="暗"
      un-checked-children="亮"
      @change="changeTheme"/>
        </div> 
    </a-menu>
  </div>
</template>

<script>
import { useStore } from "vuex";
import {  computed, reactive, ref, toRefs, } from "vue";
import Items from './item'
export default {
  name: "Side",
  components:{
    Items
  },
  setup() {
    const store = useStore()


    const datas = reactive({
      // collapsed: false,
      selectedKeys: ["1"],
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"],
    });
    const collapsed = computed(()=>store.getters.sidebar)
    // const watch_ = ref('p')
    // watch(datas.collapsed, (val_) => {
    //   console.log('监听', val_);
    //   datas.preOpenKeys = val_;
    // });
    // const toggleCollapsed = () => {
    //     watch_.value = Math.random()
    //   // datas.collapsed = store.getters.sidebar;
    //   datas.openKeys = datas.collapsed ? [] : datas.preOpenKeys;
    // };


    const routerList = ref('')
    // onMounted(()=>{
      routerList.value = store.getters.getter_routes;
    console.log('routerList', routerList.value)
    // })
    
  /**
   *  这里控制侧边栏的主题 changeTheme
   */
    const theme = ref('dark')
    const changeTheme = (e)=>{
      theme.value = e?'dark':'light'
    }
    return { theme,changeTheme,...toRefs(datas),routerList,collapsed };
  },
};
</script>
<style lang="scss" scoped>
.side-container {
  position: fixed;
  width: 220px;
  height: 100%;
  z-index: 10;
  
}
.side-nav {
  // top: 0;
  // left: 0;
  // width: 220px;
  height: inherit;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  .logo {
    font-size: 18px;
    font-weight: 600;
    color: silver;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }

  .foot{
    position: absolute;
    bottom: 20px;
    // width: 100%;
    // background: orange;
    left: 0;
  }
  // background: rgb(85, 181, 147);
}
</style>