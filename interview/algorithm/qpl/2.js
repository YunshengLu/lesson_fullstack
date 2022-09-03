/*
 * @Description: 最小栈
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-30 14:41:33
 * @LastEditTime: 2022-08-30 17:21:11
 */
// 实现一个栈， 带有pop 出栈， push 入栈， getMin 方法？ O(1)
// O(n) => O(1)  空间换时间
// push i 指针 最小值
// 缺点？
// 1. 栈 熟悉  []  push pop
// 2. ADT getMin 没有这个方法 O(n)
// 3. 指针变量  i  最小值， 出栈 i
// 4. 空间换时间  双栈
var MinStack = function () {
    this.stack = []; // 栈
    this.minStack = []; // 辅助栈 入栈的是最小值，最小值在最上面， 后进先出
};

MinStack.prototype.push = function (x) {
    if (!this.minStack.length || x < this.getMin()) {
        this.minStack.push(x);
    }
    this.stack.push(x);
};

MinStack.prototype.pop = function () {
    let x = this.stack.pop();
    if (x == this.getMin()) {
        this.minStack.pop();
    }
};

MinStack.prototype.getMin = function () {
    if (!this.minStack.length) {
        throw new Error('stack is empty');
    }
    return this.minStack[this.minStack.length - 1]; // O(1)
};

