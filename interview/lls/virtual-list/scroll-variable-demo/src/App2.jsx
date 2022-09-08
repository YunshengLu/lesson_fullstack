/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-09-08 15:41:23
 * @LastEditTime: 2022-09-08 16:19:34
 */
import { useState, useRef } from 'react';

function App() {

    const scrollRef = useRef(null)
    const [clientHeight, setClientHeight] = useState(0)
    const [scrollTop, setScrollTop] = useState(0)
    const [scrollHeight, setScrollHeight] = useState(0)
    const onScroll = () => {
        if (scrollRef?.current) {
            let clientHeight = scrollRef.current.clientHeight;
            let scrollTop = scrollRef.current.scrollTop;
            let scrollHeight = scrollRef.current.scrollHeight; // 滚动内容高度
            setClientHeight(clientHeight)
            setScrollTop(scrollTop)
            setScrollHeight(scrollHeight)
        }
    }

    return (
        <div className="App">
            <div>
                <p>可视区域高度: {clientHeight}</p>
                <p>滚动条滚动高度:{scrollTop}</p>
                <p>滚动内容高度:{scrollHeight}</p>
            </div>
            <div
                style={{ height: 200, overflowY: 'auto' }}
                ref={scrollRef}
                onScroll={onScroll}
            >
                <div style={{height: 2000}}></div>
            </div>
        </div>
    );
}

export default App;
