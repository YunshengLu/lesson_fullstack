/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-15 19:54:16
 * @LastEditTime: 2022-09-15 21:05:39
 */
import axios from 'axios';

export const baseUrl = 'https://www.fastmock.site/mock/3ddf189404196ed14cb6531bf3596081/vue'

const axiosInstance = axios.create({
    baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误');
    }
)

export { axiosInstance }