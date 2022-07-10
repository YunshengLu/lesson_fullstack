import styled from 'styled-components';

export const Tab = styled.div`
    /* position: fixed;
    display: flex;
    height: 2.5rem;
    background-color: white;
    padding-top: 0.4rem;
    bottom: 0;
    left: 0;
    right: 0;
    left: 0;
    justify-content: space-around;
    a {
        display: flex;
        flex-direction: column;
        font-size: 0.7rem;
        align-items: center;
        justify-content: space-around;
        text-decoration: none;
        &.active {
            color: skyblue;
        }
    } */
    display: flex;
    height: 2.5rem;
    width: 100%;
    background: skyblue;
    position: fixed;
    bottom: 0;
    justify-content: space-around;
`;

export const TabItem = styled.div`
    /* display: flex;
    span {
        position: absolute;
        color: black;
        font-size: 12px;
    } */
`;
