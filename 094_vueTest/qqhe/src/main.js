import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import $ from 'jquery'

// 引入 antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueRouter from 'vue-router'
// 引入路由器
import router from "./router"

Vue.use(Antd)
Vue.use(VueRouter)

// 引入 store，注意，这里我们只写到 store 文件夹即可
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
