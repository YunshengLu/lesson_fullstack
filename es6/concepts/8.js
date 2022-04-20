const obj = {
    name: 'qwe',
    food: 'milk'
};

// const food = obj.food;

// es6 提供了优雅的api 解构
let {name,food} = obj;
console.log(name,food);
// let name = '123';
// var a = 1;
// var a = 2;


function introduct({name,food}) {
    console.log(`${name},最喜欢${food}`);
}

introduct(obj);