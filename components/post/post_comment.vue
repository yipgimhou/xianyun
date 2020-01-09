<template>
  <div class="post_comment">
    <h2>评论</h2>
    <div class="create_comment">
      <el-input type="textarea" :rows="2" placeholder="说点什么吧..." resize="none"></el-input>
    </div>
    <div class="img-btn">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
      <el-button type="primary" class="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: ""
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang='less' scoped>
h2{
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 20px;
}
/deep/.el-textarea__inner{
    height: 100px;
}
.img-btn{
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    .imgs{
        width: 100px;
        height: 100px;
    }
    .submit{
        display: block;
        height: 40px;
    }
}
</style>