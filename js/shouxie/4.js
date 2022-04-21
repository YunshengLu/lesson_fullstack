// 如何去重
const array = [1,2,3,4,5,1,4,7,3,8];
// call 指定函数this -> 第一个参数
// call 借
// console.log(Object.prototype.toString.call(array));
// console.log(Array.isArray(array));
const uniqueArray = (arr) =>{
    let res = [];  // find O(n)
    // 以空间换时间
    let map = {}; // 对象 k:v  find  O(1)  key
    // O(n^2) 下降一下
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        console.log(temp);
        if (!map.hasOwnProperty(temp)) {
            map[temp] = i;
            console.log(temp);
            res.push(arr[i]);
        }
    }
    // O(n^2) 下降一下
    // for(let i = 0; i < arr.length; i++){
    //     let temp = arr[i];
    //     // O(n)
    //     if(res.indexOf(temp) == -1){
    //         res.push(arr[i]);
    //     }
    // }
    return res;
}

console.log(uniqueArray(array));