import React, { useState } from 'react';
import './style.css';

export default function Gradient() {

    const [color1, setColor1] = useState('#00F260');
    const [color2, setColor2] = useState('#0575E6');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'color1') {
            setColor1(value);
        } else if (name === 'color2') {
            setColor2(value);
        }
    }

    // 重置按钮事件
    const handleClick = () => {
        setColor1('#00F260');
        setColor2('#0575E6');
    }

    return (
        <div
            className="container"
            style={{
                background: `linear-gradient(75deg, ${color1}, ${color2})`,
            }}
        >
            <div className="inputGroup">
                <label>请选择第一个颜色</label>
                <input
                    type="color"
                    name="color1"
                    className="inputColor"
                    value={color1}
                    onChange={handleInputChange}
                />
            </div>
            <div className="inputGroup">
                <label>请选择第二个颜色</label>
                <input
                    type="color"
                    name="color2"
                    className="inputColor"
                    value={color2}
                    onChange={handleInputChange}
                />
            </div>

            <button onClick={handleClick} >
                重置为默认
            </button>
        </div>
    );
}
