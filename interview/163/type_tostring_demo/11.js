console.log({} == {}); // false
let a = b = {};
console.log(a == b); // true
var obj = {
    valueOf() {
        return 1;
    }
};
console.log(obj == 1); // true

console.log([1] == 1); // true

console.log(false == '0'); // true

console.log('' == '0'); // false

console.log(1 == true); // true

console.log(true == []); // false

console.log([] == {}); // false

console.log([] == ![]); // true