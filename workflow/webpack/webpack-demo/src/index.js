require('./main.css')
const { toLowerCase, toUpperCase } = require('./b.js')
const a = 'Hello, webpack'
console.log(a);
console.log(toLowerCase(a));
console.log(toUpperCase(a));
let oDiv = document.createElement('div')
oDiv.textContent = 'Hello, world'
document.body.appendChild(
    oDiv
)

module.exports = a; // commonjs 模块化方案

