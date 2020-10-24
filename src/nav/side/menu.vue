<template>
    <a-menu-item :key="router.path" @click="handleClick">
        {{router.meta?router.meta.title:'无标题'}}
    </a-menu-item>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
export default {
    props:{
        router:{
            type:Object,
            default:()=>{
                return null
            }
        }
    },
    setup(prop){
        const route = useRoute()
        const router = useRouter()

        const handleClick = ()=>{
            const path = prop.router.path

            // 这里先不去判断是不是外链，也不去检验是不是又点击了一下
            if(route.path !== path){
                router.push(path)
            }

        }
        return {handleClick}
    }
}
</script>