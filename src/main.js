// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter  from 'vue-router'
import routeConfig  from './router-config'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import VueResource from 'vue-resource';

let ajax = axios.create({
    baseURL: 'http://169.254.77.254/',
    dataType:'JSONP',
    timeout: 30000
});

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.prototype.$http = ajax
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
//定义路由
const router = new VueRouter ({
      routes: routeConfig
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
