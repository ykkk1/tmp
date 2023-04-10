<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
  name: "jianceguanli",
  data() {
    return {
      map: null //初始化 map 对象
    }
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "53a231171f47d6c5a4818794b2356bdc", //此处填入我们注册账号后获取的Key
        version: "2.0", //指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Scale'], //需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        this.map = new AMap.Map("container", { //设置地图容器id
          viewMode: "3D", //是否为3D地图模式
          zoom: 5, //初始化地图级别
          center: [116.250776, 40.217004], //初始化地图中心点位置
        });
      }).catch(e => {
        console.log(e);
      })
    },
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  }
}
</script>

<style scoped>
#container {
  width: 80%;
  height: 400px;
  margin: 100px auto;
  border: 2px solid red;
}
</style>