const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    // query callback
    // 解析查询参数 path
    // console.log(url.parse(req.url, true));
    const query = url.parse(req.url, true).query;
    const callback = query.callback;
    let data = { code: 0, username: 'TOM' };
    // callback ? json with padding
    // 后端比以往的json 请求
    // 把json 包在一个callback 函数内
    // 前端页面提前留好callback 函数
    res.end(callback + '(' + JSON.stringify(data) + ')');
});
server.listen(8888);
