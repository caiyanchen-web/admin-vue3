<template>
  <div class="login-container">
    <el-form class="login-form" :rules="rules" :model="loginForm" ref="loginFormRef">
      <!--标题-->
      <div class="title-container">博客运行后台</div>
      <el-form-item style="margin-bottom: 30px" prop="username">
        <!--用户名 -->
        <el-input placeholder="请输入用户名" name="username" type="text" prefix-icon="User"
                  v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item style="margin-bottom: 30px" prop="password">
        <!--密码-->
        <el-input placeholder="请输入密码" name="password" :type="flagType" v-model="loginForm.password">
          <!--点击眼睛跳转图标-->
          <template #prefix>
            <el-icon>
              <lock/>
            </el-icon>
          </template>
          <template #suffix>
              <span @click="changeView">
                <el-icon v-if="flag === true" style="cursor: pointer">
                  <Hide/>
              </el-icon>
                <el-icon v-else-if="flag === false" style="cursor: pointer">
                  <View/>
              </el-icon>
              </span>
          </template>
        </el-input>

      </el-form-item>
      <el-row class="button-cs">
        <!--登陆按钮-->
        <el-button type="primary" style="width: 100px" @click="HandleLogin">登陆</el-button>
        <el-button type="warning" style="width: 100px">重置</el-button>
      </el-row>
    </el-form>
  </div>

</template>

<script setup>
import {ref,getCurrentInstance} from 'vue'
import {Hide, Lock, View} from "@element-plus/icons-vue";
import  {ElForm} from 'element-plus';

//表单验证
const rules = {
  username: [{required: true, message: "请输入用户名", trigger: "blue"}],
  password: [{required: true, message: "请输入密码", trigger: "blue"}],
}

//切换眼睛事件
const flagType = ref("password")
const flag = ref(true)
const changeView = () => {
  flag.value = !flag.value
  flagType.value = flag.value ? "password" : "text"
}
//登陆
const {proxy} = getCurrentInstance()
const loginForm = ref({})
const loginFormRef = ref()
const HandleLogin = () => {
  loginFormRef.value.validity(valid =>{
    if (!valid) return
    proxy.$api.login(loginForm.value).then(res =>{
      console.log("请求的相应数据：",res)
    }).catch(err =>{
      console.log(err)
    })
  })
}
//重置
</script>
<style lang="css" scoped>
.login-container {
  background-color: skyblue;
  height: 100%;
}

.login-form {
  width: 400px;
  border-radius: 1px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.title-container {
  font-size: 40px;
  line-height: 1.5;
  text-align: center;
  font-weight: bold;
}

.button-cs {
  margin-bottom: 30px;
  justify-content: flex-end;

}
</style>