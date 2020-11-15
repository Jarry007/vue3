<template>
    <section class="main">
        <transition name="fade-transform" mode="out-in">
            <router-view :key="key" />
        </transition>
    </section>
</template>

<script>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
    name:'Main',
    setup(){
        const key = ref('')
        const route = useRoute()
        computed(()=>{
            console.log('key',route.path)
            key.value = route.path
        })

        return {key}
    }
}
</script>

<style lang="scss" scoped>
.main{
    width: calc(100% - 5px);
    // background: #ddd;
    // margin: 60px 0 0px 220px;
    // margin-left: 5px;
    padding: 20px;
    // height: 100vh;
    text-align: left;
    position: relative;
    overflow-y: scroll;
    height: calc(100vh - 60px);
}
</style>