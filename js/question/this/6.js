// number类型，但是要排斥掉NaN
const isNumber = val => typeof val === 'number' && val === val;
// console.log(isNumber('2'));
// console.log(typeof NaN);
console.log(isNumber(NaN));