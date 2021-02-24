<template>
    <a-sub-menu :key="router.path">
        <template v-slot:title>
  
            <AllIcon :type="router.meta &&router.meta.icon?router.meta.icon:'icon-zhifubao'"></AllIcon>
        
            <span>{{router.meta?router.meta.title:router.name}}</span>
        </template>

        <slot></slot>
    </a-sub-menu>
</template>

<script>

import { createFromIconfontCN } from '@ant-design/icons-vue';

const AllIcon = createFromIconfontCN({
  scriptUrl:'//at.alicdn.com/t/font_2301608_gub3kqbpsjg.js'
})
export default {
components:{
    AllIcon
  },
    props:{
        router:{
            type:Object,
            default:()=>{}
        }
    }
}
</script>