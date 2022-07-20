const http = require('http');

// http 协议是无状态的 每次 用户主动来请求
// 软件概念的web 服务器
const server = http.createServer((req, res) => {
    if(req.url == '/'){
        // 结束这次用户代理和服务器交流
        res.end('Hello World')
    }
})

server.listen(8080)


