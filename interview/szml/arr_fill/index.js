const myFile = ary => {
    return ary.filter(item => item.a != '3')
        .map(item => item.a)
        .reduce((prev, item) => prev + item)
};

console.log(myFile([{ a: '2' }, { a: '3' }, { a: '5' }, { a: '7' }]));
