<template>
  <div class="container">
    <!-- 引入element中的轮播图组件 -->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item,index) in pics" :key="index">
        <!-- 发起axios找到服务器上图片的路径 -->
        <!-- 图片路径需要在前面添加baseURL基础路径 -->
         <div class="banner-image" :style="`background:url(${$axios.defaults.baseURL}${item.url}) center center no-repeat;background-size:contain contain;`">
         </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
data(){
  return{
    //将轮播图所以图片放在pics数组中
    pics:[]
  }
},
mounted(){
  //发起axios访问服务器上的url
  this.$axios({
    url:'/scenics/banners'
  })
  //将获取到的图片路径数据存入pics数组中
  .then(res=>{
    var {data} = res.data
    this.pics = data
  })
}
}
</script>

<style lang='less' scoped>
  .container{
    min-width:1000px;
    margin:0 auto;
    position:relative;

    /deep/ .el-carousel__container{
        height:700px;
    }

    .banner-image{
        width:100%;
        height:100%;
    }
}
</style>