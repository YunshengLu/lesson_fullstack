import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FooterWrapper } from './style'
import classnames from 'classnames'

export default function Footer() {
    const { pathname } = useLocation();
    if(['/cities'].indexOf(pathname) !== -1) return

    return (
        <FooterWrapper>
            <Link to='/home' className={classnames({active: pathname == '/home'})}>
                <i className="iconfont icon-shouye"></i>
                <span>首页</span>
            </Link>
            <Link to='/find' className={classnames({active: pathname == '/find'})}>
                <i className="iconfont icon-faxian"></i>
                <span>发现</span>
            </Link>            
            <Link to='/order' className={classnames({active: pathname == '/order'})}>
                <i className="iconfont icon-dingdan"></i>
                <span>订单</span>
            </Link>            
            <Link to='/mine' className={classnames({active: pathname == '/mine'})}>
                <i className="iconfont icon-wode"></i>
                <span>我的</span>
            </Link>
        </FooterWrapper>
    );
}
