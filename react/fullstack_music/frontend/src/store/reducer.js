// 不做具体的状态,负责分配工作
import { combineReducers } from 'redux';
// 一个redecer 文件 放一类数据
import userReducer from './user';
// 每个reducer 文件负责返回一个函数
// 固定的返回 页面需要的状态数据
// 页面不再管理数据
import singerReducer from './singer'
import recommendReducer from './recommend'
// combineReducers 接受对象配置
export default combineReducers({
    // key 取个名字,value 对应的reducer 函数
    user: userReducer,
    singer: singerReducer,
    recommend: recommendReducer
});
