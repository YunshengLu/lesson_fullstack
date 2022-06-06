// 二叉树中序遍历： 左 -> 根 -> 右  leetcode:94
const tree = {
    val: '1', // 根
    // 左子树
    left: {
        val: '2', // 根
        left: { val: '4', left: null, right: null },
        right: { val: '5', left: null, right: null },
    },
    // 右子树
    right: {
        val: '3', // 根
        left: { val: '6', left: null, right: null },
        right: { val: '7', left: null, right: null },
    },
};

// 递归中序遍历
var inorderTraversal = function (root) {
    const arr = [];
    const fun = node => {
        if (!node) return [];
        fun(node.left);
        arr.push(node.val);
        fun(node.right);
    };
    fun(root);
    return arr;
};

console.log(inorderTraversal(tree));

// 栈，非递归
var inorderTraversal2 = function (root) {
    const arr = [];
    const stack = [];
    let o = root;
    while (stack.length || o) {
        while (o) {
            stack.push(o);
            o = o.left;
        }
        const n = stack.pop();
        arr.push(n.val);
        o = n.right;
    }
    return arr;
};

console.log(inorderTraversal2(tree));
