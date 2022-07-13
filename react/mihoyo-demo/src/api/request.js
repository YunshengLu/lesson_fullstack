import { axiosInstance } from "@/api/config"

// 分区列表
// https://bbs-api.mihoyo.com/apihub/api/getGameList
export const getGameListRequest = 
    () => axiosInstance.get(`/apihub/api/getGameList`)

// 分区信息(活动等)
// https://bbs-api.mihoyo.com/apihub/api/home/new?gids=5 大别野
export const getActivityListRequest =
    (query) => axiosInstance.get(`/apihub/api/home/new?gids=${query}`)
    // (query) => axiosInstance.get(`/apihub/api/home/new/gids=${query}`)

export const getResultListRequest =
    (query) => axiosInstance.get(`/apihub/wapi/search?keyword=${query}`)