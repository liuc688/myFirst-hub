// import * as m1 from './hello.js';   //静态引入
// 获取元素
const btn = document.getElementById('btn');

btn.onclick = function() {
    // 动态引入,返回结果是一个promise对象
    import('./hello.js').then(module => {
        // console.log(module);
        module.hello();
        
    })
}
