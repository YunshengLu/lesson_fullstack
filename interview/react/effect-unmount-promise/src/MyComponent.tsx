/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-25 16:31:25
 * @LastEditTime: 2022-08-25 16:37:00
 */
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            {visible && <MyChildComponent />}
            <button onClick={() => setVisible(!visible)}>Toggle Child component visibility</button>
        </>
    );
};

const MyChildComponent = () => {
    useEffect(() => {
        console.log('mounted');
        return () => {
            console.log('unmounted');
        }
    }, [])
    return <div>MyChildComponent</div>;
};

export default MyComponent;
