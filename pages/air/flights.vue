<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <FlightsFilters  :data='cacheInfo' @setDataList='setDataList'/>

        <!-- 航班头部布局 -->
        <FlightsListHead />

        <!-- 航班信息 -->
        <FlightsListItem v-for="(item,index) in flightsInfo.flights" :key="index" :data='item'/>
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
            flightsInfo:{
              info:{},
              options:{}
            },
            cacheInfo:{
              info:{},
              options:{}
            }
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
      this.cacheInfo = {...res.data};
    });
  },
  methods:{
    setDataList(arr){
      this.flightsInfo.flights = arr;
    }
  },
  computed:{
    DataList(){
      if(!this.flightsInfo.flights) return []
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
}

.aside {
  width: 240px;
}
</style>