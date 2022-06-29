// 组件不可以染指数据请求，页面级别组件之中看不到api
// 在action 中 redux 指定可以数据流动的地方
// 有了redux 之后，UI 更纯粹
// 应用开发分成 UI + 数据管理

import { getBannerRequest, getRankListRequest, getSingersRequest } from "@/api/request"
// store reducer defaultState -> action api -> reducer
// 重新计算 -> 通知connect UI 更新
// action 函数
export const changeBannerList = (data) => ({
    type: 'CHANGE_BANNER',
    data
})

export const changeRankList = (data) => ({
    type: 'CHANGE_RANKLIST',
    data
})

export const changeSingersList = (data) => ({
    type: 'CHANGE_SINGER',
    data
})

export const getBannerList = () => {
    return (dispatch)=>{
        getBannerRequest().then(data => {
            const action = changeBannerList(data.banners);
            dispatch(action)
        })
    }
}

export const getRankList = () => {
    // api 异步
    return (dispatch)=>{
        getRankListRequest().then(data => {
            // console.log(data,dispatch);
            // {type: '修改的Tag'，data}
            const action = changeRankList(data.list)
            // console.log(action);
            // dispatch 这种格式的对象，才能触发reducer 重新计算
            dispatch(action)
        })
    }
}

export const getSingersList = () => {
    return (dispatch)=>{
        getSingersRequest().then(data => {
            // console.log(data,'+++++++++++++++');
            const action = changeSingersList(data.artists)
            dispatch(action)
        })
    }
}