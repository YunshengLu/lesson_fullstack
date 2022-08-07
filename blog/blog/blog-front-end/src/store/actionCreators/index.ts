import { Dispatch } from 'redux';
import * as ActionTypes from '../constants';
import {
    // getRankingPartitionRequest,
    // getRankingRequest,
    // getPartitionsRequest,
    postLoginRequest,
    postRegisterRequest,
} from '@/api/request';

// 登录
export const postLogin = (data: any) => ({
    type: ActionTypes.POST_USERLOGIN,
    data,
});
export const postLoginAction = (data: string) => {
    return (dispatch: Dispatch) => {
        return postLoginRequest(data).then(loginResult => {
            console.log(loginResult, '++++++++++++++登录');
            dispatch(postLogin(loginResult));
        });
    };
};


// 注册
export const postRegister = (data: any) => ({
    type: ActionTypes.POST_USERREGISTER,
    data,
});
export const postRegisterAction = (data: string) => {
    return (dispatch: Dispatch) => {
        return postRegisterRequest(data).then(registerResult => {
            console.log(registerResult, '++++++++++++++注册');
            dispatch(postLogin(registerResult));
        });
    };
};




