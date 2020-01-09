<template>
  <div class="post_drafts">
    <span class="draftsbox">草稿箱 (2)</span>
    <div class="draftsList">
      <div class="draftsData">
        <a href="#">
          草稿1
          <i class="el-icon-edit"></i>
        </a>
        <br />
        <span class="time">2020-01-06</span>
      </div>
      <div class="draftsData">
        <a href="#">
          草稿2
          <i class="el-icon-edit"></i>
        </a>
        <br />
        <span class="time">2020-01-06</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.post_drafts {
  display: block;
  width: 200px;
  border: 1px solid #dddddd;
  .draftsbox {
    display: block;
    height: 22px;
    font-size: 16px;
    margin: 10px;
  }
  .draftsData {
    display: block;
    height: 40px;
    margin: 10px;
    font-size: 14px;
    .time {
      color: #999;
    }
    a:hover {
      color: #ffa500;
      text-decoration: underline;
    }
  }
}
</style>