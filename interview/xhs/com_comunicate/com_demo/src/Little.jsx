/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-31 15:25:07
 * @LastEditTime: 2022-08-31 15:26:15
 */
import React, { useContext } from 'react';

import { Context } from './Ancestor';

const Little = () => {
    const { state, setState } = useContext(Context);

    const onButtonClick = () => {
        setState('后代知道了');
    };
    return (
        <div>
            {state}
            <button onClick={onButtonClick}>后代知道了</button>
        </div>
    );
};

export default Little;
