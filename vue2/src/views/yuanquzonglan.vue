<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/shouye' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item >园区总览</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row gutter="20" style="margin-bottom: 20px">
      <el-col span="12">
        <el-container>
          <div class='demo' style="width: 900px">
            <h1 style="font-size: 30px">园区总览监控</h1>
          </div>
        </el-container>
      </el-col>
    </el-row>
    <el-row gutter="20" style="margin-bottom: 20px">
      <el-col span="20">
        <video-player class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions">
        </video-player>
      </el-col>
      <el-col span="4">
        <h3 style="font-size: 30px">园区状态</h3>
        <h3 style="color: darkgray">点击园区按键跳转</h3>
        <el-button type="primary" style="height: 60px;margin-top: 20px;margin-left: 10px; width: 180px" v-for="yq in yuanqu">{{ yq.name }}</el-button>
      </el-col>
    </el-row>
  </div>

</template>

<script>

export default {
  name: "yuanquzonglan",
  data() {
    return {
      yuanqu: [
        {id: 1, name: "园区一"},
        {id: 2, name: "园区二"},
        {id: 3, name: "园区三"},
      ],
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false,  // 如果为true,浏览器准备好时开始回放
        muted: false,     // 默认情况下将会消除任何音频。
        loop: false,      // 是否视频一结束就重新开始。
        preload: 'auto',  // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9',  // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true,  // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",  // 类型
          src: require('/Users/yukuai/Downloads/38640691BE85E37A0662CB386364FE43.png')           // url地址
        }],
        poster: require('/Users/yukuai/Downloads/38640691BE85E37A0662CB386364FE43.png'),  // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试',  // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,           // 当前时间和持续时间的分隔符
          durationDisplay: true,       // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true       // 是否显示全屏按钮
        }
      }
    }
  },
  components: {},
  methods: {}
}
</script>

<style scoped>

</style>