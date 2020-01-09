<template>
  <div class="article">
    <el-row type="flex" justify="space-between">
      <el-col :span="18" class="left">
        <Postarticle />
        <Postcomment/>
        <PostcomList/>
      </el-col>
      <el-col :span="4" class="right"></el-col>
    </el-row>
  </div>
</template>

<script>
import Postarticle from "@/components/post/post_article.vue";
import Postcomment from "@/components/post/post_comment.vue";
import PostcomList from "@/components/post/post_comList.vue"
export default {
  components: {
    Postarticle,
    Postcomment,
    PostcomList
  }
};
</script>

<style lang='less' scoped>
.article {
  margin: 0 auto;
  width: 1000px;
}
</style>