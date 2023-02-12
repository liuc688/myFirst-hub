<template>
  <div>
    <div :style="{opacity}" style="margin-top:10px;font-size:18px">欢迎学习 VUE</div>
    <ul class="News">
      <li v-for="m in newsList" :key="m.id">
        <router-link 
        :to = "{
          name:'xinwenxiangqing',
          params:{
            id:m.id,
            title:m.title,
            info:m.info
          }
        }"
        >
          {{ m.title }}
        </router-link>
        <button class="buttonstyle" @click="pushShow(m)"> 点击跳转 </button>
        <input type="text" style="border:1px solid pink;outline:none">
      </li>
    </ul>
    <hr>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "News",
  data(){
    return {
      newsList:[
        {id:'one',title:'新闻 001',info:"引入路由器"},
        {id:'two',title:'新闻 002',info:"关闭 vue 的生产提示"},
        {id:'three',title:'新闻 003',info:"创建 vue 的实例对象 --- vm"}
      ],
      opacity:1
    }
  },
  computed:{
    ...mapState("authAbout",["isAuth"])
  },
  methods:{
    pushShow(m) {
      this.$router.push({
        name:"xinwenxiangqing",
        params:{
          id:m.id,
          title:m.title,
          info:m.info
        }
      })
    }
  },
  // 因为 News 组件在 Home 组件中被缓存了，缓存就意味着不触发销毁流程了
  // beforeDestroy() {
  //   console.log("News即将被销毁了");
  //   clearInterval(this.timer);
  // },
  // mounted() {
  //   console.log("mounted", this);
  //   this.timer = setInterval(() => {
  //     console.log('a');
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) this.opacity = 1;
  //   }, 16);
  // },
  // 两个新的生命周期钩子，这两个新的生命周期钩子，是路由组件独有的，其中 activated 是激活的，deactivated 是失活的
  activated() {
    // console.log("News组件被激活了");
    this.timer = setInterval(() => {
      // console.log('a');
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);

  },
  deactivated() {
    // console.log("News组件失活了");
    clearInterval(this.timer);  // 
  },
};
</script>

<style scoped>
.News {
  margin-top: 25px;
  padding: 25px;
  box-shadow: #ccc 0 0 5px;
  border-radius: 6px;
  font-size: 18px;
  font-family: '';
}
li {
  list-style-type: none;
  text-decoration: underline;
}
.buttonstyle {
  border: 0;
  background: transparent;
  color: deeppink;
}
</style>