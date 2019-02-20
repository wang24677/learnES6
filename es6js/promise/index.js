function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(url)
            resolve('成功')
        }, 500)
    });
}

//	Node.js	范例
let fs = require("fs");

function readFile(filename) {
    return new Promise(function (resolve, reject) {
        //	触发异步操作
        fs.readFile('../serve1.js', {
            encoding: "utf8"
        }, function (err, contents) {
            //	检查错误
            if (err) {
                reject(err);
                return;
            }
            //	读取成功
            resolve(contents);
        });
    });
}
let promise = readFile("example.txt");
//	同时监听完成与拒绝

loadImageAsync('开始')
    .then(image => {
        console.log(image)
        console.log('完全结束')
        promise.then(function (contents) {
            //	完成
            console.log(contents);
        }, function (err) {
            //	拒绝
            console.error(err.message);
        });
    })
    .catch(err => {
        console.log(err)
    })