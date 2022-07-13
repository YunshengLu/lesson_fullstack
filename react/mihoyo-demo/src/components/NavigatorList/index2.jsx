import React,{ useEffect } from 'react';
import {
    Wrapper,
    Item,
} from './style'
import Swiper from 'swiper'
import "swiper/css/free-mode";
// import { Swiper, SwiperSlide } from 'swiper/react';

const NavigatorList = ({navigator}) => {

    let navigatorList = navigator.navigator
    console.log(navigatorList,'||||||||');
    // (navigatorList || []).map(item =>{
    //     console.log(item);
    // })

    let swiper = null;
    useEffect(() => {
        if(swiper) return;
        swiper = new Swiper('.mySwiper',{
            // observer: true,
            // observerParants: true,
            // mode: "horizontal",
            // loop: true,
            // slidesPerView: 'auto',
            loopedSlides: 8,
            // slidesPerGroup: "auto",
            // slidesPerView : 'auto',
            // width: "auto",
            freeMode: {
                enabled: true,
            },
        })
    },[])

    return (
        <Wrapper>
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
            {
                navigatorList && navigatorList.length ?
                navigatorList.map((item) => 
                    <Item key={item.id} className="swiper">
                        <a href={item.app_path}>
                            <img src={item.icon}/>
                            <span>{item.name}</span>
                        </a>
                    </Item>
                ) : null
            }
                </div>
            </div>
        </Wrapper>
    )
}

export default NavigatorList