<template>
  <div class="filters">
    <el-row type="flex" class="filters-top" justify="space-between" align="middle">
      <el-col :span="8">
        单程：
        {{data.info.departCity}} - {{data.info.destCity}}
        /
        {{data.info.departDate}}
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="airport" placeholder="起飞机场">
          <el-option
            :label="item"
            :value="item"
            v-for="(item,index) in data.options.airport"
            :key="index"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="flightTimes" placeholder="起飞时间">
          <el-option
            :label="`${item.from}:00 - ${item.to}:00`"
            :value="`${item.from},${item.to}`"
            v-for="(item,index) in data.options.flightTimes"
            :key="index"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="company" placeholder="航空公司">
          <el-option
            :label="item"
            :value="item"
            v-for="(item,index) in data.options.company"
            :key="index"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="airSize" placeholder="机型">
          <el-option
            :label="item.label"
            :value="item.value"
            v-for="(item,index) in airsize"
            :key="index"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="filter-cancel">
      筛选：
      <el-button type="primary" round plain size="mini" @click="handleFiltersCancel">撤销</el-button>
    </div>
    <span>{{flightsData}}</span>
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
      airport: "", // 机场
      flightTimes: "", // 出发时间
      company: "", // 航空公司
      airSize: "", // 机型大小
      airsize: [
        { label: "大", value: "L" },
        { label: "中", value: "M" },
        { label: "小", value: "S" }
      ]
    };
  },
  computed: {
    flightsData() {
      // console.log(this.flightsInfo.flights)
      if (this.data.flights) {
        const arr = this.data.flights.filter(item => {
          var valid = true;
          //设置起飞机场过滤器
          if (this.airport && item.org_airport_name !== this.airport) {
            valid = false;
          }
          //设置起飞时间过滤器
          if (this.flightTimes) {
            //从出发时间的value中利用字符串截取获得出发和到达的时
            const [from, to] = this.flightTimes.split(",");
            //从返回的出发时间dep_time中利用字符串截取获得一个数组,然后数组第一项为出发的时
            const start = +item.dep_time.split(":")[0];
            if (start < from || start >= to) {
              valid = false;
            }
          }
          //设置航空公司过滤器
          if (this.company && item.airline_name !== this.company) {
            valid = false;
          }
          //设置机型过滤器
          if (this.airSize && item.plane_size !== this.airSize) {
            valid = false;
          }
          return valid;
        });
        this.$emit("setDataList", arr);
        return " ";
      }
    }
  },
  methods: {
    // 撤销条件时候触发
    handleFiltersCancel() {
      this.airport = ""; // 机场
      this.flightTimes = ""; // 出发时间
      this.company = ""; // 航空公司
      this.airSize = ""; // 机型大小
    }
  }
};
</script>

<style lang='less' scoped>
.filters {
  margin-bottom: 20px;
}

.filters-top {
  > div {
    /deep/ .el-select {
      margin-left: 10px;
    }
  }
}

.filter-cancel {
  margin-top: 10px;
}
</style>