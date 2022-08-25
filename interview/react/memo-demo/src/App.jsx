/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-25 11:01:43
 * @LastEditTime: 2022-08-25 11:49:14
 */
import { useState, useEffect } from 'react';
import Mycomponent from './Mycomponent';

function App() {
    const [satisfactionLevel, setSatisfactionLevel] = useState(300);
    console.log('App 更新了');
    useEffect(() => {
        setTimeout(() => {
            setSatisfactionLevel(301);
        }, 3000);
    }, []);

    return (
        <div className="App">
            {/* {satisfactionLevel} */}
            <input
                type="range"
                min="0"
                max="500"
                value={satisfactionLevel}
                onChange={event => setSatisfactionLevel(+event.target.value)}
            />
            <Mycomponent level={satisfactionLevel} />
        </div>
    );
}

export default App;
