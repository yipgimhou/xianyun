<template>
  <div class="post_article">
    <div class="header">
      <el-breadcrumb separator="/" class="header">
        <el-breadcrumb-item :to="{ path: '/post/index' }" class="toindex">旅游攻略</el-breadcrumb-item>
        <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-for="(item,index) in data.data" :key="index">
      <div class="title">
        <h1>{{item.title}}</h1>
      </div>
      <div class="info">
        <span class="article_time">攻略：{{item.city.created_at}}</span>
        <span class="article_time">阅读：{{item.watch}}</span>
      </div>
      <div class="article_content" v-html="item.content"></div>
      <div class="footer_icon">
        <div class="commend">
          <i class="el-icon-edit-outline"></i>
          <span>评论({{item.comments.length}})</span>
        </div>
        <div class="collect">
          <i class="el-icon-star-off"></i>
          <span>收藏</span>
        </div>
        <div class="share">
          <i class="el-icon-share"></i>
          <span>分享</span>
        </div>
        <div class="like">
          <span class="iconfont icon-dianzan"></span>
          <span>{{item.like===null?"点赞":`点赞${item.like}`}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/font_vr5g0eiyowc/iconfont.css";
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  mounted() {
    // console.log(this.data.data.title)
  }
};
</script>

<style lang='less' scoped>
.header {
  margin-top: 20px;
}
h1 {
  width: 700px;
  height: 85px;
  font-size: 32px;
  padding: 20px 0;

  border-bottom: 1px solid #e9e9e9;
}

.toindex:hover {
  color: #59a6ff;
}
.info {
  width: 700px;
  color: #a8b2b9;
  margin: 10px 0;
  text-align: right;
  span {
    margin-right: 10px;
  }
}
.article_content {
  width: 700px;
  font-size: 16px;
  /deep/img {
    max-width: 700px;
  }
}
.footer_icon {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  .commend,
  .collect,
  .share,
  .like {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    i {
      color: #ffa500;
      font-size: 37px;
    }
    span {
      font-size: 14px;
      color: #a699b3;
    }
    .icon-dianzan {
      color: #ffa500;
      font-size: 35px;
      font-weight: 600;
    }
  }
}
</style>