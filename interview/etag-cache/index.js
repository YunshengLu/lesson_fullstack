const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto'); // 加密

http.createServer((req, res) => {
    let { pathname } = url.parse(req.url, true);
    if (pathname === '/') {
        fs.createReadStream(
            path.join(__dirname, 'index.html')
            ).pipe(res);
        return;
    }
    let abs = path.join(__dirname, pathname);
    // 最后修改时间 大小
    // I/O 操作 异步
    fs.stat(path.join(__dirname, pathname),(err, stat) => {
        if (err) {
            res.statusCode = 404;
            res.end('Not Found');
            return;
        }
        if (stat.isFile()) {  // 是文件
            // res.setHeader('Last-Modified', stat.ctime.toGMTString());
            // if (req.headers['if-modified-since'] == stat.ctime.toGMTString()) {
            //     res.statusCode = 304;
            //     res.end('Not Modified');
            //     return;
            // }
            let md5 = crypto.createHash('md5');
            let rs = fs.createReadStream(abs); // 硬盘流向内存
            let arr = []; // 文件
            rs.on('data', function (chunk) { // 一块块chunk 的 data事件
                md5.update(chunk);
                arr.push(chunk);
            })
            rs.on('end', function () { // 读入内存结束
                let etag = md5.digest('base64');
                if (req.headers['if-none-match'] === etag) {
                    res.statusCode = 304;
                    res.end();
                    return;
                }
                res.setHeader('Etag', etag);
                res.end(Buffer.concat(arr));
            })
            // fs.createReadStream(abs).pipe(res);
        }
    })
}).listen(8080);
