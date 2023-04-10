<template>
  <div>
    <el-main>
      <div style="margin-bottom: 30px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/shouye' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div style="margin: 10px 0">
        <el-input style="width: 200px" placeholder="请输入名称" suffix-icon="el-icon-search"></el-input>
        <el-input style="width: 200px;margin-left: 5px" placeholder="请输入邮箱"
                  suffix-icon="el-icon-message"></el-input>
        <el-input style="width: 200px;margin-left: 5px" placeholder="请输入地址"
                  suffix-icon="el-icon-position"></el-input>
        <el-button style="margin-left: 5px" type="primary">查询</el-button>
      </div>

      <div style="margin: 10px 0">
        <el-button type="primary" @click="handleAdd">新增<i class="el-icon-circle-plus-outline"
                                                          style="margin-left: 2px"></i></el-button>
        <el-button type="danger">批量删除<i class="el-icon-remove-outline" style="margin-left: 2px"></i></el-button>
        <el-button type="primary">导入<i class="el-icon-bottom" style="margin-left: 2px"></i></el-button>
        <el-button type="primary">导出<i class="el-icon-top" style="margin-left: 2px"></i></el-button>
      </div>
      <el-table :data="tableData" border stripe height="600px">
        <!--          : 表示使用这个属性，在下面的return内定义，是v-bind:的缩写-->
        <el-table-column prop="id" label="ID" width="80">
        </el-table-column>
        <el-table-column prop="name" label="机房名称" width="120">
        </el-table-column>
        <el-table-column prop="location" label="所处位置">
        </el-table-column>
        <el-table-column prop="fromYuanqu" label="所属园区号">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="success" @click="handleEdit(scope.row)">编辑<i class="el-icon-edit" style="margin-left: 2px"></i></el-button>

              <el-popconfirm
                  confirm-button-text='好的'
                  cancel-button-text='不用了'
                  icon="el-icon-info"
                  icon-color="red"
                  title="这是一段内容确定删除吗？"
                  @confirm="del(scope.row.id)"
              >
                <el-button type="danger" slot="reference" >删除<i class="el-icon-remove-outline" style="margin-left: 2px"></i></el-button>

              </el-popconfirm>

          </template>
        </el-table-column>
      </el-table>
      <div style="padding: 10px 0">
        <el-pagination @size-change="sizeChange" @current-change="currentChange"
                       :current-page="page" :page-size="size" :page-sizes="pageSizes"
                       layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>

      <el-dialog title="新增机房" :visible.sync="dialogFormVisible">
        <el-form label-width="100px" size="small">
          <el-form-item label="ID" :label-width="formLabelWidth">
            <el-input v-model="form.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="机房名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所属位置" :label-width="formLabelWidth">
            <el-input v-model="form.location" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所属园区号" :label-width="formLabelWidth">
            <el-input v-model="form.fromYuanqu" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="save">确 定</el-button>
        </div>
      </el-dialog>


    </el-main>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: "showdatabase",

  data() {
    return {
      page: 1, //第几页
      size: 10, //一页多少条
      total: 0, //总条目数
      pageSizes: [3, 5, 10, 20, 50, 100, 200, 300, 400, 500, 1000], //可选择的一页多少条
      tableData: [],
      ALLData: [],
      form: {},
      dialogFormVisible: false,
      collapseBtnClass: 'el-icon-s-fold',
      isCollapse: false,
      sideWidth: 200,
      logoTextShow: true
    }
  },

  created() {
    this.$http.get("/yuanqu").then((response) => {//箭头函数使作用域继承父级，即created当前级，this可生效
      console.log(response.data)
      this.ALLData = response.data
      this.getTabelData()
    })

  },
  watch: {
    // ALLData(newVal, oldVal){
    //   console.log('newVal', newVal);
    //   console.log('oldVal', oldVal);
    // },
    tableData: {
      immediate: true,
      handler(newVal, oldVal) {
        console.log('newVal', newVal);
        console.log('oldVal', oldVal);
      }

    },
    // immediate: true
  },
  methods: {
    getTabelData() {
      //allData为全部数据
      this.tableData = this.ALLData.slice(
          (this.page - 1) * this.size,
          this.page * this.size
      );
      this.total = this.ALLData.length
    },
    currentChange(val) {
      console.log("翻页，当前为第几页", val);
      this.page = val;
      this.getTabelData();
    },
    //size改变时回调的函数，参数为当前的size
    sizeChange(val) {
      console.log("改变每页多少条，当前一页多少条数据", val);
      this.size = val;
      this.page = 1;
      this.getTabelData();
    },
    handleAdd()
    {
      this.dialogFormVisible = true
      this.form = {}
    },
    del(id){
      request.delete("http://localhost:8088/yuanqu/"+id).then(res=> {
        if(res){
          this.$message.success("删除成功")
          this.load()
        }else{
          this.$message.error("删除失败")
        }
      })
    },
    handleEdit(row){
      this.form=row
      this.dialogFormVisible=true
    },
    save(){
      request.post("http://localhost:8088/insertyuanqu",this.form).then(res =>{
        if(res){
          this.$message.success("保存成功")
          this.dialogFormVisible=false
        }else{
          this.$message.error("保存失败")
        }
      })
    },
  }
}

</script>

<style scoped>

</style>