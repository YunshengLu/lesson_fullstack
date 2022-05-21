/* 148. 排序链表
给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/sort-list */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    // 合并最长长度为 k 的 left 与 right 队列均已截断
    let sortListK = (left, right, k) => {
        if (!left) {
            return null;
        }
        if (!right) {
            return left;
        }
        let pre = new ListNode(-Infinity, left);
        let node = pre;
        while (left && right) {
            if (left.val <= right.val) {
                node.next = left;
                left = left.next;
            } else {
                node.next = right;
                right = right.next;
            }
            node = node.next;
        }
        // 合并剩余节点
        node.next = right ?? left;
        return pre.next;
    };
    // by k 逐个截断链表 并 合并
    let sortList = (head, k) => {
        let pre = new ListNode(-Infinity, head);
        let node = pre;
        // 如果有未处理节点
        while (node && node.next) {
            let c = 0;
            let left = node.next;
            // 查找 right
            let right = left;
            let preRight = left;
            while (c < k && right) {
                preRight = right;
                right = right.next;
                c++;
            }
            // 截断 left
            preRight.next = null;
            // 查找 next
            let next = right;
            c = 0;
            let preNext = new ListNode(0, next);
            while (c < k && next) {
                preNext = next;
                next = next.next;
                c++;
            }
            // 截断 right
            preNext.next = null;
            // 合并 left right 为 n
            let n = sortListK(left, right, k);
            node.next = n;
            // 将 node 节点移至末尾
            while (node && node.next) {
                node = node.next;
            }
            // 连接 next 节点
            if (node && next) {
                node.next = next;
            }
        }
        return pre.next;
    };
    // 遍历节点数
    let count = 0;
    let node = head;
    while (node) {
        count++;
        node = node.next;
    }
    // console.log(count)
    // by k 逐次归并排序节点
    let c = 1;
    while (c < count) {
        head = sortList(head, c);
        // console.log(c, head)
        c *= 2;
    }
    // 返回 head
    return head;
};

function merge(left, right) {
    let dummy = {};
    let cur = left;
    let cur2 = right;

    let lastnode = dummy;
    while (cur !== null && cur2 !== null) {
        if (cur.val < cur2.val) {
            lastnode.next = cur;
            lastnode = cur;
            cur = cur.next;
        } else {
            lastnode.next = cur2;
            lastnode = cur2;
            cur2 = cur2.next;
        }
    }

    if (cur !== null) {
        lastnode.next = cur;
    }

    if (cur2 !== null) {
        lastnode.next = cur2;
    }

    return dummy.next;
}

var sortList = function (head) {
    if (head === null) {
        return null;
    }
    let count = 0;
    let cur = head;
    while (cur !== null) {
        cur = cur.next;
        count++;
    }

    if (count === 1) {
        return head;
    }

    const middle = Math.floor(count / 2);
    let cur2 = head;

    for (let i = 0; i < middle - 1; i++) {
        cur2 = cur2.next;
    }

    let leftNode = head;
    let rightNode = cur2.next;
    cur2.next = null;

    const leltRes = sortList(leftNode);
    const rightRes = sortList(rightNode);

    return merge(leltRes, rightRes);
};
