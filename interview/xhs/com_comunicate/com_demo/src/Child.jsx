/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-31 14:40:56
 * @LastEditTime: 2022-08-31 14:44:27
 */
import React from 'react';

const Child = props => {
    const { state, setState } = props;

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

export default Child;
