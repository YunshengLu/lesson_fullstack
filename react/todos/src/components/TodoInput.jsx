import React, { useState } from 'react';
import { Input } from 'antd'

const TodoInput = ({ placeholder, onSetQuery }) => {
    // console.log(onSetQuery,'///');
    const [value, setValue] = useState("")
    const onAdd = () => {
        onSetQuery(value)
    }
    return (
        <section className="input-wrap">
            <Input 
                onPressEnter={onAdd}
                value={value}
                placeholder={placeholder}
                onChange={e => setValue(e.target.value)}
                className='input'
            />
        </section>
    );
};

export default TodoInput;
