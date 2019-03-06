<template>
  <div>
    <el-row type="flex" justify="space-between" align="middle">
      <div>
        <el-button to="../goods/GoodsAdd.vue">新增</el-button>
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
      <el-table-column label="类型" width="180" prop="categoryname"></el-table-column>
      <el-table-column label="价格" width="180">
        <template slot-scope="scope">
          <span>{{scope.row.market_price|tofixed}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <div class="block mt20">
      <span class="demonstration"></span>
      <!-- currentPage代表当前页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      // 当前显示页数
      pageIndex: 1,
      // 页面最大显示条数
      pageSize: 5,
      // 搜索条件
      searchvalue: "",
      totalCount:0,
    };
  },
  mounted() {
    this.$axios
      .get(
        `http://localhost:8899/admin/goods/getlist?pageIndex=${
          this.pageIndex
        }&pageSize=${this.pageSize}&searchvalue=${this.searchvalue}`
      )
      .then(res => {
        console.log(res)
        const {data}=res;
        this.tableData=data.message;
        this.totalCount=data.totalcount;
        
      });
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 切换显示条数时触发
    handleSizeChange(num) {
      console.log(num);
    },
    // 切换页数时触发
    handleCurrentChange(num) {
      console.log(num);
    }
  },
  //   过滤器
  filters: {
    tofixed: function(data) {
      return Number(data).toFixed(2);
    }
  }
};
</script>

<style>
</style>
