/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-24 14:48:39
 * @LastEditTime: 2022-08-24 15:22:11
 */
import { Element, render, setAttr } from './element';
// 从外到内，从左到右
let allPatches;
let index = 0;
function patch(node, patches) {
    // console.log(node);
    allPatches = patches;
    walk(node);
}

function walk(node) {
    let current = allPatches[index++];
    // console.log(current, index);
    let childNodes = node.childNodes;
    // 先序遍历
    childNodes.forEach(child => walk(child));
    if (current) {
        doPatch(node, current);
    }
}

function doPatch(node, patches) {
    // DOM编程
    patches.forEach(patch => {
        switch (patch.type) {
            case 'ATTRS':
                for (let key in patch.attrs) {
                    let value = patch.attrs[key];
                    if (value) {
                        setAttr(node, key, value);
                    } else {
                        node.removeAttribute(key);
                    }
                }
                break;
            case 'REPLACE':
                let newNode =
                    (patch.newNode instanceof Element)
                        ? render(patch.newNode)
                        : document.createTextNode(patch.newNode);
                node.parentNode.replaceChild(newNode, node);
                break;
            case 'TEXT':
                node.textContent = patch.text;
                break;
            case 'REMOVE':
                node.parentNode.replaceChild(node);
                break;
            default:
                break;
        }
    });
}

export default patch;
