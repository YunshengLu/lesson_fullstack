function ListNode(val) {
    this.val = val;
    this.next = null;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
n1.next = n2;
const n3 = new ListNode(3);
n2.next = n3;
// n1.next = n3;
// n3.next = n2;
// n3.next = n1.next;
// n1.next = n3;
const target = node1.next;
node1.next = target.next;
