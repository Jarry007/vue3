<template>

       <NavBar></NavBar>

       <Side ></Side>


      <div class="layout-main"> 
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

</style>