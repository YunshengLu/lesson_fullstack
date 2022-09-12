/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-09-12 15:13:56
 * @LastEditTime: 2022-09-12 21:37:20
 */
import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
    // const [count, setCount] = useState();
    // const [timer, setTimer] = useState();

    // const timeRef = useRef();

    // const handleClick = () => {
    //     setCount(timer);
    //     setTimer('');
    // };

    // const handleChange = e => {
    //     let val = e.target.value;
    //     setTimer(val);
    // };

    // useEffect(() => {
    //     if (count && count !== 0) {
    //         timeRef.current = setTimeout(() => {
    //             setCount(count - 1);
    //         }, 1000);
    //     }
    //     return () => {
    //         clearTimeout(timeRef.current);
    //     };
    // }, [count]);

    // return (
    //     <div className="App">
    //         {count !==0 && <div>{count}</div>}
    //         <input type="text" value={timer} onChange={handleChange} />
    //         <button type="submit" onClick={handleClick}>
    //             点击
    //         </button>
    //     </div>
    // );
    const [count, setCount] = useState('');
    const [timer, setTimer] = useState('');
    const timerRef = useRef();

    const handleChange = e => {
        const val = e.target.value;
        setTimer(val);
    };

    const handleClick = () => {
        setCount(timer);
        setTimer('');
    };

    useEffect(() => {
        if (count && count > 0) {
            timerRef.current = setTimeout(() => {
                setCount(count - 1);
            }, 1000);
        }

        return () => clearTimeout(timerRef.current);
    }, [count]);

    return (
        <div>
            {count !== 0 && <div>{count}</div>}
            <input type="text" value={timer} onChange={handleChange} />
            <button onClick={handleClick}>点击</button>
        </div>
    );
}

export default App;
