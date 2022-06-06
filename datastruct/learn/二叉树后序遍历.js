// 二叉树后序遍历 ：左 -> 右 -> 根  leetcode:145
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

// 递归
var postorderTraversal = function (root) {
    const arr = [];
    const fun = node => {
        if (node) {
            fun(node.left);
            fun(node.right);
            arr.push(node.val);
        }
    };
    fun(root);
    return arr;
};

console.log(postorderTraversal(tree));

// 非递归
var postorderTraversal2 = function (root) {
    if (!root) return [];
    let arr = [];
    let stack = [root];
    while (stack.length) {
        const o = stack.pop();
        o.left && stack.push(o.left);
        o.right && stack.push(o.right);
        arr.unshift(o.val);
    }
    return arr;
};

console.log(postorderTraversal2(tree));
