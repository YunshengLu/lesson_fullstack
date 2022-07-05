import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

function TodoList(props) {

    console.log(store.getState());
    const [list,setList] = useState(store.getState())
    // console.log(list.inputValue);

    useEffect(() => {
        setList(store.getState())
    },[list])

    const storeChange = () => {
        setList(store.getState())
    }

    const changeInputValue = (e) => {
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        store.dispatch(action)
    }

    const clickBtn = () => {
        storeChange()
        const action = {
            type: 'addItem',
        }
        store.dispatch(action)
    }

    return (
        <div style={{ margin:"10px" }}>
            <div>
                <Input 
                    placeholder={list.inputValue} 
                    style={{ width:"250px",marginRight:"10px" }} 
                    onChange={changeInputValue.bind(this)}
                    />
                    <Button 
                        type="primary"
                        onClick={clickBtn.bind(this)} 
                        >增加</Button>
            </div>
            <div style={{ margin:"10px",width:"300px"}}>
                <List 
                    bordered
                    dataSource={list.list}
                    renderItem={item =>(<List.Item>{item}</List.Item>)}
                    />
            </div>
        </div>
    )
}

export default TodoList
