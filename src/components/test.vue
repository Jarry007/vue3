<template>
  <div>
    <h1>test</h1>
    <template v-if="datas.length">
      <Add v-for="i in datas" :key="i.type+i.text" :data='i'></Add>
    </template>
  </div>
</template>

<script>
import { ref } from "vue";
import Add from "../test-nest/add";
export default {
  components: { Add },
  setup() {
    const datas = ref("");
    datas.value = [
      {
        type: "a",
        text: "一",
        c: [
          { type: "b", text: "一yi" },
          { type: "b", text: "一er" },
          { type: "b", text: "一san" },
          { type: "b", text: "一si" },
        ],
      },
      {
        type: "a",
        text: "二",
        c: [
          { type: "b", text: "二yi" },
          { type: "b", text: "二er" },
          { type: "b", text: "二san" },
          { type: "b", text: "二si" },
        ],
      },
      { type: "b", text: "三" },
    ];

    return { datas };
  },
};
</script>