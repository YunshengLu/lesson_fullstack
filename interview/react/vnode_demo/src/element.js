/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-08-23 11:41:38
 * @LastEditTime: 2022-08-24 14:59:21
 */
// 虚拟DOM 树的VNODE
class Element {
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
}

function createElement(type, props, children) {
    return new Element(type, props, children);
}

function setAttr(node, key, value) {
    switch (key) {
        case 'value':
            if (
                node.tagName.toUpperCase() === 'INPUT' ||
                node.tagName.toUpperCase() === 'TEXTAREA'
            ) {
                node.value = value;
            } else {
                // 自定义属性 React props
                node.setAttribute(key, value);
            }
            break;
        case 'style':
            // 行内样式
            node.style.cssText = value;
            break;
        default:
            node.setAttribute(key, value);
            break;
    }
}

function render(eleObj) { // 虚拟DOMM -> 真实DOM 需要的节点对象
    let el = document.createElement(eleObj.type);
    for (let key in eleObj.props) {
        // className css attr, key props react / onClick
        setAttr(el, key, eleObj.props[key]);
    }
    eleObj.children.forEach(child => {
        child = (child instanceof Element) 
        ? render(child) 
        : document.createTextNode(child)
        el.appendChild(child)
    })
    return el;
}

function renderDOM(el, target) {
    // ReactDOM
    target.appendChild(el);
}

export { createElement, render, renderDOM, setAttr, Element };
