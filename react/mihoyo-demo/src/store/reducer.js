import { combineReducers } from "redux";
import { reducer as homeReducer } from "@/pages/Home/store/index";
import { reducer as yuanshenReducer } from "@/pages/Home/Yuanshen/store/index";

export default combineReducers({
    home: homeReducer,
    yuanshen: yuanshenReducer,
})