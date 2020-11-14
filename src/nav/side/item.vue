<template>

    <component v-if="!routerConfig.hidden" :is="menuType" :router="routerConfig" >
         <template v-if="routerConfig.children &&routerConfig.children.length">
      <Items
        v-for="route in routerConfig.children"
        :key="route.name"
        :routerConfig="route"
        :test="route.names"
        :parentPath='routerConfig.path'
      >
      </Items>
      

    </template>
  </component>
      

  

 

  
</template>

<script>
import { ref } from "vue";
import Menu from "./menu";
import Sub from "./sub";
export default {
  name: "Items",
  components: {
    Menu,
    Sub,
  },
  props: {
    routerConfig: {
      type: Object,
      required: true,
    },
    test: {
      type: String,
    },
  },
  setup(prop) {
    const menuType = ref("");
    // if(prop.routerConfig.hidden) return
    menuType.value = prop.routerConfig.children &&prop.routerConfig.children.length>1 ? "Sub" : "Menu";


    return { menuType };
  },
};
</script>