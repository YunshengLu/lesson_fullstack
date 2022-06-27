// 当项目一旦复杂起来 数据流管理变得重要
// 数据流
// compose
import { createStore, compose } from 'redux';
import reducer from './reducer';
// 激活redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// store 物流仓库 数据状态仓库
// 1. 上京东的官网，或App  UI组件开发   会了
// 2. 后端提供接口
// 3. 仓库

// 实例化一个仓库
// reducer? Array.reduce 名词
// 第二个参数
const store = createStore(reducer, composeEnhancers());

export default store;
