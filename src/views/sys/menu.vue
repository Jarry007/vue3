<template>
  <div>
    <h1>菜单管理</h1>

    <a-table :pagination="false" :columns="columns" :data-source="menuList">
      <template #meta="{ record }">
        {{ record.meta.title || "--" }}
      </template>
      <template #component="{ record }">
        {{ record.component === "main" ? "--" : record.component }}
      </template>

      <template #handler="{ record, index }">
        <a-button type="link">删除</a-button>
        <a-button type="link" @click="resetIt(record)">修改</a-button>
        <a-modal
          v-model:visible="showModal"
          :title="parentIndex !== '' ? '添加' : '修改'"
          @ok="addOk"
        >
          <a-form ref="addform" :model="form" :rules="rule">
            <a-form-item label="菜单名" name="title">
              <a-input
                v-model:value="form.meta.title"
                placeholder="请输入名称"
              ></a-input>
            </a-form-item>
            <a-form-item label="name" name="name">
              <a-input
                v-model:value="form.name"
                placeholder="请输入name"
              ></a-input>
            </a-form-item>

            <a-form-item label="路由" name="path">
              <a-input
                v-model:value="form.path"
                placeholder="请填写路由"
              ></a-input>
            </a-form-item>
            <a-form-item label="路径" name="component">
              <a-input
                v-model:value="form.component"
                placeholder="请填写路径"
              ></a-input>
            </a-form-item>
          </a-form>
        </a-modal>
        <a-button type="link" @click="addNew(index)">新增</a-button>
      </template>
    </a-table>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, ref } from "vue";
// import { useStore } from "vuex";
import { message } from "ant-design-vue";

import { getRole } from "@/libs/util";
import { getAdminRouter, getUserRouter } from "@/api/menu.js";
export default {
  setup() {
    // const store = useStore()
    const datas = reactive({
      menuList: [],
      columns: [],
      form: { meta: {} },
      rule: {
        component: [{ required: true, message: "必填", trigger: "blur" }],
      },
    });
    datas.columns = [
      { title: "名称", slots: { customRender: "meta" }, align: "center" },
      {
        title: "组件路径",
        slots: { customRender: "component" },
        align: "center",
      },
      { title: "操作", slots: { customRender: "handler" }, align: "center" },
    ];
    onMounted(async () => {
      const role = getRole();
      console.log("身份", role);
      datas.menuList =
        role === "admin" ? await getAdminRouter() : await getUserRouter();
      console.log("菜单", datas.menuList);
    });
    // datas.menuList = store.getters.getter_routes

    // 修改
    const showModal = ref(false);

    const resetIt = (row) => {
      console.log(row);
      showModal.value = !showModal.value;
      datas.form = row;
    };

    // 新增
    const parentIndex = ref("");
    const addNew = (index) => {
      showModal.value = !showModal.value;
      parentIndex.value = index;
      console.log("index", index);
    };

    //确定
    const addform = ref(null);
    const addOk = () => {
      // message.success(parentIndex.value !==''? "添加成功":'修改成功');

      addform.value.validate().then(() => {
        datas.form.key =
          parentIndex.value !== ""
            ? datas.menuList[parentIndex.value].key
            : datas.form.name;
        console.log("表单", datas.form);
        if (parentIndex.value !== "") {
          const parentRow = datas.menuList[parentIndex.value];
          parentRow.children.push(datas.form);
        }
        message.success(parentIndex.value !== "" ? "添加成功" : "修改成功");

        parentIndex.value = "";
        showModal.value = false;
      });
    };

    return { addform, addNew, addOk, ...toRefs(datas), resetIt, showModal };
  },
};
</script>