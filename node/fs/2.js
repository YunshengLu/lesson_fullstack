const fs = require('fs'); // node fs commonjs

const files = ['./a.txt', './readme.md', './b.txt'];
// 嵌套
for (let file of files) {
    // 可以为读取文件停下来 同步
    // 阻塞代码
    const data = fs.readFileSync(file);
    console.log(data.toString());
    // fs.readFile(file,(err, data) => {
    //     if(err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(data.toString());
    // })
}
