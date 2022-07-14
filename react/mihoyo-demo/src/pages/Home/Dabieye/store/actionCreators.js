import * as actionTypes from './constants'
import {
    getActivityListRequest,
} from '@/api/request'

const changeDabieyeActivityList = (data) => ({
    type: actionTypes.SET_ACTIVITY_LIST,
    data
})

export const getDabieyeActivityList = (query) => {
    return (dispatch) => {
        getActivityListRequest(query).then(data => {
            let list = data.data.navigator
            dispatch(changeDabieyeActivityList(list))
        })
    }
}