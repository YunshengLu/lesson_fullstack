import React, { useState, useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    getGameList,
    getActivityList,
} from './store/actionCreators'
import HomeDetailNav from '../../components/HomeDetailNav'
import {} from './style'

const Home = (props) => {

    const {
        gameList,
        activityList,
    } = props

    const {
        getGameListDispatch,
        getActivityListDispatch,
    } = props

    useEffect(() => {
        getGameListDispatch();
        getActivityListDispatch();
    },[])
    
    return (
        <div>
            <HomeDetailNav gameList={gameList}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state,'||||||||');
    return {
        gameList: state.home.gameList,
        activityList: state.home.activityList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGameListDispatch(){
            dispatch(getGameList())
        },
        getActivityListDispatch(){
            dispatch(getActivityList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

