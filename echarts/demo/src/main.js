import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 引入全局css
import './assets/css/global.css'
// 请求基准路径的配置
axios.defaults.baseURL = 'http://175.27.228.178:3000/api/'
// 将axios挂载到vue的原型对象上
// 别的组件中使用this.$axios
Vue.prototype.$axios = axios

// 将全局的echarts对象挂载到vue的原型对象上
// 别的组件用的话直接this.$echarts就好了
Vue.prototype.$echarts = window.echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
