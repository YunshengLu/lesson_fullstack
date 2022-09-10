/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-09 19:46:25
 * @LastEditTime: 2022-09-09 21:07:02
 */
import { useCallback, useEffect, useReducer } from "react"

const CHECKED_CHANGE = 'CHECKED_CHANGE'
const CHECKED_ALL_CHANGE = 'CHECKED_ALL_CHANGE'
const SET_CHECKED_MAP = 'SET_CHECKED_MAP'

type CheckedMap = {
    [key: string]: boolean
}

type CheckedChange<T> = {
    type: typeof CHECKED_CHANGE
    payload: {
        dataItem: T
        checked: boolean
    }
}

type CheckedAllChange<T> = {
    type: typeof CHECKED_ALL_CHANGE
    payload: boolean
}

type SetCheckedMap = {
    type: typeof SET_CHECKED_MAP
    payload: CheckedMap
}

type Action = SetCheckedMap

// type Action<T> = CheckedChange<T> | CheckedAllChange<T> // 联合类型
// typescript T <T> 类型传值的

interface Option {
    key?: string;
}

export const useChecked = <T> (
    dataSource: T[],
    {key = "id"} : Option = {} // key id 
) => {
    const [checkedMap, dispatch] = useReducer(
        (checkedMapParam: CheckedMap, action: Action) => {
            switch (action.type) {
                case SET_CHECKED_MAP: {
                    return action.payload
                }
                default:
                    return {}
            }
    }, {})
}