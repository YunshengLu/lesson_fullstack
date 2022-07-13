import * as actionTypes from './constants';

const defaultState = {
    yuanshenActivityList: [],
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_ACTIVITY_LIST:
            return {
                ...state,
                yuanshenActivityList: action.data
            }
        default:
            return state
    }
}
