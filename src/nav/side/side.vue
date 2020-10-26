<template>
  <div class="side-container">
    <a-menu
      class="side-nav"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <div class="logo" @click="toggleCollapsed">LOGO{{ watch_ }}</div>

      <Items v-for="i in routerList" :key="i.name" :routerConfig='i' :test='i.name'></Items>
    </a-menu>
  </div>
</template>

<script>
import { useStore } from "vuex";
import {  reactive, ref, toRefs, watch, } from "vue";
import Items from './item'
export default {
  name: "Side",
  components:{
    Items
  },
  setup() {
    const store = useStore()


    const datas = reactive({
      collapsed: false,
      selectedKeys: ["1"],
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"],
    });
    const watch_ = ref('p')
    watch(datas.collapsed, (val_) => {
      console.log('监听', val_);
      datas.preOpenKeys = val_;
    });
    const toggleCollapsed = () => {
        watch_.value = Math.random()
      datas.collapsed = !datas.collapsed;
      datas.openKeys = datas.collapsed ? [] : datas.preOpenKeys;
    };


    const routerList = ref('')
    // onMounted(()=>{
      routerList.value = store.getters.getter_routes;
    console.log('routerList', routerList.value)
    // })
    
    return { ...toRefs(datas),routerList, toggleCollapsed,watch_ };
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
  // background: rgb(85, 181, 147);
}
</style>