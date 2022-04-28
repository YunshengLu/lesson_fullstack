// 化实例化的繁为函数封装的简，一定要用this？
// 构造函数，封装实例化过程，更加简单
// 有封装功能
function Cat(name, color) {
    return {
        name: name,
        color: color,
    };
}

let obj = new Object();
let cat1 = Cat('大毛','橙色');
console.log(cat1.name,cat1.color);
console.log(cat1.constructor);
console.log(cat1 instanceof Cat); // false