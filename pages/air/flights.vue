<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <FlightsFilters :data='cityInfo' :info='options'/>

        <!-- 航班头部布局 -->
        <FlightsListHead />

        <!-- 航班信息 -->
        <FlightsListItem v-for="(item,index) in DataList" :key="index" :data='item'/>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
      </div>
    </el-row>
  </section>
</template>

<script>
import FlightsListHead from "@/components/air/flightsListHead.vue";
import FlightsListItem from "@/components/air/flightsItem.vue";
import FlightsFilters from '@/components/air/flightsFilters.vue'
export default {
    data(){
        return{
            flightsInfo:{},
            DataList:[],
            cityInfo:{},
            options:{}
        }
    },
  components: {
    FlightsListHead,
    FlightsListItem,
    FlightsFilters
  },
  mounted() {
    this.$axios({
      url: "/airs",
      params: this.$route.query
    }).then(res => {
      console.log(res);
      this.flightsInfo = res.data;
      this.DataList = this.flightsInfo.flights
      this.cityInfo = this.flightsInfo.info
      this.options = this.flightsInfo.options
    });
  }
};
</script>

<style lang='less' scoped>
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>