<template>
  <Side></Side>

  <div class="layout-mains" :class="mainClass">
    <NavBar></NavBar>

    <Main></Main>
  </div>
</template>

<script>
import NavBar from "@/nav/navBar/navBar.vue";
import Side from "@/nav/side/side.vue";
import Main from "@/nav/main/main.vue";
import { useStore } from "vuex";
import { computed } from "vue";
// import {useStore} from 'vuex'
// import {ref} from "vue"
export default {
  components: {
    NavBar,
    Side,
    Main,
  },
  setup() {
    const store = useStore();
    let mainClass = computed(() =>
      store.getters.sidebar ? "close-sidebar" : "open-sidebar"
    );

    return { mainClass };
  },
};
</script>

<style lang="scss" scoped>
.layout-mains {
  // width: calc(100vw - 220px);
  position: fixed;
  top: 0;
  right: 0;
  transition: width 0.3s cubic-bezier(0.2, 0, 0, 1);
  z-index: 11;
}
.open-sidebar {
  width: calc(100vw - 220px);
}
.close-sidebar {
  width: calc(100vw - 80px);
}
</style>