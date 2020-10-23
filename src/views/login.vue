<!--
 * @Author: your name
 * @Date: 2020-06-03 09:25:50
 * @LastEditTime: 2020-06-10 11:43:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\views\login.vue
--> 
<template>
  <div class="login-page">
    <div class="title">登录</div>

    <a-card hoverable class="login-card">
      <!-- <a-card> -->
      <a-form
        ref="login"
        :model="form"
        :rules="rules"
        :label-col="{ span: 6 }"
        :wrapperCol="{ span: 18 }"
      >
        <a-form-item label="账号" name="user">
          <a-input
            v-model:value="form.user"
            placeholder="请输入用户名"
          ></a-input>
        </a-form-item>
        <a-form-item label="密码" name="password">
          <a-input
            @pressEnter="submit"
            v-model:value="form.password"
            type="password"
            placeholder="请输入用户名"
          ></a-input>
        </a-form-item>

        <div>
          <a-button type="primary" block @click="submit"> 确 定 </a-button>
        </div>
      </a-form>
      <!-- </a-card> -->
    </a-card>
    <!-- <a-button type="primary" @click="loginBtn" > 登录 </a-button> -->
  </div>
</template>

<script>
// import {setup} from 'vue'

import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, ref, toRefs } from "vue";
import { loginIt } from "@/api/login";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const datas = reactive({
      form: {},
      rules: {
        user: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    });

    const login = ref(null); //login 代替2.x中的$refs
    const submit = async () => {
      try {
        await login.value.validate(); //校验表单

        let loginR = await loginIt(datas.form); //登录

        const tokenValue = {
          token: loginR.data.token,
          role: loginR.data.role,
        };
        await store.dispatch("login", tokenValue);  //储存信息

        router.push({
          name: "Index",
        });
      } catch (_) {
        return;
      }
    };

    return { ...toRefs(datas), submit, login };
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  padding: 100px;
  // height: calc(100% - 100px);
  height: 100%;
  //   background: #4fbfa3;
  .title {
    font-weight: 700;
    font-size: 30px;
  }
}
.login-card {
  width: 300px;
  border-radius: 10px;
}
</style>