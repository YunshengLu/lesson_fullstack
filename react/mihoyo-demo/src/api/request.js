import { axiosInstance } from "@/api/config"

// 分区列表
// https://bbs-api.mihoyo.com/apihub/api/getGameList
export const getGameListRequest = 
    () => axiosInstance.get(`/apihub/api/getGameList`)

// 分区信息(活动等)
// https://bbs-api.mihoyo.com/apihub/api/home/new?gids=1 大别野
export const getActivityListRequest =
    () => axiosInstance.get(`/apihub/api/home/new`)