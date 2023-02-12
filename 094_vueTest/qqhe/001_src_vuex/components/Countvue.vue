<template>
  <div>
    <!-- sum 是我们计算出来的和 -->
    <h1>当前求和为:{{ sum }}</h1>
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
    <button type="button" class="btn right10 btn-success" @click="increment">+</button>
    <button :disabled='disabled' type="button" class="btn right10 btn-info" @click="decrement">-</button>
    <button type="button" class="btn right10 btn-warning" @click="incrementOdd">当前求和为奇数再加</button>
    <button type="button" class="btn right10 btn-danger" @click="incrementWait">等一等再加</button>
    <button type="button" class="btn right10 btn-primary" @click="incrementTenTimes">加 10 倍前面的数</button>
  </div>
</template>

<script>
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
    this.testJquery();
  },
  watch:{
    sum:{
      immediate:true,
      handler(newValue,oldValue) {
        this.disabled = newValue > 0?false:true;
      }
    }
  },
  methods: {
    increment() {
      this.sum += this.n;
    },
    decrement() {
      this.sum -= this.n;
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n;
      }, 500);
    },
    // 增加 10 倍前面的数
    incrementTenTimes(){
      this.sum += this.n * 10;
    },
    testJquery(){
      console.log("-----",$("select"))
    },
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