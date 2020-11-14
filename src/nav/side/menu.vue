<template>
    <a-menu-item :key="router.path" @click="handleClick">
        {{router.meta?router.meta.title:router.name}}
    </a-menu-item>
</template>

<script>
import {message} from 'ant-design-vue'

import { useRoute, useRouter } from 'vue-router'
export default {
    props:{
        parentPath:{
            type:String,
            default:''
        },
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
            const path = prop.parentPath?prop.parentPath+"/"+ prop.router.path: prop.router.path

            // 这里先不去判断是不是外链，也不去检验是不是又点击了一下
            if(route.path !== path){
                router.push(path)
            }
            // const message = inject('')
            message.success(path)
        }
        return {handleClick}
    }
}
</script>