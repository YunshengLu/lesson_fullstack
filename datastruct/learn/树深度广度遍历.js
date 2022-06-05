// 模拟树
const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                { val: 'd', children: [] },
                { val: 'e', children: [] },
            ],
        },
        {
            val: 'c',
            children: [
                { val: 'f', children: [] },
                { val: 'g', children: [] },
            ],
        },
    ],
};

// 深度优先遍历
const fun1 = root => {
    console.log(root.val);
    root.children.forEach(fun1);
};
fun1(tree);


// 广度优先遍历
const fun2 = root => {
    const arr = [root];
    while (arr.length > 0) {
        const o = arr.shift();
        console.log(o.val);
        o.children.forEach(item => {
            arr.push(item);
        });
    }
};
fun2(tree);
