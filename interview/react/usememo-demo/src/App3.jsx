/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-25 14:50:07
 * @LastEditTime: 2022-08-25 15:50:03
 */
import { useState, useMemo, useEffect } from 'react';
import Button from './Button';

function App() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');
    const treatCount = useMemo(() => {
        console.log('treatCount');
        return count + 10;
    }, [count]);

    return (
        <div className="App">
            treatCount: {treatCount} <br />
            count: {count} <button onClick={() => setCount(count + 1)}>点击</button>
            <br />
            <input
                type="text"
                value={value}
                onInput={e => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
}

export default App;
