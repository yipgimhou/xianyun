<template>
  <div class="post">
    <el-row type="flex" justify="space-between">
      <el-col :span="6" class="nav_item">
        <!-- 左边部分 -->
        <LeftNav @screen="getscreen"/>
      </el-col>
      <el-col :span="17" class="nav_item">
        <!-- 搜索框部分 -->
        <Postsearch @search="getsearch" />
        <!-- 攻略列表部分 -->
        <Postlist :data="DataList" />
        <!-- 分页部分 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[3, 5, 10, 15]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="postData.total"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftNav from "@/components/post/left_nav.vue";
import Postsearch from "@/components/post/post_search.vue";
import Postlist from "@/components/post/post_list.vue";
export default {
  data() {
    return {
      postData: {},
      searchname: "",
      // 当前的页面
      pageIndex: 1,
      // 当前的条数
      pageSize: 3,
      // 总条数
      total: 0
    };
  },
  components: {
    LeftNav,
    Postsearch,
    Postlist
  },
  mounted() {
    this.$axios({
      url: "/posts"
    }).then(res => {
      console.log(res);
      this.postData = res.data;
    });
  },
  methods: {
    handleSizeChange(value) {
      this.pageSize = value;
    },
    handleCurrentChange(value) {
      this.pageIndex = value;
    },
    getsearch(data) {
     console.log(data) ;
     this.postData = data
    },
    getscreen(data){
      this.postData = data;
    }
  },
  computed: {
    DataList() {
      if (!this.postData.data) return [];
      // 计算分页的数据
      return this.postData.data.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
    }
  }
};
</script>

<style lang='less' scoped>
.post {
  width: 1000px;
  margin: 30px auto;
}
</style>