<template>
  <div>
    <!-- sum 是我们计算出来的和 -->
    <!-- <h3 style="color:#6a6">当前求和为:{{ $store.state.sum }}</h3> -->
    <!-- <h3 style="color:#919">当前求和放大后为:{{ $store.getters.bigSum }}</h3> -->
    <div>
      <p>当前求和为：{{sums}}，{{xingming}}的班级是{{banji}}</p>
      <p>当前求和放大后为:{{ bigSum }}</p>
      <p>Person 组件的总人数为：{{personList.length}}</p>
    </div>
    <!-- 
    获取一下用户的输入 
    因为下面的 option 中的 value 对应的值是字符串类型的，我们可以采取两种策略将它变成数字类型
    第一种，这里我们可以这样写，比如 :value = "1"，这个时候引号里的东西都会被当做 js 表达式去解析
    第二种，我们在 select 标签上，v-model 的时候写成 v-model.number 表示收集到的东西强制往 number 类型转换
    -->
    <select v-model.number="n" class="btn right10 btn-default" style="box-shadow:0px 0px 0px 2px rgba(200,200,200,.5)">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button type="button" class="btn right10 btn-success" @click="JIA(n)">+</button>
    <button :disabled='disabled' type="button" class="btn right10 btn-info" @click="JIAN(n)">-</button>
    <button type="button" class="btn right10 btn-warning" @click="jiaOdd(n)">当前求和为奇数再加</button>
    <button type="button" class="btn right10 btn-danger" @click="jiaWait(n)">等一等再加</button>
    <button type="button" class="btn right10 btn-primary" @click="jiaTenTimes(n)">加 10 倍前面的数</button>
    <button type="button" class="btn right10 btn-danger" @click="resetZero">和重置为 0</button>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
export default {
  name: "Count",
  data() {
    return {
      n: 1,  // 用户选择的数字
      sum: 0,  // 当前的和
      disabled: false,
    };
  },
  created(){
  },
  mounted(){
  },
  computed:{
    test(){
      return this.$store.state.sum;
    },
    // 这样可以解决 vuex 中属性名和当前页面 data 中属性名冲突的问题
    // sums(){
    //   return this.$store.state.countAbout.sum
    // },
    
    ...mapState('countAbout',{sums:"sum"}),
    ...mapState('countAbout',["xingming","banji"]),
    ...mapState('personAbout',["personList"]),
    ...mapGetters('countAbout',["bigSum"])
  },
  watch:{
    test:{
      immediate:true,
      handler(newValue,oldValue) {
        this.disabled = newValue > 0?false:true;
      }
    }
  },
  methods: {
    testTrim(){
      this.$message.warning('This is a warning message',200);
    },
    // increment() {
    //   // 组件直接和 Mutations 对话
    //   this.$store.commit('JIA',this.n)
    // },
    // decrement() {
    //   this.$store.commit('JIAN',this.n)
    // },
    // incrementOdd() {
    //   this.$store.dispatch('jiaOdd',this.n)
    // },
    // incrementWait() {
    //   this.$store.dispatch('jiaWait',this.n)
    // },
    // // 增加 10 倍前面的数
    // incrementTenTimes(){
    //   this.$store.dispatch("jiaTenTimes",this.n)
    // },
    ...mapMutations('countAbout',['JIA','JIAN','resetZero']),
    ...mapActions('countAbout',['jiaOdd','jiaWait','jiaTenTimes'])
  },
};
</script>

<style scoped>
  button {
    margin-left: 10px;
  }
  .right10 {
    margin-right: 10px;
  }
</style>