import React, { useState, useEffect, useRef } from 'react';
import LoginBG from '@/components/LoginBG';
import { LoginWrapper } from './style';
import { Button, Checkbox, Form, Input } from 'antd';
import { Article } from '@/models/Article';
import { connect } from 'react-redux';
import { postRegisterAction } from '@/store/actionCreators';
import { Dispatch } from 'redux';
import { rootState } from '@/store';

interface ArticleItemProps {
    Article: Article;
    register: string;
    postRegisterActionDispatch: (data: string) => void;
}

const Register:React.FC<ArticleItemProps> = (props) =>{

    const {
        register,
    } = props;

    const {
        postRegisterActionDispatch,
    } = props;

    const onFinish = (values: any) => {
        console.log('Success:', values);
        postRegisterActionDispatch(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {

    },[])
    console.log(register,'#################');
    

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
    register: state.register,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    postRegisterActionDispatch(data: string) {
        dispatch(postRegisterAction(data))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Register);
