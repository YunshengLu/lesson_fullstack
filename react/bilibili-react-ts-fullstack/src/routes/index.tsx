import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
// const Search = lazy(() => import ('@/pages/Search'))

export default () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </>
    );
};
