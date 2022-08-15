const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

http.createServer((req, res) => {
    fs.createReadStream(
        path.join(__dirname,'index.html')
    ).pipe(res)
}).listen(8080)