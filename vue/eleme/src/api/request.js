/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-15 19:54:24
 * @LastEditTime: 2022-09-15 19:59:24
 */
import { axiosInstance } from "./config";
export const getSellerRequest = () => {
    return axiosInstance.get('/seller')
}