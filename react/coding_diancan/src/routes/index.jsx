// 独立配置文件
import React,{ lazy } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import Home from '../pages/Home'
// import Order from './pages/Order'
const Order = lazy(() =>import ('../pages/Order'))
// import Mine from './pages/Mine'
const Mine = lazy(() =>import ('../pages/Mine'))
// import Find from './pages/Find'
const Find = lazy(() =>import ('../pages/Find'))
// import Cities from './pages/Cities'
const Cities = lazy(() =>import ('../pages/Cities'))
// 推迟加载，运行 按需加载
// 当切换到这个路由后加载
// import HomeDetail from './pages/HomeDetail'
const HomeDetail = lazy(()=>import ('../pages/HomeDetail'))

export default function RoutesConfig() {
    return (
        <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/find' element={<Find />} ></Route>
        <Route path='/order' element={<Order />} ></Route>
        <Route path='/mine' element={<Mine />} ></Route>
        <Route path='/cities' element={<Cities />} ></Route>
        <Route path='/homedetail/:id' element={<HomeDetail />} ></Route>
        </Routes>
    )
}
