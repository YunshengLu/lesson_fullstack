function b() {
    // 这种有相关性的换行不会自动加分号
    // document.getElementById('app')
    //     .style
    //     .

    // 这种会加，所以返回 undefined
    return 
    {
        a: 'a'
    };
}

console.log(b()); // undefined