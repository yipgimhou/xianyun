<template>
  <div class="search-form">
    <!-- 头部tab切换 -->
    <el-row type="flex" class="search-tab">
      <span
        v-for="(item, index) in tabs"
        :key="index"
        @click="handleSearchTab(item, index)"
        :class="{active: index === currentTab}"
      >
        <i :class="item.icon"></i>
        {{item.name}}
      </span>
    </el-row>

    <el-form class="search-form-content" ref="form" label-width="80px">
      <el-form-item label="出发城市">
        <!-- fetch-suggestions 返回输入建议的方法 -->
        <!-- select 点击选中建议项时触发 -->
        <el-autocomplete
          :fetch-suggestions="queryDepartSearch"
          v-model="form.departCity"
          placeholder="请搜索出发城市"
          @blur="handleDepartBlur"
          @select="handleDepartSelect"
          class="el-autocomplete"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="到达城市">
        <el-autocomplete
          :fetch-suggestions="queryDestSearch"
          v-model="form.destCity"
          placeholder="请搜索到达城市"
          @blur="handleDestBlur"
          @select="handleDestSelect"
          class="el-autocomplete"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="出发时间">
        <!-- change 用户确认选择日期时触发 -->
        <el-date-picker
          type="date"
          placeholder="请选择日期"
          style="width: 100%;"
          @change="handleDate"
          v-model="form.departDate"
          :picker-options="pickerOptions"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label>
        <el-button style="width:100%;" type="primary" icon="el-icon-search" @click="handleSubmit">搜索</el-button>
      </el-form-item>
      <div class="reverse">
        <span @click="handleReverse">换</span>
      </div>
    </el-form>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      form: {
        departCity: "", //出发城市
        departCode: "", //出发城市代码
        destCity: "", //到达城市
        destCode: "", //到达城市代码
        departDate: "" //出发日期
      },
      tabs: [
        { icon: "iconfont icondancheng", name: "单程" },
        { icon: "iconfont iconshuangxiang", name: "往返" }
      ],
      currentTab: 0,
      // 出发城市的下拉列表数据
      departData: [],
      // 到达城市的下拉列表数据
      destData: [],
      // 禁止选择今天以前的日期
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() + 3600 * 1000 * 24 < Date.now();
        }
      }
    };
  },
  methods: {
    // tab切换时触发
    handleSearchTab(item, index) {},

    //出发城市输入框失去焦点时默认选中第一个
    handleDepartBlur() {
      if (this.departData.length > 0) {
        this.form.departCity = this.departData[0].value;
        this.form.departCode = this.departData[0].sort;
      }
    },
    //到达城市输入框失去焦点时默认选中第一个
    handleDestBlur() {
      if (this.destData.length > 0) {
        this.form.destCity = this.destData[0].value;
        this.form.destCode = this.destData[0].sort;
      }
    },

    // 出发城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
    queryDepartSearch(value, cb) {
      //如果输入框无内容则不发起请求
      if (value.trim() === "") {
        cb([]);
        return;
      }
      //将输入框内容作为params向服务器发送axios请求，获取数据放入下拉列表中
      this.$axios({
        url: "/airs/city",
        params: {
          name: value
        }
      }).then(res => {
        this.departData = res.data.data.map(e => {
          //去掉返回值中的市字
          e.value = e.name.replace("市", "");
          return e;
        });
        cb(this.departData);
      });
    },

    // 目标城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
    queryDestSearch(value, cb) {
      //如果输入框无内容则不发起请求
      if (value.trim() === "") {
        cb([]);
        return;
      }
      //将输入框内容作为params向服务器发送axios请求，获取数据放入下拉列表中
      this.$axios({
        url: "/airs/city",
        params: {
          name: value
        }
      }).then(res => {
        this.destData = res.data.data.map(e => {
          //去掉返回值中的市字
          e.value = e.name.replace("市", "");
          return e;
        });
        cb(this.destData);
      });
    },

    // 出发城市下拉选择时触发
    handleDepartSelect(item) {
      console.log(item);
      this.form.departCode = item.sort;
    },

    // 目标城市下拉选择时触发
    handleDestSelect(item) {
      this.form.destCode = item.sort;
    },

    // 确认选择日期时触发
    handleDate(value) {
      this.form.departDate = moment(value).format("YYYY-MM-DD");
    },

    // 触发和目标城市切换时触发
    handleReverse() {
      const { departCity, departCode, destCity, destCode } = this.form;
      this.form.departCity = destCity;
      this.form.departCode = destCode;
      this.form.destCity = departCity;
      this.form.destCode = departCode;
    },

    // 提交表单是触发
    handleSubmit() {
      //定义表单验证规则
      const rules = {
        departCity:{
          value:this.form.departCity,
          error_message:'请输入出发城市'
        },
        destCity:{
          value:this.form.destCity,
          error_message:'请输入目的城市'
        },
        departDate:{
          value:this.form.departDate,
          error_message:'请选择出发日期'
        }
      };
      let yz = true;
      Object.keys(rules).forEach(key=>{
        if(yz===false){
          return;
        }
        if(rules[key].value===''){
          this.$message.warning('请填写出发城市或目的城市或出发时间')
          yz=false;
          return;
        }
      })
      if(yz===false){
        return;
      }
      this.$router.push({
        path:'/air/flights',
        query:this.form
      })
    }
  },
  mounted() {}
};
</script>

<style scoped lang="less">
.search-form {
  border: 1px #ddd solid;
  border-top: none;
  width: 360px;
  height: 350px;
  box-sizing: border-box;
}

.search-tab {
  span {
    display: block;
    flex: 1;
    text-align: center;
    height: 48px;
    line-height: 42px;
    box-sizing: border-box;
    border-top: 3px #eee solid;
    background: #eee;
  }

  .active {
    border-top-color: orange;
    background: #fff;
  }

  i {
    margin-right: 5px;
    font-size: 18px;

    &:first-child {
      font-size: 16px;
    }
  }
}

.search-form-content {
  padding: 15px 50px 15px 15px;
  position: relative;

  .el-autocomplete {
    width: 100%;
  }
}

.reverse {
  position: absolute;
  top: 35px;
  right: 15px;

  &:after,
  &:before {
    display: block;
    content: "";
    position: absolute;
    left: -35px;
    width: 25px;
    height: 1px;
    background: #ccc;
  }

  &:after {
    top: 0;
  }

  &:before {
    top: 60px;
  }

  span {
    display: block;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 12px;
    background: #999;
    color: #fff;
    width: 20px;
    height: 20px;
    line-height: 18px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;

    &:after,
    &:before {
      display: block;
      content: "";
      position: absolute;
      left: 10px;
      width: 1px;
      height: 20px;
      background: #ccc;
    }

    &:after {
      top: -20px;
    }

    &:before {
      top: 20px;
    }
  }
}
</style>
