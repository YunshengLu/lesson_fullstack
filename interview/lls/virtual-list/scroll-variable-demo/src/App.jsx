import React from 'react';
import FixedSizeList from './FixedSizeList'

function Item({ style, index }) {
    return (
        <div
            className="item"
            style={{ ...style, backgroundColor: index % 2 === 0 ? 'burlywood' : 'cadetblue' }}
        >
            {index}
        </div>
    );
}

const App = () => {
    const d = new Date();
    const list = new Array(10000).fill(0).map((item, i) => i);
    console.log(+new Date(), +d);

    return (
        <div>
            列表项高度固定 - 虚拟列表实现
            <FixedSizeList 
                containerHeight={300} 
                itemCount={list.length} 
                itemHeight={50}
            >
                {Item}
            </FixedSizeList>
        </div>
    );
};

export default App;
