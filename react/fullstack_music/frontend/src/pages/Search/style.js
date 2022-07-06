import styled from 'styled-components';
import style from '@/assets/global-style';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: ${props => (props.play > 0 ? '60px' : 0)};
    width: 100%;
    z-index: 100;
    overflow: hidden;
    background: #f2f3f4;
    transform-origin: right bottom;
    /* CSSTransition 过渡类型给children */
    &.fly-enter,
    &.fly-appear {
        opacity: 0;
        /* 使用translate3d 会启用 GPU 加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active,
    &.fly-appear-active {
        opacity: 1;
        transition: all 0.3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all 0.3s;
        transform: translate3d(100%, 0, 0);
    }
`;
