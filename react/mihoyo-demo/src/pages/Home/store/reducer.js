import * as actionTypes from './constants';

const defaultState = {
    gameList: [],
    activityBackground: [],
    backgroundList: [],
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_GAME_LIST:
            return {
                ...state,
                gameList: action.data
            }
        case actionTypes.GET_BACKGROUND_LIST:
            return {
                ...state,
                backgroundList: action.data
            }
        default:
            return state
    }
}
