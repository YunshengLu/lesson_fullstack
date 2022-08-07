import React, { useState, useEffect, useRef } from 'react';
import LoginBG from '@/components/LoginBG';
import { LoginWrapper } from './style';
import { Button, Checkbox, Form, Input } from 'antd';
import { Article } from '@/models/Article';
import { connect } from 'react-redux';
import { postLoginAction } from '@/store/actionCreators';
import { Dispatch } from 'redux';
import { rootState } from '@/store';

interface ArticleItemProps {
    Article: Article;
    login: string;
    postLoginActionDispatch: (data: string) => void;
}

const Login:React.FC<ArticleItemProps> = (props) =>{

    const {
        login,
    } = props;

    const {
        postLoginActionDispatch,
    } = props;

    const onFinish = (values: any) => {
        console.log('Success:', values);
        postLoginActionDispatch(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {

    },[])
    console.log(login,'#################');
    

    return (
        <LoginWrapper>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="container"
            >
                <div className="tit">登录</div>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password 
                        autoComplete="off" 
                        placeholder="Password" />
                </Form.Item>

                <Form.Item className="btn">
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <span>
                    没有账号？<a href="#">去注册</a>
                </span>
            </Form>
            <LoginBG />
        </LoginWrapper>
    );
};

const mapStateToProps = (state: rootState) => ({
    login: state.login,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    postLoginActionDispatch(data: string) {
        dispatch(postLoginAction(data))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);
