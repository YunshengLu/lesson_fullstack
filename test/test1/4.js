const forest = {
    location: 'Sweden',
    animals: 3,
    animalsTypes: ['Lions', 'Tigers', 'Bears'],
};
console.log(forest.nickname);
// es6 解构
const { location: lo, animals, animalsTypes, nickname = '未命名' } = forest;
console.log(lo, nickname);

const [lions, Tigers, bears] = animalsTypes;
console.log(lions, Tigers, bears);
