// function loadImageAsync(url) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(url)
//             resolve('成功')
//         }, 500)
//     });
// }

// //	Node.js	范例
let fs = require("fs");

function readFile(filename) {
    return new Promise(function (resolve, reject) {
        //	触发异步操作
        fs.readFile('../serve.js', {
            encoding: "utf8"
        }, function (err, contents) {
            //	检查错误
            if (err) {
                reject(err);
            } else {
                //	读取成功
                resolve(contents);
            }
        });
    });
}
let promise = readFile();

promise.then((data) => {
    console.log(data)
    return new Promise(function (resolve, reject) {
        setTimeout(() => { resolve(5)
        }, 1000)
    })
}).then(data => {
    console.log(data)
})
.catch(err => {
    console.log('false')
})
//	同时监听完成与拒绝

// loadImageAsync('开始')
//     .then(image => {
//         console.log(image)
//         console.log('完全结束')
//         promise.then(function (contents) {
//             //	完成
//             console.log(contents);
//         }, function (err) {
//             //	拒绝
//             console.error(err.message);
//         });
//     })
//     .catch(err => {
//         console.log(err)
//     })

// let band = Promise.resolve(42)
// let suu = Promise.reject(36)
// band.then(val => {
//     console.log(val)
// })
// suu.catch(val => {
//     console.log(val)
// })
// let rejected;
// process.on("unhandledRejection", function (reason, promise) {
//     console.log(reason.message); //	"Explosion!"
//     console.log(rejected === promise); //	true
// });
// rejected = Promise.reject(new Error("Explosion!"));

// let rejected;
// process.on("rejectionHandled", function (promise) {
//     console.log(rejected === promise); //	true
// });
// rejected = Promise.reject(new Error("Explosion!"));
// //	延迟添加拒绝处理函数
// setTimeout(function () {
//     rejected.catch(function (value) {
//         console.log(value.message); //	"Explosion!"
//     });
// }, 1000);

// let p1 = new Promise(function (resolve, reject) {
//     resolve(42);
// });
// let p2 = new Promise(function (resolve, reject) {
//     resolve(43);
// });
// let p3 = new Promise(function (resolve, reject) {
//     reject(44);
// });
// let p4 = Promise.all([p1, p2, p3]);
// let p5 = Promise.race([p1, p2, p3]);
// // p4.then(val => {
// //         console.log(Array.isArray(val)) //	false
// //         console.log(val); //	43
// //     })
// p4.then(function (value) {
//     console.log(value); //	43
// }).catch(val => {
//     console.log(val)
// })