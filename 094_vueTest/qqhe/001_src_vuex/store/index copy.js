// 该文件用于创建 Vuex 中最为核心的 store
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
// 使用 Vuex
Vue.use(Vuex)
// 准备 actions -- 用于响应组件中的动作
const actions = {
  /*
  context（上下文）是一个对象，和 store 差不多（但是里面的东西没有 store 多），我们可以理解成 mini 版的 store
  这里考虑到了很多问题，才给的 context 上下文对象
  */ 
  jiaOdd(context, value) {
    console.log('actions中的jiaOdd被调用了');
    if (context.state.sum % 2) {
      context.commit('JIA', value)
    }
  },
  jiaWait(context, value) {
    console.log('actions中的jiaWait被调用了');
    setTimeout(() => {
      context.commit('JIA', value)
    },500)
  },
  jiaTenTimes(context,value) {
    console.log("actions中的jiaTenTimes被调用了")
    context.commit("JIA",value*10)
  }
}
// 准备 mutations -- 用于操作数据(其实就是操作 state 中的数据)
const mutations = {
  JIA(state, value) {
    console.log('mutations中的JIA被调用了');
    state.sum += value
  },
  JIAN(state, value) {
    console.log('mutations中的JIAN被调用了');
    state.sum -= value
  },
  // 重置为 0
  resetZero(state) {
    state.sum = 0
  },
  // 增加人员
  ADD_PERSON(state,value) {
    state.personList.unshift(value)
  }
}
// 准备 state -- 用于储存数据
const state = {
  sum: 0,  // 当前的和
  xingming:"李志强",
  banji:"物联网工程",
  school:'德州学院',
  subject:"计算机",
  personList:[{id:"001",name:"张三"}]
}
// getters
const getters = {
  bigSum(state) {
    return state.sum*11+5;
  }
}

/*
创建 store 并导出(暴露) store
store 中要有三个最重要的值 actions、mutations、state
*/ 
export default new Vuex.Store({
  /*
  对象中的 key 和 保存对应值的变量 重名了，可以触发简写形式，
  因为在 es6 中，对象简写规则：如果存放对象 key、value 的变量名是一样的，那么可以省略 value，只需要写上 key 就可以。
  */ 
  actions,
  mutations,
  state,
  getters
})