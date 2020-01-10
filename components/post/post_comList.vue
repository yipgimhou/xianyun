<template>
  <div class="post_comList">
    <div class="comment" v-for="(item,index) in comments.data" :key="index">
      <span>
        <img :src="`http://localhost:1337${item.account.defaultAvatar}`" />{{item.account.nickname}}
        <span class="time">2020-01-08 5:19</span>
      </span>
      <p>222</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: {}
    };
  },
  mounted() {
    this.$axios({
      url: "/posts/comments",
      params: {
        post: this.$route.query.id
      }
    }).then(res => {
      console.log(res);
      this.comments = res.data
    });
  }
};
</script>

<style lang='less' scoped>
.comment {
  border: 1px solid #dddddd;
  border-bottom: 1px dotted #dddddd;
  margin: 20px 0;
  padding: 15px;
  span {
    line-height: 16px;
    font-size: 12px;
    margin-bottom: 10px;
  }
  .time {
    color: #999;
  }
}
img {
  width: 16px;
  height: 16px;
}
</style>