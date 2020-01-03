<template>
  <div class="filters">
    <el-row type="flex" class="filters-top" justify="space-between" align="middle">
      <el-col :span="8">
        单程：
        {{data.departCity}} - {{data.destCity}}
        /
        {{data.departDate}}
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="airport" placeholder="起飞机场" @change="handleAirport">
          <el-option :label="item" :value="item" v-for="(item,index) in info.airport" :key='index'></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="flightTimes" placeholder="起飞时间" @change="handleFlightTimes">
          <el-option :label="`${item.from}:00 - ${item.to}:00`" :value="`${item.from},${item.to}`" v-for="(item,index) in info.flightTimes" :key='index'></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="company" placeholder="航空公司" @change="handleCompany">
          <el-option :label="item" :value="item" v-for="(item,index) in info.company" :key="index"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="airSize" placeholder="机型" @change="handleAirSize">
          <el-option label="大" value="大"></el-option>
          <el-option label="中" value="中"></el-option>
          <el-option label="小" value="小"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="filter-cancel">
      筛选：
      <el-button type="primary" round plain size="mini" @click="handleFiltersCancel">撤销</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Object,
      default(){
        return{}
      }
    },
    info:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data() {
    return {
      airport: "", // 机场
      flightTimes: "", // 出发时间
      company: "", // 航空公司
      airSize: "" // 机型大小
    };
  },
  methods: {
    // 选择机场时候触发
    handleAirport(value) {},

    // 选择出发时间时候触发
    handleFlightTimes(value) {},

    // 选择航空公司时候触发
    handleCompany(value) {},

    // 选择机型时候触发
    handleAirSize(value) {},

    // 撤销条件时候触发
    handleFiltersCancel() {}
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