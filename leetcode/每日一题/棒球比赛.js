var calPoints = function(ops) {
    let len = ops.length;
    let arr = [];
    for(let i = 0;i < len ;i++){
        let op = ops[i];
        let len1 = arr.length;
        if(op === '+'){
            arr.push((arr[len1 - 1]/1) + (arr[len1 - 2]/1));
            continue;
        }
        if(op === 'D'){
            arr.push(arr[len1-1] * 2);
            continue;
        }
        if(op === 'C'){
            arr.pop();
            continue;
        }
        arr.push(op);
    }
    console.log(arr);
    return arr.reduce((pv,v) => pv + (v / 1), 0);
};

calPoints(["1"])