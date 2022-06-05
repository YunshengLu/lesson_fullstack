function fun(s) {
    let maxNum = 0;
    let maxStr = '';
    let map = new Map();
    for (let item of s) {
        map.set(item, (map.get(item) || 0) + 1);
    }

    for (let [key, value] of map) {
        if (value > maxNum) {
            maxStr = key;
            maxNum = value;
        }
    }
    return [maxStr, maxNum];
}

console.log(fun('aaaacccccccbbb'));
