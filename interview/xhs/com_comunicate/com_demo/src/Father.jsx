/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-31 14:40:44
 * @LastEditTime: 2022-08-31 14:43:50
 */
import React, { useState } from 'react';
import Child from './Child'

const Father = () => {
    const [state, setState] = useState('state');
    return (
        <div>
            <Child state={state} setState={setState} />
        </div>
    );
};

export default Father;
