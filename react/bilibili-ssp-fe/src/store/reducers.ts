import { combineReducers, AnyAction } from 'redux';
import * as ActionTypes from "./constants";

const initialState = {
    loading: true,
    ranking: {
        rankingPartitions: [],
        rankingVideos: [],
    },
    partitions: {
        oneLevelPartitions: [],
    },
}

const loadingReducer = (state = initialState.loading, action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.SET_LOADING:
            return action.data
        default: 
            return state
    }
}

const rankingReducer = (state = initialState.ranking, action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.SET_RANKING_PARTITIONS:
            return {
                ...state,
                rankingPartitions: action.data
            }
            break;
        case ActionTypes.SET_RANKING_VIDEOS:
            return {
                ...state,
                rankingVideos: action.data
            }
            break;
        default:
            return state
    }
}

const partitionsReducer = (state = initialState.partitions, action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.SET_ONE_LEVEL_PARTITIONS:
            return {
                ...state,
                oneLevelPartitions: action.data
            }  
            break;
        default:
            return state 
    }
}

export default combineReducers({
    loading: loadingReducer,
    ranking: rankingReducer,
    partitions: partitionsReducer,
})