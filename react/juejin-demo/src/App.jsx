import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Detail from './Detail'
import User from './User'
import Home from './Home'
import Notfind from './Notfind'

function App() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() =>{
  //     // js 跳转 BOM 原始
  //     // window.location.href = '/post/8885519712901136392'
  //     navigate('/post/8885519712901136392')
  //     // history.pushState(null,null,'/post/8885519712901136392')
  //   },2000)
  // },[])
  return (
    <div className="App">
      <nav>
      <Link to='/post?id=7085519712901136392'>详情</Link>
      <Link to='/post/8885519712901136392'>详情</Link>
      <Link to='/user'>用户</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/post' element={<Detail />}></Route>
        <Route path='/post/:id' element={<Detail />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='*' element={<Notfind />}></Route>
      </Routes>
    </div>
  )
}

export default App
