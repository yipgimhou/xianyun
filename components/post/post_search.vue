<template>
  <div class="post_search">
    <div class="searchinput">
      <input
        type="text"
        id="search"
        placeholder="请输入想去的地方，比如：‘广州’"
        v-model="city"
        @blur="handleDepartBlur(city)"
      />
      <i class="el-icon-search"></i>
    </div>
    <div class="recommend">
      推荐:
      <span @click="search('广州')">广州</span>
      <span @click="search('上海')">上海</span>
      <span @click="search('北京')">北京</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "",
      searchData: {}
    };
  },
  methods: {
    handleDepartBlur(value) {
      console.log(123);
      if (value === "") {
        this.$axios({
          url: "/posts"
        }).then(res => {
          console.log(res);
          this.searchData = res.data;
          this.$emit("search", this.searchData);
        });
        return;
      } else {
        this.search(this.city);
      }
    },
    search(value) {
      this.$axios({
        url: "/posts",
        params: {
          city: value
        }
      }).then(res => {
        console.log(res);
        this.searchData = res.data;
        this.$emit("search", this.searchData);
      });
    }
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
    #search {
      margin: 0;
      padding: 0 10px;
      height: 26px;
      width: 100%;
      // text-align: center;
      border: none;
      outline: none;
    }
    i {
      font-size: 20px;
      color: #ffa500;
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
    span:hover{
      color: #ffa500;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>