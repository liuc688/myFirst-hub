import VueRouter from "vue-router";

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'
import NewsDetail from '../pages/NewsDetail.vue'

// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import Vue from "vue";

import store from '../store';

// 获取原型对象 push 函数
const originalPush = VueRouter.prototype.push
// 获取原型对象 replace 函数
const originalReplace = VueRouter.prototype.replace
// 修改原型对象中的 push 函数
VueRouter.prototype.push = function push(location){
  return originalPush.call(this , location).catch(err=>err)
}
// 修改原型对象中的 replace 函数
VueRouter.prototype.replace = function replace(location){
  return originalReplace.call(this , location).catch(err=>err)
}

const router = new VueRouter({
  routes: [
    {
      path:"/",
      redirect:"/about"
    },
    {
      name:"guanyu",
      // 如果你的路径是 about，那么我就给你看 About 这个组件
      path:"/about",
      component: About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'news',
          component:News,
          children:[
            {
              name:"xinwenxiangqing",
              path:'newsd/:id/:title/:info',  // 使用了占位符
              component:NewsDetail,
              meta:{isAuth:true,title:"新闻详情"},
              // 独享路由守卫
              // beforeEnter:(to,from,next) => {
              //   console.log("new vue",store)
              //   if(store.state.authAbout.isAuth) {
              //     if(localStorage.getItem('school') === 'guigu') {
              //       next();
              //     } else {
              //       new Vue().$message.warning("学校名不对，无权限查看！")
              //     }
              //   } else {
              //     next()
              //   }
              // },
              // props:true,  // props 也可以接收 params 传递的参数
              // 使用结构赋值的连续写法，代码更简单
              props({params:{id,title,info}}){  // params 是解构赋值 parmas 对象中的属性；相似的 query 是解构赋值 query 对象中的属性；
                return {id,title,info}
              },
            }
          ]
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              name:'xiangqing',
              path:'detail',
              component:Detail,
              meta:{isAuth:true,title:"消息详情"}
            }
          ]
        }
      ]
    }
  ]
})
// router.beforeEach((to,from,next) => {
//   if(to.meta.isAuth) {  // 判断是否需要鉴权
//     if(localStorage.getItem('school') === 'guigu') {
//       next()
//     } else {
//       // alert('学校名不对，无权限查看！')
//       new Vue().$message.warning("学校名不对，无权限查看！")
//     }
//   } else {
//     next()
//   }
// })
// router.afterEach((to,form) => {
//   document.title = to.meta.title || 'Vue'
// })

// 暴露路由器
export default router