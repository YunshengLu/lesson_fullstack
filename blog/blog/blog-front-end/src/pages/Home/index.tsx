import React from 'react';
import { HomeWrapper } from './style'

const Home = () => {

    let searchWidth = document.body.clientWidth
    console.log(searchWidth);

    return (
        <HomeWrapper>
            {/* 头部导航 */}
            <div className="top_menu blog">
                
            </div>
            {/* 侧边栏 左 导航 */}
            <div className="left_menu blog">
                
            </div>
            {/* 页面内容 */}
            <div className="content">
                
            </div>
        </HomeWrapper>
    );
};

export default Home;