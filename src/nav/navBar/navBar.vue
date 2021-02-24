<template>
  <div class="nav-bar">
    <div class="btn-barside" @click="toggle">
      <SwapOutlined :rotate='sideBarStatus?0:90'/>{{sideBarStatus?'展开':'收起'}}侧边栏
    </div>

    <div style="margin-left: auto"  class="btn-barside" @click="logout">退出</div>
    <!-- <div style="margin-left:auto">  tuichu  </div> -->
  </div>
</template>

<script>
import {SwapOutlined} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from 'vue';
export default {
  name: "NavBar",
  components: {
    SwapOutlined,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const logout = () => {
      store.dispatch("logout");
      router.push({ path: "/" });
    };
    let sideBarStatus = computed(()=>store.getters.sidebar)
    const toggle = () => {
      store.dispatch("handleSideBar");
    };
    return { logout, toggle ,sideBarStatus};
  },
};
</script>
<style lang="scss" scoped>
.btn-barside{
    cursor: pointer;
}
.nav-bar {
  // width: calc(100% - 10px);
  // position: absolute;
  padding: 0 20px;
  display: flex;
  // top: 0;
  // right: 0;
  // justify-content: right;
  align-items: center;
  height: 60px;
//   background: rgb(160, 192, 251);
  border-bottom: 1px solid #eee;
}
</style>