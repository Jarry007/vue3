<template>
    <a-sub-menu :key="router.path">
        <template v-slot:title>
            <span>sub - {{router.meta?router.meta.title:''}}</span>
        </template>
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