<template>

    <component :is="menuType" :router="routerConfig">
         <template v-if="routerConfig.children &&routerConfig.children.length">
      <Items
        v-for="route in routerConfig.children"
        :key="route.name"
        :routerConfig="route"
        :test="route.names"
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
    // console.log(prop.routerConfig)
    menuType.value = prop.routerConfig.children ? "Sub" : "Menu";
    //   console.log("type", menuType.value, prop.test);
    //   if (prop.routerConfig.children) {
    //     prop.routerConfig.children.forEach((element) => {
    //       console.log("item", element);
    //     });
    //   }
 
    // onMounted(()=>{
    //     // console.log('prop', prop.routerConfig.children)

    // })


    return { menuType };
  },
};
</script>