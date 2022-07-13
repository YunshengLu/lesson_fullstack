import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, NavLink, Outlet } from 'react-router-dom'
import {
    Wrapper,
    SelectItem,
    Top
} from './style'
// import Swiper from 'swiper'
import { selectGame } from '@/api/utils'
import { Tabs, Swiper } from 'antd-mobile'
// import { SwiperRef } from 'antd-mobile/es/components/swiper'

const HomeDetailNav = (props) => {

    const { gameList: data } = props

    const swiperRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(1)
    
    const navigate = useNavigate()

    const SelectTop = () => {
        return (
            <SelectItem>
                <Tabs
                    activeKey={data[activeIndex].id}
                    onChange={
                        key => {
                            const index = tabItems.findIndex(item => item.id === key)
                            setActiveIndex(index)
                            swiperRef.current?.swipeTo(index)
                        }
                    }
                >
                {
                    data.map((item) => {
                        if(item.has_wiki || item.en_name == 'dby'){
                            return(
                                <NavLink to={`/home/${selectGame(item)}`} key={item.id}>
                                    <Tabs.Tab title={item.name} key={item.id} />
                                </NavLink>
                            )
                        }
                    })
                }
                </Tabs>
            </SelectItem>
            )
    }

    return (
        <Wrapper>
            <Top>
                <span className='left'>
                    <i className="iconfont icon-sousuo" onClick={() => navigate("/search")}></i>
                </span>
                {SelectTop()}
                <span className='right'>
                    <i className="iconfont icon-caidanzhankai" onClick={() => navigate("/select")}></i>
                </span>
            </Top>



            <Swiper
                direction='horizontal'
                loop
                indicator={() => null}
                ref={swiperRef}
                defaultIndex={activeIndex}
                onIndexChange={index => {
                    setActiveIndex(index)
                    }}
                >
                <Swiper.Item>
                    {/* <div className={styles.content}>菠萝</div> */}
                    <Outlet className={styles.content} /> 
                </Swiper.Item>
                </Swiper>

            {/* <Outlet /> */}
        </Wrapper>
    )
}

export default HomeDetailNav

