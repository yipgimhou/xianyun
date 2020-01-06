<template>
  <div class="post">
    <el-row type="flex" justify="space-between">
      <el-col :span="6" class="nav_item">
        <LeftNav/>
      </el-col>
      <el-col :span="17" class="nav_item">
        <Postsearch/>
        <Postarticle/>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import LeftNav from "@/components/post/left_nav.vue"
import Postsearch from "@/components/post/post_search.vue"
import Postarticle from "@/components/post/post_article.vue"
export default {
components:{
  LeftNav,
  Postsearch,
  Postarticle
}
}
</script>

<style lang='less' scoped>
  .post{
    width: 1000px;
    margin: 30px auto;
  }
</style>