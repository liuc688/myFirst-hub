<!--
About.vue 是路由组件，所以我们放在 pages 文件夹下面
-->
<template>
  <h3 class="about">我是 About 的内容</h3>
</template>

<script>
export default {
  name: "About",
  // beforeDestroy() {
  //   console.log('About组件即将被销毁..')
  // },
  // mounted(){
  //   console.log('About组件挂载完毕了',this)
  //   window.aboutRoute = this.$route
  //   window.aboutRouter = this.$router
  // }
};
</script>

<style scoped>
  .about {
    margin: 20px 0 0 0;
    color: brown;
  }
</style>