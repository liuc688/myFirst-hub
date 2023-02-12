export default {
  // 开启命名空间
  namespaced:true,
  actions:{
    // addPersonWang(context,value) {
    //   context.commit('addPerson',value)
    // }
  },
  mutations:{
    // 增加人员
    addPerson(state,value) {
      state.personList.unshift(value)
    }
  },
  state:{
    personList:[{id:"001",name:"张三"}]
  }
}