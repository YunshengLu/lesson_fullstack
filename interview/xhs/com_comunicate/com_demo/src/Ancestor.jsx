/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-31 15:17:04
 * @LastEditTime: 2022-08-31 15:24:06
 */
import React, { useState, createContext } from 'react';
import Little from './Little'

export const Context = createContext();

function Child() {
    return (
        <div>
            <Little />
        </div>
    )
}

const Ancestor = () => {
    const [state, setState] = useState('state');

    return (
        <div>
            <Context.Provider value={{ state, setState }}>
                <div>
                    <Child />
                </div>
            </Context.Provider>
        </div>
    );
};

export default Ancestor;
