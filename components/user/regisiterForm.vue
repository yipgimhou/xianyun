<template>
  <el-form :model="form"   :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名手机" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="captcha">
      <el-input placeholder="验证码" v-model="form.captcha">
        <template slot="append">
          <el-button @click="handleSendCaptcha">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item class="form-item" prop='nickname'>
      <el-input placeholder="你的名字" v-model="form.nickname"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop='password'>
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop='checkpassword'>
      <el-input placeholder="确认密码" type="password" v-model="form.checkpassword"></el-input>
    </el-form-item>

    <el-button class="submit" type="primary" @click="handleRegSubmit">注册</el-button>
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
    var validateCaptcha = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请获取并输入验证码"));
      } else {
        callback();
      }
    };
    var validateCheckpassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      // 表单数据
      form: {
        username: "",
        captcha: "",
        nickname:'',
        password:'',
        checkpassword:''
      },
      // 表单规则
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        captcha: [{ validator: validateCaptcha, trigger: "blur" }],
        nickname:[{ required: true, message: '请输入你的名字', trigger: 'blur' }],
        password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, message: '至少为3位数密码', trigger: 'blur' }
        ],
        checkpassword: [{ validator: validateCheckpassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 发送验证码
    handleSendCaptcha() {
      if (!this.form.username) {
        this.$message.warning("手机号不能为空");
        return;
      }
      if (this.form.username.length !== 11) {
        this.$message.warning("手机号格式不正确");
        return;
      }
      this.$axios({
        url: "/captchas",
        method: "POST",
        data: {
          tel: this.form.username
        }
      }).then(res => {
        console.log(res);
        this.$alert(`这是注册验证码${res.data.code}`, "获取成功", {
          confirmButtonText: "确定"
        });
      });
    },

    // 注册
    handleRegSubmit() {
      console.log(this.form);
      this.$axios({
          url:'/accounts/register',
          method:'POST',
          data:{
              username:this.form.username,
              nickname:this.form.nickname,
              captcha:this.form.captcha,
              password:this.form.password
          }
      }).then(res=>{
          console.log(res)
          this.$alert("注册成功，请前往登录页面进行登录", "注册成功", {
          confirmButtonText: "确定"
        });
        this.$emit('regisitersuccess')
      }).catch(res=>{
          this.$message.warning('注册失败，请检查确认输入信息是否正确')
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