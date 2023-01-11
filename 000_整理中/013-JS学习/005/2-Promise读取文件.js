// 引入 fs 模块
const fs = require('fs');

// 2.调用方法,读取文件
// fs.readFile('../resources/为学.txt',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
    
// })
// 3.使用Promise 封装
// const p = new Promise(function(resolve,reject){
//   fs.readFile('../resources/为学.txt',(err,data) => {
//     if(err) reject (err);
//     // 如果成功
//     resolve(data);

//   })
// });

// p.then(function(value){
//   console.log(value.toString());
// },function(reason){
//   console.error("读取失败");
// })
// 使用Promise封装
const p = new Promise(function(resolve,reject){
  fs.readFile('../resources/为学.txt',(err,data) => {
    if(err) reject(err);
    resolve(data);
  })
})

p.then(function(value){
  console.log(value.toString());
},function(reason){
  console.log(reason.toString());
})

