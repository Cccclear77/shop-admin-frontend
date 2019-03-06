<template>
  <div>
    <el-row type="flex" justify="space-between" align="middle">
      <div>
        <el-button>新增</el-button>
        <el-button>删除</el-button>
      </div>
      <div>
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-row>
    <el-table :data="tableData" style="width: 100%" class="mt20">
      <el-table-column label="标题" width="180" prop="title"></el-table-column>
      <el-table-column label="类型" width="180" prop="type"></el-table-column>
      <el-table-column label="价格" width="180">
        <template slot-scope="scope">
          <span>{{scope.row.price|tofiexd}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          title: "原装正品",
          type: "手机",
          price: "2099"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  //   过滤器
  filters: {
      tofixed:function(data){
          return Number(data).tofixed(2);
      }
  }
};
</script>

<style>
</style>
