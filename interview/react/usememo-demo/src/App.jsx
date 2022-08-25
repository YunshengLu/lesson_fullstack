/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-08-25 14:50:07
 * @LastEditTime: 2022-08-25 16:18:20
 */
import { useState, useRef } from 'react';

function App() {
    const containerElementRef = useRef(null);
    // dom 模板的编译 -> 数据的交换 -> react.createElement 虚拟DOM + render
    // renderDOM
    const [message, setMessage] = useState(
      'Click Button to get container width'
      );
    const calculateContainerWith = () => {
        setMessage(`Container width: 
        ${containerElementRef.current.clientWidth}`
        );
    };

    return (
        <div className="App">
            <div className="container" ref={containerElementRef}>
              <h2>{message}</h2>
              <button onClick={calculateContainerWith}>Calculate container width</button>
            </div>
        </div>
    );
}

export default App;
