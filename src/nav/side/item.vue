<template>
    <component :is="menuType" :router='routerConfig'>
        <template v-if="routerConfig.children &&routerConfig.children.length">
            <Items v-for="route in routerConfig.children" :key="route.path" :router='route'>
                
            </Items>
        </template>
    </component>
</template>

<script>
import { onMounted, ref } from 'vue'
import Menu from './menu'
import Sub from './sub'
export default {
    name:'Items',
    components:{
        Menu,Sub
    },
    props:{
        routerConfig:{
            type:Object,
            default:()=>{
                return null
            }
        }
    },
    setup(prop){
        const menuType = ref('')
        onMounted(()=>{
            menuType.value = prop.routerConfig.children?'Sub':'Menu'
        })

        return {menuType}
    }
}
</script>