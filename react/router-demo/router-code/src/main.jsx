import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {HashRouter} from 'react-router-dom'
// 1. BrowserRouter? 路由组件（可以挂载到页面上的组件）
// react-router-dom 路由组件库
// 2. 可以给我们的应用添加路由

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
