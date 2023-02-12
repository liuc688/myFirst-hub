// 该文件用于创建 Vuex 中最为核心的 store
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
import auth from './auth'
// 使用 Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{  // modules 是模块的意思
    countAbout:countOptions,
    personAbout:personOptions,
    authAbout:auth
  }
})