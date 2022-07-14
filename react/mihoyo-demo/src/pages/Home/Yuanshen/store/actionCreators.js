import * as actionTypes from './constants'
import { getRandomArr } from '@/api/utils'
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
            let list = data.data.navigator
            dispatch(changeYuanshenActivityList(list))
        })
    }
}

const getYuanshenDiscussionList = (data) => ({
    type: actionTypes.GET_DISCUSS_LIST,
    data
})
export const getYuanshenDiscussion = (query) => {
    return (dispatch) => {
        getActivityListRequest(query).then(data => {
            let list = data.data.discussion
            dispatch(getYuanshenDiscussionList(list))
        })
    }
}

const getOfficialList = (data) => ({
    type: actionTypes.GET_OFFICIAL_LIST,
    data
})
export const getOfficial = (query) => {
    return (dispatch) => {
        getActivityListRequest(query).then(data => {
            let lists = data.data.official.data
            let list = getRandomArr(lists,2)
            dispatch(getOfficialList(list))
        })
    }
}