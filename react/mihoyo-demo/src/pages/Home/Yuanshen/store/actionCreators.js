import * as actionTypes from './constants'
import {
    getActivityListRequest,
} from '@/api/request'

const changeYuanshenActivityList = (data) => ({
    type: actionTypes.SET_ACTIVITY_LIST,
    data
})

export const getYuanshenActivityList = (query) => {
    return (dispatch) => {
        getActivityListRequest(query).then(data => {
            let list = data.data
            dispatch(changeYuanshenActivityList(list))
        })
    }
}