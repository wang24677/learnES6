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
  var start = new Date().getTime()
  await timeout(ms);
  console.log('hi')
  await timeout1(next);
  console.log(value);
  var end = new Date().getTime()
  console.log(end - start)
}

// asyncPrint('hello world', 1000, 3000);

async function readFiles(url) {
  await new Promise((resolve) => {
    fs.readFile(url, {
      encoding: 'utf-8'
    }, (err, content) => {
      if (err) {
        console.log(err)
      }
      console.log(content)
      resolve(content)
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
  await readFiles(url)
  readFiles1(url)
  // .then(content => {
  //   console.log(content)
  // })
  console.log('读取文件完成')
}

asyncRead('../serve.js')