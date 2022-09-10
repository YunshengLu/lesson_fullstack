/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-09-09 19:07:25
 * @LastEditTime: 2022-09-09 19:51:55
 */
import { useState } from 'react';
import { List, Typography } from 'antd';
import ItemCard from './ItemCard'
import { useChecked } from './use-checked'
import './cart.css';

export interface CartItem {
    id: number;
    name: string;
    price: number;
}

const cartData = Array(5)
    .fill(undefined)
    .map((v, i) => ({
        id: i,
        name: `商品${i}`,
        price: Math.round(Math.random() * 100),
    }));

console.log(cartData);

function App() {

    const total = 0

    const Footer = (
        <div className="footer">
            <div className="check-all">
                <input type="checkboc" />全选
            </div>
            <div>
                价格总计<Typography.Text>{total}</Typography.Text>
            </div>
        </div>
    )
    
    const { checkedMap, onCheckedChange } = useChecked(cartData)

    return (
        <div className="App">
            <List 
                header={<div>购物车</div>} 
                footer={Footer} 
                bordered
                dataSource={cartData}
                renderItem={item => {
                    const checked = checkedMap[item.id] || false;
                    return (
                        <List.Item>
                            <ItemCard item={item} checked={checked}
                            onCheckedChange={onCheckedChange}
                            />
                        </List.Item>
                    )
                }}
            />
        </div>
    );
}

export default App;
