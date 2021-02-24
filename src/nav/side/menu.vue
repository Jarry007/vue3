<template>
  <a-menu-item :key="router.path" @click="handleClick">
    <AllIcon :type="router.meta&&router.meta.icon ?router.meta.icon:'icon-zhifubao'"></AllIcon>
   <span>{{ router.meta ? router.meta.title : router.name }}</span> 
  </a-menu-item>
</template>

<script>
import { message } from "ant-design-vue";

import { useRoute, useRouter } from "vue-router";

import { createFromIconfontCN } from '@ant-design/icons-vue';

const AllIcon = createFromIconfontCN({
  scriptUrl:'//at.alicdn.com/t/font_2301608_gub3kqbpsjg.js'
})

export default {
  components:{
    AllIcon
  },
  props: {
    parentPath: {
      type: String,
      default: "",
    },
    router: {
      type: Object,
      default: () => {
        return null;
      },
    },
  },
  setup(prop) {
    const route = useRoute();
    const router = useRouter();

    const handleClick = () => {
      const path = prop.parentPath
        ? prop.parentPath + "/" + prop.router.path
        : prop.router.path;
      console.log([prop]);
      // 这里先不去判断是不是外链，也不去检验是不是又点击了一下
      console.log("routePath", route.path);
      if (route.path !== path) {
        router.push(path);
      }
      // const message = inject('')
      message.success(path);
    };
    return { handleClick };
  },
};
</script>