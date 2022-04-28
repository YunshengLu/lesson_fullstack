// 二维数组 矩阵
// 链表 不连续 离散的
// arr 栈 队列 优势？
// 下标访问 O(1) API丰富，好理解
// 链表 数据项 多一个指针 n 麻烦？
// 优点在哪儿？ 插入和删除灵活

// 指针

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// const n1 = new ListNode(1);
// const n2 = new ListNode(2);
// const n3 = new ListNode(3);
// n1.next = n2;
// n2.next = n3;

// 1. val + 下个节点的地址|null
// 2. 对象是什么类型？ Object 复杂 引用
// 3. 一个节点赋值给另一个节点的next 属性？
// {
//     val:1,
//     next:{
//         val:2, 
//         next:{
//             var:3,
//             next:null
//         }
//     }
// }