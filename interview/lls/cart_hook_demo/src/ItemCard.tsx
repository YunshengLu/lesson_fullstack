/*
 * @Description:
 * @version:
 * @Author: LuyunSheng
 * @Date: 2022-09-09 19:54:11
 * @LastEditTime: 2022-09-09 20:04:15
 */
import { Typography } from 'antd';
import React from 'react';
import { CartItem } from './App';

interface Props {
    item: CartItem;
    checked: boolean;
    onCheckedChange: () => void;
}

function areEuqal(prevProps: Props, nextProps: Props) {
    // shouldComponentUpdate
    return prevProps.checked === nextProps.checked;
}

const ItemCard: React.FC<Props> = React.memo((props: Props) => {
    console.log('cart item renderer');

    const { item, checked, onCheckedChange } = props;
    const { name, price } = item;
    return (
        <div className="item-card">
            <div className="checkbox-wrap">
                <input 
                    type="checkbox" 
                    checked={checked}
                    onChange={onCheckedChange}
                    />
            </div>
            <p className="item-info">
                {name}<Typography.Text>${price}</Typography.Text>
            </p>
        </div>
    );
}, areEuqal);

export default ItemCard;
