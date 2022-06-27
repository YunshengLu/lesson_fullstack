import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// 架构中store 模块
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 外面再包一层 数据管路功能 项目做大了，redux 就像企业里的财务
  // 路由， SPA BrowserRouter？ react-router-dom 组件
  // react 申明式开发
  <Provider store={store}>
    <BrowserRouter>
    {/* react 组件 */}
      <App />
    </BrowserRouter>
  </Provider>
)
