const fs = require('fs');

// 
function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/文学.txt', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    })
}

function readChaYangShi() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/插秧诗.txt', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    })
}

function readGuanShuYouGan() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/观书有感.txt', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    })
}

async function main() {
    // 获取为学....内容
   let weixue = await readWeiXue();
   let chayang = await readChaYangShi();
   let guanshu = await readGuanShuYouGan();

   console.log(weixue.toString());
   console.log(chayang.toString());
   console.log(guanshu.toString());
   
}

main();