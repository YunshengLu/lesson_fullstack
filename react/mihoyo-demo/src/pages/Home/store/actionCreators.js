import * as actionTypes from './constants'
import {
    getGameListRequest,
} from '@/api/request'

const changeGameList = (data) => ({
    type: actionTypes.SET_GAME_LIST,
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