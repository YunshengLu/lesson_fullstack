// let defaultState = {
//     banner: [
//         { id: 1, img: 'xxx.jpg' },
//         { id: 2, img: 'xxx.jpg' },
//     ],
//     list: [
//         { id: 1, img: 'xxx.jpg', title: 'aaa' },
//         { id: 2, img: 'xxx.jpg', title: 'bbb' },
//     ],
// };
// const reducer = (state = defaultState) => {
//     return state;
// };

// export default reducer;

// redux 提供了 combineReducers 功能 ？
// combineReducers 多个模块的数据，合并到一起
import { combineReducers } from 'redux';
// 一个redecer 文件 放一类数据
import userReducer from './user';
// 每个reducer 文件负责返回一个函数
// 固定的返回 页面需要的状态数据
// 页面不再管理数据
import singerReducer from './singer'
// combineReducers 接受对象配置
export default combineReducers({
    // key 取个名字,value 对应的reducer 函数
    user: userReducer,
    singer: singerReducer
});
