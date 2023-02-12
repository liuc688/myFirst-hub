<!--
Home.vue 是路由组件，所以我们放在 pages 文件夹下面
-->
<template>
  <div>
    <h3 class="home">我是 Home 组件内容</h3>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  // beforeDestroy() {
  //   console.log('Home 组件即将被销毁..')
  // },
  // mounted(){
  //   console.log('Home 组件挂载完毕了',this)
  /*
  $route 是路由规则，可以有很多，每个组件自己都有，里面的信息不一样，这里写 window.homeRoute = this.$route 的目的是在控制台上，
  比较两个组件中的路由规则是不是同一个东西；
  window.homeRouter = this.$router，是后面比较两个组件中的路由器是不是同一个东西；
  */
  //   window.homeRoute = this.$route
  //   window.homeRouter = this.$router  // $router 是整个应用的路由器，只有一个，路由规则是由 $router（路由器）来保管
  // }
};
</script>

<style scoped>
  .home {
    margin-top: 20px;
    color:green;
  }
  li {
    list-style: none;
    border: 0px solid #333;
    margin-right: 8px;
    padding: 2px;
    border-radius: 5px;
    box-shadow: 0 0 3px deeppink;
  }
</style>