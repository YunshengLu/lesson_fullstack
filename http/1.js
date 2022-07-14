// 写后端代码，稳定和性能为主 服务器端node 版本更新没那么快
// 滞后的commonjs 模块化
// 前端webpack vitejs 现代化，发展比node 快多了，全面es6 模块化
// const http = require('http');
import http from 'http' 
// http 内置createServer 返回server 服务
// 在3000 端口启动了一个web 服务 伺服状态
// js 单线程的 web服务是 天生的多线程
// 服务器CPU 多核的，每核都可以 独立运行
// node 异步 事件型的
const server = http.createServer(
    (req, res) => {
        if (req.url == '/about') {
            res.end('about us')
            return 
        }
        res.setHeader('Set-cookie',
            ['type=ninja','language=javascript']
        )
        res.end('Hello World')
    }
)

server.listen(3000)