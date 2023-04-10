import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/global.css';
import 'font-awesome/css/font-awesome.min.css'
import axios from "axios";
import VideoPlayer from 'vue-video-player'

// 引入方式一
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.use(VideoPlayer)

axios.defaults.baseURL = "http://localhost:8088"
Vue.prototype.$http=axios
Vue.config.productionTip = false

Vue.use(ElementUI,{size:"mini"});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
