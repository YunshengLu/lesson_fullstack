// == 类型转换 ===  简单数据类型
console.log(0 == 0); // true
console.log(-0 == +0); // true
console.log(-0 === +0); // true
console.log(1 == '1'); // true 相等判断的同时，先去做了类型转换
console.log(1 === '1'); // false 相等判断的同时，不会去做类型转换
console.log(1 == true); // true 谁转谁？ 规则
console.log(3 == true); // false
if(3){
    console.log('-------------');
}
console.log(0 == false); // true
console.log(null == undefined); // true 两边同时转boolean再判断
console.log(null === undefined); // false
console.log({} == {}); // false
