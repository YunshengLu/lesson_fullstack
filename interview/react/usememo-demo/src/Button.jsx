/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-25 15:08:09
 * @LastEditTime: 2022-08-25 15:12:18
 */
import React from 'react';

const Button = ({ onClickButton, children, count }) => {
    return (
        <>
            <button onClick={onClickButton}>{children}</button>
            <span>{Math.random()}</span>
            {count && <span>count: {count}</span>}
        </>
    );
};

export default React.memo(Button);
