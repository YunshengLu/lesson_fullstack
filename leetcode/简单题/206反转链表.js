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
    if (head == null || head.next == null) return head;
    let last = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return last;
};
