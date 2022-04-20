var obj = {
    hi: function (){
        console.log(this);
        return ()=>{
            console.log(this);
        }
    },
    sayHi: function (){
        return function(){
            console.log(this);
            return ()=>{
                console.log(this);
            }
        }
    },
    say:()=>{
        console.log(this);
    }
};

let hi = obj.hi();
hi();
let sayHi = obj.sayHi();
let fun1 = sayHi();
fun1();
obj.say();