<template>
  <div class="root">
    <div class="row">
      <Banner />
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group" style="width:300px">
          <!-- 原始 html 中我们使用 a 标签实现页面的跳转 -->
          <!-- 
				 <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> 
				 -->

          <!-- 
          Vue 中借助 router-link 标签实现路由的切换，active-class 表示标签被点击（激活）时的样式是 active 
          to 表示按钮点击后，要到达的路径，
          不过我们要知道的一件事，router-link 标签最终是要解析成为 a 标签的
          -->
          <router-link class="list-group-item list-group-item-action" active-class="active" :to="{name:'guanyu'}">About</router-link>
          <router-link class="list-group-item list-group-item-action" active-class="active" @click="test" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 
            router-view 标签用来指定组件的呈现位置 
            -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
export default {
  name: "App",
  components:{Banner},
  data(){
    return {
      isone:1
    }
  },
  created(){
    this.test()
    console.log("this.$route",this.$route)
  },
  methods:{
    test(){

    },
  }
};
</script>

<style scoped>
  .root {
    margin: 20px;
  }
</style>
<style>
.ant-message .anticon {
  vertical-align: text-bottom;
  top: -1px !important;
}
</style>

