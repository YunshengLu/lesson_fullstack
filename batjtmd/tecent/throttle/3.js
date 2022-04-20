function sayHi() {
    console.log('Hello', this.name);
}

var person2 = {
    name: 'Christina',
    sayHi: sayHi,
};

var person1 = {
    name: 'YvetteLau',
    firend: person2,
};

// 当函数作为对象的方法时，this指向对象，当前对象是 person2
var obj = person1.firend;
obj.sayHi();
// person1.firend.sayHi();
