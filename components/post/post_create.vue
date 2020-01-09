<template>
  <div class="post_create">
    <h1>发表新攻略</h1>
    <span class="share">分享你的个人游记，让更多人看到哦！</span>
    <el-input placeholder="请输入标题" clearable class="title"></el-input>
    <div id="word_editor">
      <VueEditor :config="config" class="vue_editor" />
    </div>
    <div class="city">
      <el-row type="flex">
        <el-col :span="6" class="selectcity">选择城市</el-col>
        <el-col :span="6">
          <el-autocomplete
            class="inline-input"
            v-model="state2"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            :trigger-on-focus="false"
            @select="handleSelect"
          ></el-autocomplete>
        </el-col>
      </el-row>
    </div>
    <div class="publish">
      <el-button type="primary" size="medium" class="publish_btn">发布</el-button><span>或者</span><a href="#">保存到草稿</a>
    </div>
  </div>
</template>

<script>
// import VueEditor from "vue-word-editor";
import "quill/dist/quill.snow.css";
let VueEditor;

if (process.browser) {
  VueEditor = require("vue-word-editor").default;
}
export default {
  name: "word_editor",
  data() {
    return {
      config: {
        // 上传图片的配置
        uploadImage: {
          url: "http://localhost:3000/upload",
          name: "file",
          // res是结果，insert方法会把内容注入到编辑器中，res.data.url是资源地址
          uploadSuccess(res, insert) {
            insert("http://localhost:3000" + res.data.url);
          }
        },

        // 上传视频的配置
        uploadVideo: {
          url: "http://localhost:3000/upload",
          name: "file",
          uploadSuccess(res, insert) {
            insert("http://localhost:3000" + res.data.url);
          }
        }
      }
    };
  },
  components: {
    VueEditor
  },
  methods: {
    querySearch() {},
    handleSelect() {}
  }
};
</script>

<style lang='less' scoped>
h1 {
  margin: 10px 0;
  font-size: 22px;
  font-weight: 400;
}
.share {
  display: block;
  height: 16px;
  margin: 10px 0;
  font-size: 12px;
}
.title {
  margin: 10px 0;
}
#word_editor {
  margin: 10px 0;
  height: 300px;
  .vue_editor {
    height: 250px;
  }
}
.city {
  display: block;
  height: 20px;
  margin: 10px 0;
  .selectcity {
    width: 80px;
    line-height: 40px;
  }
}
.publish{
  display: block;
  height: 40px;
  margin-top: 30px;
  .publish_btn{
    margin-right: 10px;
  }
  span{
    margin: 0 10px;
  }
  a{
    color: #ffa500;
  }
  a:hover{
    text-decoration: underline;
  }
}
</style>