import * as actionTypes from './constants';

const defaultState = {
    gameList: [],
    activityList: [],
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_GAME_LIST:
            return {
                ...state,
                gameList: action.data
            }
        case actionTypes.SET_ACTIVITY_LIST:
            return {
                ...state,
                activityList: action.data
            }
        default:
            return state
    }
}
