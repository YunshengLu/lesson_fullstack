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

// 前序遍历
// 递归方式
var preorderTraversal = function (root) {
    let arr = [];
    var fun = node => {
        // 判断节点是否为null (存在)
        if (node) {
            // 先根节点
            arr.push(node.val);
            // 遍历左子树
            fun(node.left);
            // 遍历右子树
            fun(node.right);
        }
    };
    fun(root);
    return arr;
};

console.log(preorderTraversal(tree));

// 栈的方式
var preorderTraversal2 = function (root) {
    if (!root) return [];
    let arr = [];
    // 根节点入栈
    let start = [root];
    while (start.length) {
        // 出栈
        let o = start.pop();
        arr.push(o.val);
        // 右子树入栈
        o.left && start.push(o.left);
        // 左子树入栈
        o.right && start.push(o.right);
    }
    return arr;
};


console.log(preorderTraversal2(tree));
