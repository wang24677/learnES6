const http = require('http')
const webName = 'DNF'
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write('<h1>hello world</h1>')
  res.end(`<p>welcome to ${webName}</p>`)
}).listen(3000)
console.log('serve is running at port 3000')