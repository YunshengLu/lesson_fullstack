import { AnyAction } from 'redux';
import * as ActionTypes from "../constants";

const initialState = {
    username: '',
    password: ''
}

const loginReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.POST_USERLOGIN:
            return action.data
        default: 
            return state
    }
}

export default loginReducer
