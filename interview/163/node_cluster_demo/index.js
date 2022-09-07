/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-06 15:34:03
 * @LastEditTime: 2022-09-06 16:07:48
 */
const cluster = require('cluster'); // node 多核能力
// http 服务器 1314 nginx(多线程) 代理 <- http 80 Proxy
// www.baidu.com/a/b  -> dns  ip -> nginx  服务器  80
/* location / 
    {
        proxy_pass http://127.0.0.1:1314/
    } 
    一台服务器的多线程 功能
*/
const numCPUs = require('os').cpus().length;
// console.log(numCPUs);
// 管理
const http = require('http')

if(cluster.isMaster) { // 主进程
    console.log(`主进程${process.pid} 正在运行`); // 
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork(); // 每个cpu 就像主线程一样来工作了
    }
} else { 
    // 工作进程可以共享TCP/HTTP 服务
    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain;charset=UTF8'});
        console.log(res);
        res.end(`Hello World${process.pid}\n`)
    }).listen(8000)
    console.log(`工作进程${process.pid} 已启动`);
}