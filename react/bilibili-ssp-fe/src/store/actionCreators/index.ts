import { Dispatch } from 'redux'
import * as ActionTypes from "../constants"
import {
    getRankingPartitionRequest,
    getRankingRequest,
    getPartitionsRequest,
} from '@/api/request'

// 页面级别action 
// promise.all
export const getHomeDataAction = (rId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        return Promise.all([
            getPartitionsRequest(),
            getRankingPartitionRequest(),
            getRankingRequest(rId),
        ]).then(([partitionResult, rankingPartitionResult, videoResult]) => {
            // console.log(partitionResult,'+++++++');
            const oneLevelPartitions = partitionResult.data[0]
            oneLevelPartitions.filter((partition: any) => 
                    [13, 23, 11, 177].indexOf(partition.id) === -1)
            dispatch(setOneLevelPartitions(oneLevelPartitions))
            dispatch(setRankingPartitions(rankingPartitionResult.data))
            dispatch(setRankingVideos(videoResult.data.list))
            dispatch(setLoading(false))
        })
    }
}

export const setOneLevelPartitions = (data: any[]) => ({
    type: ActionTypes.SET_ONE_LEVEL_PARTITIONS,
    data
})

export const setLoading = (data: boolean) => ({
    type: ActionTypes.SET_LOADING,
    data
})

export const setRankingPartitions = (data: any[]) => ({
    type: ActionTypes.SET_RANKING_PARTITIONS,
    data
})

export const setRankingVideos = (data: any[]) => ({
    type: ActionTypes.SET_RANKING_VIDEOS,
    data
})