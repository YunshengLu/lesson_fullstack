import { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'

function App() {

  return (
    <div className="App">
      <nav>
        <Link to='/'>首页</Link>
        <Link to='/about'>关于</Link>
      </nav>
      {/* 路由的配置 */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        {/* 关于
        首页
        详情 */}
      </Routes>
    </div>
  )
}

export default App
