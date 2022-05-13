// Animal 父类 -> Dog 子类
// 1. extends
// 2. super
class Animal {
    constructor(name) {
        this.name = name;
        this.thirst = 100;
        this.belly = [];
    }
    drink() {
        this.thirst -= 10;
        return this;
    }
    eat(food) {
        this.belly.push(food);
        return this;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed; // 子类有的
    }
    bark() {
        console.log('BARK BARK BARK!');
    }
}

const sunny = new Dog('sunny','Golden Doodle');
// console.log(sunny.name);
// sunny.bark();
sunny // 链式调用
    .eat('烤鱼')
    .drink()
    .eat('火锅')
    .drink();
console.log(sunny.thirst,sunny.belly);

// console.log(sunny.thirst);
