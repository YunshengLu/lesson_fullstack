import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/Home';
const Dynamic = lazy(() => import('@/pages/Dynamic'))
const Information = lazy(() => import('@/pages/Information'))
const Mypage = lazy(() => import('@/pages/Mypage'))
const Yuanshen = lazy(() => import('@/pages/Home/Yuanshen'))
const Dabieye = lazy(() => import('@/pages/Home/Dabieye'))

const RouterConfig = () => {
    return (
        <Suspense fallback={null}>
        <Routes>
            <Route path="/" element={<Navigate to="/home/yuanshen"/>} replace={true} />
            <Route path="/home" element={<Navigate to="/home/yuanshen"/>} replace={true} />
            <Route path="/dynamic" element={<Dynamic />} />
            <Route path="/information" element={<Information />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/home" element={<Home />} >
                <Route path="/home/yuanshen" element={<Yuanshen/>} />
                <Route path="/home/dabieye" element={<Dabieye/>} />
            </Route>
        </Routes>
        </Suspense>
    );
};

export default RouterConfig;
