var str = 'Hello world';
console.log(typeof str); // String
console.log(str instanceof String); // false
var str1 = new String('hello world');
console.log(typeof str1); // Object
console.log(str1 instanceof String); // true