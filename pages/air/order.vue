<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <!-- 订单表单 -->
      <div class="main">
        <OrderForm :data="form" />
      </div>

      <!-- 侧边栏 -->
      <div class="aside"></div>
    </el-row>
  </div>
</template>

<script>
import OrderForm from "@/components/air/orderForm.vue";
export default {
  data() {
    return {
      form: {
        users: [],
        insurances: [],
        contactName: "",
        contactPhone: "",
        captcha: "",
        invoice: false,
        seat_xid: "",
        air: 0
      }
    };
  },
  mounted() {
    this.$axios({
      url: "/airs/" + this.$route.query.id,
      params: {
        seat_xid: this.$route.query.seat_xid
      }
    }).then(res => {
      console.log(res)
      this.form.insurances = res.data.insurances;
    });
  },
  components: {
    OrderForm
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 20px auto;
}

/*aside*/
.aside {
  width: 350px;
  height: fit-content;
  border: 1px #ddd solid;
}
</style>