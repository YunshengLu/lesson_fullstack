/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-07 15:12:43
 * @LastEditTime: 2022-09-07 17:06:22
 */
// use 开头
// 钩子
// 如果没有react hooks
// 函数式组件 不能完成什么功能？
/**
 * 提供勾选、全选、反选等功能
 * 提供筛选勾选中的数据的函数 filter
 * 在数据更新时自动剔除陈旧项
 */
export const useChecked = () => {
    return {
        checkedMap,
        onCheckedChanged,
        dispatch, // useReducer
        filterChecked,
        onCheckedAllChanged,
        checkedAll
    }
}