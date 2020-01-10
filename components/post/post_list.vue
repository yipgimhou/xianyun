<template>
  <div class="post_list">
    <div class="header">
      <span>推荐攻略</span>
      <el-button type="primary" size="medium" @click="toCreate">
        <i class="el-icon-edit"></i>写游记
      </el-button>
    </div>
    <div class="contentList">
      <div v-for="(item,index) in data" :key="index">
        <!-- 三图模式 -->
        <div class="content_three" v-if="item.images.length >2" @click="toArticle(item.id)">
          <div class="content_title" >
            <span>{{item.title}}</span>
          </div>
          <div class="content_abstract">
            <p v-html="item.summary"></p>
          </div>
          <el-row type="flex" justify="space-between" class="content_img">
            <el-col :span="8" class="img">
              <img :src="item.images[0]" alt />
            </el-col>
            <el-col :span="8" class="img">
              <img :src="item.images[1]" alt />
            </el-col>
            <el-col :span="8" class="img">
              <img :src="item.images[2]" alt />
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-between" class="content_bottom">
            <el-col :span="20" class="left">
              <i class="el-icon-location-outline"></i>by
              <img :src="`http://localhost:1337${item.account.defaultAvatar}`" />
              <span>{{item.account.nickname}}</span>
              <i class="el-icon-view"></i>
              {{item.watch}}
            </el-col>
            <el-col :span="2" class="right">{{item.like}}赞</el-col>
          </el-row>
        </div>
        <!-- 一图模式 -->
        <div class="content_one" v-else-if="item.images.length<=2" @click="toArticle(item.id)">
          <div class="left">
            <img :src="item.images[0]" />
          </div>
          <div class="right">
            <div class="content_title">
              <span>{{item.title}}</span>
            </div>
            <div class="content_abstract">
              <p v-html="item.summary"></p>
            </div>
            <el-row type="flex" justify="space-between" class="content_bottom">
              <el-col :span="20" class="left">
                <i class="el-icon-location-outline"></i>by
                <img :src="`http://localhost:1337${item.account.defaultAvatar}`" />
                <span>{{item.account.nickname}}</span>
                <i class="el-icon-view"></i>
                {{item.watch}}
              </el-col>
              <el-col :span="2" class="right">{{item.like}}赞</el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return {};
      }
    }
  },
  methods: {
    toCreate() {
      this.$router.push("/post/create");
    },
    toArticle(value) {
      this.$router.push({
        path:'/post/article',
        query:{
          id:value
        }
      })
      console.log(value)
    }
  }
};
</script>

<style lang='less' scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  // padding-bottom: 8px;
  span {
    display: block;
    color: #ffaf40;
    width: 80px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ffaf40;
    font-size: 20px;
  }
}
.contentList {
  .content_one {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
    .left {
      img {
        width: 200px;
        height: 150px;
      }
    }
    .right {
      margin-left: 10px;
      .content_title {
        span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .content_bottom {
        border: none;
        margin-bottom: 0;
      }
    }
  }
  .content_title {
    height: 30px;
    margin: 10px 0;
    span {
      font-size: 18px;
      line-height: 30px;
    }
    span:hover {
      color: #ffaf40;
    }
  }
  .content_abstract {
    p {
      margin-bottom: 15px;
      line-height: 1.5;
      font-size: 14px;
      height: 63px;
      color: #666666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
    }
  }
  .content_img {
    .img {
      width: 220px;
      height: 150px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .content_bottom {
    margin: 15px 0;
    padding-bottom: 20px;
    border-bottom: 1px solid #eeeeee;
    .left {
      font-size: 12px;
      color: #999999;
      img {
        width: 16px;
        height: 16px;
        span {
          color: #ffa500;
        }
      }
    }
    .right {
      font-size: 16px;
      color: #ffa500;
    }
  }
}
</style>