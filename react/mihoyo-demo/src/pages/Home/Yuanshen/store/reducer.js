import * as actionTypes from './constants';

const defaultState = {
    yuanshenActivityList: [],
    yuanshenDiscussionList: [],
    officialList: [],
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_ACTIVITY_LIST:
            return {
                ...state,
                yuanshenActivityList: action.data
            }
        case actionTypes.GET_DISCUSS_LIST:
            return {
                ...state,
                yuanshenDiscussionList: action.data
            }
        case actionTypes.GET_OFFICIAL_LIST:
            return {
                ...state,
                officialList: action.data
            }
        default:
            return state
    }
}
