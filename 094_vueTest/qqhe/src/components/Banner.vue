<!--
Banner.vue 是一个一般的组件，所以我们放在 components 文件夹下面
-->
<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h3>关于 vue 的路由案例：</h3>
      <button type='button' class="btn btn-secondary btn-sm" @click="back">后退</button>
      <button type='button' class="btn btn-secondary btn-sm" @click="forward">前进</button>
      <button type='button' class="btn btn-secondary btn-sm" @click="test">后退两步</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods:{
    back(){
      this.$router.back();
    },
    forward(){
      this.$router.forward();
    },
    test(){
      this.$router.go(-2);
    },
  }
};
</script>

<style scoped>
  button {
    margin: 2px 5px 12px 0;
  }
</style>