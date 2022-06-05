// JS 的对象 (键[key]都是字符串类型或者会转换成字符串类型)
// Obiect
/* var a = {};
var b = {
    key: 'a'
};
var c = {
    key: 'c'
};
a[b] = '123'; // a[[object Object]] = '123'
a[c] = '456'; // a[[object Object]] = '456'

console.log(a); //{ '[object Object]': '456' }
console.log(a[b]); // 456
 */


// Map
var a = new Map();
var b = {
    key: 'a'
};
var c = {
    key: 'c'
};

a.set(b,'123');
a.set(c,'456');

console.log(a,a.get(b),a.get(c)); //Map(2) { { key: 'a' } => '123', { key: 'c' } => '456' } 123 456