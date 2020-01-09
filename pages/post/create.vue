<template>
  <div class="create">
    <el-row type="flex" justify="space-between">
      <el-col :span="18" class="left">
        <Postcreate />
      </el-col>
      <el-col :span="4" class="right">
        <Postdrafts />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Postcreate from "@/components/post/post_create.vue";
import Postdrafts from "@/components/post/post_drafts.vue";
export default {
  components: {
    Postcreate,
    Postdrafts
  }
};
</script>

<style lang='less' scoped>
.create {
  width: 1000px;
  margin: 30px auto;
  .right{
    margin-top: 10px;
  }
}
</style>