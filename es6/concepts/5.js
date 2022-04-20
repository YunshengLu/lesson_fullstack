// const func = function (a, b) {
//     console.log(a, b);
//     console.log(arguments,arguments[2]);
// };


const func = (a, b) => {
    console.log(a, b);
    console.log(arguments,arguments[2]);
};

func(1, 2, 3);

console.log(func.prototype); // undefine