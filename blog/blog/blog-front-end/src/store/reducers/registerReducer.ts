import { AnyAction } from 'redux';
import * as ActionTypes from "../constants";

const initialState = {
    username: '',
    password: ''
}

const registerReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.POST_USERREGISTER:
            return action.data
        default: 
            return state
    }
}

export default registerReducer
