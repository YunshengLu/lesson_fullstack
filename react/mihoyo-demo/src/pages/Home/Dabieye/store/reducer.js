import * as actionTypes from './constants';

const defaultState = {
    dabieyeActivityList: [],
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_ACTIVITY_LIST:
            return {
                ...state,
                dabieyeActivityList: action.data
            }
        default:
            return state
    }
}
