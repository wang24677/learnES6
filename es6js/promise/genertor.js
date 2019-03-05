const fs = require('fs')

async function timeout(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function timeout1(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms, next) {
  // console.time('go')
  // await timeout(ms)
  // await timeout1(next)
  // console.timeEnd('go')

  console.time('next')
  var test = false
  if (test) {
    const t1 = timeout(ms)
    const t2 = timeout1(next)
    await t1
    await t2
  } else {
    await timeout(ms)
    await timeout1(next)
  }
  console.timeEnd('next')
}

// asyncPrint('hello world', 1000, 3000);

async function readFiles(url) {
  // await new Promise((resolve) => { 普通写法
  return await new Promise((resolve, reject) => {
    fs.readFile(url, {
      encoding: 'utf-8'
    }, (err, content) => {
      if (err) {
        // console.log(err)
        reject(err)
      }
      // console.log(content)
      resolve({res:content, err: 'ok'})
    })
  })
}

function readFiles1(url) {
  fs.readFile(url, {
    encoding: 'utf-8'
  }, (err, content) => {
    if (err) {
      console.log(err)
    }
    console.log(content)
  })

}
async function asyncRead(url) {
  // try {
  //   let response = await readFiles(url)
  //   console.log(response)
  // } catch (error) {
  //   console.error(error, '捕捉到了错误')
  // }
  let [err, data] = await readFiles(url).then(data => {
    return [null, data]
  }).catch(err => {
    return [err, null]
  })
  console.log(data, '成功')
  console.log(err, '失败')
}

asyncRead('../serve.js')