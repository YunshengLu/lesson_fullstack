/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-12 16:41:41
 * @LastEditTime: 2022-09-13 11:17:13
 */

const obj = {
    name: 'tom',
    say(pre, age){
        console.log(`${pre},my name is ${this.name},${age} year`);
    }
}

Function.prototype.myapply = function(target, args) {
    target = target || window;
    const symbolkey = Symbol();
    target[symbolkey] = this;
    const res = target[symbolkey](...args);
    delete target[symbolkey];
    return res;
}

Function.prototype.mycall = function(target, ...args) {
    target = target || window;
    const symbolkey = Symbol();
    target[symbolkey] = this;
    const res = target[symbolkey](...args);
    delete target[symbolkey];
    return res;
}

Function.prototype.mybind = function(target, ...args) {
    target = target || window;
    const symbolkey = Symbol();
    target[symbolkey] = this;
    return function(newargs) {
        const res = target[symbolkey]( ...args, ...newargs);
        return res;
    }
}

const A = {
    name: 'nameA'
}

const mysay = obj.say.mybind(A, 'hello')
mysay('7');