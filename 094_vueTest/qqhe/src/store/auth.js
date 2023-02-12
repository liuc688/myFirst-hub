
export default {
  /*
  开启命名空间，对应的 index.js 中的 modules 中可以给引入的组件起别名，组件（比如：Count.vue、Person.vue）中的 mapState 引入别名 + 相应的属性
  就可以在组件的插值表达式中使用属性的简写形式了
  */ 
  namespaced:true,
  actions:{
  },
  mutations:{
  },
  state:{
    sum: 0,  // 当前的和
    isAuth:true,
  },
  getters:{
    bigSum(state) {
      return state.sum*11+5;
    }
  }
}