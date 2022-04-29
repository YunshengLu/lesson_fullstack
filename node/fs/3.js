const fs = require('fs');
// 文件消息获取的api
fs.stat('./a.txt', function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data,'------------------------');
});
const info = fs.statSync('./a.txt')
console.log(info);
