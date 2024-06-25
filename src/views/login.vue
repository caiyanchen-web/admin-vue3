<template>
  <div class="login-container">
    <el-form class="login-form">
      <!--标题-->
      <div class="title-container">博客运行后台</div>
        <el-form-item style="margin-bottom: 30px">
          <!--用户名 -->
          <el-input placeholder="请输入用户名" name="username" type="text" prefix-icon="User"></el-input>
        </el-form-item>
      <el-form-item style="margin-bottom: 30px">
          <!--密码-->
          <el-input placeholder="请输入密码" name="password" type="text" prefix-icon="Key" suffix-icon="view"></el-input>
        </el-form-item>
        <el-row class="button-cs">
        <!--登陆按钮-->
        <el-button  type="primary" style="width: 100px" >登陆</el-button>
        <el-button  type="warning" style="width: 100px" >重置</el-button>
        </el-row>
    </el-form>
  </div>

</template>

<script setup>

</script>
<style lang="scss" scoped>
.login-container{
  background-color:skyblue;
  height: 100%;
}
.login-form{
  width: 400px;
  border-radius: 1px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.title-container{
  font-size: 40px;
  line-height: 1.5;
  text-align: center;
  font-weight: bold;
}
.button-cs{
  margin-bottom: 30px;
  justify-content: flex-end;

}
</style>