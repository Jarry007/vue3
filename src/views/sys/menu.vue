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
        <a-popconfirm
          placement="leftBottom"
          ok-text="确定"
          cancel-text="取消"
          @confirm="confirmDel(record)"
        >
          <template #title> 确定删除吗？ </template>
          <a-button type="link">删除</a-button>
        </a-popconfirm>
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
const addMenuId = (list, parId = "") => {
  let count = 1;
  list.forEach((item) => {
    item.menuId = coverId(parId, count);
    if (item.children && item.children.length) {
      addMenuId(item.children, item.menuId);
    }
    count++;
  });

  return list;
};

const coverId = (p, i) => {
  return [p, i].map((item) => fixBefore(item)).join("");
};

const fixBefore = (num) => {
  if (num === "") return;
  return num < 10 && num.toString().length < 2 ? "0" + num : num;
};
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
      datas.menuList = addMenuId(datas.menuList);
      console.log("菜单", datas.menuList);
    });
    // datas.menuList = store.getters.getter_routes

    // 修改
    const showModal = ref(false);

    const resetIt = (row) => {
      datas.form = { meta: {} };

      showModal.value = !showModal.value;
      datas.form = row;
    };

    // 新增
    const parentIndex = ref("");
    const addNew = (index) => {
      datas.form = { meta: {} };
      showModal.value = !showModal.value;
      parentIndex.value = index;
    };

    //确定
    const addform = ref(null);
    const addOk = () => {
      addform.value.validate().then(() => {
        datas.form.key =
          parentIndex.value !== ""
            ? datas.menuList[parentIndex.value].key
            : datas.form.name;

        if (parentIndex.value !== "") {
          const parentRow = datas.menuList[parentIndex.value];
          parentRow.children.push(datas.form);
        } else {
          console.log("修改表单", datas.form);
        }
        message.success(datas.form.menuId ? "修改成功" : "添加成功");

        parentIndex.value = "";
        showModal.value = false;
      });
    };

    const confirmDel = (row) => {
      if (row.children && row.children.length) {
        return message.error("请先删除子节点");
      }
      message.success("删除成功");
    };

    return {
      confirmDel,
      parentIndex,
      addform,
      addNew,
      addOk,
      ...toRefs(datas),
      resetIt,
      showModal,
    };
  },
};
</script>