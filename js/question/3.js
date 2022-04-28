var obj = {
    // es6 对象字面量简写方式
    hi(){
        // this 对象方法调用obj
        console.log(this);
        // 返回值是函数，高阶函数
        // 是个箭头函数
        return()=>{
            console.log(this);
        }
    },
    sayHi(){
        return function(){
            console.log(this);
            return()=>{
                console.log(this);
            }
        }
    },
    say:()=>{
        console.log(this);
    }
};

let sayHi = obj.sayHi();
let fun1 = sayHi();
fun1(); // window
let fun2 = sayHi.bind(obj)();
fun2();


