<template>
  <div class="post">
    <el-row type="flex" justify="space-between">
      <el-col :span="6" class="nav_item">
        <LeftNav/>
      </el-col>
      <el-col :span="17" class="nav_item">
        <Postsearch/>
        <Postlist/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftNav from "@/components/post/left_nav.vue"
import Postsearch from "@/components/post/post_search.vue"
import Postlist from "@/components/post/post_list.vue"
export default {
components:{
  LeftNav,
  Postsearch,
  Postlist
}
}
</script>

<style lang='less' scoped>
  .post{
    width: 1000px;
    margin: 30px auto;
  }
</style>