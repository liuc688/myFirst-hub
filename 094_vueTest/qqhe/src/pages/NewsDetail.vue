<template>
  <div>
    这里是新闻详情页面:
    <p>
      <!-- <span style="color:red">id:{{$route.params.id}}</span> -- <span style="color:deeppink">title:{{$route.params.title}}</span> -- <span style="color:skyblue">info:{{$route.params.info}}</span> -->
      <span style="color:red">id:{{id}}</span> -- <span style="color:deeppink">title:{{title}}</span> -- <span style="color:#008B45">info:{{info}}</span>
    </p>
  </div>
</template>
<script>
import Vue from 'vue';
import store from "../store"
import {mapState} from 'vuex'
export default {
  name:'NewsDetail',
  data(){
    return {
    }
  },
  created(){
    // this.$message.success("操作成功！")
    // console.log("新闻详情页面",this)
  },
  props:["id","title","info"],
  mounted(){
    // console.log("新闻详情",this.$route)
  },
  computed:{
    ...mapState("authAbout",["isAuth"])
  },
  // 组件内路由守卫
  // 通过路由规则，进入该组件时（前）被调用，因为除了路由规则，我们还可以在一开始的时候，就渲染组件页面
  beforeRouteEnter(to,from,next) {
    // next() 表示放行
    console.log("鉴权属性",store)
    // if(to.meta.isAuth) {  // 判断是否需要权限
    //   if(localStorage.getItem("school") === 'guigu') {
    //     next();
    //   } else {
    //     new Vue().$message.warning("学校名不对，无权限查看！")  // 为什么这里不能使用 this.$message... ,这个时候的 this 是 undefined
    //   }
    // } else {
    //   next();  // 如果不需要鉴权，就直接放行
    // }
    if(store.state.authAbout.isAuth) {  // 判断是否需要权限
      // if(localStorage.getItem("school") === 'guigu') {
      //   next();
      // } else {
      //   new Vue().$message.warning("学校名不对，无权限查看！")  // 为什么这里不能使用 this.$message... ,这个时候的 this 是 undefined
      // }
      new Vue().$message.warning("学校名不对，无权限查看！") 
    } else {
      next();  // 如果不需要鉴权，就直接放行
    }
  },
  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to,from,next) {
    console.log("要离开新闻详情组件了",this)
    next();
  }
}
</script>