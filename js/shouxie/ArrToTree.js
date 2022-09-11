/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-30 17:21:41
 * @LastEditTime: 2022-09-10 15:51:40
 */
// function invertTree(sourceArr) {
//     let obj = {};
//     for (let i = 0; i < sourceArr.length; i++) {
//         obj[sourceArr[i].id] = sourceArr[i];
//     }
//     const result = [];
//     sourceArr.forEach(node => {
//         if (!obj[node.pid]) {
//             result.push(node);
//             return;
//         }
//         obj[node.pid].children = obj[node.pid].children || [];
//         obj[node.pid].children.push(node);
//     });
//     return JSON.stringify(result);
// }

var arr = [
    { id: 1, value: '节点1', pid: 0 },
    { id: 2, value: '节点2', pid: 1 },
    { id: 3, value: '节点3', pid: 1 },
    { id: 4, value: '节点4', pid: 2 },
    { id: 5, value: '节点5', pid: 0 },
    { id: 6, value: '节点6', pid: 5 },
    { id: 7, value: '节点7', pid: 6 },
    { id: 8, value: '节点8', pid: 6 },
];

function invertTree(sourceArr) {
    let obj = {};
    for (let i = 0; i < sourceArr.length; i++) {
        obj[sourceArr[i].id] = sourceArr[i];
    }
    let result = [];
    sourceArr.forEach(node => {
        if (!node.pid) {
            result.push(node);
        } else {
            obj[node.pid].children = obj[node.pid].children || [];
            obj[node.pid].children.push(node);
        }
    });
    return JSON.stringify(result);
}

console.log(invertTree(arr));

// [
//     ({
//         id: 1,
//         value: '节点1',
//         pid: 0,
//         children: [
//             { id: 2, value: '节点2', pid: 1, children: [{ id: 4, value: '节点4', pid: 2 }] },
//             { id: 3, value: '节点3', pid: 1 },
//         ],
//     },
//     {
//         id: 5,
//         value: '节点5',
//         pid: 0,
//         children: [
//             {
//                 id: 6,
//                 value: '节点6',
//                 pid: 5,
//                 children: [
//                     { id: 7, value: '节点7', pid: 6 },
//                     { id: 8, value: '节点8', pid: 6 },
//                 ],
//             },
//         ],
//     })
// ];
