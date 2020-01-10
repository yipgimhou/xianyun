<template>
  <div class="article">
    <el-row type="flex" justify="space-between">
      <el-col :span="18" class="left">
        <Postarticle :data="articleData" />
        <Postcomment />
        <PostcomList />
      </el-col>
      <el-col :span="4" class="right"></el-col>
    </el-row>
  </div>
</template>

<script>
import Postarticle from "@/components/post/post_article.vue";
import Postcomment from "@/components/post/post_comment.vue";
import PostcomList from "@/components/post/post_comList.vue";
export default {
  data() {
    return {
      articleData: {},
      comments: []
    };
  },
  components: {
    Postarticle,
    Postcomment,
    PostcomList
  },
  mounted() {
    this.$axios({
      url: "/posts",
      params: {
        id: this.$route.query.id
      }
    }).then(res => {
      console.log(res);
      this.articleData = res.data;
      this.comments = res.data.data[0].comments;
      console.log(this.comments);
    });
  }
};
</script>

<style lang='less' scoped>
.article {
  margin: 0 auto;
  width: 1000px;
}
</style>