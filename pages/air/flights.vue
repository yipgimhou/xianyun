<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <FlightsFilters :data="cacheInfo" @setDataList="setDataList" />

        <!-- 航班头部布局 -->
        <FlightsListHead />

        <!-- 航班信息 -->
        <FlightsListItem v-for="(item,index) in DataList" :key="index" :data="item" />

        <!-- 分页部分 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
        <FlightsAside />
      </div>
    </el-row>
  </section>
</template>

<script>
import FlightsListHead from "@/components/air/flightsListHead.vue";
import FlightsListItem from "@/components/air/flightsItem.vue";
import FlightsFilters from "@/components/air/flightsFilters.vue";
import FlightsAside from "@/components/air/flightsAside.vue";
export default {
  data() {
    return {
      flightsInfo: {
        info: {},
        options: {}
      },
      cacheInfo: {
        info: {},
        options: {}
      },
      // 当前的页面
      pageIndex: 1,
      // 当前的条数
      pageSize: 5,
      // 总条数
      total: 0
    };
  },
  components: {
    FlightsListHead,
    FlightsListItem,
    FlightsFilters,
    FlightsAside
  },
  mounted() {
    this.$axios({
      url: "/airs",
      params: this.$route.query
    }).then(res => {
      console.log(res);
      this.flightsInfo = res.data;
      this.cacheInfo = { ...res.data };
      this.total = res.data.total;
    });
  },
  watch:{
    $route(){
      this.$axios({
      url: "/airs",
      params: this.$route.query
    }).then(res => {
      console.log(res);
      this.flightsInfo = res.data;
      this.cacheInfo = { ...res.data };
      this.total = res.data.total;
      this.pageIndex = 1;
    });
    }
  },
  methods: {
    setDataList(arr) {
      this.flightsInfo.flights = arr;
      this.total = arr.length;
    },
    handleSizeChange(value) {
      this.pageSize = value;
    },
    handleCurrentChange(value) {
      this.pageIndex = value;
    }
  },
  computed: {
    DataList() {
      if (!this.flightsInfo.flights) return [];
      // 计算分页的数据
      return this.flightsInfo.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
    }
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
  .el-pagination {
    margin-left: 80px;
  }
}

.aside {
  width: 240px;
}
</style>