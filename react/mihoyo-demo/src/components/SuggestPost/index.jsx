import React, { useEffect, useState } from "react";
import {
    Wrapper,
    ItemConent,
    Item,
    SwiperItem,
    TabItem,
    ContentWrapper,
} from "./style"
import Swiper from "swiper"
import { Popup } from 'antd-mobile';
import { 
    MoreOutline,
    ExclamationTriangleOutline, 
    ScanningFaceOutline, 
    BankcardOutline, 
    FileWrongOutline,
} from 'antd-mobile-icons'

const SuggestPost = ({suggestPostList, carouselsList}) => {

    const [isAttention,setIsAttention] = useState(false)
    const [guanzhu,setGuanzhu] = useState('+ 关注')
    const [visible, setVisible] = useState(false);

    const frontPost = suggestPostList.slice(0,2)
    console.log(frontPost);
    const lastPost = suggestPostList.slice(2)

    let swiper = null;
    useEffect(() => {
        if(swiper) return;
        swiper = new Swiper('.swiper-container',{
            observer: true,
            observerParants: true,
            slidesPerView : 'auto',
            freeMode: {
                enabled: true,
            },
        })
    },[])

    // 关注按钮事件
    const attention = () => {
        if(isAttention){
            setGuanzhu('已关注')
        }else{
            setGuanzhu('+ 关注')
        }
        setIsAttention(!isAttention)
    }

    // 关注旁边的举报等信息弹出层
    const details = () => {
        return (
            <>
                <TabItem
                    onClick={() => {
                        setVisible(true);
                    }}
                >
                    <div className="input">
                        <MoreOutline />
                    </div>
                </TabItem>
                <Popup
                    visible={visible}
                    onMaskClick={() => {
                        setVisible(false);
                    }}
                    bodyStyle={{
                        borderTopLeftRadius: '0.5rem',
                        borderTopRightRadius: '0.5rem',
                        height: '12rem',
                    }}
                >
                    <ContentWrapper>
                        <a href="#">
                            <div>
                                <FileWrongOutline />
                            </div>
                            <span>
                                减少此类内容
                            </span>
                        </a>    
                        <a href="#">
                            <div>
                                <ScanningFaceOutline />
                            </div>
                            <span>
                                不看作者
                            </span>
                        </a>                            
                        <a href="#">
                            <div>
                                <BankcardOutline />
                            </div>
                            <span>
                                减少{}版区内容
                            </span>
                        </a>                            
                        <a href="#">
                            <div>
                                <ExclamationTriangleOutline />
                            </div>
                            <span>
                                举报
                            </span>
                        </a>
                        <div className="close" onClick={() => setVisible(false)}>取消</div>
                    </ContentWrapper>
                </Popup>
            </>
        )
    }

    // 首页推荐内容
    const suggestFrontPostContent = () => {
        return (
            <ItemConent>
                {
                    frontPost && frontPost.length ?
                    frontPost.map((item,index) => 
                        <Item key={index}>
                            <div className="header">
                                <img src={item.user.avatar_url}/>
                                <span>{item.user.nickname}</span>
                                <p>{item.user.level_exp.level}</p>
                                {item.post.post_id}
                                <button 
                                    className="attention" 
                                    onClick={() => attention()}
                                >
                                    {guanzhu}
                                </button>
                                {details()}
                            </div>
                            <div className="content">

                            </div>
                            <div className="footer">

                            </div>
                        </Item>
                    )
                    :null
                }
            </ItemConent>
        )
    }

    const carousels = () => {
        return (
            <SwiperItem>
                <div className="swiper-container mySwiper">
                    <div className="swiper-wrapper">
                        {
                        carouselsList.map((item,index) =>
                            <div key={index} className="swiper-slide">
                                <img src={item.cover} />
                            </div>
                        )
                        }
                    </div>
                </div>
            </SwiperItem>
        )
    }

    return (
        <Wrapper>
            <div className="suggest">
                <i className="iconfont icon-tuijian"></i>
                <p>推荐</p>
            </div>
            {suggestFrontPostContent()}
            {carousels()}
        </Wrapper>
    )
}

export default SuggestPost