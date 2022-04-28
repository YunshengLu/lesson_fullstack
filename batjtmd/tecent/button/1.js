//  const声明简单数据类型，值不可以改变
// 复杂数据类型，可以改变，类型不能改变
// const choir = []; // 数组复杂数据类型
// js 没有特定的Array类型
// 除了简单数据类型，其他都是对象
// 数组是object的一种
// console.log(typeof choir); // object

// 流程式思维 -> 封装成一个函数
// 看到一个pc 设计稿的时候，不再盯着html细节
// 函数 对多行代码的封装，组成一个功能单元
// 代码工作划分成一个个的函数
// 每个函数都只做一件事


let duck ={
    sing(){
        console.log('嘎嘎嘎');
    }
}

let cat = {
    sing(){
        console.log('喵喵喵');
    }
}

let chick = {
    sing(){
        console.log('嘎嘎嘎');
    }
}

const choir = [];

/**
 *  @func 招募一个合唱团成员
 *  @return {Array[{}]} 
 */
function buildChoir(animal) {

    if(animal.sing && typeof animal.sing === 'function'){
    choir.push(animal);
    }
}

for (let i = 0; i < 999 ;i++) {
    buildChoir(duck);
}

buildChoir(chick);

if(choir.length >= 1000){
    console.log('合唱团招募完成了');
}

console.log(choir.length);

