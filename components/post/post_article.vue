<template>
  <div class="post_article">
    <div class="header">
      <el-breadcrumb separator="/" class="header">
        <el-breadcrumb-item :to="{ path: '/post/index' }" class="toindex">旅游攻略</el-breadcrumb-item>
        <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="title">
      <h1>塞班贵？一定是你的打开方式不对！6000块玩转塞班</h1>
    </div>
    <div class="info">
      <span class="article_time">攻略：2019-05-22 10:57</span>
      <span class="article_time">阅读：12833</span>
    </div>
    <div
      class="article_content"
    >大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。</div>
    <div class="footer_icon">
      <div class="commend">
        <i class="el-icon-edit-outline"></i>
        <span>评论(100)</span>
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
        <span>点赞(74)</span>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/font_vr5g0eiyowc/iconfont.css"
export default {};
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
}
.footer_icon{
  display: flex;
  justify-content: center;
  padding: 20px 0;
  .commend,.collect,.share,.like{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    i{
      color: #ffa500;
      font-size: 37px;
    }
    span{
      font-size: 14px;
      color: #a699b3;
    }
    .icon-dianzan{
      color: #ffa500;
      font-size: 35px;
      font-weight: 600;
    }
  }
}
</style>