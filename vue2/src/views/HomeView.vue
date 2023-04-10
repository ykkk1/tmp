<template>
  <el-container style="min-height: 100vh">
    <el-aside :width="sideWidth + 'px'"
              style="background-color: rgb(238, 241, 246); box-shadow: 2px 0 6px rgb(0 21 41 / 35%);text-align: left">
      <el-menu style="min-height: 100%; overflow-x: hidden"
               background-color="rgb(48, 65, 86)"
               text-color="#fff"
               active-text-color="#ffd04b"
               :default-active='activeIndex'
               :collapse-transition="false"
               :collapse="isCollapse"
               router
               unique-opened:true
      >
        <div style="height: 60px; line-height: 60px; text-align: center">
          <img src="../assets/logo.png" alt="" style="width: 20px; position: relative; top: 5px">
          <b style="color: white;margin-left: 5px" v-show="logoTextShow ">后台管理系统</b>
        </div>
        <el-menu-item index="shouye">
          <i class="el-icon-view"></i>
          <span slot="title"> 首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title"> 工作台</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="showdb">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="yuanquzonglan">
          <i class="el-icon-view"></i>
          <span slot="title"> 园区总览</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-guide"></i>
            <span slot="title"> 园区导航</span>
          </template>
          <!--          <el-menu-item-group v-for="yq in yuanqu" :key="yuanqu.id">-->
          <!--            <el-menu-item @click="handleClick(yq.id)" :value-key="yq.id" :index="yq.name">{{ yq.name }}</el-menu-item>-->
          <!--          </el-menu-item-group>-->
            <el-menu-item @click="handleClick(i.name)" v-for="i in tableData" :value-key="i.id" :index="i.name">{{ i.name }}</el-menu-item>
        </el-submenu>
        <el-menu-item index="jianceguanli">
          <i class="el-icon-cpu"></i>
          <span slot="title"> 监测管理</span>
        </el-menu-item>
        <el-menu-item index="showdb">
          <i class="el-icon-s-data"></i>
          <span slot="title"> 统计分析</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="font-size: 12px; border-bottom: 1px solid #ccc; line-height: 60px; display: flex;width: 100%;">
        <div style="flex: 1; font-size: 20px">
          <span :class="collapseBtnClass" style="cursor: pointer" @click="collapse"></span>
        </div>
        <el-dropdown style="width: 70px; cursor: pointer">
          <span>王小虎</span><i class="el-icon-arrow-down" style="margin-left: 5px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main>
        <router-view>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>


export default {
  name: 'Home',
  // 组件起名字
  data() {
    return {
      tableData: [],
      msg: "hello 青哥哥",
      collapseBtnClass: 'el-icon-s-fold',
      isCollapse: false,
      sideWidth: 200,
      logoTextShow: true,
      activeIndex: '',
      yuanqu: [
        {id: 1, name: "园区一"},
        {id: 2, name: "园区二"},
        {id: 3, name: "园区三"},
      ],
    }
  },
  created: function () {
    this.$http.get("http://localhost:8088/yuanqu").then((response) => {//箭头函数使作用域继承父级，即created当前级，this可生效
      console.log(response.data)
      this.tableData = response.data
    })
  },
  methods: {
    collapse() {  // 点击收缩按钮触发
      this.isCollapse = !this.isCollapse
      if (this.isCollapse) {  // 收缩
        this.sideWidth = 64
        this.collapseBtnClass = 'el-icon-s-unfold'
        this.logoTextShow = false
      } else {   // 展开
        this.sideWidth = 200
        this.collapseBtnClass = 'el-icon-s-fold'
        this.logoTextShow = true
      }
    },

    watch: {
      $route(e) {
        // 监听路由，当路由改变时获取到路由的name也就是菜单的index
        this.activeIndex = e.name
      }
    },
    handleClick(name) {
      this.$router.push({
        path: '/jifang',
        query: {
          name:name
        }
      })
    }
  },
}
</script>