<template>
  <div class="main">
    <div class="air-column">
      <h2>乘机人</h2>
      <el-form class="member-info">
        <div class="member-info-item" v-for="(item,index) in users" :key="index">
          <el-form-item label="乘机人类型">
            <el-input placeholder="姓名" class="input-with-select" v-model="item.username">
              <el-select slot="prepend" value="1" placeholder="请选择">
                <el-option label="成人" value="1"></el-option>
              </el-select>
            </el-input>
          </el-form-item>

          <el-form-item label="证件类型">
            <el-input placeholder="证件号码" class="input-with-select" v-model="item.id">
              <el-select slot="prepend" value="1" placeholder="请选择">
                <el-option label="身份证" value="1" :checked="true"></el-option>
              </el-select>
            </el-input>
          </el-form-item>

          <span class="delete-user" @click="handleDeleteUser()">-</span>
        </div>
      </el-form>

      <el-button class="add-member" type="primary" @click="handleAddUsers">添加乘机人</el-button>
    </div>

    <div class="air-column">
      <h2>保险</h2>
      <div>
        <div
          class="insurance-item"
          prop="insurances"
          v-for="(info,index) in data.insurances"
          :key="index"
        >
          <el-checkbox
            :label="`${info.type}：￥${info.price}/份×1  最高赔付${info.compensation}`"
            border
            @change="handleInsurances(info.id)"
          ></el-checkbox>
        </div>
      </div>
    </div>

    <div class="air-column">
      <h2>联系人</h2>
      <div class="contact">
        <el-form label-width="60px">
          <el-form-item label="姓名">
            <el-input v-model="data.contactName"></el-input>
          </el-form-item>

          <el-form-item label="手机">
            <el-input placeholder="请输入内容" v-model="data.contactPhone">
              <template slot="append">
                <el-button @click="handleSendCaptcha">发送验证码</el-button>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item label="验证码">
            <el-input v-model="data.captcha"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="warning" class="submit" @click="handleSubmit">提交订单</el-button>
      </div>
    </div>
    <span>{{allprice}}</span>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      users: [
        {
          username: "",
          id: ""
        }
      ]
    };
  },
  computed: {
    allprice() {
      if (!this.data.seat_infos.org_settle_price) return;
      //设置总价初始为0
      var price = 0;
      //获取乘客数量
      var person = this.users.length;
      //计算所有成人机票价格
      price += this.data.seat_infos.org_settle_price * person;
      //遍历保险数组，计算乘客购买的保险价格
      price += this.data.insurances.length * 30;
      // this.data.insurances.forEach(e => {
      //   price += e.price*person
      // });
      //计算所有乘客的燃油费
      price += this.data.airport_tax_audlet * person;
      this.$store.commit("air/setAllPrice", price);
      return '';
    }
  },
  methods: {
    // 添加乘机人
    handleAddUsers() {
      this.users.push({
        username: "",
        id: ""
      });
    },

    // 移除乘机人
    handleDeleteUser(index) {
      this.users.splice(index, 1);
    },

    // 发送手机验证码
    handleSendCaptcha() {
      if (!this.form.contactPhone) {
        this.$message.warning("手机号不能为空");
        return;
      }
      if (this.form.contactPhone.length !== 11) {
        this.$message.warning("手机号格式不正确");
        return;
      }
      this.$axios({
        url: "/captchas",
        method: "POST",
        data: {
          tel: this.form.contactPhone
        }
      }).then(res => {
        console.log(res);
        this.$alert(`这是注册验证码${res.data.code}`, "获取成功", {
          confirmButtonText: "确定"
        });
      });
    },
    //选择保险
    handleInsurances(id) {
      if (this.insurances) {
        //假如选择的该保险已存在
        if (this.insurances.indexOf(id) > -1) {
          //除去第一个后
          var arr = this.insurances.slice(0);
          //删除已存在的
          arr.splice(this.insurances.indexOf(id), 1);
          this.insurances = arr;
        }
      }
    },

    // 提交订单
    handleSubmit() {}
  }
};
</script>

<style scoped lang="less">
.air-column {
  border-bottom: 1px #ddd dashed;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.air-column h2 {
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: normal;
}

/deep/ .el-select .el-input {
  width: 130px;
}

.input-with-select {
  width: 590px;
}

.input-with-select /deep/ .el-input-group__prepend {
  background-color: #fff;
}
.member-info /deep/ .el-form-item {
  margin-bottom: 0;
}

.member-info-item {
  border-bottom: 1px #eee dashed;
  padding-bottom: 20px;
  position: relative;

  &:first-child {
    .delete-user {
      display: none;
    }
  }
}

.add-member {
  margin-top: 20px;
}

.delete-user {
  display: block;
  background: #ddd;
  width: 16px;
  height: 16px;
  font-size: 14px;
  text-align: center;
  line-height: 16px;
  color: #fff;
  cursor: pointer;
  border-radius: 50px;
  position: absolute;
  right: -30px;
  top: 50%;
}

.insurance {
  > div {
    margin-top: 10px;
  }
}

.insurance-item {
  margin-bottom: 20px;
}

.contact {
  /deep/ .el-input {
    width: 50%;
  }
}

.submit {
  margin: 50px auto;
  display: block;
  width: 250px;
  height: 50px;
}
</style>