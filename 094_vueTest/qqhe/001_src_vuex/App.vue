<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Count /> -->
    <Countvuex />
    <Personvuex />
  </div>
</template>

<script>
import Count from "./components/Countvue.vue";
import Countvuex from "./components/Countvuex.vue";
import Personvuex from "./components/Personvuex.vue";

export default {
  name: 'App',
  components: {
    Count,
    Countvuex,
    Personvuex
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  margin-left:10px;
  /* color: #2c3e50; */
  margin-top: 60px;
}
</style>
