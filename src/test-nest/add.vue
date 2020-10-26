<template>
    <component :is="type" :text="data.text" class="red">
        <!-- <template v-if="data.c">
             <a-dd :data='data.c'></a-dd>
         
         </template> -->
    </component>

    <template v-if="data.c">

             <Add v-for="i in data.c" :key="i.type+i.text" :data='i'></Add>
          
         </template>
</template>

<script>
import { ref } from 'vue'
import ac from './a'
import bc from './b'
export default {
    name:'Add',
    components:{ac,bc},
    props:{
        data:Object
    },
    setup(prop){
        let type = ref('')
        // console.log('pro',prop.data)
        type.value = prop.data.type +'c'
        // console.log(type.value)
        return {type}
    }
}
</script>
<style scoped>
.red{
    color: red;
}
</style>