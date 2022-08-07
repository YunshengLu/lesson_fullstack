import React, { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/Home'
const Error = lazy(() => import ('@/pages/Error'))
const Login = lazy(() => import ('@/pages/Login'))
// const Home = lazy(() => import ('@/pages/Home'))

export default () => {
    return (
        <Suspense fallback={<div>组件加载中...</div>}>
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                {/* 错误路由 */}
                <Route path="*" element={<Error />} />
            </Routes>
        </Suspense>
    )
}
