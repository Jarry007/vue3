<template>
    <div class="nav-bar">

        <div class="">mulu </div>

        <div style="margin-left:auto" @click="logout"> 退出 </div>
        <!-- <div style="margin-left:auto">  tuichu  </div> -->
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
export default {
    name:'NavBar',
    setup(){
        const store = useStore()
        const router = useRouter()
        const logout = ()=>{
            store.dispatch("logout");
            router.push({path:'/'})
        }
        return {logout}
    }
}
</script>
<style lang="scss" scoped>
.nav-bar{
    width: calc(100% - 10px);
    // position: absolute;
    padding: 0 20px;
    display: flex;
    // top: 0;
    // right: 0;
    // justify-content: right;
    align-items: center;
    height: 60px;
    background: rgb(160, 192, 251);
    border-bottom: 1px solid #eee;
}
</style>