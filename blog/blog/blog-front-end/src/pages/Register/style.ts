import styled from 'styled-components';
import { px2rem } from '@/assets/global-style';

export const LoginWrapper = styled.div`
    /* 100%窗口高度 */
    height: 100vh;
    /* 弹性布局 居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 渐变背景 */
    background: linear-gradient(200deg, #e3c5eb, #a9c1ed);
    /* 溢出隐藏 */
    overflow: hidden;

    .container {
        /* 相对定位 */
        position: relative;
        z-index: 1;
        background-color: #fff;
        border-radius: 15px;
        /* 弹性布局 垂直排列 */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 350px;
        min-width: 24.5vw;
        height: 500px;
        height: 60vh;
        /* 阴影 */
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }

    .container .tit {
        font-size: 26px;
        margin: 40px auto;
    }

    .container .ant-form-item {
        width: 280px;
    }

    .container .input {
        width: 280px;
        height: 30px;
        text-indent: 8px;
        border: none;
        border-bottom: 1px solid #ddd;
        outline: none;
        margin: 12px auto;
        font-size: 12px;
    }

    .container .btn {
        width: 280px;
        height: 40px;
        margin: 35px auto 48px auto;
        border: none;
        background: linear-gradient(-200deg, #fac0e7, #aac2ee);
        color: #fff;
        /* font-size: 22px; */
        /* line-height: 40px; */
        /* text-align: center; */
        /* font-weight: bold; */
        letter-spacing: 8px;
        border-radius: 10px;
        cursor: pointer;
        /* 过渡动画 */
        transition: 0.5s;
        .ant-btn {
            line-height: 30px;
            width: 100%;
            height: 100%;
            background: none;
            font-weight: bold;
            border: none;
        }
    }

    .container .btn:hover {
        background: linear-gradient(-200deg, #aac2ee, #fac0e7);
        background-position-x: -280px;
    }

    .container span {
        font-size: 14px;
    }

    .container a {
        color: plum;
        text-decoration: none;
    }

`;
