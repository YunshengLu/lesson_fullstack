import styled from 'styled-components'

export const Wrapper = styled.div`
`

export const Top = styled.div`
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    .left {
        width: 13%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon-sousuo {
            font-size: 1rem;
            font-weight: bold;
        }
    }
    .right {
        width: 13%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 0;
        .icon-caidanzhankai {
            font-size: 0.8rem;
            font-weight: 600;
        }
    }
`

export const SelectItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    a {
        display: inline-block;
        margin: auto 0.6rem;
    }
    span {
        font-size: 0.9rem;
        color: #707070;
    }
    .navbar {
        position: absolute;
        left: 13%;
    }
`