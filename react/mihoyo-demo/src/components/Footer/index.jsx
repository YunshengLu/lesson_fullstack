import React from 'react';
import { Tab, TabItem } from './style'
import { useNavigate, NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <Tab>
                <NavLink to="/home">
                    <TabItem>
                        <i className="iconfont icon-shouyecopy"></i>
                        <span>首页</span>
                    </TabItem>
                </NavLink>
                <NavLink to="/dynamic">
                    <TabItem>
                        <i className="iconfont icon-dongtai"></i>
                        <span>动态</span>
                    </TabItem>
                </NavLink>
                <TabItem>
                    <div className="input">
                        <i className="iconfont icon-kuaisutianjiamoren"></i>
                    </div>
                </TabItem>
                <NavLink to="/information">
                    <TabItem>
                        <i className="iconfont icon-xiaoxi"></i>
                        <span>消息</span>
                    </TabItem>
                </NavLink>
                <NavLink to="/mypage">
                    <TabItem>
                        <i className="iconfont icon-wode"></i>
                        <span>我的</span>
                    </TabItem>
                </NavLink>
            </Tab>
        </div>
    );
}

export default Footer;
