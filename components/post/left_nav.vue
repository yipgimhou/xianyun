<template>
  <div class="left_nav">
    <el-row type="flex" justify="space-between" class="nav">
      <el-col :span="6" class="nav_item">
        <span>热门城市</span>
        <i class="el-icon-arrow-right"></i>
      </el-col>
      <el-col :span="6" class="nav_item">
        <span>推荐城市</span>
        <i class="el-icon-arrow-right"></i>
      </el-col>
      <el-col :span="6" class="nav_item">
        <span>奔向海岛</span>
        <i class="el-icon-arrow-right"></i>
      </el-col>
      <el-col :span="6" class="nav_item">
        <span>主题推荐</span>
        <i class="el-icon-arrow-right"></i>
      </el-col>
    </el-row>
    <div class="recommendCity">
      <span>推荐城市</span>
      <div class="recommendimg">
          <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
.nav {
  width: 261px;
  height: 165px;
  border: 1px solid #dfdfdf;
  flex-direction: column;
  .nav_item {
    // flex-direction:column;
    line-height: 41px;
    width: 261px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dfdfdf;
    span {
      margin-left: 10px;
    }
    .el-icon-arrow-right {
      margin-left: 100px;
      line-height: 41px;
      margin-right: 10px;
      color: #dfdfdf;
    }
  }
  .nav_item:last-child{
      border-bottom: none;
  }
  .nav_item:hover {
    color: #ffb01d;
    .el-icon-arrow-right {
      color: #ffb01d;
    }
  }
}
.recommendCity {
    width: 260px;
    height: 216px;
    padding: 30px 0;
    span{
        display: block;
        height: 32px;
        margin-bottom: 20px;
        border-bottom: 1px solid #dfdfdf;
    }
    img{
        width: 260px;
        height: 173px;

    }
  }
</style>