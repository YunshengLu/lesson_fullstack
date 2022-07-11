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
    
    const navigate = useNavigate()

    let swiper = null;
    useEffect(() => {
        if(swiper) return;
        swiper = new Swiper('.navbar')
    },[])

    const SelectTop = () => {
        return (
            <SelectItem>
                <div className="navbar swiper-container">
                    <div className="nav-box swiper-wrapper">
                {
                    data.map((item) => {
                        if(item.has_wiki){
                            return(
                                <NavLink to={`/home/${selectGame(item)}`} key={item.id}>
                                    <span>
                                        {item.name}
                                    </span>
                                </NavLink>
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

