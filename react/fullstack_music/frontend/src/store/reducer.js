// 模块化能力 路由模块基本就是数据模块
import { combineReducers } from "redux";
// store 中央
// reducer 地方
import { reducer as recommendReducer } from "@/pages/Recommend/store/index";

export default combineReducers({
    recommend: recommendReducer
})