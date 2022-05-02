/* 给你一个链表的头节点 head ，判断链表中是否有环。
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/* 快慢指针解法 ，定义一个快指针一个慢指针，
快指针每次走两步，慢指针每次走一步，若是链表中有环那么两指针必然相遇
 */
var hasCycle = function (head) {
    if (head == null) {
        return false;
    }
    let slow = head; // 慢指针
    let fast = head; // 快指针
    // 判断快指针是否走到链表尽头
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }
    return false;
};
