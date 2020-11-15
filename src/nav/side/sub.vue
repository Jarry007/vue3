<template>
    <a-sub-menu :key="router.path">
        <template v-slot:title>
            <span>{{router.meta?router.meta.title:router.name}}</span>
        </template>

        <slot></slot>
    </a-sub-menu>
</template>

<script>
export default {
    props:{
        router:{
            type:Object,
            default:()=>{}
        }
    }
}
</script>