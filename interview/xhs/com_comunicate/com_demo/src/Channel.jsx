/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-31 14:54:27
 * @LastEditTime: 2022-08-31 15:00:29
 */
import React, { useState } from 'react';
import ComA from './ComA'
import ComB from './ComB'

const Channel = () => {
    // 父组件负责状态管理
    const [stateA, setStateA] = useState('A');
    const [stateB, setStateB] = useState('B');
    return (
        <div>
            <ComA stateA={stateA} setStateB={setStateB} setStateA={setStateA} />
            <ComB stateB={stateB} setStateA={setStateA} setStateB={setStateB} />
        </div>
    );
};

export default Channel;
