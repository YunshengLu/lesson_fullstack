import React, { useState, useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import {
    SelectItem,
    Top
} from './style'
import { selectGame } from '@/api/utils'

const Header = (props) => {

    const { gameList: data } = props
    
    const navigate = useNavigate()

    const SelectTop = () => {
        return (
            <SelectItem>
                {
                    data.map((item) => {
                        if(item.has_wiki){
                            return(
                                <NavLink to={`/home/${selectGame(item)}`} key={item.id}>{item.name}</NavLink>
                            )
                        }
                    })
                }
            </SelectItem>
        )
    }

    return (
        <Top>
            <span>
                <i className="iconfont icon-" onClick={() => navigate("/search")}></i>
            </span>
            {SelectTop()}
            <span>
                <i className="iconfont icon-" onClick={() => navigate("/select")}></i>
            </span>
        </Top>
    )
}

export default Header

