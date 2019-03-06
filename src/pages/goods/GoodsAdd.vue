<template>
<el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="所属类别">
    <el-select v-model="value7" placeholder="请选择">
    <el-option-group
      v-for="group in options3"
      :key="group.label"
      :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-option-group>
  </el-select>
    </el-form-item>
     <el-form-item label="是否发布  ">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
    <el-form-item label="推荐类型">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="置顶" name="type"></el-checkbox>
      <el-checkbox label="热门" name="type"></el-checkbox>
      
    </el-checkbox-group>
  </el-form-item>
  
  <el-form-item label="内容标题">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="副标题">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <!-- 单张图片上传 -->
  <el-form-item label="上传头像">
<el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
</el-form-item>

<el-form-item label="商品货号">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="库存数量">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="市场价格">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="销售价格">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <!-- 图片相册 -->
  <el-form-item label="图片相册">
<el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
  
</el-upload>
</el-form-item>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
  <el-form-item label="内容摘要">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
 
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        // 头像图片
         imageUrl: ''
      }

    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
       handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
    //   判断图像是否大于2m是的话不上传
      beforeAvatarUpload(file) {
      
        const isLt2M = file.size / 1024 / 1024 < 2;

       
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
<style>
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
