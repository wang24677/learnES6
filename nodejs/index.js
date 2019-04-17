const fs = require('fs')

/**
 * @description 读取路径下的文件列表
 * @param {读取文件夹的路径} url 
 */
let aysncFile = (url) => {
    // 同步读取文件
    let folder = fs.readdirSync(url)
    console.log(folder, 'haha ')

    // 异步读取文件
    fs.readdir(url, function (err, files) {
        if (err) { console.log(err) }
        console.log(files)
    })
    console.log('测试异步步骤')
}

/**
 * @description 使用流控制输入输出
 */

