import { Dispatch } from 'redux'
import {
    getRankingPartitionRequest,
    getRankingRequest,
} from '@/api/request'

// 页面级别action 
// promise.all
export const getHomeDataAction = (rId: string) => {
    return (dispatch: Dispatch) => {
        return Promise.all([
            getRankingPartitionRequest(),
            getRankingRequest(rId),
        ]).then(([partitionResult, videoResult]) => {
            
        })
    }
}