<template>
  <div class="post_comList">
    <div class="comment">
      <span>
        <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" />地球发动机 <span class="time"> 2020-01-08 5:19</span>
      </span>
      <p>222</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.comment{
    border: 1px solid #dddddd;
    border-bottom: 1px dotted #dddddd;
    margin: 20px 0;
    padding: 15px;
    span{
        line-height: 16px;
        font-size: 12px;
        margin-bottom:10px; 
    }
    .time{
        color: #999;
    }
}
img {
  width: 16px;
  height: 16px;
}
</style>