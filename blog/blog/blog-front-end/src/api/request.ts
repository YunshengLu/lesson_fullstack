import { axiosInstance } from "./config";
import {
    URL_LOGIN, 
    URL_REGISTER,
} from "./url"
// import Qs from "qs";
// import axios from "axios";

// 登录
export const postLoginRequest = (formData: string) =>{
    // let data = Qs.stringify(formData);
    // console.log(data,'&&&&&&&&&&&&');
    return axiosInstance.post(URL_LOGIN, formData)
    // return axiosInstance({
    //     url: URL_LOGIN,
    //     method: 'POST',
    //     headers:{'Content-Type':"application/json"},
    //     data: formData
    // })
}

// 注册
export const postRegisterRequest = (formData: string) => {
    return axiosInstance.post(URL_REGISTER, formData)
}