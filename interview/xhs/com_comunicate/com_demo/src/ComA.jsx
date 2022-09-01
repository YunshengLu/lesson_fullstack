/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-31 14:54:07
 * @LastEditTime: 2022-08-31 15:08:08
 */
import React from 'react';

const ComA = props => {
    const { stateA, setStateA, setStateB } = props;

    const onButtonClick = () => {
        setStateB(stateA);
    }

    const onResetButtonClick = () => {
        setStateA('A');
    }
    return (
        <div>
            {stateA}
            <button onClick={onButtonClick}>把B变成A</button>
            <button onClick={onResetButtonClick}>还原A</button>
        </div>
    );
};

export default ComA;
