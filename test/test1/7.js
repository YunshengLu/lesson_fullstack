// 编写一个函数，他接收一个有10个整数组成的数组(0-9),[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// 返回 格式是  (123)456-7890的电话号码  字符串
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function createPhoneNumber(numbers) {
    // 模板， 格式
    numbers = numbers.join(''); // 1234567890
    return `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6)}`;
    // return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}
console.log(createPhoneNumber(numbers));
