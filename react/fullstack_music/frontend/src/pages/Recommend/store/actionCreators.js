import { getBannerRequest } from '@/api/request';
import * as actionTypes from './constants'

export const  changeBannerList = (data) => ({
    type: actionTypes.CHANGE_BANNER,
    data: data
})
// api 请求 一定放在action 中
export const getBannerList = () =>{
    return (dispatch) =>{
        getBannerRequest()
            .then(data => {
                const action = changeBannerList(data.banners)
                dispatch(action)
            })
    }
}