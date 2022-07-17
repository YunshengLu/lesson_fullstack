import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    .suggest {
        height: 2rem;
        background: white;
        border-top: 0.4rem solid rgb(242, 243, 244);
        display: flex;
        .icon-tuijian {
            position: absolute;
            font-size: 1.2rem;
            font-weight: 500;
            margin-top: 0.6rem;
            margin-left: 0.5rem;
        }
        p {
            position: absolute;
            font-size: 0.9rem;
            font-weight: bold;
            margin-top: 0.7rem;
            margin-left: 2rem;
        }
    }
`;

export const ItemConent = styled.div``;

export const Item = styled.div`
    position: relative;
    height: 18rem;
    background: white;
    border-bottom: 0.4rem solid rgb(242, 243, 244);
    .header {
        position: absolute;
        margin-top: 0.8rem;
        display: flex;
        font-size: 0.7rem;
        .avatar {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            margin-left: 0.4rem;
            /* background: pink; */
            position: relative;
            .avatar_url {
                position: absolute;
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 50%;
            }
            .pendant {
                position: absolute;
                width: 2rem;
                height: 2rem;
            }
        }
        .user_name {
            display: flex;
            flex-direction: column;
            margin: 0.2rem 0 0.2rem 0.4rem;
            > div {
                text-align: left;
                height: 0.8rem;
                display: flex;
                >p {
                    width: 0.8rem;
                    height: 0.8rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: rgb(250,191,29);
                    border-radius: 50%;
                    margin-left: 0.5rem;
                    font-size: 0.6rem;
                    color: white;
                }
            }
            .post_time {
                text-align: left;
                margin-top: 0.2rem;
                opacity: 0.5;
            }
        }
        .attention {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 1rem;
            width: 2.8rem;
            border: 1px solid rgb(68,170,234);
            border-radius: 0.2rem;
            color: rgb(68,170,234);
            margin-left: 14rem;
            margin-top: 0.2rem;
        }
        .is_attention {
            border: 1px solid black;
            color: black;
            opacity: 0.5;
        }
    }
`;

export const SwiperItem = styled.div`
    height: 8rem;
    background: rgb(242, 243, 244);
    img {
        width: 100%;
        height: 100%;
        border-radius: 0.4rem;
    }
    .swiper-slide {
        margin: 0.75rem 0 0.75rem 0.5rem;
        width: 14rem;
        height: 6.5rem;
    }
`;

export const TabItem = styled.div`
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 17rem;
    .input {
        font-size: 1.5rem;
        opacity: 0.5;
    }
    i {
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

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
        display: inline-block;
        display: flex;
        align-items: center;
        height: 1.8rem;
        margin-top: 0.5rem;
        width: 100%;
        > div {
            height: 2.5rem;
            width: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            color: black;
        }
        span {
            color: rgb(30, 31, 33);
            font-size: 0.7rem;
            > p {
                color: rgb(192, 197, 200);
                margin-top: 0.2rem;
                font-size: 0.5rem;
            }
        }
        .beta {
            position: absolute;
            display: inline-block;
            width: 1.4rem;
            height: 0.6rem;
            font-size: 0.5rem;
            text-align: center;
            background: rgb(249, 98, 71);
            border-radius: 5px 5px 0 5px;
            color: white;
            margin-top: -2rem;
            margin-left: -2.7rem;
        }
    }
    .close {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.5rem;
        width: 100%;
        background-color: rgba(248, 248, 248, 1);
        position: fixed;
        bottom: 0;
        font-size: 0.8rem;
        color: black;
    }
`;
