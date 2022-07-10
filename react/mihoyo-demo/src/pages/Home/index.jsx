import React, { useState, useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    getGameList,
} from './store/actionCreators'
import Header from './header'
import {} from './style'

const Home = (props) => {

    const {
        gameList,
    } = props

    const {
        getGameListDispatch,
    } = props

    useEffect(() => {
        getGameListDispatch();
    },[])
    
    return (
        <div>
            <Header gameList={gameList}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        gameList: state.home.gameList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGameListDispatch(){
            dispatch(getGameList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

