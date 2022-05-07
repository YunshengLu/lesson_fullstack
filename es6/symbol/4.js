// > 10
const spread = [12, 5, 7, 43, 654, 23];
const gt10 = spread.filter(item => item > 10);
console.log(gt10);

const users = [
    {
        user: 'aaa',
        age: 1,
        active: false,
    },
    {
        user: 'bbb',
        age: 2,
        active: false,
    },
    {
        user: 'ccc',
        age: 7,
        active: false,
    },
    {
        user: 'ddd',
        age: 9,
        active: false,
    },
];
const gt5 = users.filter(user => user.age == 2 || user.age == 7);
console.log(gt5);
