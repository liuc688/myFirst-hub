export default {
  /*
  开启命名空间，对应的 index.js 中的 modules 中可以给引入的组件起别名，组件（比如：Count.vue、Person.vue）中的 mapState 引入别名 + 相应的属性
  就可以在组件的插值表达式中使用属性的简写形式了
  */ 
  namespaced:true,
  actions:{
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
  },
  mutations:{
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
    }
  },
  state:{
    sum: 0,  // 当前的和
    xingming:"李志强",
    banji:"物联网工程",
    school:'德州学院',
    subject:"计算机",
  },
  getters:{
    bigSum(state) {
      return state.sum*11+5;
    }
  }
}