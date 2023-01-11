const fs = require('fs');
// fs.readFile('./resource/插秧诗.txt', (err, data1) => {
//   fs.readFile('./resource/文学.txt', (err, data2) => {
//     fs.readFile('./resource/观书有感.txt', (err, data3) => {
//       let result = data1 +'\r\n'+ data2 +'\r\n'+ data3;
//       console.log(result);
//     })
//   })
// })


//使用Promise 实现
const p = new Promise((resolve, reject) => {
  fs.readFile('./resource/插秧诗.txt', (err, data) => {
    resolve(data);
  })
})

p.then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/文学.txt', (err, data) => {
      resolve([value, data]);
    })
  })
}).then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/观书有感.txt', (err, data) => {
      value.push(data);
      resolve(value);
    })
  })
}).then(value => {
  console.log(value.join('\r\n'));
})