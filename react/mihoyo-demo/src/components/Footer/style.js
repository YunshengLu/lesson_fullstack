import styled from 'styled-components';

export const Tab = styled.div`
    display: flex;
    height: 2.7rem;
    width: 100%;
    background-color: rgba(248,248,248,1);
    position: fixed;
    bottom: 0;
    justify-content: space-around;
    a {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .input {
        width: 3.5rem;
        margin: auto;
        transform: scale(1.2, 1);
    }
`;

export const TabItem = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    i{
        color: #707070;
        font-weight: bold;
        font-size: 1.2rem;
        margin: 0.5rem 0 0.3rem 0;
    }
    .icon-kuaisutianjiamoren {
        font-size: 1.5rem;
        color: rgba(0, 130, 243, 0.8);
    }
    span {
        color: black;
        font-size: 0.4rem;
    }
`;
