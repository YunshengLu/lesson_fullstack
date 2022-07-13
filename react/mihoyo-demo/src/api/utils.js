const debounce = (func, delay) => {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
            clearTimeout(timer);
        }, delay);
    };
};

const selectGame = (item) => {
    switch (item.id) {
        case 1:
            return "benghuai3"
        case 2:
            return "yuanshen"
        case 3:
            return "benghuai2"
        case 4:
            return "weiding"
        case 5:
            return "dabieye"
        case 6:
            return "xingqiong"
        case 8:
            return "juequling"
        default:
            return "dabieye"
    }
}

export {
    debounce,
    selectGame
}