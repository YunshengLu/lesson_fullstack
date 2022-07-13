import React, { useState, useEffect } from 'react'
import { useNavigate, NavLink, Outlet } from 'react-router-dom'
import {
    Wrapper,
    SelectItem,
    Top
} from './style'
import Swiper from 'swiper'
import { selectGame } from '@/api/utils'

const HomeDetailNav = (props) => {

    const { gameList: data } = props
    // console.log(data);
    
    const navigate = useNavigate()

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

    const SelectTop = () => {
        return (
            <SelectItem>
                <div className="swiper-container">
                        <div className="swiper-wrapper">
                {
                    data.map((item) => {
                        if(item.has_wiki || item.en_name == 'dby'){
                            return(
                                <div key={item.id} className="swiper-slide">
                                    <NavLink to={`/home/${selectGame(item)}`}>
                                        <span>
                                            {item.name}
                                        </span>
                                    </NavLink>
                                </div>
                            )
                        }
                    })
                }
                    </div>
                </div>
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
            <Outlet />
        </Wrapper>
    )
}

export default HomeDetailNav

