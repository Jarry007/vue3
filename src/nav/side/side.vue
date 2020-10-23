<template>
  <!-- <div class="side-container"> -->
    <a-menu
      class="side-nav"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <div class="logo" @click="toggleCollapsed">LOGO{{ watch_ }}</div>
      <a-menu-item key="1">
        <span>tu</span>
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <span>tu</span>
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template v-slot:title>
          <span><span>tu</span> <span>Navigation One</span></span>
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
        <a-menu-item key="15">Option 5</a-menu-item>
        <a-menu-item key="16">Option 6</a-menu-item>
        <a-menu-item key="17">Option 7</a-menu-item>
        <a-menu-item key="18">Option 8</a-menu-item>
        <a-menu-item key="25">Option 5</a-menu-item>
        <a-menu-item key="26">Option 6</a-menu-item>
        <a-menu-item key="27">Option 7</a-menu-item>
        <a-menu-item key="28">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template v-slot:title>
          <span><span>tu</span><span>Navigation Two</span></span>
        </template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11"> Option 11 </a-menu-item>
          <a-menu-item key="12"> Option 12 </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  <!-- </div> -->
</template>

<script>
import { reactive, ref, toRefs, watch, } from "vue";
export default {
  name: "Side",
  setup() {
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
    return { ...toRefs(datas), toggleCollapsed,watch_ };
  },
};
</script>
<style lang="scss" scoped>
.side-container {
  position: fixed;
  width: 220px;
  height: 100%;
  
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