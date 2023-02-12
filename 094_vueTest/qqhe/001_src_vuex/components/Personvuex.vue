<template>
  <div class="personDiv">
    <hr />
    <div>人员列表</div>
    <p style="color:#6a6">Count 组件的求和为:{{sum}}</p>
    <input type="text" class="input" placeholder="请输入名字" v-model="name">
    <button type="button" class="personbutton right10" @click="add">添加</button>
    <button type="button" class="personbutton right10" @click="addWang">添加一个姓王的人</button>
    <button type="button" class="personbutton" @click="addPersonServer">添加一个人，名字随机</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
import {nanoid} from 'nanoid'
import {mapMutations, mapState, mapActions} from 'vuex'
import axios from 'axios'
export default {
  name:'Person',
  data(){
    return {
      name:''
    }
  },
  computed:{
    // personList(){
    //   return this.$store.state.personList
    // },
    // sum 的出现，体现了共享
    // sum(){
    //   return this.$store.state.sum
    // }
    // ...mapState(['personList','sum']),
    ...mapState("countAbout",["sum"]),
    ...mapState("personAbout",["personList"]),
    // personObj(){
    //   if(this.name.trim().length){
    //     return {id:nanoid(),name:this.name}
    //   } else {
    //     this.$message.warning('人员名字不能为空',2);
    //     return;
    //   }
    // }
  },
  methods:{
    ...mapMutations("personAbout",["addPerson"]),
    add(){
      const personObj = {id:nanoid(),name:this.name}
      if(this.name.trim().length){
        // this.$store.commit('personAbout/addPerson',personObj)
        this.addPerson(personObj)
      } else {
        this.$message.warning('人员名字不能为空',2);
      }
      console.log(personObj);
      this.name = ''
    },
    addWang(){
      const personObj = {id:nanoid(),name:this.name}
      if(this.name.indexOf("王") === 0){
        // this.$store.dispatch("personAbout/addPersonWang",personObj)
        this.addPerson(personObj)
      } else {
        this.$message.warning("添加人员必须是王姓")
      }
      this.name = ""
    },
    addPersonServer(){
      axios.get("https://api.uixsj.cn/hitokoto/get?type=social")
      .then(
        res => {
          this.addPerson({id:nanoid(),name:res.data})
        },
        error => {
          this.message.error(error.message,2)
        }
      )
    },
  }
}
</script>

<style scoped>
  li {
    /* list-style: none; */
    list-style-type: decimal;
  }
  .input {
    padding-left: 5px;
    outline: none;
    border: 0;
    box-shadow: 0 0 1px #6a6;
    border-radius: 2px 0 0 2px;
  }
  .personbutton {
    border: 0px;
    background: rgb(243, 80, 129);
    color: #fff;
    box-shadow: 0 0 1px rgb(87, 8, 63);
  }
  /* .personDiv >>> .anticon {
    top: -3px !important;
  } */
  .right10 {
    margin-right: 10px;
  }
</style>

<style>
.ant-message .anticon {
  vertical-align: text-bottom;
  top: -1px !important;
}
</style>