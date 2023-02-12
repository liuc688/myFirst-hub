<template>
  <div>
    <ul class="Message">
      <li v-for="m in messageList" :key="m.id">
        <router-link
          :to = "{
            name:'xiangqing',
            query:{
              id:m.id,
              title:m.title,
              info:'山东尚可网络科技有限公司'
            }
          }"
        >
          {{m.title}}
        </router-link>
        <button class="buttonstyle" @click="pushShow(m)">push 查看</button>
        <button class="buttonstyle" @click="replaceShow(m)">replace 查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList:[
        { id: "001", title: "消息 001" },
        { id: "002", title: "消息 002" },
        { id: "003", title: "消息 003" },
      ]
    }
  },
  methods:{
    pushShow(m) {
      this.$router.push({
        name:'xiangqing',
        query:{
          id:m.id,
          title:m.title,
          info:'山东尚可网络科技有限公司'
        },
      })
    },
    replaceShow(m) {
      this.$router.replace({
        name:"xiangqing",
        query:{
          id:m.id,
          title:m.title,
          info:"山东尚可网络科技有限公司"
        }
      })
    }
  },
  beforeDestroy() {
    // console.log("Message 即将被销毁了");
    // clearInterval(this.timer);
  },
};
</script>

<style scoped>
.Message {
  margin-top: 25px;
  padding: 25px;
  box-shadow: #ccc 0 0 5px;
  border-radius: 6px;
  font-size: 18px;
  font-family: '';
}
li {
  list-style-type: none;
  /* margin-bottom: 8px; */
}
a {
  text-decoration: underline;
}
.buttonstyle {
  border: 0;
  background: transparent;
  color: deeppink;
}
</style>