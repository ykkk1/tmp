<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="demo-image">
      <img :src="imgurl" height="400" width="400" usemap="#plantmap" />
      <map name="plantmap">
        <!-- area 定义图像映射中的区域 -->
        <area v-for="area in props" :shape="area.shape" :coords="area.coords" style="cursor: pointer" @click="open(area.id)">
      </map>
    </div>
  </div>
</template>

<script>
export default {
  name: "shouye",
  data() {
    return {
      imgurl: require('/src/assets/logo.png'),
      props: [
        {id: 1, shape: "circle", coords: "150,150,30"},
        // {id: 2, shape: "rect", coords: "60,60,100,100"},
        // {id: 3, shape: "rect", coords: "0,0,50,50"},
      ],
      yuanqu: [
        {id: 1, name: "园区一"},
        {id: 2, name: "园区二"},
        {id: 3, name: "园区三"},
      ]
    }
  },
  methods: {
    open(id) {
      this.$alert(this.yuanqu[id-1].name, '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          });
        }
      });
    },
  },
}
</script>

<style scoped>

</style>