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
/* var reverseList = function (head) {
    if (!head || !head.next) return head;

    let top = head;
    let pre = null;

    while (top) {
        const next = top.next;
        top.next = pre;
        pre = top;
        top = next;
    }
    return pre;
}; */

var reverseList = function (head) {
     // 递归结束条件
    if (head == null || head.next == null) return head;
    // 递归反转 子链表
    let last = reverseList(head.next);
    // 获取原来链表的第 2 个节点,调整原来头结点和第 2 个节点的指向
    head.next.next = head;
    head.next = null;
    // 返回调整后的链表
    return last;
};
