<template>
  <div class="left_nav">
    <el-row type="flex" justify="space-between" class="nav">
        <el-col :span="6" class="nav_item">
            <span>热门城市</span>
            <i class="el-icon-arrow-right"></i>
            </el-col>  
        <el-col :span="6" class="nav_item">热门城市</el-col>  
        <el-col :span="6" class="nav_item">热门城市</el-col>  
        <el-col :span="6" class="nav_item">热门城市</el-col>  
    </el-row>
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
.nav{
    width: 261px;
    height: 165px;
    border:1px solid #dfdfdf;
    flex-direction:column;
    .nav_item{
        // flex-direction:column;
        margin-left:10px; 
        line-height: 41px;
        width: 250px;
        
    }
}
</style>