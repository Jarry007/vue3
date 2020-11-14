<template>



       <Side ></Side>

    
      <div class="layout-mains"> 
       <NavBar></NavBar>

       <Main></Main>

      </div>
</template>

<script>
import NavBar from "@/nav/navBar/navBar.vue"
import Side from '@/nav/side/side.vue'
import Main from '@/nav/main/main.vue'
// import {useStore} from 'vuex'
// import {ref} from "vue"
export default {
    components:{
        NavBar,Side,Main
    },
   
}
</script>

<style lang="scss" scoped>
.layout-mains{
    width: calc(100vw - 220px);
    position: fixed;
    top: 0;
    right: 0;
}
</style>