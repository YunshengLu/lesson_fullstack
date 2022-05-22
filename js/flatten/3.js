function flatten(arr){
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr);
    }
    return arr;
}

console.log(flatten([1,2,[3],[4,[5,6]]]));

// let arr = [1,2,[3]];
// console.log(arr.some(item => Array.isArray(item)));
// console.log(arr.every(item => Array.isArray(item)));
