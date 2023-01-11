// 
const fs = require('fs');

// fs.readFile('../resources/为学.txt',(err,data1) => {
//   fs.readFile('../resources/插秧诗.txt',(err,data2) => {
//     fs.readFile('../resources/观书有感.txt',(err,data3) => {
//       let result = data1+'\r\n'+data2+'\r\n'+data3;
//       console.log(result.toString());
//     })
//   })
// })


const p = new Promise((resolve, reject) => {
  fs.readFile("../resources/为学.txt", (err, data) => {
    resolve(data);
  })
})

p.then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile("../resources/插秧诗.txt", (err, data) => {
      resolve([value, data]);
    })
  })
}).then(value=>{
  return new Promise((resolve, reject) => {
    fs.readFile("../resources/观书有感.txt", (err, data) => {
      value.push(data);
      console.log(value.join('\r\n\r\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\r\n'));
    })
  })
})