import styled from 'styled-components';
import { px2rem } from '@/assets/global-style';

export const HomeWrapper = styled.div`
    /* position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    z-index: 10;
    padding-bottom: ${px2rem(2)};
    .partition {
        position: relative;
        .tab-bar {
            margin-right: ${px2rem(56)};
        }
        .switch {
            position: absolute;
            top: 0;
            bottom: 0;
            right: ${px2rem(22)};
            line-height: ${px2rem(40)};
            font-size: ${px2rem(18)};
        }
    } */
    .blog {
        background: #00000060;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.4);
    }
    .top_menu {
        width: 100%;
        height: 10vh;
        /* border: 1px solid #000; */
        position: fixed;
        z-index: 999;
    }
    .left_menu {
        width: 20vw;
        height: 100vh;
        /* border: 1px solid #000; */
        position: fixed;
        z-index: 999;
    }
    .content {
        position: relative;
        height: 100vh;
        top: 10vh;
        margin-left: 20vw;
        background: yellow;
    }
`;

export const ContentWrapper = styled.div``;
