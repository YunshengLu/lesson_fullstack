const arr = [18,'You',777,'breaking',99,'full'];
const random = (arr) => arr[Math.floor(Math.random()*(arr.length))];
const randomeElement = random(arr);
console.log(randomeElement);