import React, { useState, useEffect } from 'react'
import './index.css'

/**
 * @param {visible boolean} props 控制显示 
 * @returns 
 */
const Modal = (props) => {

    const [visible,setVisible] = useState(false);
    const { visible:show, children, title } = props;
    const { onClose, onConfirm } = props;
    
    useEffect(() => {
        console.log('---------');
        setVisible(show);
    },[show])
    const closeModal = () => {
        console.log('想要关闭吗？');
        setVisible(false);
        onClose && onClose();
    }
    const confirm = () => {
        console.log('想要确定吗？');
        setVisible(false);
        onConfirm && onConfirm();
    }
    const maskClick = () => {
        setVisible(false);
        onClose && onClose();
    }
    return (
        visible && <div className="modal-wrapper">
            <div className="modal">
                <div className="modal-title">{title}</div>
                <div className="modal-content">{children}</div>
                <div className="modal-operator">
                    <button 
                    onClick={closeModal}
                    className="modal-operator-close">取消</button>
                    <button 
                    onClick={confirm}
                    className="modal-operator-confirm">确定</button>
                </div>
            </div>
            <div 
            onClick={maskClick}
            className="mask"></div>
        </div>
    )
}

export default Modal