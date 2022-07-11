import * as actionTypes from './constants'
import {
    getGameListRequest,
    getActivityListRequest,
} from '@/api/request'

const changeGameList = (data) => ({
    type: actionTypes.SET_GAME_LIST,
    data
})

const changeActivityList = (data) => ({
    type: actionTypes.SET_ACTIVITY_LIST,
    data
})

export const getGameList = () => {
    return (dispatch) =>{
        getGameListRequest().then(data => {
            let list = data.data.list
            dispatch(changeGameList(list))
        })
    }
}

export const getActivityList = () => {
    return (dispatch) => {
        getActivityListRequest().then(data => {
            dispatch(changeActivityList(data))
        })
    }
}