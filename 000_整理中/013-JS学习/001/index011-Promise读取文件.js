//1.引入fs模块
const fs = require('fs');

// 2.调用方法，读取文件
// fs.readFile('./文学.txt',(err,data) => {
//   if(err) throw err;
//   console.log(data.toString());
// })
// 3. 使用Promise进行封装
const p = new Promise(function(resolve,reject){
  fs.readFile('./文学.txt',(err,data)=> {
    if(err) reject();
    resolve(data);
  })
})
p.then(function(value) {
  console.log(value.toString());
},function(reason){
  console.log('读取失败');
})