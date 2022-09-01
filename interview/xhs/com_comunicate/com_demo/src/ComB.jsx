/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-08-31 14:54:15
 * @LastEditTime: 2022-08-31 15:07:38
 */
import React from 'react';

const ComB = props => {
    const { stateB, setStateA, setStateB } = props;

    const onButtonClick = () => {
        setStateA(stateB);
    }

    const onResetButtonClick = () => {
        setStateB('B');
    }
    return (
        <div>
            {stateB}
            <button onClick={onButtonClick}>把A变成B</button>
            <button onClick={onResetButtonClick}>还原B</button>
        </div>
    );
};

export default ComB;