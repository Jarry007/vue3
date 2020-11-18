
<template>
  <div>
    <h1>权限管理</h1>
    <div class="btn-title">
      <a-button type="primary" @click="addNew">新增权限</a-button>
      <a-modal v-model:visible="showAdd" title="新增权限" @ok="addOk">
        <a-form ref="addform" :model="form" :rules="rule">
          <a-form-item label="名称" name="name">
            <a-input
              v-model:value="form.name"
              placeholder="请输入名称"
            ></a-input>
          </a-form-item>
          <a-form-item label="key值" name="key">
            <a-input
              v-model:value="form.key"
              placeholder="请输入key值"
            ></a-input>
          </a-form-item>

          <a-form-item label="描述" name="desc">
            <a-input
              v-model:value="form.desc"
              placeholder="请填写描述"
            ></a-input>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>

    <div>
      <a-table :columns="columns" :data-source="list">
        <template #key="{ text }">
          <a-tag :color="text === 'admin' ? 'geekblue' : 'green'">{{
            text
          }}</a-tag>
        </template>

        <template #handler="{ record }">
          <a-button type="link">删除</a-button>
          <a-button
            @click="configIt(record)"
            type="link"
            v-if="record.key !== 'admin'"
            >配置</a-button>
          <a-modal v-model:visible="showEdit" title="新增权限" @ok="editOk">
            <a-form ref="configForm" :model="config" :rules="rule">
              <a-form-item label="名称" name="name">
                <a-input
                  v-model:value="config.name"
                  placeholder="请输入名称"
                ></a-input>
              </a-form-item>
              <a-form-item label="key值" name="key">
                <a-input
                  v-model:value="config.key"
                  placeholder="请输入key值"
                ></a-input>
              </a-form-item>

              <a-form-item label="描述" name="desc">
                <a-input
                  v-model:value="config.desc"
                  placeholder="请填写描述"
                ></a-input>
              </a-form-item>

              <a-form-item label="权限" name="tree">
                <a-tree checkable :tree-data="menuList"> </a-tree>
              </a-form-item>
            </a-form>
          </a-modal>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import { useStore } from "vuex";
import { message } from "ant-design-vue";
import { _router2tree } from "../../../util/utils";
export default {
  setup() {
    const store = useStore();
    const columns = ref("");
    const menuList = ref("");
    const list = ref("");

    columns.value = [
      { title: "name", dataIndex: "name" },
      { title: "key", dataIndex: "key", slots: { customRender: "key" } },
      { title: "描述", dataIndex: "desc" },
      { title: "操作", slots: { customRender: "handler" } },
    ];
    menuList.value = _router2tree(store.getters.getter_routes);
    list.value = [
      { name: "管理员", key: "admin", desc: "管理员，默认拥有所有的权限" },
      { name: "用户", key: "user", desc: "用户的权限可配置" },
    ];
    console.log("tree", menuList.value);
    // console.log(_router2tree(store.getters.getter_routes))


    // 添加权限
    const showAdd = ref(false);
    const addNew = () => {
      showAdd.value = !showAdd.value;
    };
    const addOk = () => {
      addform.value.validate().then(() => {
        // console.log(_add.form)
        list.value.push(_add.form);
        addNew();
        message.success("添加成功");
      });
    };
    const _add = reactive({
      rule: {
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        key: [{ required: true, message: "请输入key值", trigger: "blur" }],
      },
      form: {},
    });
    const addform = ref(null);

    // 配置，编辑

    const config = ref("");
    const configForm = ref(null);
    const showEdit = ref(false);

    config.value = {};

    const configIt = (row) => {
      showEdit.value = !showEdit.value;
      config.value = row;
      console.log("config", row);
    };

    const editOk = () => {
      configForm.value.validate().then(() => {
        // console.log(_add.form)
        //  list.value.push(_add.form)
        showEdit.value = false;
        message.success("编辑成功");
      });
    };
    return {
      config,
      configForm,
      showEdit,
      editOk,
      addform,
      ...toRefs(_add),
      addOk,
      columns,
      list,
      menuList,
      configIt,
      addNew,
      showAdd,
    };
  },
};
</script>
<style lang='scss' scoped>
.btn-title {
  padding: 20px 0;
  text-align: left;
}
</style>