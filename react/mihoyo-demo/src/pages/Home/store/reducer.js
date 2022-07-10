import * as actionTypes from './constants';

const defaultState = {
    gameList: [],
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_GAME_LIST:
            return {
                ...state,
                gameList: action.data
            }
        default:
            return state
    }
}