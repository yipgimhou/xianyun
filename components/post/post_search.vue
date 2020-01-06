<template>
  <div class="post_search">
      <div class="searchinput">
          <input type="text" id="search" placeholder="请输入想去的地方，比如：‘广州’">
          <i class="el-icon-search"></i>
      </div>
    <div class="recommend">
      推荐:
      <span>广州</span>
      <span>上海</span>
      <span>北京</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input10: ""
    };
  }
};
</script>

<style lang='less' scoped>
.post_search {
  .searchinput {
    height: 30px;
    border: 2px solid #ffa500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    #search{
        margin: 0;
        padding: 0 10px;
        height: 26px;
        width: 100%;
        // text-align: center;
        border: none;
        outline: none;
    }
    i{
        font-size: 20px;
        color:#ffa500;
        font-weight: 600;
        line-height: 30px;
        padding: 0 10px;
    }
  }
  .recommend {
    font-size: 12px;
    margin: 10px 0;
    span {
      margin: 0 5px;
    }
  }
}
</style>