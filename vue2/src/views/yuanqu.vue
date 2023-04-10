<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/shouye' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item >园区导航</el-breadcrumb-item>
      <el-breadcrumb-item>{{this.$route.query.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row gutter="20" style="margin-bottom: 20px">
      <el-col span="12">
        <el-container>
          <div class='demo' style="width: 900px">
            <h1 style="font-size: 30px">{{this.$route.query.name}}监控</h1>
          </div>
        </el-container>
      </el-col>
      <el-col span="2">
        <el-container>
          <el-button type="primary" size="medium" @click="jump()">制作操作票</el-button>
        </el-container>
      </el-col>
      <el-col span="4">
        <el-container>
          <el-button type="warning" size="medium">取消当前作业</el-button>
        </el-container>
      </el-col>
    </el-row>
    <el-row gutter="10">
      <el-col span="12">
        <video-player class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions">
        </video-player>
      </el-col>
      <el-col span="11">
        <el-table
            :data="tableData"
            header-cell-style="font-size:15px"
            cell-style="font-size:15px"
            style="width: 100%">
          <el-table-column label="操作信息" align="center" >
            <el-table-column label="操作票信息" prop="info_on_list"></el-table-column>
            <el-table-column label="实际操作信息" prop="info_actual"></el-table-column>
          </el-table-column>
          <el-table-column label="动作是否正确" width="120" prop="check"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>

// 组件内引用vue-video-player插件
import {videoPlayer} from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default {
  name: 'yuanqu1',
  data() {
    return {
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
      },
      tableData:[
        {info_on_list:"xxx应该操作阀门1",info_actual:"xxx实操作阀门1",check:"正确"}
      ]
    }
  },
  components: {
    videoPlayer,
  },
  methods: {
    jump () {
      this.$router.push('/make_oplist')
    }
  }

}
</script>
