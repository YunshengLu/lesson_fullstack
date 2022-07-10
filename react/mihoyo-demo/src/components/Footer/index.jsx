import React from 'react';
import { Tab, TabItem } from './style'
import { useNavigate, NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <Tab>
                <NavLink to="/home">
                    <TabItem>
                        <span>首页</span>
                    </TabItem>
                </NavLink>
                <NavLink to="/dynamic">
                    <TabItem>
                        <span>动态</span>
                    </TabItem>
                </NavLink>
                <NavLink to="/information">
                    <TabItem>
                        <span>消息</span>
                    </TabItem>
                </NavLink>
                <NavLink to="/mypage">
                    <TabItem>
                        <span>我的</span>
                    </TabItem>
                </NavLink>
            </Tab>
        </div>
    );
}

export default Footer;
