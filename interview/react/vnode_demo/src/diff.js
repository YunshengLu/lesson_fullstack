function diff(oldTree, newTree) {
    // 遍历
    // 比对
    let patches = {}; // 收集的差异 json 什么节点的什么差异
    let index = 0; // 第一次比较是树的第0个索引
    console.log(oldTree);
    walk(oldTree, newTree, index, patches); // 递归树 比较后的结果放到补丁(patches)里
    return patches;
}

function walk(oldNode, newNode, index, patches) {
    // 每个元素记录一个补丁
    let current = []; // 用数组来放一个元素的所有补丁
    // 新的虚拟DOM 树 当前比对节点
    if (!newNode) {
        // 删除节点
        current.push({ type: REMOVE, index });
    } else if (isString(oldNode) && isString(newNode)) {
        // 文本节点
        if (oldNode !== newNode) {
            current.push({ type: TEXT, text: newNode });
        }
    } else if (oldNode.type === newNode.type) {
        // 相同类型节点 且index 位置也一样
        let attrs = diffAttr(oldNode.props, newNode.props);
        // if (Object)
        if (Object.keys(attrs).length > 0) {
            current.push({ type: ATTRS, attrs });
        }
        diffChildren(oldNode.children, newNode.children, patches);
    } else {
        // 类型 type 不一样
        current.push({ type: REPLACE, newNode });
    }

    if (!oldNode) {
        current.push({ type: REPLACE, newNode });
    }

    if (current.length) {
        patches[index] = current;
    }
}

const ATTRS = 'ATTRS';
const TEXT = 'TEXT';
const REMOVE = 'REMOVE';
const REPLACE = 'REPLACE';

let num = 0;

function isString(node) {
    return Object.prototype.toString.call(node) === '[object String]';
}
function diffAttr(oldAttrs, newAttrs) {
    let patch = {};
    for (let key in oldAttrs) {
        if (oldAttrs[key] !== newAttrs[key]) {
            patch[key] = newAttrs[key];
        }
    }
    //
    for (let key in newAttrs) {
        if (!oldAttrs.hasOwnProperty(key)) {
            patch[key] = newAttrs[key];
        }
    }
    return patch;
}

function diffChildren(oldChildren, newChildren, patches) {
    // 比较老的第一个和新的第一个
    oldChildren.forEach((child, index) => {
        walk(child, newChildren[index], ++num, patches);
    });
}

export default diff;
