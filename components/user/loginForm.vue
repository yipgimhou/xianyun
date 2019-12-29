<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名/手机" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>

    <p class="form-text">
      <nuxt-link to="#">忘记密码</nuxt-link>
    </p>

    <el-button class="submit" type="primary" @click="handleLoginSubmit">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      const reg = /^1[3-9][0-9]{9}$/;
      if (value === "") {
        callback(new Error("手机号不能为空"));
      } else if (reg.test(value)) {
        callback();
      } else {
        callback(new Error("请输入正确的手机号"));
      }
    };
    return {
      // 表单数据
      form: {
        username: "",
        password: ""
      },
      // 表单规则
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, message: "至少为3位数密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 提交登录
    handleLoginSubmit() {
      this.$refs.form.validate(valid=>{
          if(valid){
              this.$store.commit('user/login',this.form)
              .then(res=>{
                  this.$message.success('登录成功')
                  this.$router.push('/')
              })
              .catch(res=>{
                  this.$message.warning('登录失败')
              })
          }
      })
    }
  }
};
</script>

<style lang='less' scoped>
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>