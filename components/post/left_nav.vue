<template>
  <div class="left_nav" @mouseleave="cleanchildren()">
    <el-row
      type="flex"
      justify="space-between"
      class="nav"
      v-for="(item,index) in cityList"
      :key="index"
    >
      <el-col :span="6" @mouseenter.native="showchildren(index)" class="nav_item">
        <span>{{item.type}}</span>
        <i class="el-icon-arrow-right"></i>
      </el-col>
    </el-row>
    <div v-show="isshow" class="citychildren">
      <div v-for="(info,index) in cityList[showindex].children || []" :key="index" class="one">
        <span class="no">{{index+1}}</span>
        <span class="city" @click="screenarticle(info.city)">{{info.city}}</span>
        <span class="desc" @click="screenarticle(info.city)">{{info.desc}}</span>
      </div>
    </div>
    <div class="recommendCity">
      <span>推荐城市</span>
      <div class="recommendimg">
        <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: [{}],
      showindex: 0,
      isshow: false,
      screenData: {}
    };
  },
  mounted() {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      this.cityList = res.data.data;
    });
  },
  methods: {
    showchildren(index) {
      this.showindex = index;
      this.isshow = true;
    },
    cleanchildren() {
      this.showindex = 0;
      this.isshow = false;
    },
    screenarticle(value) {
      this.$axios({
        url: "/posts",
        params: {
          city: value
        }
      }).then(res => {
        console.log(res);
        this.screenData = res.data;
        this.$emit("screen", this.screenData);
      });
    }
  }
};
</script>

<style lang='less' scoped>
.nav {
  // position: relative;
  width: 261px;
  height: 41px;
  border: 1px solid #dfdfdf;
  // border-bottom: none;
  flex-direction: column;
  .nav_item {
    // flex-direction:column;
    line-height: 41px;
    width: 261px;
    display: flex;
    justify-content: space-between;
    // border-bottom: 1px solid #dfdfdf;
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

  .nav_item:last-child {
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
  span {
    display: block;
    height: 32px;
    margin-bottom: 20px;
    border-bottom: 1px solid #dfdfdf;
  }
  img {
    width: 260px;
    height: 173px;
  }
}
.citychildren {
  position: absolute;
  top: 0px;
  left: 260px;
  display: block;
  border: 1px solid #dfdfdf;
  z-index: 99;
  //  display: block;

  .one {
    line-height: 36px;
    width: 308px;
    height: 30px;
    border-left: none;
    background-color: #fff;
    padding: 5px 20px;
    .no {
      color: #ffb01d;
      font-size: 24px;
      font-style: italic;
    }
    .city {
      color: #ffb01d;
      font-size: 14px;
      margin: 0 5px;
    }
    .desc {
      color: #999999;
      font-size: 14px;
      margin: 0 5px;
    }
    .city:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    .desc:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>