// 1.引入fs 模块
const fs = require('fs');


function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile('../resources/为学.txt', (err, data) => {
            if (err) reject(err)
            resolve(data);
        })
    })
}
function readGuanShu() {
    return new Promise((resolve, reject) => {
        fs.readFile('../resources/观书有感.txt', (err, data) => {
            if (err) reject(err)
            resolve(data);
        })
    })
}

function readchayang() {
    return new Promise((resolve, reject) => {
        fs.readFile('../resources/插秧诗.txt', (err, data) => {
            if (err) reject(err)
            resolve(data);
        })
    })
}

async function main() {
    let weixue = await readWeiXue();
    let guanshu = await readGuanShu();
    let chayang = await readchayang();

    console.log(weixue.toString());
    console.log(guanshu.toString());
    console.log(chayang.toString());
    
}

main();